class Play1 extends Phaser.Scene{
    constructor(){
        super('play1Scene')
    }

    preload(){

        this.load.setPath("./assets/")
        
        //load images/tile sprites
        this.load.image('ground', 'groundPrototype.png')
        this.load.image('crossSign', 'crossSign.png')
        this.load.image('splitRoadSign', 'splitRoadSign.png')
        this.load.image('tree', 'greyTree.png')


        //this.load.image('player', './assets/playerPrototype2.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 2})
        this.load.spritesheet('player(NotUsingAnymore)', 'player3.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 2});
        
        // load texture atlas
        this.load.atlas('player', 'AntoineDoinel.png', 'AntoineDoinel.json')

        this.load.audio('runSound', 'RunningAudio.mp3')
        this.load.audio('endMusic', '400BlowsEndingMusic.mp3')

        // add bitmap text (x, y, font, text, size, align)
        this.load.bitmapFont('permanent', 'PermanentMarker-Regular.png', 'PermanentMarker-Regular.xml')
        
        // load texture atlas
        //this.load.atlas('player', './assets/player2.png', './assets/player2.json')

        this.physics.world.gravity.y = 100; 

        // display score
        this.mainText = {
            fontFamily: 'font1',
            fontSize: '48px',
            color: '#313638',
            align: 1
        }
    }

    create(){

        

        //loading in sprites
        this.ground1 = this.add.tileSprite(0, 425, 840, 100, 'ground').setOrigin(0,0)
        this.ground2 = this.physics.add.sprite(0, 425, 'ground').setOrigin(0,0)
        this.ground2.body.allowGravity = false
        this.ground2.body.immovable = true
        this.ground2.alpha = 0

        this.tree1 = this.add.sprite(game.config.width, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree2 = this.add.sprite(game.config.width + game.config.width * 1/8, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree3 = this.add.sprite(game.config.width + game.config.width * 2/8, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree4 = this.add.sprite(game.config.width + game.config.width * 3/8, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree5 = this.add.sprite(game.config.width + game.config.width * 4/8, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree6 = this.add.sprite(game.config.width + game.config.width * 5/8, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree7 = this.add.sprite(game.config.width + game.config.width * 6/8, Math.random()*250, 'tree').setOrigin(0,0)
        this.tree8 = this.add.sprite(game.config.width + game.config.width * 7/8, Math.random()*250, 'tree').setOrigin(0,0)

        this.tree1.setScale(this.tree1.y/250)
        this.tree2.setScale(this.tree2.y/250)
        this.tree3.setScale(this.tree3.y/250)
        this.tree4.setScale(this.tree4.y/250)
        this.tree5.setScale(this.tree5.y/250)
        this.tree6.setScale(this.tree6.y/250)
        this.tree7.setScale(this.tree7.y/250)
        this.tree8.setScale(this.tree8.y/250)

        this.player1 = this.physics.add.sprite(game.config.width/2,395,'player')
        this.player1.body.immovable = false
        this.player1.body.allowGravity = true
        this.player1.body.height = 65
        this.player1.body.width = 25
        this.player1.body.setDragX(100)

        //variables to see detect player animation
        this.player1IsRunning = false
        this.player1isDucking = false

        this.physics.add.collider(this.player1, this.ground2)

        this.sign1 = this.physics.add.sprite(-100,-100,'crossSign')
        this.sign2 = this.physics.add.sprite(-100,-100,'splitRoadSign').setScale(1.2)
        this.sign1.body.allowGravity = false
        this.sign2.body.allowGravity = false
        this.sign2.body.immovable = true
        this.sign2.body.height = 75

        this.signVelocity = 160
        this.groundMovement = 3

        this.physics.add.collider(this.player1, this.sign2)

        // input
        this.cursors = this.input.keyboard.createCursorKeys()

        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        //animations
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'sprint (',
                start: 1,
                end: 5,
                suffix: ')'
            }),
            frameRate: 10,
            repeat: 1
        })

        this.anims.create({
            key: 'duck',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'crouch (',
                start: 1,
                end: 5,
                suffix: ')'
            }),
            frameRate: 10,
            repeat: 1
        })


        /*this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2, first: 0}),
            frameRate: 10
        })*/

        //clock

        this.mainText.fontSize = 40
        this.mainText.color = '#4D5558'
        this.clockTime = 83 //amt of seconds on the clock
        this.clockRightCounter = Math.floor(this.clockTime);
        this.addedTime = 0
        this.scoreRight = this.add.text(896 - 150 - 50, 24, 'Time: '+ this.clockRightCounter, this.mainText).setOrigin(0.5,0.5);
        this.scoreRight.align = 'left'
        this.initTime = this.time.now
        this.clockFinCounter = 0
        this.pauseClockCounter = 0
        this.pauseClockCounterInit = 0
        this.firstPause = false
        this.pauseCalled = false

        //end clock
        this.firstEnd = false
        this.endInit = 0


        this.gameOver = false
        this.gameLose = false

        //make running audio
        this.runMusic = this.sound.add('runSound')
        this.runMusic.play()

        this.endMusic = this.sound.add('endMusic')

        

        // text for end screen, loaded in through a Bitmap Font, typeface
        // add bitmap text (x, y, font, text, size, align)
        this.finishText = this.add.bitmapText(game.config.width/2, game.config.height/2 - 30, 'permanent', 'FIN').setOrigin(0.5, 0.5)
        this.finishText.setScale(1)
        this.finishMenuText = this.add.bitmapText(game.config.width/2, game.config.height/2 + 110 , 'permanent', 'Press M to go back to Menu').setOrigin(0.5, 0.5)
        this.finishMenuText.setScale(0.25)

        this.LoseText1 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 125, 'permanent', 'Use the Arrow Keys to Find All Movement Options').setOrigin(0.5, 0.5)
        this.LoseText2 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 25, 'permanent', 'Press R to Restart').setOrigin(0.5, 0.5)
        this.LoseText1.setScale(0.15)
        this.LoseText2.setScale(0.4)

