export class Point {
  // 간격을 가진 좌표를 만들어서 좌표의 y값을 아래위로 이동시키고
  // 각각의 좌표를 하나의 선으로 연결함.
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = index;
    this.max = Math.random() * 100 + 150; // 얼만큼 움직일것인가.
  }

  update() {
    // 실행하면 아래위로 움직이는 것
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max; // sine함수로 아래위로 움직일 수 있게
  }
}
