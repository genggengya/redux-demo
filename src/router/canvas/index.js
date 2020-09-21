import React from 'react'

export default class HooksTest extends React.Component{

  componentDidMount() {
    this.renderCanvas()
  }

  render() {
    return (
      <div>
        <h2>画布测试</h2>
        <canvas id="canvas" style={{ width: 750, height: 750 }}></canvas>
      </div>
    )
  }

  renderCanvas = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 750, 750);

    // 熊猫头
    ctx.beginPath()
    ctx.arc(100, 100, 50,  0, Math.PI * 2)
    ctx.stroke()

  }
}
