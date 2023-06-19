/*#################################
#   Dylan Louie
#   List of mechanics
#   - arcade physics for the sign and jumping in scene 1
#   - animation using a atlas in scene 1
#   - importing a font using a bitmap in all scenes
#   - timer in scene 1
#   - parallax in Scene 1
#   - tweens for eye movement in Scene 2
#   - particles for crying, scene
#   - audio
#################################*/

let config = {
    type: Phaser.WEBGL,
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
    scene: [ Menu, Play1, Play2, Play3, Credit, Load, Play1Intro, Play2Intro, Play3Intro ]
}

let game = new Phaser.Game(config)

let tileSize = 50

// Reserve keyboard vars
let keySPACE;
let keyK, keyQ, keyW, keyE, keyR, keyG, keyLEFT, keyRIGHT, keyM, keyC, keyONE, keyTWO, keyTHREE, keyFOUR
let highScore = 0