        if(!this.gameOver){
            this.finishText.setAlpha(0)
            this.finishMenuText.setAlpha(0)
            this.LoseText1.setAlpha(0)
            this.LoseText2.setAlpha(0)
        }

        

    }

    update(){

        //input right = run
        if( (this.cursors.right.isDown || this.cursors.down.isDown) && this.gameOver == false){
            this.firstPause = true

            
            
            if(this.cursors.right.isDown){
                if(this.player1isDucking){
                    this.player1isDucking = false
                    this.player1.anims.play('run')
                    this.player1.body.height = 65
                    this.player1.body.width = 25
                    this.player1.y -= 15
                    this.player1IsRunning = true
                }
                if(!this.player1.anims.isPlaying){
                    this.player1.anims.play('run')
                    this.player1.body.height = 65
                    this.player1.body.width = 25
                    this.player1IsRunning = true
                    
                }
            }
            else if(this.cursors.down.isDown && this.player1.body.touching.down){
                if(this.player1IsRunning){
                    this.player1IsRunning = false
                    this.player1.anims.play('duck')
                    this.player1.body.height = 35
                    this.player1.body.width = 75
                    this.player1.y += 15
                    this.player1isDucking = true
                }
                if(!this.player1.anims.isPlaying){
                    this.player1.anims.play('duck')
                    this.player1.body.height = 35
                    this.player1.body.width = 75
                    this.player1isDucking = true
                }
            }


            if(this.player1IsRunning){
                this.ground1.tilePositionX += this.groundMovement
                this.signVelocity = 160
            }
            else if(this.player1isDucking){
                this.ground1.tilePositionX += ( this.groundMovement - 0.5 )
                this.signVelocity = 120
            }
            //clock
            this.pauseCalled = false
            this.initTime += this.pauseClockCounter
            this.pauseClockCounter = 0
            this.pauseClockCounterInit = 0

            if(!this.gameOver){
                this.clockRightCounter = Math.floor(this.clockTime) - Math.floor((this.time.now-this.initTime)/1000) + Math.floor(this.addedTime);
                this.scoreRight.text = 'Time: '+ this.clockRightCounter
            }
            if(this.clockRightCounter <= 0){
                if(this.clockFinCounter == 0){
                    this.runMusic.stop()
                    this.endMusic.play()
                    this.clockTime = 135
                    this.clockRightCounter = 135
                    this.clockFinCounter = 1
                    this.initTime = this.time.now    
                }
                else if(this.clockFinCounter == 1){
                    this.clockRightCounter = 0
                    this.gameOver = true
                }
            }

            //spawn sign 1
            if(this.clockRightCounter == 83 - 13){ //remember 13
                this.sign1.x = game.config.width + 50 
                this.sign1.y = 320
            }
            if(this.sign1.x > 0 - 50){
                this.sign1.body.setVelocityX(-this.signVelocity)
            }

            //spawn sign 2
            if(this.clockRightCounter == 83 - 23){ //remember 23
                this.sign2.x = game.config.width + 70 
                this.sign2.y = 365
                this.sign2.body.height = 65
            }
            if(this.sign2.x > 0 - 50){
                this.sign2.body.setVelocityX(-this.signVelocity-50)
                
            }

            //tree update/movement
            this.tree1.x -= 1.5 * this.tree1.y/250 + 0.5
            this.tree2.x -= 1.5 * this.tree2.y/250 + 0.5
            this.tree3.x -= 1.5 * this.tree3.y/250 + 0.5
            this.tree4.x -= 1.5 * this.tree4.y/250 + 0.5
            this.tree5.x -= 1.5 * this.tree5.y/250 + 0.5
            this.tree6.x -= 1.5 * this.tree6.y/250 + 0.5
            this.tree7.x -= 1.5 * this.tree7.y/250 + 0.5
            this.tree8.x -= 1.5 * this.tree8.y/250 + 0.5

            if(this.tree1.x < 0 - this.tree1.width){
                this.tree1.setPosition(game.config.width, Math.random()*250)
                this.tree1.setScale(this.tree1.y/250)
            }
            if(this.tree2.x < 0 - this.tree2.width){
                this.tree2.setPosition(game.config.width, Math.random()*250)
                this.tree2.setScale(this.tree2.y/250)
            }
            if(this.tree3.x < 0 - this.tree3.width){
                this.tree3.setPosition(game.config.width, Math.random()*250)
                this.tree3.setScale(this.tree3.y/250)
            }
            if(this.tree4.x < 0 - this.tree4.width){
                this.tree4.setPosition(game.config.width, Math.random()*250)
                this.tree4.setScale(this.tree4.y/250)
            }
            if(this.tree5.x < 0 - this.tree5.width){
                this.tree5.setPosition(game.config.width, Math.random()*250)
                this.tree5.setScale(this.tree5.y/250)
            }
            if(this.tree6.x < 0 - this.tree6.width){
                this.tree6.setPosition(game.config.width, Math.random()*250)
                this.tree6.setScale(this.tree6.y/250)
            }
            if(this.tree7.x < 0 - this.tree7.width){
                this.tree7.setPosition(game.config.width, Math.random()*250)
                this.tree7.setScale(this.tree7.y/250)
            }
            if(this.tree8.x < 0 - this.tree8.width){
                this.tree8.setPosition(game.config.width, Math.random()*250)
                this.tree8.setScale(this.tree8.y/250)
            }


            //unpause music when you move again
            if(this.clockFinCounter == 0){
                if(this.runMusic.isPaused){
                    this.runMusic.resume()
                }
            }

            if(this.clockFinCounter == 1){
                if(this.endMusic.isPaused){
                    this.endMusic.resume()
                }
            }

        }
        else {
            //sign movement
            this.sign1.body.setVelocityX(0)
            this.sign2.body.setVelocityX(0)

            //making sure clock doesn't count while not moving
            if(this.clockFinCounter == 0){
                if(this.runMusic.isPlaying){
                    this.runMusic.pause()
                }
            }
            
            if(this.clockFinCounter == 1){
                if(this.endMusic.isPlaying){
                    this.endMusic.pause()
                }
            }

            if(this.firstPause){
                if(this.pauseCalled == false){
                    this.pauseClockCounterInit = this.time.now
                    this.pauseCalled = true
                }
                this.pauseClockCounter = this.time.now - this.pauseClockCounterInit
            }
            //this.clockRightCounter = this.pauseClockCounter
            //this.scoreRight.text = 'Time: '+ this.clockRightCounter
        }

        if(!this.gameOver){
            if(this.player1.body.touching.down && this.cursors.up.isDown && !this.player1isDucking){
                this.player1.body.setVelocityY(-100)
            }
        }

        if(this.player1.x < - 25){
            this.gameLose = true
            this.gameOver = true
        }

        //gameover stuff
        if(this.gameOver){
            this.runMusic.stop()
            this.endMusic.stop()
            this.player1.setVelocityX(0)
            if(this.gameLose){
                this.LoseText1.setAlpha(1)
                this.LoseText2.setAlpha(1)
            }
            else{
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


        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.runMusic.stop()
            this.endMusic.stop()
            this.scene.restart() 
        }
        
    }
}