/*#################################
#   Dylan Louie
#   
#
#################################*/

let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    backgroundColor: '#d3d3d3',
    autoCenter: true,
    width: 840,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Play1, Play2, Play3, Credit, Load ]
}

let game = new Phaser.Game(config)

let tileSize = 50;

// Reserve keyboard vars
let keySPACE;
let keyK, keyQ, keyW, keyE, keyR, keyG, keyLEFT, keyRIGHT, keyM, keyC, keyONE, keyTWO, keyTHREE;
let highScore = 0