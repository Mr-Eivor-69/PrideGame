       // description when you failed at begging
        const beggingfail = ['Get a job man', 'kekw here 200$ ||sike||', 'get the f out of my sight', 'go ask your momma']
        let failbegrand = Math.floor((Math.random() * beggingfail.length))
        let failbeg = beggingfail[failbegrand]
        

        //if we success at begging
        if (failss === 'Success') {

            //add the (convstring) variable into our Money
            authData.Money += convstring
            await authData.save()

            //embed if we Success at begging
            const begembed = new Discord.MessageEmbed()
        .setTitle(`**${beggive}**`)
        .setDescription(`**${begres}**`)
        .setColor("#fcba03")
        .setTimestamp(Date.now())

        //send the begembed in channel
        message.channel.send(begembed)

        //if we fail at begging
        } else if (failss === 'Failed') {

            //random money that youll lose if you failed at begging
            let randlose = Math.floor(Math.random() * 10) + 1

            //we convert randlose into number
            let convrand = Number(randlose)

            //we subtract the (randlose) variable in our Money
            authData.Money -= convrand
            await authData.save()

            //embed if we fail at begging
            const failembed = new Discord.MessageEmbed()
        .setTitle(`**${beggive}**`)
        .setDescription(`**${failbeg}**\n\`you lose:\` **${convrand}$**`)
        .setColor("#fcba03")
        .setTimestamp(Date.now())

        //send the failembed in channel
        message.channel.send(failembed)
        }
    }
} 
//put this in your index.js for 'client.models.economy'

client.models = { economy: require("./database/models/economy.js") };

//change the economy.js based on your Schema directory

const Schema = require('../../database/models/economy')

const Discord = require('discord.js')

const { MessageEmbed } = require('discord.js')

module.exports = {

    name: "beg",

    description: "beg for some money",

    usage: "-beg",

    aliases: [""],

    permissions: [],

    cooldown: 60000,

    run: async (client, message, args) => {

        //fetch author data

        const authData = await client.models.economy.findById(message.author.id)

        if(!authData) return message.channel.send("You Currently don't have an Economy account. Please Make one!: \n`Usage:` **-ecocreate**")

        //the money your going to get by begging

        let moneyget = Math.floor(Math.random() * 20) + 1;

        // we convert string into number so we wont get string concatenation

        let convstring = Number(moneyget)

        // if you failed or succeed at begging

        const failorsuccess = ['Success', 'Failed']

        let failrand = Math.floor((Math.random() * failorsuccess.length))

        let failss = failorsuccess[failrand]

        //the beg money givers

        const beggiver = [`Dwayne Johnson`, `Selena Gomez`, `Justin Bieber`, `Rick Astley`, `Alan Walker`, `Random Stranger`, ]

        let begresultgive = Math.floor((Math.random() * beggiver.length))

        let beggive = beggiver[begresultgive]

        // description when you use beg command

        const begdescription = [`You little poor beggar. here take ${convstring}$`, `Here take ${convstring}$ and invest it.`, `Aw man i only got 30$ in my wallet.. i can give you a little here ${convstring}$`]

        let begresultdesc = Math.floor((Math.random() * begdescription.length))

        let begres = begdescription[begresultdesc]
client.login("ODcwNzU1NDE0MTcyNjQ3NDU1.YQRYLA.Cc0xcrIEiDVdYup5_Svve7Q-VBw")
  const { MessageAttachment } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name : 'trap',
    aliases: ['trap-the-metioned-user'],
    category: 'Avatar',
    description: "trap the mentioned user in a trap card",
    utilisation: '{prefix}trap [user]',
    cooldown: 0,
    permissions: [],

    async execute(client, message, args) {
        const user = message.mentions.users.first() || message.author;
        
        if(!user) return message.channel.send(`⚠️ - Please provide User`);
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        
        const wait = await message.channel.send("**Please wait...**");

        try {
            const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=trap&name=${user.username}&image=${avatar}&author=${message.author.username}`));
            const json = await res.json();
            
            const attachment = new MessageAttachment(json.message, "trap.png");
            
            await message.channel.send(attachment);
            wait.delete({ timeout: 5000 });
        } catch(e){
            wait.edit("⚠️ - Error, Try Again!");
        }
    }
} 


