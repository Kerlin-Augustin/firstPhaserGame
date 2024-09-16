class mainScene {
  preload(){
    this.load.image('player', 'assets/player.png')
    this.load.image('coin', 'assets/coin.png')
  }
  create(){
    this.player = this.physics.add.sprite(100, 100, 'player')
    this.coin = this.physics.add.sprite(300, 300, 'coin')
  }

  update(){
    this.score = 0;
  }
}

new Phaser.Game({
  width: 700, // Width of the game in pixels
  height: 400, // Height of the game in pixels
  backgroundColor: '#3498db', // The background color (blue)
  scene: mainScene, // The name of the scene we created
  physics: { default: 'arcade' }, // The physics engine to use
  parent: 'game', // Create the game inside the <div id="game"> 
});