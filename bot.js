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

client.on('message', message => {
    var prefix = "+";
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('```**تم عمل الروم بنجاح**```');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
  client.on('message', message => {
      if(message.content === '+res') {
if(message.author.id !== '427802430701436928') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // لا تغيرها
  }, time);
}
});
  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});

  client.on('message', message => {
      var prefix = "+";
  if(message.content.startsWith(prefix + "bcow")) {
    let i = client.users.size;
    if(message.author.id !== 'اي دي صاحب البوت') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});
 client.on('message', message => {
      var prefix = "+";
    if (message.content.startsWith(prefix + "هويتي")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(": النك نيم",`${h.nickname}`, true) .addField(": #",heg.discriminator, true)
.addField(`: البلينق`,`${h.presence.game && h.presence.game.name || '-'}`,true) .addField(': الحالة',`${h.presence.status}`,true)
.addField(`: الرتب`, `${message.guild.members.get(h.id).roles.map(r => `\`${r.name}\``).slice(1).join('\n') || 'لايوجد رتب'}`,true)                                                    
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}      
});
  client.on('message', message => {
    var prefix = "+";
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
        if( !args[0] ) return message.reply( '**```يرجى وضع الشخص المراد سحب منه الرتبة ```**' );
        if( !args[1] ) return message.reply( '**```يرجى وضع الرتبة المراد سحبها من الشخص```**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**``` يرجى وضع الرتبة المراد سحبها من الشخص ```**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**``` [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من ```');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**``` [ '+role1.name+' ] تم سحب من الكل رتبة```');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**``` [ '+role1.name+' ] تم سحب من البوتات رتبة```**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**``` [ '+role1.name+' ] تم سحب من البشريين رتبة```**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**``` يرجى وضع الشخص المراد اعطائها الرتبة```**' );
        if( !args[1] ) return message.reply( '**``` يرجى وضع الرتبة المراد اعطائها للشخص```**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**``` يرجى وضع الرتبة المراد اعطائها للشخص```**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**```[ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء ```**');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**``` [ '+role1.name+' ] تم اعطاء الكل رتبة```**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**``` [ '+role1.name+' ] تم اعطاء البوتات رتبة```**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**``` [ '+role1.name+' ] تم اعطاء البشريين رتبة```**');
        }
    }
});
client.on('message', async message => {
if (KiNg66S.author.bot) return;
if (KiNg66S.author.id === KiNg66S.user.id) return;
if (KiNg66S.author.equals(KiNg66S.user)) return;
if (!KiNg66S.content.startsWith(prefix)) return;

var args = KiNg66S.content.substring(prefix.length).split(' ');
switch (args[0].toLocaleLowerCase()) {
case "مسح" :
KiNg66S.delete()
if(!KiNg66S.channel.guild) return
if(KiNg66S.member.hasPermissions(0x2000)){ if (!args[1]) {
KiNg66S.channel.fetchMessages()
.then(messages => {
KiNg66S.channel.bulkDelete(messages);
var messagesDeleted = messages.array().length;
KiNg66S.channel.sendMessage(' '+ " " + messagesDeleted + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
})
} else {
let messagecount = parseInt(args[1]);
KiNg66S.channel.fetchMessages({limit: messagecount}).then(messages => KiNg66S.channel.bulkDelete(messages));
KiNg66S.channel.sendMessage(' '+ " " + args[1] + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
KiNg66S.delete(60000);
}
} else {
var manage = new Discord.RichEmbed()
.setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
.setColor("RANDOM")
KiNg66S.channel.sendEmbed(manage)
return;
}
}
});
  client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("+avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**```منشن شخص```**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**```يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة```**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  client.on('message', message => {
    var prefix = "+";
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**", '**Unknown**' ,true)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
  client.on('message', message => {
var prefix = "+";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'ve')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('🎤').then(r=>{
                              
    
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;

 let ve  = message.createReactionCollector(Voice, { time: 60000 });

ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
  client.on('message', message => {
var prefix = "+";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'tt')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء شات كتابي اظغط علي الايموجي✏`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('✏').then(r=>{
                              
    
 let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;

 let tt  = message.createReactionCollector(Text, { time: 60000 });

tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
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
  message.author.sendEmbed(embed);
 }
 });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
