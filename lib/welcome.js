const fs = require('fs-extra')

module.exports = welcome = async (tobz, event) => {
    //console.log(event.action)
    const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
    const isWelkom = welkom.includes(event.chat)
	var desc = chat.groupMetadata.desc
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await tobz.getChatById(event.chat)
            const pChat = await tobz.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await tobz.getProfilePicFromServer(event.who)
            const capt = `Halo @${event.who.replace('@c.us', '')} š\nSelamat datang di *Grup ${name}*\nāāāāāāāāāāāāāāā\nBaca deskripsi ya  mek jan males!\nāāāāāāāāāāāāāāāā\n${desc}`
            
                
            await tobz.sendTextWithMentions(event.chat, capt)
            

        }
    } catch (err) {
        console.log(err)
    }
}