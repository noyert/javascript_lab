var socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl')
const chalk = require('chalk');
var inquirer = require('inquirer');

const start = async () => {

    console.log('\nBonjour, bienvenue sur le tchat MellonMellon\n');

    const { pseudo } = await inquirer.prompt([
        {
            type: 'input',
            name: 'pseudo',
            message: 'Votre pseudo'
        }
    ])

    const { salon } = await inquirer.prompt([
        {
            type: 'list',
            name: 'salon',
            message: 'Choisissez un salon',
            choices: ['Général', 'Dev', 'News'],
            filter: function (val) {
                return val.toLowerCase();
            }
        }
    ])

    console.log('Votre pseudo: ' + pseudo)
    console.log('Salon: ' + salon)

    // var pseudo = process.argv[2]
    socket.emit('nouveau_client', pseudo);

    socket.on('disconnect', function () {
        socket.emit('disconnect')
    });

    socket.on('connect', () => {
        console.log(chalk.green('=== start chatting ==='))
    })

    socket.on('nouveau_client', (pseudo) => {
        console.log(pseudo + ' a rejoint le salon')
    })

    socket.on('message', (data) => {
        insereMessage(data.pseudo, data.message)
    })

    function insereMessage(pseudo, message) {
        console.log(chalk.blue(pseudo + ': ' + message))
    }

    repl.start({
        prompt: '',
        eval: (cmd) => {
            socket.send(cmd, pseudo)
        }
    })
}

start()