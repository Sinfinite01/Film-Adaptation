class Play1 extends Phaser.Scene{
    constructor(){
        super('play1Scene')
    }

    preload(){

        this.load.setPath("./assets/");
        
        //load images/tile sprites
        this.load.image('ground', 'groundPrototype.png')
        this.load.image('crossSign', 'crossSign.png')
        this.load.image('splitRoadSign', 'splitRoadSign.png')

        //this.load.image('player', './assets/playerPrototype2.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 2})
        this.load.spritesheet('player', 'player3.png', {frameWidth: 75, frameHeight: 75, startFrame: 0, endFrame: 2});
        

        this.load.audio('runSound', 'RunningAudio.mp3')

        // add bitmap text (x, y, font, text, size, align)
        this.load.bitmapFont('permanent', 'PermanentMarker-Regular.png', 'PermanentMarker-Regular.xml')
        
        // load texture atlas
        //this.load.atlas('player', './assets/player2.png', './assets/player2.json')

        this.physics.world.gravity.y = 800; 

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

        this.player1 = this.physics.add.sprite(game.config.width/2,325,'player')
        this.player1.body.immovable = false
        this.player1.body.allowGravity = true

        this.physics.add.collider(this.player1, this.ground2);

        // input
        this.cursors = this.input.keyboard.createCursorKeys()


        //animations
        /*this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'running (',
                start: 1,
                end: 5,
                suffix: ')'
            }),
            frameRate: 10,
            repeat: 1
        })*/

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 4, first: 0}),
            frameRate: 15
        })

        //clock

        this.mainText.fontSize = 40
        this.mainText.color = '#4D5558'
        this.clockTime = 83 //amt of seconds on the clock
        this.clockRightCounter = Math.floor(this.clockTime);
        this.addedTime = 0;
        this.scoreRight = this.add.text(896 - 150 - 50, 24, 'TIME: '+ this.clockRightCounter, this.mainText).setOrigin(0.5,0.5);
        this.scoreRight.align = 'left';
        this.initTime = this.time.now;

        this.gameOver = false

        //make running audio
        this.runMusic = this.sound.add('runSound')
        this.runMusic.play()

        this.sign1 = this.add.sprite(-100,-100,'crossSign')
        this.sign2 = this.add.sprite(-100,-100,'splitRoadSign')


        // add bitmap text (x, y, font, text, size, align)
        this.finishText = this.add.bitmapText(game.config.width/2, game.config.height/2, 'permanent', 'FIN').setOrigin(0.5)
        this.finishText.setScale(1)

    }

    update(){

        //input right = run
        if(this.cursors.right.isDown){
            if(this.runMusic.isPaused){
                this.runMusic.play()
            }
            this.ground1.tilePositionX += 3
            if(!this.player1.anims.isPlaying){
                this.player1.anims.play('run')
            }

            //clock
            if(!this.gameOver){
                this.clockRightCounter = (Math.floor(this.clockTime * 100) - Math.floor((this.time.now-this.initTime)/1000) * 100) / 100 + Math.floor(this.addedTime);
                this.scoreRight.text = 'Time: '+ this.clockRightCounter;
            }
            if(this.clockRightCounter <= 0){
                this.clockRightCounter = 0
                this.gameOver = true
            }

        }
        else {
            if(this.runMusic.isPlaying){
                this.runMusic.pause()
            }
        }

        
    }
}