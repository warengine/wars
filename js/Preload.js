var miJuego = miJuego || {};

//loading the game assets
miJuego.Preload = function(){};

miJuego.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);
  this.load.tilemap("Mapa","assets/tilemaps/Mapa.json",null,Phaser.Tilemap.TILED_JSON);
     this.load.spritesheet("imgplayer","assets/images/player.png",12,12);
	this.load.image("Tileset","assets/images/super_mario.png");
    
  },
  create: function() {
    this.state.start('Game');
  }
};