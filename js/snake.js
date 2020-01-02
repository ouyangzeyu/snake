
(function (window) {
  // 用来保存显示蛇的那些div
  let list = []

  // 不同的颜色
  let arrColor = ['pink', 'skyblue', 'orange', 'hotpink', 'purple', 'yellow']

  function Snake(width, height, direction) {
    this.width = width || 20
    this.height = height || 20
    this.direction = direction || 'right' // 移动方向
    this.body = [
      {
        x: 3,
        y: 1,
        color: 'red'
      },
      {
        x: 2,
        y: 1,
        color: 'green'
      },
      {
        x: 1,
        y: 1,
        color: 'blue'
      }
    ]
  }

  // 显示蛇
  Snake.prototype.render = function (map) {
    remove()
    
    for (let i = 0; i < this.body.length; i++) {
      let unit = this.body[i]
      let div1 = document.createElement('div')
      div1.style.position = 'absolute'
      div1.style.left = unit.x * this.width + 'px'
      div1.style.top = unit.y * this.width + 'px'
      div1.style.width = this.width + 'px'
      div1.style.height = this.height + 'px'
      div1.style.backgroundColor = unit.color
      map.appendChild(div1)

      list.push(div1)
    }
  }

  // 渲染之前删除掉原来的蛇身体
  function remove () {
    for (let i = list.length - 1; i >= 0; i--) {
      list[i].parentNode.removeChild(list[i])
      list.pop()
    }
  }

  // 让蛇移动
  Snake.prototype.move = function (food, map) {
    //蛇头根据方向移动，之后的身体是根据上一节身体移动的

    // 蛇身子的移动
    let index = this.body.length - 1 // 最后一节身体的下标
    for (let i = index; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }

    // 蛇头的移动
    switch (this.direction) {
      case 'right':
        this.body[0].x++
        break
      case 'left':
        this.body[0].x--
        break
      case 'top':
        this.body[0].y--
        break
      case 'bottom':
        this.body[0].y++
        break
    }

    // 蛇有没有吃到食物，蛇头的坐标和食物的坐标重叠
    let snakeHeadX = this.body[0].x * this.width
    let snakeHeadY = this.body[0].y * this.height

    let foodX = food.x
    let foodY = food.y

    if (snakeHeadX == foodX && snakeHeadY == foodY) {
      // 吃到食物后需要长一节身体
      let lastUnit = this.body[this.body.length - 1]
      this.body.push({
        x: lastUnit.x,
        y: lastUnit.y,
        color: arrColor[Math.floor(Math.random() * arrColor.length)]
      })

      // 吃到食物需要产生新的食物
      food.render(map)
    }

  }

  window.Snake = Snake

}(window))