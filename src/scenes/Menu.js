class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }

    preload(){
        this.load.setPath("./assets/")
        // add bitmap text (x, y, font, text, size, align)
        this.load.bitmapFont('permanent', 'PermanentMarker-Regular.png', 'PermanentMarker-Regular.xml')

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
        
        //text
        this.add.text(game.config.width/2, game.config.height/3 + 50, 'An Adaptaion of the Movie Directed By François Truffaut Made By Dylan Louie', menuConfig).setOrigin(0.5)
        menuConfig.fontSize = '14px'
        this.add.text(game.config.width/2, game.config.height/3 + 75, 'Genre: Walking Simulator/Environmental Narrative/Interactive Experience Game', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '20px'
        //menuConfig.backgroundColor = '#A50B5E';
        //menuConfig.color = '#000';

        this.add.text(game.config.width/2, game.config.height/3 + 150, '1: Scene One', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 190, '2: Scene Two', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 230, '3: Scene three', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/3 + 270, '4: Credits', menuConfig).setOrigin(0.5);

        menuConfig.fontSize = '15px'
        this.add.text(game.config.width/2, game.config.height/3 + 320, 'The Controls for the Games are the Arrow Keys', menuConfig).setOrigin(0.5);
        

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyONE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)
        keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO)
        keyTHREE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE)
        keyFOUR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR)
        
    }
    
    update() {

        //scene changes with key presses
        if (Phaser.Input.Keyboard.JustDown(keyONE)) {
            this.scene.start('play3Scene');    
        }
    
        if (Phaser.Input.Keyboard.JustDown(keyTWO)) {
            this.scene.start('play1Scene');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyTHREE)) {
            this.scene.start('play2Scene');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyFOUR)) {
            this.scene.start('creditScene');    
        }

        highScore = 0
    }
}