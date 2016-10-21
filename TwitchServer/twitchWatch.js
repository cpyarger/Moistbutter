

var fs    = require('fs'),
nconf = require('nconf');
nconf.file({ file: 'config.json' });
var config = {
	channels: [	nconf.get("config:twitchchannel"), '#m0istbutter' ],
	server: "irc.twitch.tv",
	botName: nconf.get("config:botname"),
	pass: nconf.get("config:botoauth")
};

nconf.file({ file: 'commands.json' });

var prepend="!";
// Get the lib
var irc = require("irc");
var talkchan=config.channels[0];


///Parse and execute commands!
function runCommands(command){
	command = command.replace(/^!+/, "");
	var arr = command.split(" ")
	var wer=arr.shift()
	var tyu= arr.join(' ')

	switch(wer){
		case "remove":
			var jsonArray=fs.readFileSync('commands.json')
			var zas=JSON.parse(jsonArray);
			console.log(zas);
			delete zas.command[tyu];
			console.log(zas);
			fs.writeFileSync('commands.json',JSON.stringify(zas));
			nconf.use('file',{file:'commands.json'});
			break;
		case "hello":
			bot.say(talkchan, "Hello!!!");
			break;
		case "add":
			x=tyu.split("~");
			nconf.set('command:'+x[0], x[1]);
			nconf.save();
			bot.say(talkchan,"command: "+x[0]+" has been set!")
		case "help":
			var z=['!hello, !add, !remove']
			var x=nconf.get('command');
			for (var key in x) {
			if (x.hasOwnProperty(key)) {
			  z.push(' !'+key);
			}}
			console.log('Available commands are: '+z)
			bot.say(talkchan, 'I am Moist Butter!!! My commands are: '+z)
		default:
			if (nconf.get('command:')+wer==null){
				bot.say(talkchan, "command: \""+wer+"\" does not exist!!!");
			}
			bot.say(talkchan,nconf.get('command:'+wer));
			break;

	} //end case
	//console.log("runCommands says: "+command);
	//console.log(nconf.get('command'));
}// end runCommands


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels,
  password: config.pass
});


// Listen for joins
bot.addListener("join", function(channel, who) {
	// Welcome them in!
	bot.say(channel, who + " Has connected");
	console.log(who + " Joined Channel " + channel)

});

// Listen for any message, PM said user when he posts
bot.addListener("message", function(from, to, text, message) {
	bot.say(from, "¿Que?");
});

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
	if (text.startsWith(prepend)){
		runCommands(text);
		console.log(text);
	};
});

//example resub command
bot.addListener("message", function(from, to, text, message) {
	console.log(text);
	if (text.startsWith("hi")){
		bot.say(talkchan, "<3 <3 hello @"+from);
	}
});
