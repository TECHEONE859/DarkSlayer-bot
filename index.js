//Système
const Discord = require('discord.js');
const bot = new Discord.Client();

var os = require('os');
const fs = require("fs");
var memberCount = bot.users.size;
var servercount = bot.guilds.size;


//prefix <//>
var prefix = ("d?");
var randnum = 0;
// bot connecté xD
bot.on('ready', () => {
  
    
    bot.user.setActivity(`d?help ${bot.guilds.size} Serveur ! ${bot.users.size}  Utilisateur !`);
    
    bot.user.setUsername("DarkSlayer-bot");
  console.log('connecté !');
});


// PING 
bot.on('message', message => {
    if(message.content.startsWith(prefix + 'non')) {
    let startTime = Date.now();


  }
  
  // ID ip xD
  if(message.content.startsWith(prefix + 'id')) {
    if (message.channel.type == "dm") return message.channel.send("tu sais il y a des serveurs pour les commands :joy:"); 
   
     message.channel.sendMessage(`**${message.author.username} **` + "Voici ton ID: " + `__${message.author.id}__`);
  }
  // help
  if(message.content.startsWith(prefix+"help")) {
    const embed = new Discord.RichEmbed()
    .setTitle("Voici les commands du bot " + bot.user.username)
    .setDescription("Le préfix est : " + prefix)
    .setThumbnail("https://cdn.discordapp.com/attachments/421733701484019712/422033179357216793/help.png")
    .addBlankField(true)
    .addField(":book: utiles", "d?stats => te donne les statistique sur le bot\nd?info => te donne les information sur le serveur\nd?serveur => information sur le servuer\nd?user => information sur vous\nd?googlesearch => recherche sur google\nd?ytsearch => recherche sur youtube\n")
    .addBlankField(true)
    .addField("🙂 FUN :", "d?ping => Pong :ping_pong:\nd?id => te donne ton ID ")
    .addBlankField(true)
    .addField("🔒 Moderation", "d?ban => bannir un utilisteur\nd?kick => expulser un utilisateur\nd?mute => mute un membre\nd?unmute => démute un membre")
    .addBlankField(true)
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setTimestamp() 
    .setColor("#1253F4");
message.channel.send(embed)
  } else if(message.content === 'd?apropos') {
    if (message.channel.type == "dm") return message.channel.send("tu sais il y a des serveurs pour les commands :joy:"); 

       var embed = new Discord.RichEmbed()
			.setColor("#1253F4")
			.setDescription("Le développeur du bot: **TECHEONE**\nSite web: http://webteches.free.fr\nHébergeur: **RASPBERRY**\nTwitter:  https://twitter.com/techeone2")
			.setFooter('A propos du bot')
			message.channel.send(embed).catch(console.error)


      }   
//Kick
if(message.content.startsWith(prefix +'kick')){
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(":x: Vous n'avez pas la permission manage-guild dans ce serveur").catch(console.error);
if(message.mentions.users.size === 0) {
  return message.channel.send(":x: Vous n'avez mentionnée aucun utilisateur");
}
let kickMember = message.guild.member(message.mentions.users.first());
if(!kickMember) {
  return message.channel.send(":x: Je ne suis pas sur que cet utilisateur existe...");
}
if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
  return message.reply(":x: Je n'ai pas la permission pour kick...").catch(console.error);
}

kickMember.kick().then(member => {
    message.channel.send(`**${member.user.tag}** été kick avec succès :white_check_mark: `)

   });
 }

// google 
if(message.content.startsWith(prefix +'googlesearch')){
       
    let args = message.content.split(" ");
    args.shift();
    const search = args.join("+");
    
    var searchembed = new Discord.RichEmbed()
    .setColor("#00F9D7")
    .setThumbnail("https://commons.wikimedia.org/wiki/File:Google_Chrome_icon_(2011).png")
    .addField("Résultat de votre recherche:", `[Resultat de votre recherche via Google](https://www.google.fr/search?q=${search})`)
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send(searchembed);
}


if(message.content.startsWith(prefix +'ytsearch')){
       
    let args = message.content.split(" ");
    args.shift();
    const search = args.join("+");
    var ytembed = new Discord.RichEmbed()
    .setColor("#00F9D7")
    .setThumbnail("https://www.youtube.com/yt/about/media/images/brand-resources/icons/YouTube-icon-our_icon.png")
    .addField("Résultat de votre recherche:", `[Resultat de votre recherche via Youtube](https://www.youtube.com/results?search_query=${search})`)
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send(ytembed);
}
// stats        
 if(message.content.startsWith(prefix+"stats")) {
    var embed = new Discord.RichEmbed()
    .setColor(0xffffff)            
    .setTimestamp()
    .addField('Serveurs', `${bot.guilds.size}`)
    .addField('Utilisateurs', `${bot.users.size}`)
    .addField('Channels', `${bot.channels.size}`)
    .addField('Library', `Discord-js`)
    .addField('Version Discord-js', `${Discord.version}`)
    .addField('Version du Bot', `V1.0.0`)
    .addField('Uptime', (Math.round(bot.uptime / (1000 * 60 * 60))) + " heurs, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, et " + (Math.round(bot.uptime / 1000) % 60) + " secondes")
    .setFooter(`@${message.author.username}`);
    
    message.channel.send(embed);
    }
 // servuer info
   if(message.content.startsWith(prefix+"info")) {
    message.channel.send('', {
    embed: new Discord.RichEmbed()
              .setTitle("Server Information")
              .setThumbnail(message.guild.iconURL)
                             
              .addField("Nom", message.guild.name)
                             
              .addField("Membres", message.guild.memberCount)
                             
              .addField("Salon", message.guild.channels.size)
                             
              .addField("émojis", message.guild.emojis.size)
                       
              .addField("Role", `${message.guild.roles.size}`)
              .addField("ID", message.guild.id)
                             
              .addField("Salon AFK", message.guild.afkChannel)
                             
              .addField("Région", message.guild.region)
                             
              .addField('Niveau de verification', message.guild.verificationLevel)
                             
              .addField('Propriètère du serveur', "@"+ message.guild.owner.user.tag)
                             
              .setFooter("Requested by " + message.author.tag)
              .setColor("#000000")
              });
            }
        //Ban
        if(message.content.startsWith(prefix + "ban")){
            if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Tu n'as pas les permissions nécéssaires.");
            const member = message.mentions.members.first();
            if(!member) return message.reply("Mauvais usage fait comme ça : `//ban @User#1234`");
             if(member && message.member.permissions.has("BAN_MEMBERS")){
                 member.ban(`banni par ${message.author.tag}`);
                 message.reply("a été banni avec succès. :white_check_mark:");
             }
    
        }
              
//Mute
              if (message.content.startsWith(prefix + "mute")) {
                if (message.channel.type === "dm") return;
                if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
                if(message.mentions.users.size === 0) {
                  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
                }
                let muteMember = message.guild.member(message.mentions.users.first());
                if(!muteMember) {
                  return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
                }
                if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) {
                  return message.reply("*:x: Je n'ai pas la permission pour mute...**").catch(console.error);
                }
                message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
                    message.channel.send(`**${muteMember.user.username}** est désormais mute dans **#${message.channel.name}** :mute:`)
                })
                }
                
