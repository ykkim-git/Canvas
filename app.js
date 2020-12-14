import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this)); // animation 시작
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageWidth = document.body.clientHeight;

    // 캔버스를 더블 사이즈로 지정해서 레티나 디스플레이에서 잘 보일 수 있도록
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageWidth * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
