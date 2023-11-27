const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94772403612"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'yoweldanthanarayana3@@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94752936122' 
global.devs = '94772403612';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJaYTRtT3V5TWdaT2txVGdTZEtXUkFyOEZuYXY2VUJkK21UYWZNRExYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWpXZVFYOXU1Wmc5NDQ4SWE0Yit3TGh4enpaUWgyQVI0QzN4RVgzUDMzTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR0Y0V1dKVCtkQlErbFFaQk92OFFRWVNlVmVwWE1mNU1taG82QlNBOVhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRitiOTIxN1A3M1J3UEw3Sk5CcFh6RkdVL1V2azdzNVI5NGswNFh2M0ZFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1HbkxpWUgyTGFNUVJyRUVlc0JCWVo4NGY4Z3NJMXRvRjIrWGVvTXJSbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhWanBCTXVPYUlOdXVTcDdYczlDQkpiTkFHWmZCa0E4L1hGM2VlNGhWU0k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHaDQvVjJaamh3c0lOd0R3bzB5WFN2TnlwK3BxSExPNGF1ckpYRkxEWlRQNmhDcy9LMDdWTFlhVFB1YTNsRXlJb2R2OWw3anhCZHMyYUxKVGhuaGdEUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjY1LCJhZHZTZWNyZXRLZXkiOiJNcFJ6MUhUVjNlZDFMT2Naa2xUWGZIL05jWW9MemREWGNxbGFZT0piZkJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtX0pNT1c1VlNKdWwwQ3FlZWdZOXBnIiwicGhvbmVJZCI6IjFiMWQ0N2YyLWQzMWYtNDZjZi1hYWFmLTQxZjY4ZDY5N2VmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUjhNdGNNZE5CQXZTeDFDV2N4QVZ2QmwrOTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJhWG1GNW9zb0ZuYVNJSVNpeVBHRXBURExrTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pTQ3FOZ0NFSUxCa2FzR0dBdz0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidThER1R1dmNVM04zVEFVVTgwc2VqRWM4Mm1lVFZjVVphMk5MYllNUE16ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoicm9EWDRnd0JuYkZiaU9SWmE3c2lXUGVURDgyM0xYZHp5cVFDcFFTYXd6TU9BUjBUeWdpZS9xVFduQ3BVVzVSOTYvZmhJL1htZkZ6Y3ZRblRhZ3NYRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhOV010UlphQkdnb01wcWJEeDJSOVV0T1dIWjdJN1RDbnN2OTYrd2oyZnFFc3VyVTllSmZxZWo4eCtoNDFiNUs5RGlYWDUzQWNheUt6WGFhcXlGRENBPT0ifSwibWUiOnsiaWQiOiI5NDc1MjkzNjEyMjoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUcmliYWwgY2hlaWYifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTI5MzYxMjI6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnZBeGs3cjNGTnpkMHdGRlBOTEhveEhQTnBuazFYRkdXdGpTMjJERHpNeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTA3NzEyNH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@Yowel Dx',
  packname:  process.env.PACK_NAME || 'Yowel',
   
  botname:   process.env.BOT_NAME === undefined ? "Yowels Bot" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Yowel Dx' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi MAN Innawa Hutto' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
