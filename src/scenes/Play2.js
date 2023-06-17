class Play2 extends Phaser.Scene{
    constructor(){
        super('play2Scene')
    }

    preload(){

    }

    create(){

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart() 
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
    }
}