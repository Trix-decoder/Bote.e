bot.command({
name: "<@846711517386768415>",
aliases "<@!846711517386768415>",
code: `$title[AnonyMod] 
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more commands of this server**]`,
nonPrefixed: false
})
module.exports = ({
    name: "help",
    code: `$title[Help Command]
$description[A List of Commands can be found below.]
$addField[Other Commands;\`\`\`help, prefix\`\`\`]
 
$addField[Social Commands;\`\`\`socials, set-twitch, set-youtube,
set-twitter, set-spotify \`\`\`]
 
$addField[Leveling;\`\`\`leveling, levels, rank, expcooldown\`\`\`]
 
$addField[Music Commands;\`\`\`play, stop, pause, resume, skip,
skipto, queue, lyrics, volume,
loopqueue, loopsong, nowplaying\`\`\`]`
})