const patron = require('patron.js');
const db = require('../database');
const NumberUtil = require('../utility/NumberUtil.js');

class CashPercent extends patron.ArgumentPrecondition {
  constructor(percent) {
    super();
    this.percent = percent;
  }

  async run(command, msg, argument, value) {
    const dbUser = await db.userRepo.getUser(msg.memberArg.id, msg.guild.id);
    const cashValue = NumberUtil.realValue(dbUser.cash);

    if (cashValue * this.percent >= value) {
      return patron.PreconditionResult.fromSuccess();
    }

    return patron.PreconditionResult.fromError(command, 'The maximum percent of ' + argument.name + ' is ' + (this.percent * 100) + '%. That is ' + (cashValue * this.percent).USD() + '.');
  }
}

module.exports = CashPercent;
