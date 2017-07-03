var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Particle = (function (_super) {
    __extends(Particle, _super);
    function Particle(imageOrUrl) {
        _super.call(this, imageOrUrl);
        this.dx = 0;
        this.dy = 0;
        this.dr = 0;
        this.ddx = 0;
        this.ddy = 0;
        this.count = 0;
        this.max_count = 300;
        this.alpha = 0.4;
        this.regX = 15;
        this.regY = 15;
    }
    Particle.prototype.init = function () {
        this.alpha = 0.4;
        this.scaleY = this.scaleX = Math.random() * 0.5 + 0.5;
        this.dx = 0;
        this.dy = 0;
        this.dr = 0;
        this.ddx = 0;
        this.ddy = 0;
        this.count = 0;
        this.max_count = 300;
        this.dr = Math.random() * 3 + 1;
    };
    Particle.prototype.setImage = function (imageOrUrl) {
        this.image = imageOrUrl;
    };
    Particle.prototype.update = function () {
        ++this.count;
        this.dx = this.dx + this.ddx;
        this.dy = this.dy + this.ddy;
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.rotation = this.rotation + this.dr;
    };
    Particle.prototype.isActive = function () {
        return (this.count < this.max_count);
    };
    return Particle;
})(createjs.Bitmap);
//# sourceMappingURL=Particle.js.map