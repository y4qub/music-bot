const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return

    const { commandName: cmd } = interaction

    if (cmd === 'ping') {
        await interaction.reply('Schnee pong!')
    } else if (cmd === 'server') {
        await interaction.reply('Server info.')
    } else if (cmd === 'play') {
        await interaction.
		console.log(interaction)
    }
})

client.login(process.env.DISCORD_WEISS_SCHNEE_TOKEN)
