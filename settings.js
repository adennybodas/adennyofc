const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6282129244108 , 6282129690953 , 6282187527485 , 6281383295826, 628211312821897'] //ur owner number
global.ownernomer = "6282129244108" //ur owner number2
global.ownername = "AA GAN" //ur owner name
global.ytname = "YT: AA GAN" //ur yt chanel name
global.socialm = "GitHub: -" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "https://chat.whatsapp.com/6282129244108"
global.botname = "AA GAN"
global.ownerNumber = ["6282129244108@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/AAGAN"
global.themeemoji = '🪀'
global.wm = "AAGAN"
global.packname = "Sticker By - AA GAN"
global.author = "AAGAN\n\n"
global.sessionName = 'sessionpasa'
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.setprefix = "."

//media target
global.thumb = fs.readFileSync("./database/image/ppbot.jpg")
global.bugnya = fs.readFileSync("./database/image/bugs.jpeg")
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    premium: 'Khusus Premium',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

// wajib Ganti Owner Di database/owner.json