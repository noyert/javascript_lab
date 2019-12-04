const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3000
var ent = require('ent')
var clients = []

io.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function (pseudo) {
        socket.pseudo = pseudo
        console.log('user connected: ' + pseudo)
        clients.push(socket.pseudo)
        // console.log(clients)
        socket.broadcast.emit('nouveau_client', pseudo)
    });
    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        console.log(socket.pseudo + ' : ' + message)
        socket.broadcast.emit('message', { pseudo: socket.pseudo, message: message })
    });
    socket.on('disconnect', function () {
        console.log(socket.pseudo + ' a quitter le salon')
        socket.broadcast.emit('message', { pseudo: socket.pseudo, message: ' a quitté le salon' })
        clients.splice(clients.indexOf(socket.pseudo), 1);
        // console.log(clients)
    });
});

http.listen(port, () => console.log(`server listening on port: ${port}`))