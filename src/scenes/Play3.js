class Play3 extends Phaser.Scene{
    constructor(){
        super('play3Scene')
    }

    preload(){
        this.load.setPath("./assets/play3/")

        //load images/tile sprites
        this.load.image('drinking', 'drinkingMilk2.png')
        this.load.image('milk1', 'milk1.png')
        this.load.image('milk2', 'milk2.png')
        this.load.image('milk3', 'milk3.png')
        this.load.image('milk4', 'milk4.png')
        this.load.image('milk5', 'milk5.png')
        this.load.image('milk6', 'milk6.png')
        this.load.image('milk7', 'milk7.png')
        this.load.image('milk8', 'milk8.png')
        this.load.image('milk9', 'milk9.png')
        this.load.image('milk10', 'milk10.png')
    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.antoine = this.add.sprite(game.config.width/2, game.config.height/2, 'drinking').setScale(0.7)
        this.milk1 = this.add.sprite(game.config.width/2 - 40, game.config.height/2, 'milk1').setScale(0.7)
        this.milk1.angle += 45

        this.rightDown=false
        
        //timer
        this.initTime = 0
        this.startTime = false
        this.timeOver = false

        this.milkCounter = 1
    }
    update(){
        

        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.rightDown = true
        }

        if(this.rightDown){
            if(this.milk1.angle >= -20){
                this.milk1.angle -= 0.5
            }
        }


        if(this.milk1.angle <= -20){
            if(!this.startTime){
                this.initTime = this.time.now
                this.startTime = true
                this.rightDown = false
            }
        }

        if(this.startTime){
            if( (this.time.now - this.initTime)/1000 >= 5){
                this.timeOver = true
                this.startTime = false
                if(this.milkCounter < 11){
                    this.milkCounter += 1
                    this.milk1.setAlpha(0)
                    this.milk1 = this.add.sprite(game.config.width/2 - 40, game.config.height/2, 'milk' + this.milkCounter).setScale(0.7)
                    this.milk1.angle-=20
                }
            }
        }

        if(!this.rightDown && !this.startTime){
            if(this.milk1.angle <= 45){
                this.milk1.angle += 0.5
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
    }
}