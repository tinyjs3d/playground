export default class EventHandler {
  constructor(canvas, model) {
    this.canvas = canvas;
    this.model = model;

    this.isControl = false;
    this.prePos = {
      x: 0,
      y: 0,
    };

    this.onTouchStart = this.touchStart.bind(this);
    this.onTouchMove = this.touchMove.bind(this);
    this.onTouchEnd = this.touchEnd.bind(this);
  }

  bindMove() {
    this.canvas.addEventListener('touchstart', this.onTouchStart);
    this.canvas.addEventListener('touchmove', this.onTouchMove);
    this.canvas.addEventListener('touchcancel', this.onTouchEnd);
    this.canvas.addEventListener('touchend', this.onTouchEnd);
  }

  unbindMove() {
    this.canvas.removeEventListener('touchstart', this.onTouchStart);
    this.canvas.removeEventListener('touchmove', this.onTouchMove);
    this.canvas.removeEventListener('touchcancel', this.onTouchEnd);
    this.canvas.removeEventListener('touchend', this.onTouchEnd);
  }

  touchStart(e) {
    this.prePos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    this.isControl = true;

    this.eulerAngles = { ...this.model.eulerAngles };
  }

  touchMove(e) {
    if (!this.isControl) return;

    const { model } = this;
    const deltaX = e.touches[0].clientX - this.prePos.x;

    // 绕 y 轴旋转
    model.eulerAngles.y = this.eulerAngles.y + deltaX;
    model.rotationQuaternion.setEulerAngles(
      model.eulerAngles.x,
      model.eulerAngles.y,
      model.eulerAngles.z,
    );
  }

  touchEnd() {
    this.isControl = false;
  }
}
