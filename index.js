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
   if(message.content === 'C ColoGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47075')
   }
   if(message.content === 'C LeviGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47186')
   }
   if(message.content === 'C YggGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47428')
   }
   if(message.content === 'C TiamatGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47217')
   }
   if(message.content === 'C CelesGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47695')
   }
   if(message.content === 'C ChevGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47571')
   }
   if(message.content === 'C AgniGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21595')
   }
   if(message.content === 'C VarunaGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21615')
   }
   if(message.content === 'C TitanGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21593')
   }
   if(message.content === 'C ZephyGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21597')
   }
   if(message.content === 'C HadesGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21604')
   }
   if(message.content === 'C ZeusGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21596')
   }



   if(message.content === 'C help'){
      message.channel.send(message.author + ' so far there is ')
      message.channel.send('1- C help for all list of command ')
      message.channel.send('2- C ColoGrid for Magna Colosus Grid, C AgniGrid for Primal Agni Grid')
      message.channel.send('3- C LeviGrid for Magna Leviathan Grid, C AgniGrid for Primal Agni Grid')
      message.channel.send('4- C YggGrid for Magna Yggdrasil Grid, C TitanGrid for Primal Titan Grid')
      message.channel.send('5- C TiamatGrid for Magna Tiamat Grid, C ZephyGrid for Primal Zephyrus Grid')
      message.channel.send('6- C CelesGrid for Magna Celeste Grid, C HadesGrid for Primal Hades Grid')
      message.channel.send('7- C ChevGrid for Magna Chevalier Grid, C ZeusGrid for Primal Zeus Grid')
      message.channel.send('8- ping for . . . ')
      message.channel.send('9- addshiva (add role Shiva)  / remshiva (remove role Shiva)')
      message.channel.send('10- addeur (add role Europe)  / remeur (remove role Europe)')
      message.channel.send('11- addalex (add role Alexiel)  / remalex (remove role Alexiel)')
      message.channel.send('12- addgrim (add role Grimnir)  / remgrim (remove role Grimnir)')
      message.channel.send('13- addmeta (add role Metatron)  / remmeta (remove role Metatron)')
      message.channel.send('14- addava (add role Avatar)  / remava (remove role Avatar)')
      message.channel.send('15- addUbaha (add role UltimateBahamut)  / remUbaha (remove role UltimateBahamut)')
      
      
   }
})

bot.login(token);
