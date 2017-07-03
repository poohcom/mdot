var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this.index = 0;
        this._r = 0;
        this.graphics = new createjs.Graphics();
    }
    Circle.prototype.init = function (r, a) {
        this._r = r;
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                this.graphics.beginStroke("#66686a");
                this.graphics.beginFill("#66686a");
                break;
            case 1:
                this.graphics.beginStroke("#595a5f");
                this.graphics.beginFill("#595a5f");
                break;
            case 2:
                this.graphics.beginStroke("#5e5e62");
                this.graphics.beginFill("#5e5e62");
                break;
            case 3:
                this.graphics.beginStroke("#7c7d82");
                this.graphics.beginFill("#7c7d82");
                break;
        }
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;
    };
    Circle.prototype.update = function (mx, my) {
        this.x = this.x - mx + (this._r - 0.6) * 3;
        this.y = this.y - my;
        if (this.x < 0) {
            this.x = 1920;
        }
        if (this.x > 1920) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = 1080;
        }
        if (this.y > 1080) {
            this.y = 0;
        }
    };
    return Circle;
})(createjs.Shape);
//# sourceMappingURL=Circle.js.map