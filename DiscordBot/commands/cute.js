module.exports = {
    name: 'cute',
    description: "this is a cute command!",
    execute(client, message, args){
        message.reply('Thank You, you CUTE too<3!')
        message.channel.send('https://pa1.narvii.com/5862/7019c7a14dff76012d9b84019324cc60fc5b9640_hq.gif');
    }
}