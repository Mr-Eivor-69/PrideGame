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
