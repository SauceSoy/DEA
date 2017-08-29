All commands are catagorized by groups. Each of the following sections is a group.

The syntax of the command usage is:

`Optional paramater: []`

`Required paramater: <>`

##Table Of Contents
- [Administration](#administration)
- [Botowners](#botowners)
- [Crime](#crime)
- [Gambling](#gambling)
- [General](#general)
- [Moderation](#moderation)
- [Owners](#owners)
- [Sponsor](#sponsor)
- [System](#system)

### Administration

These commands may only be used by a user with the set mod role with a permission level of 2 or the Administrator permission.

Command | Description | Usage
---------------- | --------------| -------
Addrank|Add a rank.|`$addrank <@role> <cashRequired>`
Disablewelcome|Disables the welcome message.|`$disablewelcome`
Removerank|Remove a rank role.|`$removerank <@role>`
Setmodlog|Sets the mod log channel.|`$setmodlog <#channel>`
Setmutedrole|Sets the muted role.|`$setmutedrole <@role>`
Setpointsrequired|Sets the amount of points required per day of sponsorship.|`$setpointsrequired <daily points required>`
Setsponsorrole|Sets the sponsor role.|`$setsponsorrole <@role>`
Settop10|Sets the Top 10 role.|`$settop10 <@role>`
Settop25|Sets the Top 25 role.|`$settop25 <@role>`
Settop50|Sets the Top 50 role.|`$settop50 <@role>`
Setwelcome|Sets the welcome message.|`$setwelcome <message>`

### Botowners

These commands may only be used by the owners of DEA.

Command | Description | Usage
---------------- | --------------| -------
Eval|Evalute JavaScript code.|`$eval <code>`
Modifycash|Allows you to modify the cash of any member.|`$modifycash <amount> [@member]`

### Crime
Command | Description | Usage
---------------- | --------------| -------
Bully|Bully any user by changing their nickname.|`$bully <@member> <nickname>`
Jump|Jump some trash for cash on the street.|`$jump`
Kill|Kill a nigga.|`$kill <@member>`
Rob|Scam some noobs on the streets.|`$rob <@member> <resources>`
Scam|Scam some noobs on the streets.|`$scam`
Steal|Hop the big guns and lick a store.|`$steal`

### Gambling
Command | Description | Usage
---------------- | --------------| -------
25+|Roll 25.00 or higher on a 100.00 sided die to win 0.2X your bet.|`$25+ <bet>`
50x2|Roll 50.0 or higher on a 100.00 sided die to win your bet.|`$50x2 <bet>`
55x2|Roll 55.0 or higher on a 100.00 sided die to win your bet.|`$55x2 <bet>`
75+|Roll 75.00 or higher on a 100.00 sided die to win 2.6X your bet.|`$75+ <bet>`
99+|Roll 99.00 or higher on a 100.00 sided die to win 90X your bet.|`$99+ <bet>`

### General
Command | Description | Usage
---------------- | --------------| -------
Cash|View the wealth of anyone.|`$cash [@member]`
Leaderboards|View the richest Drug Traffickers.|`$leaderboards`
Modroles|View all mod roles in this guild.|`$modroles`
Rank|View the rank of anyone.|`$rank [@member]`
Ranks|View all ranks in this guild.|`$ranks`
Transfer|Transfer money to any member.|`$transfer <@member> <transfer>`

### Moderation

These commands may only be used by a user with the set mod role with a permission level of 1 or the Administrator permission.

Command | Description | Usage
---------------- | --------------| -------
Ban|Swing the ban hammer on any member.|`$ban <@user> [reason]`
Clear|Clear up to 100 messages in any text channel.|`$clear <quantity> [reason]`
Kick|Kick any member.|`$kick <@member> [reason]`
Mute|Mute any member.|`$mute <@member> [quantity of hours] [reason]`
Unban|Lift the ban hammer on any member.|`$unban <user> [reason]`
Unmute|Unmute any member.|`$unmute <@member> [reason]`
Warn|Warn any member.|`$warn <@member> [reason]`

### Owners

These commands may only be used by a user with the set mod role with a permission level of 3 or the ownership of the server.

Command | Description | Usage
---------------- | --------------| -------
Addmodrole|Add a mod role.|`$addmodrole <@role> <permissionLevel>`
Removemodrole|Remove a mod role.|`$removemodrole <@role>`
Reset|Resets all user data in your server.|`$reset`
Resetuser|Reset any member's data.|`$resetuser [@member]`

### Sponsor
Command | Description | Usage
---------------- | --------------| -------
Buysponsor|Gain access to all the sponsorship benfits.|`$buysponsor [number of days]`
Claim|Claim a reward for being referred.|`$claim <code>`
Codeinfo|View the information of any referral code.|`$codeinfo <code>`
Pointsleaderboards|View the best referrers.|`$pointsleaderboards`
Refer|View your referral code along with an invite link to this server.|`$refer`
Sellpoints|View your referral code along with an invite link to this server.|`$sellpoints <number of points> <price> <@member>`
Setreferralcode|Set your referral code.|`$setreferralcode <code>`
Sponsor|View all the sponsorship benefits.|`$sponsor`
Sponsortime|View the time remaining on your sponsorship.|`$sponsortime [@member]`

### System
Command | Description | Usage
---------------- | --------------| -------
Help|All command information.|`$help [command]`
Info|All the information about the DEA cash system.|`$info`
Invite|Add DEA to your server.|`$invite`
Statistics|Statistics about DEA.|`$statistics`
