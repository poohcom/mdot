var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SineShape = (function (_super) {
    __extends(SineShape, _super);
    function SineShape() {
        _super.call(this);
        this.lineSize = 1;
        this.color = "#fff";
        this.count = 0;
        this.graphics = new createjs.Graphics();
    }
    SineShape.prototype.init = function (pList, lList) {
        this.p = pList;
        this.l = lList;
        this.dx = new Array(this.p.length);
        this.dy = new Array(this.p.length);
        this.rx = new Array(this.p.length);
        this.ry = new Array(this.p.length);
        for (var i = 0; i < this.p.length; i = i + 1) {
            this.dx[i] = 0;
            this.dy[i] = 0;
        }
    };
    SineShape.prototype.updateMouseXY = function (mx, my) {
        var r = 0;
        for (var i = 0; i < this.p.length; i++) {
            r = (this.p[i][0] - mx) * (this.p[i][0] - mx) + (this.p[i][1] - my) * (this.p[i][1] - my);
            if (r < 10000) {
                this.dx[i] += -(mx - this.p[i][0]) / 50;
                this.dy[i] += -(my - this.p[i][1]) / 50;
            }
        }
    };
    SineShape.prototype.drawUpdate = function () {
        this.count++;
        for (var i = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }
        this.graphics.clear();
        this.graphics.beginLinearGradientStroke(["#000", "#FFF"], [0, 1], 0, 0, 1920, 1080);
        this.graphics.setStrokeStyle(this.lineSize);
        this.graphics.beginStroke(this.color);
        this.graphics.beginFill(this.color);
        for (var k = 0; k < this.p.length; k++) {
            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }
        this.graphics.endFill();
        var x1 = 0;
        var x2 = 0;
        var y1;
        var y2;
        for (var i = 0; i < this.l.length; i++) {
            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];
            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }
    };
    SineShape.prototype.drawUpdate2 = function () {
        for (var i = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }
        this.graphics.clear();
        this.graphics.setStrokeStyle(0);
        for (var k = 0; k < this.p.length; k++) {
            this.graphics.beginFill(this.p[k][2]);
            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }
        this.graphics.endFill();
        var x1 = 0;
        var x2 = 0;
        var y1;
        var y2;
        for (var i = 0; i < this.l.length; i++) {
            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];
            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];
            this.graphics.beginStroke(this.l[i][2]);
            this.graphics.setStrokeStyle(this.l[i][3]);
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }
    };
    return SineShape;
})(createjs.Shape);
//# sourceMappingURL=SineShape.js.map