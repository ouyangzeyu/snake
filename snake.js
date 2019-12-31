
(function (window) {
  function Snake (width, height, direction) {
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
    for(let i = 0; i < this.body.length; i++) {
      let unit = this.body[i]
      let div1 = document.createElement('div')
      div1.style.position = 'absolute'
      div1.style.left = unit.x * this.width + 'px'
      div1.style.top = unit.y * this.width + 'px'
      div1.style.width = this.width + 'px'
      div1.style.height = this.height + 'px'
      div1.style.backgroundColor = unit.color
      map.appendChild(div1)
    }
  }

  // 让蛇移动
  Snake.prototype.move = function () {
    
  }

  window.Snake = Snake
  
}(window))