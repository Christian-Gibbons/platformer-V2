BasicGame.Level1 = function (game) {

};

	var map;
	var backgroundLayer;
	var fringeLayer;
	var collisionLayer;

	var death;
BasicGame.Level1.prototype = {
	create: function () {
		this.stage.backgroundColor = '#8080FF';
		map = this.add.tilemap('map' + levelID);
		map.addTilesetImage('tiles_22', 'platforms');
		map.addTilesetImage('box', 'box');

		createPlatformer(this);

		background_music = this.add.audio('grassy_music');
		background_music.play('',0,1,true,true);

	},
	update: function () {
		// Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
		updatePlatformer(this);
		if(coins.total === 0){
			levelID++;
			//collisionLayer.destroy();
			//fringeLayer.destroy();
			background_music.stop();
			map.destroy();
			this.world.setBounds(0,0,0,0);
			this.state.start('Level' + levelID);
		}
	},
	quitGame: function (pointer) {
		// Here you should destroy anything you no longer need.
		// Stop music, delete sprites, purge caches, free resources, all that good stuff.
		// Then let's go back to the main menu.
	this.state.start('MainMenu');
	}
};