//Unmute 
                if (message.content.startsWith(prefix + "unmute")) {
                    if (message.channel.type === "dm") return;
                    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
                    if(message.mentions.users.size === 0) {
                      return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
                    }
                    let unmuteMember = message.guild.member(message.mentions.users.first());
                    if(!unmuteMember) {
                      return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
                    }
                    if(!message.guild.member(bot.user).hasPermission("MANAGE_GUILD")) {
                      return message.reply("*:x: Je n'ai pas la permission pour unmute...**").catch(console.error);
                    }
                    message.channel.overwritePermissions(unmuteMember, { SEND_MESSAGES: true }).then(member => {
                        message.channel.send(`**${unmuteMember.user.username}** est désormais unmute dans **#${message.channel.name}** :loud_sound:`)
                    })
                    }
           
                                      
// serveur                        
                        if (message.content === prefix + "serveur") {
                            var infodiscord = new Discord.RichEmbed()
                        .setColor("0x0000FF")
                        .setDescription("Information Du discord")
                        .addField("Nom du discord", message.guild.name)
                        .addField("Crée le", message.guild.createdAt)
                        .addField("Tu as rejoin le", message.member.joinedAt)
                        .addField("Utilisateurs sur le discord", message.guild.memberCount)
                        message.channel.sendEmbed(infodiscord)
                     }
 //Game         
                     if(message.content.startsWith('d?game')) {

                        let randnum_game = Math.floor(Math.random() * 2)
                
                        if (randnum_game == 0) {
                
                            var embed = new Discord.RichEmbed()
                            .setColor("#226666")
                            .setDescription("Vrai :wink:")
                            .setFooter('Jeu du vrai ou faux')
                            message.channel.send(embed).catch(console.error)
                
                        } else if(randnum_game == 1) {

                            var embed = new Discord.RichEmbed()
                            .setColor("#226666")
                            .setDescription("Faux :wink:")
                            .setFooter('Jeu du vrai ou faux')
                            message.channel.send(embed).catch(console.error)
                        }
                    }  
      
                   // Web et yt et Invite
                   
