var miJuego = miJuego || {};

//title screen
miJuego.Game = function(){};

miJuego.Game.prototype = {
  create: function() {
   this.cursor = this.game.input.keyboard.createCursorKeys();
  this.map = this.game.add.tilemap("Mapa");
  this.map.addTilesetImage("super_mario", "Tileset");
    this.fondo = this.map.createLayer("fondo");
    this.suelo = this.map.createLayer("suelo");
    this.paredes = this.map.createLayer("paredes");
   this.map.setCollisionBetween(1,1000,true,"paredes");
   this.map.setCollisionBetween(1,1000,true,"suelo");
    this.paredes.resizeWorld();
	this.player = this.game.add.sprite(10,100,"imgplayer");
	  this.game.physics.arcade.enable(this.player);
	  this.game.camera.follow(this.player);
	  this.player.body.bounce.y = 0.2;
   this.player.body.gravity.y = 300;
	    this.player.body.collideWorldBounds = true;
  },
   
  update: function() {
   this.physics.arcade.collide(this.player, this.paredes);
	 this.physics.arcade.collide(this.player, this.suelo);
	 this.player.body.velocity.x = 0;
	    if (this.cursor.left.isDown)
    {
        this.player.body.velocity.x = -150;
    }
    else if (this.cursor.right.isDown)
    {
        this.player.body.velocity.x = 150;  
    }else if (this.cursor.down.isDown)
    {
        this.player.body.velocity.y = 150;
    }else if (this.cursor.up.isDown)
    {
        this.player.body.velocity.y = -150;   
    } 
    
  }
};