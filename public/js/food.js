
(function (window) {
  // 保存食物
  let list = []

  // 食物对象
  function Food(x, y, width, height, color) {
    this.x = x || 0
    this.y = y || 0
    this.width = width || 20
    this.height = height || 20
    this.color = color || 'green'
  }

  // 显示食物
  Food.prototype.render = function (map) {
    // 产生新食物的时候，把老食物删掉
    remove()

    // 随机生成食物的坐标
    this.x = Math.floor(Math.random() * map.offsetWidth / this.width) * this.width
    this.y = Math.floor(Math.random() * map.offsetHeight / this.width) * this.height

    // 将食物添加到页面上
    let div1 = document.createElement('div')
    div1.style.position = 'absolute'
    div1.style.left = this.x + 'px'
    div1.style.top = this.y + 'px'
    div1.style.width = this.width + 'px'
    div1.style.height = this.height + 'px'
    div1.style.backgroundColor = this.color
    map.appendChild(div1)

    // 装进食物数组
    list.push(div1)
  }

  // 移除旧食物
  function remove () {
    for (let i = list.length - 1; i >= 0; i--) {
      list[i].parentNode.removeChild(list[i])
      list.pop()
    }
  }

  // 把构造函数暴露出去
  window.Food = Food;
}(window))