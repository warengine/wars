var miJuego = miJuego || {};
miJuego.game = new Phaser.Game(320, 160, Phaser.AUTO, '');
miJuego.game.state.add('Boot', miJuego.Boot);
miJuego.game.state.add('Preload', miJuego.Preload);
miJuego.game.state.add('Game', miJuego.Game);
miJuego.game.state.start('Boot');