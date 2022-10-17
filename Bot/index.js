var cheerio = require("cheerio"); 
var request = require("request");
const Discord=require("discord.js");
const Client= new Discord.Client();
const prefix= "?";
var timestamp = require('console-timestamp');
Client.on('ready', async ()=>{
	
console.log(`${Client.user.username} está ON! Estou em ${Client.guilds.size} servidor(es)`);

Client.user.setActivity("🤠",{type: "Playing"});
Client.user.setStatus("dnd");
})

Client.on('message',async message=>{
const owner=Client.users.get('294886624221855754');
const ari = Client.emojis.find(emoji => emoji.name === "ari");
const disney = Client.emojis.find(emoji => emoji.name === "disney");
const menacing=Client.emojis.find(emoji => emoji.name === "menacing");
const geral=Client.channels.get("670017541032116227");;
const adm=Client.channels.get("537023732082933760");
const dev=Client.guilds.get("670017540604559389");
const bot=Client.users.get("552630866992693269");
const msg=message.content.toLowerCase();
var canal=message.channel.name;
const author=message.author;
		/*          DM                */
		if(message.channel.type=="dm"){
			canal=("DM");
		if(author.id==""){
			if(msg.startsWith(prefix+"off")){
				process.exit()
			}
		if(msg.startsWith(prefix+"saygeral")){
				console.log(`${canal}\n ${author} `+msg);	
				let texto=msg.split(" ").slice(1).join(" ");
	            geral.send(texto);
		}
		if(msg.startsWith(prefix+"sayadm")){
				console.log(`${canal}\n ${author} `+msg);
				let texto= msg.split(" ").slice(1).join(" ");
	            adm.send(texto);
		}
		}
		}
		if(author.id != "552630866992693269"){
	const log=(`${canal}\n ${author}`+msg);
	console.log(timestamp('DD-MM-YYYY hh:mm:ss'));
	console.log(`${canal}\n ${author} `+msg);
	/* message.owner.user.send=(`${canal}\n ${author}`+msg); */
	                   /*AutoResponse */
	if(msg.includes(`${ari}`)){
	message.react(message.guild.emojis.get("539953336309514260"));
	}	
	if(msg=="entendeu"){
	message.channel.send("entendi");
}

	if(msg.startsWith(prefix + "ari")){
		const embed = new Discord.RichEmbed()
  .setTitle(`${ari} Arrivederci`)
  .setImage("https://cdn.discordapp.com/attachments/532334688304365568/552693568825720881/tumblr_pm3zr6BPxD1rztjsno1_500.gif")
  .setColor(0xff5edc)
  
  .setTimestamp()
  .setURL("https://media.discordapp.net/attachments/546054435869032469/552882106100088852/tumblr_pm3zr6BPxD1rztjsno1_500.giff")
	message.channel.send(embed);
	}
	 /* Comandos Simples  */
	
	if(!msg.startsWith(prefix)) {
		return;
	}
	if(msg=="?eae"){
		
	message.channel.send("Eae");
	}
	if(msg.startsWith(prefix + "ajuda")){
		message.channel.send(`${author} mandei msg na DM!`);
		message.author.send("Meus comandos são: ");
		const embed = new Discord.RichEmbed()
  .setTitle("Comandos: ")
  .setAuthor("Bruna ", bot.avatarURL)
  .setColor(0xff5edc)
  
  .setDescription(`?eae \n ?prune \n ?ban \n ?ari \n ?coinflip \n ?desenho \n ?jojoke \n ?userinfo`)
  .setTimestamp()
  .setThumbnail(bot.displayAvatarURL)
	message.author.send(embed);
	}
	/* Moderação(Incompleto) */
if(msg.startsWith(prefix+ "prune")){
	var autor=message.member;
		let chad=dev.roles.find("id", "537112804528750604");
		if(autor.hasPermission('ADMINISTRATOR')){
			let args=msg.split(" ").slice(1).join(" ");

			if(!args[0]){
				message.delete();
				message.reply("Especifique a quantidade de messagens para serem apagadas");
				return;
			}
			if(args[0]==0){
				message.delete();
				message.reply(`Como que vou apagar 0 mensagens???? Tá na ${disney}.`);
				return;
			}
			if(args[0]>100){
				message.delete();
				message.reply("Muitas messagens para serem deletas, mais fácil apagar o geral de novo");
				return;
			}
			message.delete();
			message.channel.bulkDelete(args[0]);
			const embed = new Discord.RichEmbed()
  .setTitle("Prune")
  .setColor(0xff5edc)
  .setDescription(args[0]+" mensagens apagadas!")
  .setTimestamp()
  .setThumbnail("https://cdn.discordapp.com/attachments/532334688304365568/551915139016687645/20190303_204804.gif")
.setURL("https://cdn.discordapp.com/attachments/532334688304365568/551915139016687645/20190303_204804.gif")
 
		message.reply({embed});
			return;
			
	}	
	if(!autor.hasPermission("ADMINISTRATOR")){
		message.reply("Você não tem permissão de administrador");
		
	}
}

if(msg.startsWith(prefix+"ban")){
		let autor= message.member;
		let args= msg.split(" ").slice(1);

		if(autor.hasPermission('ADMINISTRATOR')){
			let motivo=msg.split(" ").slice(2).join(" ");
			let banido;
			if(msg==prefix+"ban"){
message.reply("Usuário não foi menciodado");
return null;
			}
		else if(message.mentions.users.first()){
banido=message.mentions.members.first();
if(banido.hasPermission("ADMINISTRATOR")){
message.channel.send("Não posso banir um ADM");
return;
}
dev.ban(banido);
message.channel.send("Usuário banido!");
			return;
		}
		else{
			Client.fetchUser(args[0])
			.then(banido => {
				if(dev.member(args[0])){
					banidog=dev.members.get(args[0]);
					if(banidog.hasPermission('ADMINISTRATOR')){
					message.channel.send("Não posso banir um ADM");
					return;
					}
				}
				dev.ban(banido,{reason: motivo});
				message.channel.send("Usuário banido!");

			})
		
		}

	}
	if(!autor.hasPermission('ADMINISTRATOR')){
		message.reply("Você não tem permissões de admnistrador");
		
	}

}

  /* Comandos fun */
	if(msg.startsWith(prefix+"say")){
		let texto= msg.split(" ").slice(1).join(" ");
		message.delete();
		if(!texto){
			message.channel.send("Digite uma mensagem");
			
		}
		else{
			message.channel.send(texto);
		}
	/* Comandos com Random */
	}
	function numrandom() {
return msg2[Math.floor(Math.random() * msg2.length)];
	}
	if(msg=="?coinflip"){
var msg2 = new Array(1);
		msg2[0] = 0;
	  msg2[1] = 1;
var x=numrandom();
		if (x == 0){
 const embed = new Discord.RichEmbed()
  .setTitle("Deu cara!")
  .setDescription("Cara")
  .setThumbnail("")  
  .setImage("https://cdn.discordapp.com/attachments/532334688304365568/552897385693577266/59e.gif")
  .setColor(0xff5edc)
  .setTimestamp()

  message.channel.send(embed);
		}
		else{
			const embed = new Discord.RichEmbed()
			 .setTitle("Deu coroa")
			 .setDescription("Coroa")
  .setImage("https://cdn.discordapp.com/attachments/532334688304365568/552897385693577266/59e.gif")
.setThumbnail("") 
  .setColor(0xff5edc)
  
  .setTimestamp()
			message.channel.send(embed);
		}
}
/* Desenho antigo
	if(message.content=="?desenho"){
   message.delete();
   var n=[
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
 var imgn=n[Math.floor(Math.random() * n.length)]; 
   var imgl=("./images/"+imgn+".jpg");
   message.channel.send({files: ["./images/"+imgn+".jpg"]})
	}

   Jojoke antigo
	if(message.content=="?jojoke"){
   message.delete();
   var n=[
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106]
 var imgn=n[Math.floor(Math.random() * n.length)];
   var imgl=("./jojomemes/"+imgn+".jpg");
   message.channel.send({files: ["./jojomemes/"+imgn+".jpg"]})
   
	}
	*/

	           /* Comandos de Info */
	if(msg.startsWith(prefix+"avatar")){
		let membro;
		let args= msg.split(" ").slice(1);
		if(msg===prefix + "avatar"){
			membro=message.author;
			const embed = new Discord.RichEmbed()
			 .setTitle("Avatar")
			 .setDescription(`${membro}`)
  .setImage(membro.avatarURL)
  .setColor(0xff5edc)
  .setTimestamp()
  .setURL(membro.displayAvatarURL)
			message.channel.send(embed);
		}
		else if(message.mentions.users.first()){
			membro=message.mentions.users.first();
		const embed = new Discord.RichEmbed()
			 .setTitle("Avatar")
			 .setDescription(`${membro}`)
  .setImage(membro.displayAvatarURL)
  .setColor(0xff5edc)
  
  .setTimestamp()
  .setURL(membro.displayAvatarURL)
			message.channel.send(embed);
			
				}
	else{		
	Client.fetchUser(args[0])
	.then(membro => {
	const embed = new Discord.RichEmbed()
			 .setTitle("Avatar")
			 .setDescription(`${membro}`)
  .setImage(membro.avatarURL)
  .setColor(0xff5edc)
  .setTimestamp()
  .setURL(membro.avatarURL)
			message.channel.send(embed);		
	})	}
		}
		if(msg==(prefix+ "desenho")){
			message.delete();
		var n=[""] /* <= Desenhos ficam aqui */
		var imgn=n[Math.floor(Math.random()*n.length)]; 
		var luc=Client.users.get("");
		var maru=Client.users.get("");
		var roku=Client.users.get("");
		Client.fetchUser("")
		.then(maru =>{
		const embed = new Discord.RichEmbed()
			 .setTitle("Desenho")
			 .setDescription(`Desenhos feitos por ${luc}, ${roku} e ${maru}`)
  .setImage(`${imgn}`)
  .setColor(0xff5edc)
  .setURL(`${imgn}`)
  
  .setTimestamp()
  .setURL(`${imgn}`)
			message.channel.send(embed);
		})
		}
		if(msg==(prefix+ "jojoke")){
			message.delete();
	var n=[""]
		var imgn=n[Math.floor(Math.random() * n.length)];
		const embed = new Discord.RichEmbed()
			 .setTitle("JoJoke")
			 .setDescription(`${menacing} ${menacing} ${menacing}`)
  .setImage(`${imgn}`)
  .setColor(0xff5edc)
  .setTimestamp()
  .setURL(`${imgn}`)
			message.channel.send(embed);
		}
		if(msg.startsWith(prefix+"userinfo")){
			let membro;
			let cargos;
			let ubot;
		 let jogo;
		 let perms;
		let args= msg.split(" ").slice(1);
		if(msg===prefix+"userinfo"){
			membro=message.author;
			let cara=message.member;
			cargos=cara.roles.map(r => `${r}`).join(' **|** ');
			var criado=membro.createdAt.toString().split(" ");
			perms=cara.permissions.toArray().join(' **|** ');
if(membro.bot===false){
	ubot="Não";
}
else if(membro.bot===true){
	 ubot="Sim";
		}
		jogo=membro.presence.game;
			if(jogo===null){
			jogo="Nada";	
			}
			const embed = new Discord.RichEmbed()
			.setAuthor("Informações:",membro.avatarURL)
			 .setDescription(`**Nick e Tag**: `+membro.username+`#`+membro.discriminator+`\n \n**Usuário: **${membro}\n \n **Conta criada em**: `+criado[2]+` **de** `	+criado[1]+` **de** `+criado[3]+`.\n \n **ID**: `+membro.id+`\n \n **Bot**: `+ubot+`\n \n **Status**: `+membro.presence.status+`\n \n**Jogando**: `+jogo+`\n \n**Cargos**:`+cargos+`\n \n **Permissões**: `+perms)
  .setColor(0xff5edc)
  .setThumbnail(membro.avatarURL)
  .setTimestamp()
  .setURL(membro.displayAvatarURL)
			message.channel.send(embed);
			
		}
		else if(message.mentions.users.first()){
			membro=message.mentions.users.first();
			let cara=message.mentions.members.first();
			 cargos=cara.roles.map(r => `${r}`).join(' **|** ');
			var criado=membro.createdAt.toString().split(" ");
			perms=cara.permissions.toArray().join(' **|** ');
if(membro.bot===false){
	ubot="Não";
}
else if(membro.bot===true){
	 ubot="Sim";
		}
		jogo=membro.presence.game;
			if(jogo===null){
			jogo="Nada";	
			}
const embed = new Discord.RichEmbed()
			.setAuthor("Informações:",membro.avatarURL)
.setDescription(`**Nick e Tag**: `+membro.username+`#`+membro.discriminator+`\n \n**Usuário: **${membro}\n \n**Conta criada em**: `+criado[2]+` **de** `	+criado[1]+` **de** `+criado[3]+`.  \n \n **ID**: `+membro.id+`\n \n **Bot**: `+ubot+`\n \n **Status**: `+membro.presence.status+`\n \n**Jogando**: `+jogo+`\n \n**Cargos**:`+cargos+`\n \n **Permissões**: `+perms)  
  .setColor(0xff5edc)
  .setThumbnail(membro.avatarURL)
  .setTimestamp()
  .setURL(membro.displayAvatarURL)
			message.channel.send(embed);
			
				}
	else{		
	Client.fetchUser(args[0])
	.then(membro => {
		if(dev.member(args[0])){
			let cara=dev.members.get(args[0]);
		 cargos=cara.roles.map(r => `${r}`).join(' **|** ');
		 perms=cara.permissions.toArray().join(' **|** ');
		}
		else{
			cargos="Usuário não está no servidor";
			perms="Usuário não está no servidor";
		}
		if(membro.bot===false){
 ubot="Não";
}
else if(membro.bot===true){
	ubot="Sim";
		}
		jogo=membro.presence.game;
			if(jogo===null){
			jogo="Nada";	
			}

		var criado=membro.createdAt.toString().split(" ");
		criado=criado[2]+` ** de** `+criado[1]+` **de** `+criado[3];
	const embed = new Discord.RichEmbed()
			.setAuthor("Informações:",membro.avatarURL)
.setDescription(`**Nick e Tag**: `+membro.username+`#`+membro.discriminator+`\n \n **Usuário: **${membro} \n \n **Conta criada em**:`+criado+`\n \n **ID**: `+membro.id+`\n \n  **Bot**: `+ubot+`\n \n **Status**: `+membro.presence.status+`\n \n**Jogando**: `+jogo+`\n \n**Cargos**: `+cargos+`\n \n **Permissões**: `+perms)
  
  .setColor(0xff5edc)
  .setThumbnail(membro.avatarURL)
  .setTimestamp()
  .setURL(membro.displayAvatarURL)
			message.channel.send(embed);
			
	})	}
			
}
if(msg==(prefix+"svinfo")){
	var dono=dev.ownerID;
	var membros=dev.members.filter(membros => !membros.user.bot).size;
	var bots=dev.members.filter(bots => bots.user.bot).size;
	var canaistotal=dev.channels.filter(canais => canais.type!='category').size;
	var canaistext=dev.channels.filter(canaistext => canaistext.type=='text').size;
	var canaisvoice=dev.channels.filter(canaisvoice => canaisvoice.type=='voice').size;
	var categorias=dev.channels.filter(categorias => categorias.type=='category').size;
	var criado=dev.createdAt.toString().split(" ");
	criado=criado[2]+` ** de** `+criado[1]+` **de** `+criado[3];
	dono=Client.users.get(dono);
	const svinfo = new Discord.RichEmbed()
	.setAuthor("Informações:",dev.iconURL)
	.setDescription(`**Nome**: `+dev.name+`\n \n **ID da Guild**: `+dev.id+`\n \n **Dono**: ${dono} \n \n **Criado em**:`+criado+`\n \n **Quantidade de Usuários Totais**:`+dev.memberCount+`\n **Humanos**:  `+membros+`\n **Bots**: `+bots+`\n \n**Total de Canais**:`+canaistotal+`\n **Canais de Texto**: `+canaistext+`\n **Canais de Voz**: `+canaisvoice+`\n**Categorias**: `+categorias)
	.setColor(0xff5edc)
	.setThumbnail(dev.iconURL)
	.setTimestamp()
	.setURL(dev.iconURL)
	message.channel.send(svinfo);
}
if(msg==(prefix+"img")){
	var msgarray = message.content.split(" ");
	   image(message, msgarray); 

	
	}

}																

});
																		
