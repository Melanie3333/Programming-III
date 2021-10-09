const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

GrassArr = [];
GrassEaterArr = [];
GishatichArr = [];
VorsordArr = [];
BuyserArr = [];
MijatArr = [];
matrix = [];

var n = 50;

weath = "winter";
Grass = require("./class/Grass")
GrassEater = require("./class/GrassEater")
Gishatich = require("./class/Gishatich")
Vorsord = require("./class/Vorsord")
Buyser = require("./class/Buyser")
Mijat = require('./class/Mijat')





function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(rand(0, 3))
        
    }  
}

io.sockets.emit("send matrix", matrix)



function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1 
                GrassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2
                GrassEaterArr.push(new GrassEater(x, y, 2))
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = 3
                GishatichArr.push(new Gishatich(x, y, 3))
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = 4
                VorsordArr.push(new Vorsord(x, y, 4))
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5
                BuyserArr.push(new Buyser(x, y, 5))
            }
            else if (matrix[y][x] == 6) {
                matrix[y][x] = 6
                MijatArr.push(new Mijat(x, y, 6))
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
 
}
// createObject()

function game() {
    
    for (var i in GrassArr) {
        GrassArr[i].mul();
     }
  
     for (var i in GrassEaterArr) {
        GrassEaterArr[i].eat();
     }
  
     for (var i in GishatichArr) {
        GishatichArr[i].eat();
     }
  
     for (var i in VorsordArr) {
        VorsordArr[i].eat();
     }
  
     for (var i in BuyserArr) {
       BuyserArr[i].mul();
     }
     for (var i in MijatArr) {
        MijatArr[i].eat();
      }
  
  
    io.sockets.emit("send matrix", matrix);
    let sendData = {
        matrix: matrix,
        GrassCounter: GrassArr.length,
        GrassEaterCounter: GrassEaterArr.length,
        GishatichCounter: GishatichArr.length,
        VorsordCounter: VorsordArr.length,
        BuyserCounter: BuyserArr.length,
        MijatCounter: MijatArr.length
    }

    io.sockets.emit("data", sendData);

}

setInterval(game, 1000)


function restart() {


    GrassArr = [];
    GrassEaterArr = [];
    GishatichArr = [];
    VorsordArr = [];
    BuyserArr = [];
    MijatArr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }


    io.sockets.emit("send matrix", matrix);

}


function addGrass() {
    for (var i = 0; i < 7; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            GrassArr.push(gr)
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            GrassEaterArr.push(new GrassEater(x, y, 2));
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addGishatich() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            GishatichArr.push(new Gishatich(x, y, 3))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addVorsord() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            VorsordArr.push(new Vorsord(x, y, 4));
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addBuyser() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            BuyserArr.push(new Buyser(x, y, 5));
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addMijat() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
            MijatArr.push(new Mijat(x, y, 6));
        }
    }
    io.sockets.emit("send matrix", matrix);
}


function Fire() {
    GrassArr = [];
    BuyserArr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

///



function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);


////

io.on('connection', function (socket) {
    createObject();
    socket.on("restart", restart);
    socket.on("add Grass", addGrass);
    socket.on("add GrassEater", addGrassEater);
    socket.on("add Gishatich", addGishatich);
    socket.on("add Vorsord", addVorsord);
    socket.on("add Buyser", addBuyser);
    socket.on("add Mijat", addMijat);
    socket.on("Fire", Fire);
});


var statistics = {};

setInterval(function() {
    statistics.Grass = GrassArr.length;
    statistics.GrassEater = GrassEaterArr.length;
    statistics.Gishatich = GishatichArr.length;
    statistics.Vorsord = VorsordArr.length;
    statistics.Buyser = BuyserArr.length;
    statistics.Mijat = MijatArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)
