class Play2Intro extends Phaser.Scene{
    constructor(){
        super('play2IntroScene')
    }

    preload(){
        
//load images
        this.load.setPath("./assets/")
        this.load.image('play2Intro1','play2Intro1.png')
        this.load.image('play2Intro2','play2Intro2.png')
    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        //text
        this.play2Text1 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 250, 'permanent', 'In this scene Antoine Doinel has been').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text2 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 225 , 'permanent', 'stealing an expensive type writer.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text3 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 200 , 'permanent', 'His parents tired of his delinquency:').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text4 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 175 , 'permanent', 'running away from home and school, plagiarism,').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text5 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 150 , 'permanent', 'etc. They decide to turn him into the police and').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text6 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 125 , 'permanent', 'have him sent off to a Juvenile detention center.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text7 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 100 , 'permanent', 'Control his eyes (with L&R arrow keys) as he is sent').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text8 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 75 , 'permanent', ' off in a cop car and looking at the city he has been').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        this.play2Text9 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 50 , 'permanent', ' in his entire life and the entire movie one last time.').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
        
        this.play2Text10 = this.add.bitmapText(game.config.width/2, game.config.height/2 + 230 , 'permanent', 'SPACE').setOrigin(0.5, 0.5).setDepth(20).setScale(0.15)
    
        this.play2IntroImage1 = this.add.sprite(game.config.width/3*1,game.config.height/2+100,'play2Intro1').setScale(0.155)
        this.play2IntroImage2 = this.add.sprite(game.config.width/3*2,game.config.height/2+100,'play2Intro2').setScale(0.18)

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('play2Scene') 
        }
    }
}