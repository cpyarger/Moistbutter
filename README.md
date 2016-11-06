# Moistbutter
Moist Butter Bot Written in NodeJS and Electron

I have been seeing some of the limitations in closed source stream bots like ANKHbot. This project is an attempt to build an open source stream bot with a simple GUI for configuration and operation!


Features Requested

* Currency system
* Giveaway system
* Music bot
* discord integration
* OBS integration
* patreon integration
* streamtips integration
* Quotes system
* Twitch integration
* Youtube streaming Integration
* timers
* Custom Commands
* Remote access for moderaters
* Global variable support for Latest sub, Biggest Follower etc.
* Blacklisted words
* Song request / music queue
* python plugin API
*
# Linux Installation -Debian/ubuntu

For Package Manager

~~~~
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
~~~~

For Binaries

Download https://nodejs.org/dist/v7.0.0/node-v7.0.0-linux-x64.tar.xz

Then do
~~~~
git clone https://github.com/cpyarger/moistbutter
cd moistbutter
npm install
npm start
~~~~
#Discord API Access
You will need to go to
https://discordapp.com/developers/applications/me
and create an application
Then use the create bot user option to create a bot

To add the bot to your discord server
you will need the client id from the application registration page

https://discordapp.com/oauth2/authorize?&client_id=>enter client ID here<&scope=bot&permissions=268561430

For example:
https://discordapp.com/oauth2/authorize?&client_id=201396576625754112&scope=bot&permissions=268561430

#Twitch Oauth

Grab your Oauth key from here for your bot account, and your user account

https://twitchapps.com/tmi/

#Twitch Client ID

Follow this guide to make a twitch client ID

https://blog.twitch.tv/client-id-required-for-kraken-api-calls-afbb8e95f843#.fbsmfcyrw
