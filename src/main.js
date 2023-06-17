/*#################################
#   Dylan Louie
#   List of mechanics
#   - arcade physics 
#   - animation using a atlas
#   - importing a font
#   - timer
#   - parallax
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
            //debug: true
        }
    },
    scale: {
        //mode: Phaser.Scale.NONE,
        //mode: Phaser.Scale.FIT,
        //mode: Phaser.Scale.ENVELOP,
        //mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        //mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        //mode: Phaser.Scale.RESIZE,
        //autoCenter: Phaser.Scale.NO_CENTER,
        //autoCenter: Phaser.Scale.HORIZONTALLY,
        //autoCenter: Phaser.Scale.VERTICALLY,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ Menu, Play1, Play2, Play3, Credit, Load ]
}

let game = new Phaser.Game(config)

let tileSize = 50;

// Reserve keyboard vars
let keySPACE;
let keyK, keyQ, keyW, keyE, keyR, keyG, keyLEFT, keyRIGHT, keyM, keyC, keyONE, keyTWO, keyTHREE;
let highScore = 0