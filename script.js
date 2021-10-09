var socket = io();
var side = 10;
var weath = 'summer'



function setup() {

    
    createCanvas(50 * side, 50 * side);
    background("#c2c4c4");

matrix=[];
socket.on("weather", function (data) {
    weath = data;
})
socket.on("data", nkarel);
let GrassCountElement = document.getElementById('GrassCount');
let GrassEaterCountElement = document.getElementById('GrassEaterCount');
let GishatichCountElement = document.getElementById('GishatichCount');
let VorsordCountElement = document.getElementById('VorsordCount');
let BuyserCountElement = document.getElementById('BuyserCount');
let MijatCountElement = document.getElementById('MijatCount');


function nkarel(data) {

    GrassCountElement.innerText = data.GrassCounter;
    GrassEaterCountElement.innerText = data.GrassEaterCounter;
    GishatichCountElement.innerText = data.GishatichCounter;
    VorsordCountElement.innerText = data.VorsordCounter;
    BuyserCountElement.innerText = data.BuyserCounter;
    MijatCountElement.innerText = data.MijatCounter;
    matrix = data.matrix

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1){
                if(weath == "summer") {
                fill("#52b000");
            }else if (weath == "autumn") {
                fill("#9fc204");
            }else if (weath == "winter") {
                fill("#d4e0cc");
            }else if (weath == "spring") {
                fill("#84d91c");
            }
         } else if (obj == 2) {
            if(weath == "summer") {
                fill("#ffff19");
            }else if (weath == "autumn") {
                fill("#999c03");
            }else if (weath == "winter") {
                fill("#e3e6b8");
            }else if (weath == "spring") {
                fill("#e6e65e");
            }
            }else if (obj == 0){
                fill("grey")
            }else if (matrix[y][x] == 3) {
                if(weath == "summer") {
                    fill("#d90000");
                }else if (weath == "autumn") {
                    fill("#752727");
                }else if (weath == "winter") {
                    fill("#ba9795");
                }else if (weath == "spring") {
                    fill("#f55656");
                }      //karmir
             } else if (matrix[y][x] == 4) {
                if(weath == "summer") {
                    fill("#1d2ec2");
                }else if (weath == "autumn") {
                    fill("#33486b");
                }else if (weath == "winter") {
                    fill("#dce6f7");
                }else if (weath == "spring") {
                    fill("#4671bd");
                }        //kapuyt
             } else if (matrix[y][x] == 5) {
                if(weath == "summer") {
                    fill("#8b00c7");
                }else if (weath == "autumn") {
                    fill("#5c326e");
                }else if (weath == "winter") {
                    fill("#d8c5e0");
                }else if (weath == "spring") {
                    fill("#9f5fba");
                }            //manushakaguyn
             }else if (obj == 6){
                fill("#521018")
            }
    
            rect(x * side, y * side, side, side);
        }
    }
}

        socket.on('send matrix', nkarel)
} 



function restart() {
    socket.emit("restart")
}
function addGrass() {
    socket.emit("add Grass")
}
function addGrassEater() {
    socket.emit("add GrassEater")
}
function addGishatich() {
    socket.emit("add Gishatich");
}
function addVorsord() {
    socket.emit("add Vorsord");
}
function addBuyser() {
    socket.emit("add Buyser");
}
function addMijat() {
    socket.emit("add Mijat");
}
function Fire() {
    socket.emit("Fire");
}

