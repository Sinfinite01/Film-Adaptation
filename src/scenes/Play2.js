class Play2 extends Phaser.Scene{
    constructor(){
        super('play2Scene')
    }

    preload(){
        this.load.setPath("./assets/play2/")

        //load images/tile sprites
        this.load.image('background', 'scene2bg2.png')
        this.load.image('eyes', 'eyes.png')
        this.load.image('eyeBall', 'eyeBall2.png')
        
    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        this.background = this.add.sprite(game.config.width/2,game.config.height/2,'background').setDepth(1).setScale(1.1)
        //this.eyes = this.add.sprite(game.config.width/2-10,game.config.height/2-125,'eyes').setScale(0.7)
        this.eyeBall1 = this.add.sprite(game.config.width/2-55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)
        this.eyeBall2 = this.add.sprite(game.config.width/2+55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
    }
}