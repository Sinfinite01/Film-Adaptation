class Play3Intro extends Phaser.Scene{
    constructor(){
        super('play3IntroScene')
    }

    preload(){
        //load images
        this.load.setPath("./assets/")
        this.load.image('play3Intro1','play3Intro1.png')
        this.load.image('play3Intro2','play3Intro2.png')
    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        //text
        this.play2Text1 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 250, 'permanent', 'In this scene Antoine Doinel has ran').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text2 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 225 , 'permanent', 'away from home. Alone on the streets of').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text3 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 200 , 'permanent', 'Paris, he is desperate for any type of').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text4 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 175 , 'permanent', ' sustenance. He sees a milk man deliver and').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text5 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 150 , 'permanent', ' leave some milk bottles on the street.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text6 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 125 , 'permanent', 'Thirsty, hungry, and desperate Antoine ').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text7 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 100 , 'permanent', 'guzzles down his stolen bottle of milk.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text8 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 50 , 'permanent', 'I wonder what milk in such a situation taste like?').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text9 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 75 , 'permanent', '(Use Left Arrow Key)').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        
        this.play2Text10 = this.add.bitmapText(game.config.width/2, game.config.height/2 + 230 , 'permanent', 'SPACE').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
    
        this.play2IntroImage1 = this.add.sprite(game.config.width/3*1,game.config.height/2+100,'play3Intro1').setScale(0.165)
        this.play2IntroImage2 = this.add.sprite(game.config.width/3*2,game.config.height/2+100,'play3Intro2').setScale(0.19)
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play3Scene') 
        }
    }
}