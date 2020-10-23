import React from 'react'

import Pack from './time.png'

function RandomNumBoth(Min,Max){
  let Range = Max - Min;
  let Rand = Math.random();
  let num = Min + Math.round(Rand * Range); //四舍五入
  return num;
}

export default class HooksTest extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      packageArr: [],
      examplePackageArr: [],
      canvasX: 0,
      canvasY: 0
    }
    this.ctx = null
    this.timer = null
  }

  componentDidMount() {
    this.renderCanvas()
    this.packageAddTime(1000)
    this.packageMove()

  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <h2>画布测试</h2>
        <canvas id="canvas"></canvas>
      </div>
    )
  }

  getPosition = (ev) => {
    let x, y;
    if (ev.layerX || ev.layerX == 0) {
      x = ev.layerX;
      y = ev.layerY;
    }else if (ev.offsetX || ev.offsetX == 0) { // Opera
      x = ev.offsetX;
      y = ev.offsetY;
    }

    let { packageArr } = this.state
    packageArr.map((item, index) => {
      if (
        item.x + 50 <= x &&
        item.x - 50 >= x &&
        item.y + 50 <= y &&
        item.y -50 >= y
      ) {
        packageArr.splice(index, 1)
      }
    })
    this.setState({
      packageArr
    })
  }

  renderCanvas = () => {
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('click', (e) => this.getPosition(e), false)

    canvas.width = 650
    canvas.height = 900
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = '#FF7744';
    this.ctx.fillRect(10, 10, 650, 900);
  }

  // 定时添加红包的任务队列
  packageAddTime = (time) => {
    let randomNum = RandomNumBoth(1,5)
    let packageArrVar = []
    for (let i = 0; i< randomNum; i++) {
      let xDistance = RandomNumBoth(0,650)
      let yDistance = RandomNumBoth(0,100)
      // 生成img对象，
      let Img = new Image(20, 20);
      Img.src = Pack;
      let obj = {
        x: xDistance,
        y: yDistance,
        img: Img
      }
      packageArrVar.push(obj)
    }
    this.setState((prevState) => {
      let { packageArr } = prevState
      packageArr.push(...packageArrVar)
      return { ...prevState, packageArr }
    })
    let that = this
    if (this.timer) clearTimeout(this.timer)
    setTimeout(() => {
      that.packageAddTime(time)
    }, time)
  }
  // 生成红包
  packageCreat = () => {
    let { packageArr } = this.state
    let that = this
    if (packageArr.length > 0) {
      packageArr.map(item => {
        return that.ctx.drawImage(
          item.img,
          item.x,
          item.y,
          100,
          100
        );
      })
    }
  }
  // 红包移动
  packageMove = () => {
    this.ctx.clearRect(0, 0, 650, 900);
    this.ctx.fillStyle = '#FF7744';
    this.ctx.fillRect(10, 10, 650, 900);
    let packageArrVar = this.state.packageArr
    packageArrVar.map((item, index) => {
      let obj = {
        x: item.x,
        y: item.y + 2,
        img: item.img
      }
      this.state.packageArr.splice(index, 1, obj)
      item = obj
      return item
    })
    this.setState((prevState) => {
      return { ...prevState, packageArr: packageArrVar }
    })
    this.packageCreat()
    window.requestAnimationFrame(this.packageMove)
  }
}
