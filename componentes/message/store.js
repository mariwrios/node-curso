const db = require('mongoose');

db.Promise = global.Promise;
db.connect('mongodb://<user>:<user1234>@ds141198.mlab.com:41198/chatmaria', {
   useNewUrlParser:true, 
});
console.log('[db] Conectada con exito')

function addMessage(message){
    list.push(message);
    //const myMessage = new Model(message);
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessages(){
    return list;
}


module.exports = {
    add: addMessage,
    list: getMessages,
}