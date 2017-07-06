const patron = require('patron');
const config = require('../config.json');
const db = require('../database');
const util = require('../utility');

class CommandService {
  constructor(client, registry) {
    this.client = client;
    this.handler = new patron.Handler(registry);
  }

  async run() {
    this.client.on('message', async (msg) => {
      execute(msg, this.handler).catch(console.error);
    });
  }
}

const execute = async function(msg, handler) {
  if (msg.author.bot) {
    return;
  }

  const context = new patron.Context(msg);

  if (context.guild !== null) {
    context.dbGuild = await db.guildRepo.getGuild(context.guild.id);

    if (!context.channel.permissionsFor(context.guild.me).has(['SEND_MESSAGES', 'EMBED_LINKS'])) {
      return;
    }
  }

  const prefix = context.dbGuild ? context.dbGuild.settings.prefix : config.defaultPrefix;

  const result = await handler.run(context, prefix);

  if (!result.isSuccess) {
    let message;

    switch (result.commandError) {
      case patron.CommandError.CommandNotFound:
      case patron.CommandError.InvalidPrefix:
        return;
      case patron.CommandError.Exception:
        if (result.error !== undefined) {
          if (result.error.code === 400) { // TODO: Check if instance of DiscordApiError when 12.0 is stable.
            message = 'There seems to have been a bad request. Please report this issue with context to John#0969.';
          } else if (result.error.code === 404 || result.error.code === 50013) {
            message = 'DEA does not have permission to do that. This issue may be fixed by moving the DEA role to the top of the roles list, and giving DEA the "Administrator" server permission.';
          } else if (result.error.code === 50007) {
            message = 'DEA does not have permission to send messages to this user.';
          } else if (result.error.code >= 500 && result.error.code < 600) {
            message = 'Looks like Discord fucked up. An error has occured on Discord\'s part which is entirely unrelated with DEA. Sorry, nothing we can do.';
          } else {
            message = result.error.message;
          }
        } else {
          message = result.error.message;
          console.error(result.error);
        }
        break;
      case patron.CommandError.InvalidArgCount:
        message = 'You are incorrectly using this command.\n**Usage:** `' + prefix + result.command.getUsage() + '`\n**Example:** `' + prefix + result.command.getExample() + '`';
        break;
      default:
        message = result.errorReason;
        break;
    }

    return util.Messenger.replyError(context.channel, context.author, message);
  }
};

module.exports = CommandService;