function image(message, msgarray) {
 
    /* extract search query from message */
 
    var search = msgarray.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "ajuda",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
		});
        // Send result
        message.channel.send( urls[0] );		
	};	
	
																																		
Client.on("messageDelete", async msg => {
  let logs = await msg.guild.fetchAuditLogs({type: 72});

	
	const weblog=Client.channels.get("548938288342368267");
	const chad=Client.users.get("227095513286049793");
	const anubis=Client.users.get("524338377403793409");
 const embed = new Discord.RichEmbed()
    .setTitle("**Mensagem deletada**")
    .setColor(0xff5edc)
    .addField("Autor da Mensagem", msg.author.tag, true)
    .addField("Canal", msg.channel, true)
.setDescription(`${msg.content}`)
    .setFooter(`ID da Mensagem: ${msg.id} | ID do autor: ${msg.author.id}`)
.setTimestamp()
	weblog.send({embed});
	chad.send({embed});
});
Client.on("messageUpdate",(oldmsg,newmsg) => {
	const weblog=Client.channels.get("");
	const chad=Client.users.get("");
	if(!oldmsg.author.bot && !newmsg.author.bot && oldmsg.content!=newmsg.content){
	
	const embed = new Discord.RichEmbed()
    .setTitle("**Mensagem Editada**")
    .setColor(0xff5edc)
    .addField("Autor da Mensagem", oldmsg.author.tag, true)
		.addField("Canal", oldmsg.channel, true)
.setDescription(`Antes: ${oldmsg.content} \n Depois: ${newmsg.content}`)
    .setFooter(`ID da Mensagem: ${oldmsg.id} | ID do autor: ${oldmsg.author.id}`)
.setTimestamp()
	weblog.send({embed});
	chad.send({embed});

}
else{
	return;
}

});

Client.on("messageReactionAdd",(reaction,user) =>{
reaction.remove(owner);
});

Client.login("");