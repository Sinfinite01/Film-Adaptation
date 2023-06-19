class Play3Intro extends Phaser.Scene{
    constructor(){
        super('play3IntroScene')
    }

    preload(){

    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
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