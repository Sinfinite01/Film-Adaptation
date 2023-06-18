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
        
        this.load.setPath("./assets/")
        // add bitmap text (x, y, font, text, size, align)
        this.load.bitmapFont('permanent', 'PermanentMarker-Regular.png', 'PermanentMarker-Regular.xml')
    }

    create(){
        //clock

        this.clockTime = 83 //amt of seconds on the clock
        this.clockRightCounter = Math.floor(this.clockTime);
        this.addedTime = 0
        this.scoreRight = this.add.text(896 - 150 - 50, 24, 'Time: '+ this.clockRightCounter, 'permanent').setOrigin(0.5,0.5).setDepth(10)
        this.scoreRight.align = 'left'
        this.initTime = this.time.now
        this.clockFinCounter = 0
        this.pauseClockCounter = 0
        this.pauseClockCounterInit = 0
        this.firstPause = false
        this.pauseCalled = false


        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.background = this.add.sprite(game.config.width/2,game.config.height/2,'background').setDepth(1).setScale(1.1)
        //this.eyes = this.add.sprite(game.config.width/2-10,game.config.height/2-125,'eyes').setScale(0.7)
        this.eyeBall1 = this.add.sprite(game.config.width/2-55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)
        this.eyeBall2 = this.add.sprite(game.config.width/2+55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)

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
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }

        
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

    
}