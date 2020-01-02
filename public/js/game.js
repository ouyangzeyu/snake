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

    // 根据按键调整蛇头的方向
    bindKey()
  }

  // 让蛇自动移动
  function autoMove () {
    // 这里需要注意this的指向问题，不用bind改变指向的话，this在setInterval中是指向window的
    let timeId = setInterval(function () {
      this.snake.move(this.food, this.map)
      this.snake.render(this.map)

      // 判断蛇是否撞墙了，也就是蛇头到达地图边界
      let snakeHeadX = this.snake.body[0].x * this.snake.width
      let snakeHeadY = this.snake.body[0].y * this.snake.height
      if (snakeHeadX >= this.map.offsetWidth || snakeHeadY >= this.map.offsetHeight) {
        alert('Game over!')
        clearInterval(timeId)
      }
      if (snakeHeadX < 0 || snakeHeadY < 0) {
        alert('Game over!')
        clearInterval(timeId)
      }
    }.bind(that), 100);
  }
  
  // 获取按键
  function bindKey () {
    document.addEventListener('keydown', function (e) {
      e = e || window.event
      switch (e.keyCode) {
        case 37:
          this.snake.direction = 'left'
          break
        case 38:
          this.snake.direction = 'top'
          break
        case 39:
          this.snake.direction = 'right'
          break
        case 40:
          this.snake.direction = 'bottom'
          break

      }
    }.bind(that))
  }

  window.Game = Game
}(window))