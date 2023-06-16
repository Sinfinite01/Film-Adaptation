class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }

    preload(){
        //this.load.audio('runSound', './assets/RunningAudio.mp4')
        

    }

    create(){
        // display score
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '100px',
            //backgroundColor: '#1AA7EC',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0,
            color: '#000',
            align: 1,
        } 
        
        //show menu text
        this.add.text(game.config.width/2, game.config.height/3.5, 'The 400 Blows', menuConfig).setOrigin(0.5);
        

        menuConfig.color = '#000'
        menuConfig.fontSize = '20px'
        menuConfig.fontFamily = 'Sans-serif'

        //this.add.text(game.config.width/2, game.config.height/3, 'An Endless Runner', menuConfig).setOrigin(0.5);
    
        this.add.text(game.config.width/2, game.config.height/3 + 50, 'An Adaptaion of the Movie Directed By François Truffaut Made By Dylan Louie', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#A50B5E';
        //menuConfig.color = '#000';

        this.add.text(game.config.width/2, game.config.height/3 + 150, '1: Scene One', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 200, '2: Scene Two', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 250, '3: Scene three', menuConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        keyTHREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);

    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyONE)) {
            this.scene.start('play1Scene');    
        }
    
        if (Phaser.Input.Keyboard.JustDown(keyTWO)) {
            this.scene.start('play2Scene');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyTHREE)) {
            this.scene.start('play3Scene');    
        }

        highScore = 0
    }
}