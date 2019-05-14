const Discord =  require('discord.js');
const bot = new Discord.Client();
const token = 'NTc3MDY0MzY3MjY3NTEyMzMw.XNfnNw.Pf4U0gVdMZMjJWmiyrqmlpqUfMY';

bot.on('ready', () =>{
   console.log(' this bot is online ! ');
})
bot.on('message',  message => {
   if(message.content === 'ping')
   message.channel.send('pong!')
   
   if(message.content === 'C test'){
      message.channel.send('yes this is a test on test ' + message.author)
   }
   
   if(message.content === 'addalex'){
      message.channel.send(message.author + ', you will be add to Alexiel Role')
      let memberRole = message.member.guild.roles.find('name','Alexiel')
      message.member.addRole(memberRole)
   }
   if(message.content === 'remalex'){
      message.channel.send(message.author + ', you will be remove from Alexiel Role')
      let memberRole2 = message.member.guild.roles.find('name','Alexiel')
      message.member.removeRole(memberRole2)
   }
   if(message.content === 'addgrim'){
      message.channel.send(message.author + ', you will be add to Grimnir Role')
      let memberRole3 = message.member.guild.roles.find('name','Grimnir')
      message.member.addRole(memberRole3)
   }
   if(message.content === 'remgrim'){
      message.channel.send(message.author + ', you will be remove from Grimnir Role')
      let memberRole3 = message.member.guild.roles.find('name','Grimnir')
      message.member.removeRole(memberRole3)
   }
   
   if(message.content === 'addeur'){
      message.channel.send(message.author + ', you will be add to Europe Role')
      let memberRole4 = message.member.guild.roles.find('name','Europe')
      message.member.addRole(memberRole4)
   }
   if(message.content === 'remeur'){
      message.channel.send(message.author + ', you will be remove from Europe Role')
      let memberRole5 = message.member.guild.roles.find('name','Europe')
      message.member.removeRole(memberRole5)
   }
   if(message.content === 'addshiva'){
      message.channel.send(message.author + ', you will be add to Shiva Role')
      let memberRole6 = message.member.guild.roles.find('name','Shiva')
      message.member.addRole(memberRole6)
   }
   if(message.content === 'remshiva'){
      message.channel.send(message.author + ', you will be remove from Shiva Role')
      let memberRole7 = message.member.guild.roles.find('name','Shiva')
      message.member.removeRole(memberRole7)
   }
   if(message.content === 'addmeta'){
      message.channel.send(message.author + ', you will be add to Metatron Role')
      let memberRole8 = message.member.guild.roles.find('name','Metatron')
      message.member.addRole(memberRole8)
   }
   if(message.content === 'remmeta'){
      message.channel.send(message.author + ', you will be remove from Metatron Role')
      let memberRole9 = message.member.guild.roles.find('name','Metatron')
      message.member.removeRole(memberRole9)
   }
   if(message.content === 'addava'){
      message.channel.send(message.author + ', you will be add to Avatar Role')
      let memberRole10 = message.member.guild.roles.find('name','Avatar')
      message.member.addRole(memberRole10)
   }
   if(message.content === 'remava'){
      message.channel.send(message.author + ', you will be remove from Avatar Role')
      let memberRole11 = message.member.guild.roles.find('name','Avatar')
      message.member.removeRole(memberRole11)
   }
    if(message.content === 'addUbaha'){
      message.channel.send(message.author + ', you will be add to Ultimate Bahamut Role')
      let memberRole12 = message.member.guild.roles.find('name','Ubaha')
      message.member.addRole(memberRole12)
   }
   if(message.content === 'remUbaha'){
      message.channel.send(message.author + ', you will be remove from Ultimate Bahamut Role')
      let memberRole13 = message.member.guild.roles.find('name','Ubaha')
      message.member.removeRole(memberRole13)
   }

   if(message.content === 'C help'){
      message.channel.send(message.author + ' so far there is ')
      message.channel.send('C help for all list of command ')
       message.channel.send('ping for . . . ')
      message.channel.send('addshiva (add role Shiva)  / remshiva (remove role Shiva)')
      message.channel.send('addeur (add role Europe)  / remeur (remove role Europe)')
      message.channel.send('addalex (add role Alexiel)  / remalex (remove role Alexiel)')
      message.channel.send('addgrim (add role Grimnir)  / remgrim (remove role Grimnir)')
      message.channel.send('addmeta (add role Metatron)  / remmeta (remove role Metatron)')
      message.channel.send('addava (add role Avatar)  / remava (remove role Avatar)')
      message.channel.send('addUbaha (add role UltimateBahamut)  / remUbaha (remove role UltimateBahamut)')
   }
})

bot.login(token);
