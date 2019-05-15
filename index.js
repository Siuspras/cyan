const Discord =  require('discord.js');
const bot = new Discord.Client();
const token = 'NTc3MDY0MzY3MjY3NTEyMzMw.XNfnNw.Pf4U0gVdMZMjJWmiyrqmlpqUfMY';

bot.on('ready', () =>{
   console.log(' this bot is online ! ');

})
bot.on('message',  (message) => {
   if(message.content.startsWith("!")) {
      processCommand(message)
  }

})

function processCommand(message){
   let fullCommand = message.content.substr(1)
   let splitCommand = fullCommand.split(" ")
   let primaryCommand = splitCommand[0]
   let arguments = splitCommand.slice(1)

   console.log("Command Received "+ primaryCommand)
   console.log("Arguments : "+arguments)

   if(fullCommand === 'c test'){
      message.channel.send('yes this is a test on test ' + message.author)
   }
   
   if(fullCommand === 'c addalex'){
      message.channel.send(message.author + ', you will be add to Alexiel Role')
      let memberRole = message.member.guild.roles.find('name','Alexiel')
      message.member.addRole(memberRole)
   }
   if(fullCommand === 'c remalex'){
      message.channel.send(message.author + ', you will be remove from Alexiel Role')
      let memberRole2 = message.member.guild.roles.find('name','Alexiel')
      message.member.removeRole(memberRole2)
   }
   if(fullCommand === 'c addgrim'){
      message.channel.send(message.author + ', you will be add to Grimnir Role')
      let memberRole3 = message.member.guild.roles.find('name','Grimnir')
      message.member.addRole(memberRole3)
   }
   if(fullCommand === 'c remgrim'){
      message.channel.send(message.author + ', you will be remove from Grimnir Role')
      let memberRole3 = message.member.guild.roles.find('name','Grimnir')
      message.member.removeRole(memberRole3)
   }
   
   if(fullCommand === 'c addeur'){
      message.channel.send(message.author + ', you will be add to Europe Role')
      let memberRole4 = message.member.guild.roles.find('name','Europe')
      message.member.addRole(memberRole4)
   }
   if(fullCommand === 'c remeur'){
      message.channel.send(message.author + ', you will be remove from Europe Role')
      let memberRole5 = message.member.guild.roles.find('name','Europe')
      message.member.removeRole(memberRole5)
   }
   if(fullCommand === 'c addshiva'){
      message.channel.send(message.author + ', you will be add to Shiva Role')
      let memberRole6 = message.member.guild.roles.find('name','Shiva')
      message.member.addRole(memberRole6)
   }
   if(fullCommand === 'c remshiva'){
      message.channel.send(message.author + ', you will be remove from Shiva Role')
      let memberRole7 = message.member.guild.roles.find('name','Shiva')
      message.member.removeRole(memberRole7)
   }
   if(fullCommand === 'c addmeta'){
      message.channel.send(message.author + ', you will be add to Metatron Role')
      let memberRole8 = message.member.guild.roles.find('name','Metatron')
      message.member.addRole(memberRole8)
   }
   if(fullCommand === 'c remmeta'){
      message.channel.send(message.author + ', you will be remove from Metatron Role')
      let memberRole9 = message.member.guild.roles.find('name','Metatron')
      message.member.removeRole(memberRole9)
   }
   if(fullCommand === 'c addava'){
      message.channel.send(message.author + ', you will be add to Avatar Role')
      let memberRole10 = message.member.guild.roles.find('name','Avatar')
      message.member.addRole(memberRole10)
   }
   if(fullCommand === 'c remava'){
      message.channel.send(message.author + ', you will be remove from Avatar Role')
      let memberRole11 = message.member.guild.roles.find('name','Avatar')
      message.member.removeRole(memberRole11)
   }
    if(fullCommand === 'c addubaha'){
      message.channel.send(message.author + ', you will be add to Ultimate Bahamut Role')
      let memberRole12 = message.member.guild.roles.find('name','Ubaha')
      message.member.addRole(memberRole12)
   }
   if(fullCommand === 'c remubaha'){
      message.channel.send(message.author + ', you will be remove from Ultimate Bahamut Role')
      let memberRole13 = message.member.guild.roles.find('name','Ubaha')
      message.member.removeRole(memberRole13)
   }
   if(fullCommand === 'c addubahaHL'){
      message.channel.send(message.author + ', you will be add to Ubaha HL Role')
      let memberRole12 = message.member.guild.roles.find('name','UbahaHl')
      message.member.addRole(memberRole12)
   }
   if(fullCommand === 'c remubahaHL'){
      message.channel.send(message.author + ', you will be remove from UBaha HL Role')
      let memberRole13 = message.member.guild.roles.find('name','UbahaHl')
      message.member.removeRole(memberRole13)
   }
   if(fullCommand === 'c ColoGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47075')
   }
   if(fullCommand === 'c LeviGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47186')
   }
   if(fullCommand === 'c YggGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47428')
   }
   if(fullCommand === 'c TiamatGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47217')
   }
   if(fullCommand === 'c CelesGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47695')
   }
   if(fullCommand === 'c ChevGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/47571')
   }
   if(fullCommand === 'c AgniGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21595')
   }
   if(fullCommand === 'c VarunaGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21615')
   }
   if(fullCommand === 'c TitanGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21593')
   }
   if(fullCommand === 'c ZephyGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21597')
   }
   if(fullCommand === 'c HadesGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21604')
   }
   if(fullCommand === 'c ZeusGrid'){
      message.channel.send(message.author +', here is the link for your reference')
      message.channel.send('グランブルーファンタジー.gamewith.jp/article/show/21596')
   }

   if(fullCommand === 'c help'){
      message.channel.send(message.author + ' so far there is ')
      message.channel.send('1 - C help for all list of command\n' +
      '2 - C ColoGrid for Magna Colosus Grid, C AgniGrid for Primal Agni Grid\n'+
      '3 - C LeviGrid for Magna Leviathan Grid, C AgniGrid for Primal Agni Grid\n'+ 
      '4 - C YggGrid for Magna Yggdrasil Grid, C TitanGrid for Primal Titan Grid\n'+
      '5 - C TiamatGrid for Magna Tiamat Grid, C ZephyGrid for Primal Zephyrus Grid\n'+
      '6 - C CelesGrid for Magna Celeste Grid, C HadesGrid for Primal Hades Grid\n'+
      '7 - C ChevGrid for Magna Chevalier Grid, C ZeusGrid for Primal Zeus Grid\n'+
      '8 - Ping for . . . \n'+
      '9 - addshiva (add role Shiva)  / remshiva (remove role Shiva)\n'+
      '10- addeur (add role Europe)  / remeur (remove role Europe)\n'+
      '11- addalex (add role Alexiel)  / remalex (remove role Alexiel)\n'+
      '12- addgrim (add role Grimnir)  / remgrim (remove role Grimnir)\n'+
      '13- addmeta (add role Metatron)  / remmeta (remove role Metatron)\n'+
      '14- addava (add role Avatar)  / remava (remove role Avatar)\n'+
      '15- addUbaha (add role UltimateBahamut)  / remUbaha (remove role UltimateBahamut)\n'+
      '16- addubahaHL (add role Ubahamut Hl) / remubahaHL (remove role Ubahamut HL)');
   }
}

bot.login(token);
