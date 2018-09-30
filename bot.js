const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` اكتب اي شي هنا  `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

});
if (message.content === '+help') {
              var embed  = new Discord.RichEmbed()
                .addField("**+ve**" , " لانشاء روم صوتي")
                .addField("**+tt**" , " لانشاء شات كتابي ")
                .addField("**+server**" , "لعرض معلومات عن السيرفر")
                .addField("**+ban**" , "لتبنيد عضو ")
                .addField("**+avatar**" , "لعرض صورتك")
                .addField("**+role**" , "لاعطاء رتبه لشخص")
                .addField("**+مسح**" , "لمسح العدد المحدد من الشات")
                .addField("**+setvoice**" , "للانشاء  فويس اونلاين")
                .addField("**+mute **" , "لاعطاء ميوت لشخص")
                .addField("**+unmute **" , "لفك الميوت")
                .addField("**+kick **" , "لاعطاء كيك لشخص")
                .addField("**+move **" , "لسحب شخص لي رومك")
                .addField("**+allmove **" , "لسحب الجميع لي رومك")
                .setColor('RANDOM')
  message.author.sendEmbed(embed)
 });









// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
