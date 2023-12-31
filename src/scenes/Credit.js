class Credit extends Phaser.Scene{
    constructor(){
        super('creditScene')
    }

    preload(){
        // add bitmap text (x, y, font, text, size, align)
        //this.load.bitmapFont('permanent', 'PermanentMarker-Regular.png', 'PermanentMarker-Regular.xml')
    }

    create(){
        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        //Text
        this.text1 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 200, 'permanent', 'Credits:').setOrigin(0.5,0.5).setScale(0.2)

        this.text2 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 125, 'permanent', 'Font: Permanent Marker - Designed by Font Diner https://fonts.google.com/specimen/Permanent+Marker').setOrigin(0.5,0.5).setScale(0.08)

        this.text3 = this.add.bitmapText(game.config.width/2, game.config.height/2 - 50, 'permanent', 'Movie Audio + Music: The 400 Blows directed by François Truffaut').setOrigin(0.5,0.5).setScale(0.12)

        this.text3 = this.add.bitmapText(game.config.width/2, game.config.height/2 + 25, 'permanent', 'Movie Music From The 400 Blows by Jean Constantin ie. : Trinite et Finale (From "The 400 Blows") ').setOrigin(0.5,0.5).setScale(0.08)

        this.text4 = this.add.bitmapText(game.config.width/2, game.config.height/2 + 100, 'permanent', 'Drinking Sound by craigglenday https://freesound.org/people/craigglenday/sounds/517173/').setOrigin(0.5,0.5).setScale(0.08)

        this.text5 = this.add.bitmapText(game.config.width/2, game.config.height/2 + 200 , 'permanent', 'Press M to go back to Menu').setOrigin(0.5, 0.5).setScale(0.2)
    
        
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene') 
        }
    }
}