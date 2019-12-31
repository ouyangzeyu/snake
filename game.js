(function (window) {
  function Game (map) {
    this.snake = new Snake()
    this.food = new Food()
    this.map = map
  }

  // 开始游戏的方法
  Game.prototype.start = function () {
    this.snake.render(this.map)
    this.food.render(this.map)

    this.snake.move()
  }

  window.Game = Game
}(window))