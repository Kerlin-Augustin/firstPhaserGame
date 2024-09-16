class mainScene {
  preload(){
    this.load.image('player', 'assets/player.png')
    this.load.image('coin', 'assets/coin.png')
  }
  create(){
    this.player = this.physics.add.sprite(100, 110, 'player')
    this.coin = this.physics.add.sprite(300, 300, 'coin')
    this.arrow = this.input.keyboard.createCursorKeys()
  }

  update(){
    if(this.physics.overlap(this.player, this.coin)){
      this.hit();
    }
    this.score = 0;
    let style = { font: '20px Arial', fill: '#fff' };
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style)
    if(this.arrow.right.isDown){
      this.player.x += 3
    } else if (this.arrow.left.isDown){
      this.player.x -= 3
    }
    if(this.arrow.down.isDown){
      this.player.y += 3
    } else if (this.arrow.up.isDown){
      this.player.y -= 3
    }
  }

  hit(){
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    this.score += 10

    this.scoreText.setText('score: ' + this.score)
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