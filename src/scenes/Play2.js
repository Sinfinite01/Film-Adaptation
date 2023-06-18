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
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.background = this.add.sprite(game.config.width/2,game.config.height/2,'background').setDepth(1).setScale(1.1)
        //this.eyes = this.add.sprite(game.config.width/2-10,game.config.height/2-125,'eyes').setScale(0.7)
        this.eyeBall1 = this.add.sprite(game.config.width/2-55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)
        this.eyeBall2 = this.add.sprite(game.config.width/2+55,game.config.height/2-125,'eyeBall').setScale(0.8).setDepth(0)

        // create timeline Tweens Chains to move eyes left and right
        this.eyeTweenChain1 = this.tweens.chain({
            targets: this.eyeBall1,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.eyeBall1.x - 15,
                duration: 500
                
            },
            {
                x: this.eyeBall1.x,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        this.eyeTweenChain2 = this.tweens.chain({
            targets: this.eyeBall2,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.eyeBall2.x - 15,
                duration: 500
                
            },
            {
                x: this.eyeBall2.x,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        // create timeline
        this.eyeTweenChain3 = this.tweens.chain({
            targets: this.eyeBall1,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.eyeBall1.x + 15,
                duration: 500
                
            },
            {
                x: this.eyeBall1.x,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        this.eyeTweenChain4 = this.tweens.chain({
            targets: this.eyeBall2,
            ease: 'Bounce.easeOut',    
            paused: true,
            yoyo: true,
            tweens: [{
                x: this.eyeBall2.x + 15,
                duration: 500
                
            },
            {
                x: this.eyeBall2.x,
                duration: 1000,
                //ease: 'Sine.easeOut'    // note that this will supersede the timeline ease above
            }]
        })

        

        // add mouse input listener to start timeline
        this.input.on('pointerdown', () => {
            if(!this.eyeTweenChain1.isPlaying()) {
                this.eyeTweenChain1.restart()
                this.eyeTweenChain2.restart()
                this.eyeTweenChain1.play()
                this.eyeTweenChain2.play()
            }
        })

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }

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