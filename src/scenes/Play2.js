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

        //adding music
        this.load.audio('bgMusic', 'The400BlowsPoliceCarAudio.mp3')
        
        //this.load.setPath("./assets/")
        // add bitmap text (x, y, font, text, size, align)
        //this.load.bitmapFont('permanent', 'PermanentMarker-Regular.png', 'PermanentMarker-Regular.xml')
    }

    create(){
        //clock

        this.clockTime = 100 //amt of seconds on the clock
        this.clockRightCounter = Math.floor(this.clockTime);
        this.addedTime = 0
        this.scoreRight = this.add.bitmapText(896 - 150 - 50, 24, 'permanent', 'Time: '+ this.clockRightCounter).setOrigin(0.5,0.5).setDepth(10).setScale(0.2)
        //this.scoreRight.align = 'left'
        this.initTime = this.time.now
        //this.clockFinCounter = 0
        //this.pauseClockCounter = 0
        //this.pauseClockCounterInit = 0
        this.firstUpdate = false
        //end clock
        this.firstEnd = false
        this.endInit = 0
        //this.pauseCalled = false

        //this.testing = this.add.bitmapText(game.config.width/2, game.config.height/2, 'Food', 'permanent')
        //this.testing.setOrigin(0.5,0.5).setDepth(10)


        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.background = this.add.sprite(game.config.width/2,game.config.height/2,'background').setDepth(1).setScale(1.1)
        //this.eyes = this.add.sprite(game.config.width/2-10,game.config.height/2-125,'eyes').setScale(0.7)
        this.eyeBall1 = this.add.sprite(game.config.width/2-55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)
        this.eyeBall2 = this.add.sprite(game.config.width/2+55,game.config.height/2-126,'eyeBall').setScale(0.8).setDepth(0)

        // create timeline Tweens Chains to move eyes left and right
        //eyes move left
        //his right eye, left on screen
        this.eyeTweenChain1 = this.tweens.chain({
            targets: this.eyeBall1,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.background.x - 55 - 15,
                duration: 500
                
            },
            {
                x: this.background.x - 55,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        //eyes moove left
        //his left eye, right on screen
        this.eyeTweenChain2 = this.tweens.chain({
            targets: this.eyeBall2,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.background.x + 55 - 15,
                duration: 500
                
            },
            {
                x: this.background.x + 55,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        //his left eye, right on screen
        //eyes move right
        // create timeline
        this.eyeTweenChain3 = this.tweens.chain({
            targets: this.eyeBall1,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.background.x - 55 + 15,
                duration: 500
                
            },
            {
                x: this.background.x - 55,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        //eyes move right
        //his left eye, right on screen
        this.eyeTweenChain4 = this.tweens.chain({
            targets: this.eyeBall2,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.background.x + 55 + 15,
                duration: 500
                
            },
            {
                x: this.background.x + 55,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        this.bgChain = this.tweens.chain({
            targets: this.background,
            ease: 'Linear',    
            paused: true,
            tweens: [{
                x: this.background.x + 30 * Math.random() - 15,
                y: this.background.y + 30 * Math.random() - 15,
                duration: 250*Math.random() + 100
                
            },
            {
                x: this.background.x + 30 * Math.random() - 15,
                y: this.background.y + 30 * Math.random() - 15,
                duration: 250*Math.random() + 100
            },
            {
                x: this.background.x + 30 * Math.random() - 15,
                y: this.background.y + 30 * Math.random() - 15,
                duration: 250*Math.random() + 100
            },
            {
                x: this.background.x + 30 * Math.random() - 15,
                y: this.background.y + 30 * Math.random() - 15,
                duration: 250*Math.random() + 100
            },
            {
                x: this.background.x,
                y: this.background.y,
                duration: 250*Math.random() + 100
            }]
        })

        

        // add mouse input listener to start timeline
        /*this.input.on('pointerdown', () => {
            if(!this.eyeTweenChain1.isPlaying()) {
                this.eyeTweenChain1.restart()
                this.eyeTweenChain2.restart()
                this.eyeTweenChain1.play()
                this.eyeTweenChain2.play()
            }
        })*/

        this.backgroundXHolder = this.background.x
        this.backgroundYHolder = this.background.y
        this.eyeBall1XHolder = this.eyeBall1.x
        this.eyeBall1YHolder = this.eyeBall1.y

        this.gameOver = false

        //end screen text
        // add bitmap text (x, y, font, text, size, align)
        this.finishText = this.add.bitmapText(game.config.width/2, game.config.height/2 - 30, 'permanent', 'FIN').setOrigin(0.5, 0.5).setDepth(20)
        this.finishText.setScale(1).setAlpha(0)
        this.finishMenuText = this.add.bitmapText(game.config.width/2, game.config.height/2 + 110 , 'permanent', 'Press M to go back to Menu').setOrigin(0.5, 0.5).setDepth(20)
        this.finishMenuText.setScale(0.25).setAlpha(0)

        //audio
        //make running audio
        this.bgMusic = this.sound.add('bgMusic')
    }

    update(){
        //clock

        //scene changes
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }

        if(!this.gameOver){
            if(!this.firstUpdate){
                this.firstUpdate = true
                this.initTime = this.time.now
                this.bgMusic.play()
            }
            
            this.clockRightCounter = Math.floor(this.clockTime) - Math.floor((this.time.now-this.initTime)/1000) + Math.floor(this.addedTime);
            this.scoreRight.text = 'Time: '+ this.clockRightCounter
            
            if(!this.bgChain.isPlaying()){
                this.bgChain.restart()
                this.bgChain.play()
            }

            //eyes move with the car
            this.eyeBall1.x += this.background.x - this.backgroundXHolder 
            this.eyeBall2.x += this.background.x - this.backgroundXHolder
            this.eyeBall1.y += this.background.y - this.backgroundYHolder 
            this.eyeBall2.y += this.background.y - this.backgroundYHolder 

            this.backgroundXHolder = this.background.x
            this.backgroundYHolder = this.background.y

            /*if(!this.eyeTweenChain1.isPlaying() && !this.eyeTweenChain3.isPlaying()){
                this.eyeBall1.x = this.background.x - 55
                this.eyeBall2.x = this.background.x + 55
            }*/

            if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
                if(!this.eyeTweenChain1.isPlaying() && !this.eyeTweenChain3.isPlaying()) {
                    this.eyeTweenChain1.restart()
                    this.eyeTweenChain2.restart()
                    this.eyeTweenChain1.play()
                    this.eyeTweenChain2.play()
                }
            }

            if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
                if(!this.eyeTweenChain1.isPlaying() && !this.eyeTweenChain3.isPlaying()) {
                    this.eyeTweenChain3.restart()
                    this.eyeTweenChain4.restart()
                    this.eyeTweenChain3.play()
                    this.eyeTweenChain4.play()
                }
            }
        }

        if(this.clockRightCounter <= 0){
                this.clockRightCounter = 0
                this.scoreRight.text = 'Time: '+ this.clockRightCounter
                this.gameOver = true
        }

        if(this.gameOver){
            if(!this.eyeTweenChain1.isPlaying() && !this.eyeTweenChain3.isPlaying()){
                this.eyeBall1.x = this.background.x - 55
                this.eyeBall2.x = this.background.x + 55
                this.eyeBall1.x = this.background.y - 125
                this.eyeBall2.x = this.background.y - 126
            }

            this.finishText.setAlpha(1)

            if (this.firstEnd == false){
                this.endInit = this.time.now
                this.firstEnd = true
            }
            if( Math.floor( (this.time.now-this.endInit)/1000 )  > 3){
                this.finishMenuText.setAlpha(1)
            }
            
            //this.clockRightCounter = Math.floor( (this.time.now-this.endInit)/1000 )
            //this.scoreRight.text = 'Time: '+ this.clockRightCounter
            
            if (Phaser.Input.Keyboard.JustDown(keyM)) {
                this.scene.start('menuScene') 
            }
        }
    }

    
}