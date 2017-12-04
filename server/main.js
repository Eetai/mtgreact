'use strict';
/* eslint-disable global-require */

var chalk = require('chalk');

console.log("I'm server main")
// Requires in ./db/index.js -- which returns a promise that represents
// sequelize syncing its models to the postgreSQL database.

// var startDb = require('./db');

// Create a node server instance! cOoL!
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
};

createApplication()

var startServer = function () {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function (err) {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT), err));
    })

};

startServer()

// startDb
//     .then(createApplication)
//     .then(startServer)
//     .catch(function (err) {
//         console.error(chalk.red(err.stack));
//         process.exit(1);
//     });