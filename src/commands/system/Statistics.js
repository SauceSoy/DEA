const patron = require('patron.js');
const NumberUtil = require('../../utility/NumberUtil.js');

class Statistics extends patron.Command {
  constructor() {
    super({
      names: ['statistics', 'stats'],
      groupName: 'system',
      description: 'Statistics about DEA.',
      guildOnly: false
    });
  }

  async run(msg, args) {
    const uptime = NumberUtil.msToTime(msg.client.uptime);

    let users = 0;

    for (const guild of msg.client.guilds.values()) {
      users += guild.memberCount;
    }

    await msg.author.DMFields(
      [
        'Author', 'John#0969', 'Framework', 'patron.js', 'Memory', (process.memoryUsage().rss / 1048576).toFixed(2) + ' MB', 'Servers', msg.client.guilds.size,
        'Users', users, 'Uptime', 'Days: ' + uptime.days + '\nHours: '+ uptime.hours + '\nMinutes: ' + uptime.minutes
      ]);

    if (msg.channel.type !== 'dm') {
      return msg.createReply('You have been DMed with all DEA Statistics!');
    }
  }
}

module.exports = new Statistics();
