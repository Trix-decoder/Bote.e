module.exports = ({
    name: "set-prefix",
    aliases: ['changeprefix', 'prefix'],
    code: `$description[**Done, my new prefix is** \`$message\`]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;**You dont have** \`ADMIN\` **perms**]