var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

var readLine = require('readline');
if (process.platform === "win32"){
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ("SIGINT", function(){
        process.emit("SIGINT");
    });
}

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connected error: ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});