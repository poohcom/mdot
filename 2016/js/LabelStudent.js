var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LabelStudent = (function (_super) {
    __extends(LabelStudent, _super);
    function LabelStudent(hit, studentName, email, index) {
        _super.call(this);
        this.isMouseOver = false;
        this.index = -1;
        this.index = index;
        this.hitArea = hit;
        this.studentName = new createjs.Text(studentName, "normal 14px yoon", "#ffffff");
        var w = this.studentName.getMeasuredWidth();
        var h = this.studentName.getMeasuredHeight();
        this.studentName.x = -w / 2;
        this.studentName.y = -h / 2;
        this.addChild(this.studentName);
        this.email = new createjs.Text(email, "normal 14px yoon", "#ffffff");
        var w1 = this.email.getMeasuredWidth();
        var h1 = this.email.getMeasuredHeight();
        this.bg = new createjs.Shape();
        this.bg.graphics.beginFill("#000").drawRect(0, 0, w1 + 10, 25);
        this.bg.x = -w1 / 2 - 5;
        this.bg.y = -25 / 2 + 30;
        this.bg.alpha = 0.6;
        this.bg.visible = false;
        this.addChild(this.bg);
        this.email.x = -w1 / 2;
        this.email.y = -h1 / 2 + 30;
        this.email.visible = false;
        this.addChild(this.email);
        this.on("mouseover", function (event) {
            event.currentTarget.setMouseover();
            SceneAboutStudents.instance().updateOver(event.currentTarget.index);
        });
        this.on("mouseout", function (event) {
            event.currentTarget.setMouseout();
            SceneAboutStudents.instance().updateOver(-1);
        });
    }
    LabelStudent.prototype.setMouseover = function () {
        this.isMouseOver = true;
        this.email.visible = true;
        this.bg.visible = true;
    };
    LabelStudent.prototype.setMouseout = function () {
        this.email.visible = false;
        this.bg.visible = false;
        this.isMouseOver = false;
    };
    return LabelStudent;
})(createjs.Container);
//# sourceMappingURL=LabelStudent.js.map