class Play1Intro extends Phaser.Scene{
    constructor(){
        super('play1IntroScene')
    }

    preload(){
        //load images
        this.load.setPath("./assets/")
        this.load.image('play1Intro1','play1Intro1.png')
        this.load.image('play1Intro2','play1intro2.png')
    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        //text
        this.play2Text1 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 250, 'permanent', 'In this 3 minute and 35 secong scene').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text2 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 225 , 'permanent', 'Antoine Doinel has escaped').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text3 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 200 , 'permanent', 'the Juvenile detention center. ').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text4 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 175 , 'permanent', 'He runs and runs escaping bad parents,').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text5 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 150 , 'permanent', 'school, and society. They have').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text6 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 125 , 'permanent', 'all let him down and painted him as a criminal.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text7 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 100 , 'permanent', 'An otherwise good natured kid has been outcasted.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text8 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 75 , 'permanent', 'However is that the kids fault or the system?').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text9 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 50 , 'permanent', 'Run and be free, run and escape Antoine!').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)

        this.play2Text10 = this.add.bitmapText(game.config.width/2, game.config.height/2 + 230 , 'permanent', 'SPACE').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
    
        this.play2IntroImage1 = this.add.sprite(game.config.width/3*1,game.config.height/2+100,'play1Intro1').setScale(0.155)
        this.play2IntroImage2 = this.add.sprite(game.config.width/3*2,game.config.height/2+100,'play1Intro2').setScale(0.19)
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play1Scene') 
        }
    }
}