const { chatBot } = require('reconlx')

module.exports = {
    name : 'chat',
    execute(client, message, args, Discord) {
        chatBot(message, args.join(" "))
    }
}