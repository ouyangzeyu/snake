(function (window) {
  let that = null

  function Game (map) {
    this.snake = new Snake()
    this.food = new Food()
    this.map = map

    that = this
  }

  // 开始游戏的方法
  Game.prototype.start = function () {
    this.snake.render(this.map)
    this.food.render(this.map)

    autoMove()
  }

  // 让蛇自动移动
  function autoMove () {
    // 这里需要注意this的指向问题，不用bind改变指向的话，this在setInterval中是指向window的
    setInterval(function () {
      this.snake.move()
      this.snake.render(this.map)
    }.bind(that), 300);
  }
  

  window.Game = Game
}(window))