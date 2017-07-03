var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PortButton = (function (_super) {
    __extends(PortButton, _super);
    function PortButton(shape, imageOrUrl, hit, title, studentName, index) {
        _super.call(this);
        this.isMouseOver = false;
        this.index = -1;
        this.shape = shape;
        this.index = index;
        this.hitArea = hit;
        this.group = new createjs.Container;
        this.group.x = 61;
        this.group.y = -173;
        this.group.visible = false;
        this.addChild(this.group);
        var img = new createjs.Bitmap(imageOrUrl);
        img.x = 5;
        img.y = 5;
        this.group.addChild(img);
        var bg = new Rect();
        bg.init(510, 110, "#FFF", true);
        bg.alpha = 0.18;
        this.group.addChild(bg);
        this.title = new createjs.Text(title, "normal 21px yoon", "#ffffff");
        var w = this.title.getMeasuredWidth();
        var h = this.title.getMeasuredHeight();
        this.title.x = 128;
        this.title.y = 17;
        this.group.addChild(this.title);
        this.studentName = new createjs.Text(studentName, "normal 17px yoon", "#ffffff");
        this.studentName.lineHeight = 25;
        var w1 = this.studentName.getMeasuredWidth();
        var h1 = this.studentName.getMeasuredHeight();
        this.studentName.x = 128;
        this.studentName.y = 58;
        this.group.addChild(this.studentName);
        this.on("mouseover", function (event) {
            event.currentTarget.setMouseover();
        });
        this.on("mouseout", function (event) {
            event.currentTarget.setMouseout();
        });
    }
    PortButton.prototype.setHitScale = function (scale) {
        this.hitArea.scaleX = scale;
        this.hitArea.scaleX = scale;
    };
    PortButton.prototype.setMouseover = function () {
        SceneManager.instance().soundplay();
        this.isMouseOver = true;
        this.group.visible = true;
        this.shape.setSelectIndex(this.index);
    };
    PortButton.prototype.setMouseout = function () {
        this.group.visible = false;
        this.isMouseOver = false;
        this.shape.setSelectIndex(-1);
    };
    return PortButton;
})(createjs.Container);
//# sourceMappingURL=PortButton.js.map