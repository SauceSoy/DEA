class Constants {
  constructor() {
    this.data = {
      colors: {
        ban: [234, 12, 0],
        clear: [0, 29, 255],
        defaults: [
          [255, 38, 154],
          [0, 255, 0],
          [0, 232, 40],
          [8, 248, 255],
          [242, 38, 255],
          [255, 28, 142],
          [104, 255, 34],
          [255, 190, 17],
          [41, 84, 255],
          [150, 36, 237],
          [168, 237, 0]
        ],
        error: [255, 0, 0],
        kick: [232, 81, 31],
        mute: [255, 114, 14],
        unban: [19, 255, 25],
        unmute: [109, 237, 94],
        warn: [255, 182, 32]
      },

      links: {
        botInvite: 'https://discordapp.com/oauth2/authorize?client_id=290823959669374987&scope=bot&permissions=8',
        documentation: 'https://realblazeit.github.io/dea/commands/',
        serverInvite: 'https://discord.gg/gvyma7H'
      },

      messages: {
        jump: [
          'You were walking down the street when some homeless guy walked up to you, and then as you were giving him 17 cents you see the cracker has {0} worth of extra large socks stacked up behind him, so you jacked them.',
          'After a nice bust at the local strip club, you were walking home when you spotted Judge Woody, the cracker who busted you last week, sitting on a bench. You decided to jump his fatass, snipe {0} from his wallet, and walk away unharmed.',
          'You jump some dick that got you in court last month, stole his pants and ran. Turns out those pants were worth {0}.',
          'You decide to waltz over to Compton to show your strength. Fortunately, you found some wallet some guy dropped in a gang fight. The wallet didn\'t have jack inside of it, but the it turns out the leather it was made of was worth {0}.'
        ],
        lottery: [
          'CONGRATS MY MAN, you just won {0} in the goddamn lottery! Use `$info` for more information.',
          'Hot fucking pockets, you just won {0} in the lottery! Use `$info` for more information.',
          'Well sonny, looks like today is your goddamn lucky day, you just won {0} in the lottery! Use `$info` for more information.',
          'Jiminy Crickets, you made some bank! You just won {0} from the lottery! Use `$info` for more information.',
          'Sweet Baby Jesus you just won {0} in the fucking lottery! Use `$info` for more information.',
          'Well I\'ll be damned, you just won {0} in the goddamn lottery! Use `$info` for more information.'
        ],
        scam: [
          'You ripped some grass off the ground, went up to some gangster and sold it to him as weed. He gave you {0} for it, and you got out of there before he noticed anything.',
          'You knocked on your neighbor\'s door, asked for some flour to bake a cake, and you sold it to your other neighbor as cocaine. You managed to make {0}.',
          'You bought a Monopoly board game, took the fake cash, went to the bank and traded it for USD. You walked away with {0}, moved to Cuba, while the US government was chasing you down.',
          'You waited in line for some new Adidas Yeezys, bought 10 pairs and sold them to your idiot friends for {0}. Hopefully they won\'t notice your scam.'
        ],
        steal: [
          'You and a couple of buddies decide to go bust out the fake nerf guns, stroll over to your local {0}, and rob their asses. You got {1} for your share.',
          'While you were shopping at {0}, you thought it was a good idea to nut all over the counter. The owner decided to sauce you {1} because he assumed the cum was toxic.'
        ],
        stores: [
          '7-Eleven', 'Speedway', 'Couche-Tard', 'QuikTrip', 'Kroger', 'Circle K', 'Admiral Petroleum', 'Big Apple', 'Bucky\'s Express'
        ]
      },

      misc: {
        disabledEvents: [
          'CHANNEL_PINS_UPDATE',
          'MESSAGE_UPDATE',
          'MESSAGE_REACTION_ADD',
          'MESSAGE_REACTION_REMOVE',
          'MESSAGE_REACTION_REMOVE_ALL',
          'VOICE_STATE_UPDATE',
          'TYPING_START',
          'VOICE_SERVER_UPDATE',
          'RELATIONSHIP_ADD',
          'RELATIONSHIP_REMOVE'
        ],
        game: '$help',
        prefix: '$'
      },

      regexes: {
        escape: /[-[\]{}()*+?.,\\/^$|#\s]/g,
        prefix: /^\$/
      }
    };

    this.config = {
      bully: {
        cooldown: 60000,
        cost: 500,
        maxLength: 32
      },

      chill: {
        max: 3600,
        min: 5
      },

      claim: {
        probationTimeout: 86400000,
        timespan: 172800000,
        reward: 5000
      },

      clear: {
        max: 100,
        min: 2
      },

      gambling: {
        minBet: 5
      },

      intervals: {
        autoUnmute: 60000,
        removeSponsor: 3600000
      },

      jump: {
        cooldown: 14400000,
        max: 5000,
        min: 2500,
        odds: 85
      },

      kill: {
        cooldown: 86400000
      },

      lottery: {
        max: 10000,
        min: 2500,
        odds: 1.25
      },

      misc: {
        cashPerMessage: 50,
        leaderboardCap: 10,
        messageCooldown: 30000,
        minCharLength: 7
      },

      mute: {
        defaultLength: 24
      },

      rob: {
        cooldown: 2880000,
        max: 0.2,
        min: 500,
        odds: 40
      },

      scam: {
        cooldown: 7200000,
        max: 1000,
        min: 500,
        odds: 90
      },

      setReferralCode: {
        maxLength: 32
      },

      sponsorship: {
        lotteryOddsMultiplier: 3,
        messageMultiplier: 5
      },

      steal: {
        cooldown: 21600000,
        max: 10000,
        min: 5000,
        odds: 80
      },

      top50: {
        messageMultiplier: 1.5
      },

      transfer: {
        cut: 0.1,
        min: 5
      }
    };

    this.conversions = {
      secondInMs: 1000,
      minuteInMs: 60000,
      hourInMs: 3600000,
      dayInMs: 86400000,
      weekInMs: 604800000,
      monthInMs: 2592000000,
      yearInMs: 31536000000,
      decadeInMs: 315360000000,
      centuryInMs: 3153600000000
    };
  }
}

module.exports = new Constants();
