class InitAnimationFrame {
    constructor(drawLayout, frame) {
        this.frame = frame;
        this.lastTime = new Date().getTime();
        this.now = null;
        this.delta = null;
        this.interval = 1000 / this.frame;
        this.drawLayout = drawLayout;
        this.initAnimation = this.initAnimation.bind(this);
    }

    initAnimation() {
        window.requestAnimationFrame(this.initAnimation);
        this.now = Date.now();
        this.delta = this.now - this.lastTime;
        if (this.delta > this.interval) {
            this.lastTime = this.now - (this.delta % this.interval);
            // ctx.count++;
            this.drawLayout();
        }
    }
}
export default InitAnimationFrame;