if(message.content.startsWith('d?web')) {

    let randnum_game = Math.floor(Math.random() * 2)
              
        if (randnum_game == 0) {
                  
        var embed = new Discord.RichEmbed()
        .setColor("#0000FF")
        .setDescription("**le créateur du bot son Site Web **: http://webteches.free.fr/")
         message.channel.send(embed).catch(console.error)
                   
     }
                       
   }      
    
   if(message.content.startsWith(prefix + "ping")){
    let startTime = message.createdTimestamp;
    let endTime = new Date().getTime()
    let embed = new Discord.RichEmbed()
    .setColor("#3366CC")
    .setTitle("**Voici le ping du bot**")
    .addField("**PONG :ping_pong: " + Math.round(endTime - startTime) + " ms.**", "Excellent ping ! 😲")
    message.channel.send({embed})
}
                          
              
if(message.content.startsWith(prefix + "vcs")) {
   
    var vcsc = bot.channels.findAll('name', 'vcs-message');
    var vcsc2 = message.guild.channels.find('name', 'vcs-message');
    if(!vcsc2) {
        message.guild.createChannel('vcs-messageclea');
        return message.reply("Le salon **vcs-message** n'éxistait pas, je l'ai donc créé")
    }
    vcsc.forEach(channel => {
        message.delete();
   
       
           var replys = [
               '#01FEDC', 
               '#FE0101',
               '#FE6F01',
               '#FEF601',
               '#6FFE01',
               '#1201FE',
               '#7F01FE',
               '#FE01C3',
               '#0166FE',
               '#FE0177'
           ];
       
           let reponse = (replys[Math.floor(Math.random() * replys.length)])
           var vcsmsg = message.content.substr(6)
           var embed = new Discord.RichEmbed()
           .setColor(reponse)
           .setAuthor("chat - VCS", bot.user.avatarURL)
           .addField("Serveur", message.guild.name, true)
           .addField("Utilisateur", message.author + "**" + message.author.discriminator + "**", true)
           .addField("Message", vcsmsg)
           
       channel.send(embed)
           })
       }
                     
     
                    
                    if (message.content.startsWith(prefix + "user")) {
                        var mentionned = message.mentions.users.first();
                        var membername = message.author.username;
                    
                        //Si personne n'est mentionné alors la personne a get et l'author.
                        var usr;
                      if(mentionned){
                          var usr = mentionned;
                      } else {
                          var usr = message.author;
                      }
                      
                      //regarde si l'user est un bot ou pas
                      if(usr.bot == true){
                        var checkbot = "L'utilisateur est un bot";
                    } else {
                        var checkbot = "N'est pas un bot";
                    }
                
                    //Regarde le status.
                    if(usr.presence.status == 'online'){
                      var status = "En ligne"; 
                    }else {
                      var status = "Hors ligne";
                    }
                
                    if(!usr.presence.game){
                        var presence = "Joue à aucun jeu";
                    } else {
                        var presence = usr.presence.game.name;
                    }
                
                   if(typeof usr.lastMessage === null){
                   
                    var lastm = "Dernier Message Non-Trouvé";
                   
                } else {
                    var lastm = usr.lastMessage;
                }
                
                      var usrembed = new Discord.RichEmbed()
                      .addField("Pseudo :", usr.username)
                      .addField("Id", usr.id)
                      .addField("***#***", "#" + usr.discriminator)
                      .addField("Joue à", presence)
                      .addField("Statut", status)
                      .addField("Dernier Message", "\`\`\`" + lastm + "\`\`\`")
                      .addField("Bot ?", checkbot)
                      .setImage(usr.avatarURL)
                      message.channel.send(usrembed);
                        }
                                            
                        if (message.content.startsWith(prefix +'avatar')) {
                            if (!message.mentions.users.size) {
                                return message.channel.send(`Mon  avatar: ${message.author.displayAvatarURL}`);
                            }
                            const avatarList = message.mentions.users.map(user => {
                                return `${user.username}'s avatar: ${user.displayAvatarURL}`;
                            });
                            message.channel.send(avatarList);
                          }
                    
                          if (message.content.startsWith(prefix + "clear")) {
                            if (message.channel.type === "dm") return;
                            if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
                             
                            const user = message.mentions.users.first();
                             const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
                            if (!amount) return message.reply('**:x: Veuillez spécifier une limite de message**');
                            if (!amount && !user)
                            return message.reply('**:x: Veuillez spécifier une limite de message**');
                            if (!user){
                            if(isNaN(message.content.split(' ')[1]) || parseInt(message.content.split(' ')[1]) < 2 || parseInt(message.content.split(' ')[1]) > 100){
                            message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
                            }
                            }
                            if(message.content.split(' ')[2]){
                            if(isNaN(message.content.split(' ')[2]) || parseInt(message.content.split(' ')[2]) < 2 || parseInt(message.content.split(' ')[2]) > 100){
                            message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
                            }
                            }
                             message.channel.fetchMessages({ limit: amount, }).then((messages) => {
                             if (user) {
                            const filterBy = user ? user.id : bot.user.id;
                            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                             }
                             message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
                             
                            message.channel.send(":wastebasket: | `" + amount + "` messages supprimés");
                             
                            });
                        }
                                                 if(message.content.startsWith(prefix + "list")) {

                                                let uinfoEmbed = new Discord.RichEmbed()
                                                .setDescription("__**Infos**__")
                                                      .setColor('#00FFE8')
                                                .addField("Serveur liste", `${bot.guilds.map(g=>g.name).join("\n")}`)
                                            
                                                message.channel.send(uinfoEmbed);                                                     
                                                 }
                                                });                                              
                                               
                                               
                                                                                             

                                                bot.on("guildMemberAdd", member =>{
                                                    if(!member.guild.roles.find('name', 'Membres')) return console.log("Role inconnu");
                                                    member.addRole(member.guild.roles.find('name', "Membres"));
                                                })

                                              



bot.login(process.env.TOKEN);
