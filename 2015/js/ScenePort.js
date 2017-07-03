/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ScenePort = (function (_super) {
    __extends(ScenePort, _super);
    function ScenePort() {
        _super.apply(this, arguments);
        this.gheight = 0;
        this.gheight2 = 0;
        this.startX = 340;
        this.buttonCount = 13;
        this.gap = 20 * 5;
        this.buttonList = [];
        this.listText = null;
        this._listTextGroup = null;
        this._listGroup = null;
        this.textButtonList = [];
    }
    ScenePort.prototype.drawLines = function () {
        this.count++;
        for (var j = 0; j < this.buttonCount; j++) {
            if (this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].updateY();
            }
        }
        var r = this.count / 5;
        this.gheight = Math.sin(r / 29) / 4 + 0.75;
        this.gheight2 = Math.cos(r / 37);
        this.g.clear();
        this.g.setStrokeStyle(1.5);
        this.g.beginStroke("#FFF");
        this.drawLine(3 + this.gheight2, 3 * this.gheight2, this.gheight, this.gheight * 20 + r / 180, 0);
        this.g.setStrokeStyle(0.5);
        this.drawLine(4 + this.gheight2, 3 * this.gheight2, 3, -this.gheight * 30 + r / 180, 1920);
        this.g.setStrokeStyle(2.0);
        this.drawLine(5 + this.gheight2, 2 + this.gheight2, this.gheight, this.gheight * 20 + r / 180, 1920 * 2);
        this.g.setStrokeStyle(1.0);
        this.drawLine(6, 2.5 + this.gheight2, this.gheight2 * 20, this.gheight * 10 + r / 180, 1920 * 3);
    };
    ScenePort.prototype.drawLine = function (a1, a2, b1, b2, delayIndex) {
        this.g.moveTo(0, 540);
        var r = 0;
        var c = Math.PI / 960;
        for (var i = 20; i < 1920 && i < this.count * 20 - delayIndex; i = i + 10) {
            r = c * i;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight);
        }
        if (1920 < this.count * 20 - delayIndex) {
            this.g.lineTo(1920, 540);
        }
        for (var j = 0; j < this.buttonCount; j++) {
            var bx = this.startX + this.gap * j;
            r = c * bx;
            var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight;
            if (this.buttonList[j].y > by && this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].y = by;
                this.buttonList[j].dy = -5;
            }
        }
    };
    ScenePort.prototype.fx = function (r, a1, a2, b1, b2) {
        return Math.sin(r * a1) * 100 + Math.sin(r * a2) * 50;
    };
    //public makeList(): void {
    //    this._listGroup = new createjs.Container();
    //    this.addChild(this._listGroup);
    //    this._listGroup.x = 1823;
    //    this._listGroup.y = 131;
    //    this._listButton = new ToggleButton(this.getTex("list_off"), this.getTex("list_on"), null, 92, 31);
    //    this._listGroup.addChild(this._listButton);
    //    this._listButton.on("mouseover", function (e: createjs.MouseEvent) {
    //        SceneManager.instance().soundplay();
    //        (<ToggleButton>e.currentTarget).toggle();
    //        (<ToggleButton>e.currentTarget).setHitArea2();
    //        createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1725 }, 500, createjs.Ease.circIn);
    //        (<ToggleButton>e.currentTarget).parent.getChildAt(1).visible = true;
    //    });
    //    this._listButton.on("mouseout", function (e: createjs.MouseEvent) {
    //        (<ToggleButton>e.currentTarget).toggle();
    //        (<ToggleButton>e.currentTarget).setHitArea(92, 31);
    //        createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1823 }, 500, createjs.Ease.circIn);
    //        (<ToggleButton>e.currentTarget).parent.getChildAt(1).visible = false;
    //    });
    //    this._listTextGroup = new createjs.Container();
    //    this._listTextGroup.visible = false;
    //    this._listGroup.addChild(this._listTextGroup);
    //    this.makeListTextButton();
    //}
    ScenePort.prototype.makeList = function () {
        this._listGroup = new createjs.Container();
        this.addChild(this._listGroup);
        this._listGroup.x = 1823;
        this._listGroup.y = 131;
        this._listTextGroup = new createjs.Container();
        this._listTextGroup.visible = false;
        this._listGroup.addChild(this._listTextGroup);
        this._listButton = new ToggleButton(this.getTex("list_off"), this.getTex("list_on"), null, 92, 31);
        this._listButton.on("mouseover", function (event) {
            SceneManager.instance().soundplay();
        });
        this._listButton.on("click", function (e) {
            e.currentTarget.toggle();
            if (e.currentTarget._check == true) {
                // 나오기
                createjs.Tween.get(e.currentTarget.parent, { loop: false }).to({ x: 1725 }, 500, createjs.Ease.circIn);
                e.currentTarget.parent.getChildAt(0).visible = true;
            }
            else {
                createjs.Tween.get(e.currentTarget.parent, { loop: false }).to({ x: 1823 }, 500, createjs.Ease.circIn);
                e.currentTarget.parent.getChildAt(0).visible = false;
            }
        });
        this._listGroup.addChild(this._listButton);
        this.makeListTextButton();
    };
    ScenePort.prototype.makeListTextButton = function () {
        var startY = 44;
        for (var i = 0; i < this.listText.length; i++) {
            var dy = 25;
            var line = this.listText[i].indexOf("\n");
            if (line > -1) {
                dy = 43;
            }
            var button = new Label();
            button.setText(this.listText[i]);
            button.x = 25;
            button.y = startY;
            startY += dy;
            this._listTextGroup.addChild(button);
            this.textButtonList.push(button);
        }
        // 1823
        //1725.131
        //this._listButton.hitW = 200;
        //this._listButton.hitH = startY;
    };
    ScenePort.prototype.mouseOver = function (index) {
        if (index > 1) {
            createjs.Tween.get(this.buttonList[index - 2], { loop: false }).to({ scaleX: 1.6, scaleY: 1.6 }, 500, createjs.Ease.linear);
        }
        if (index < this.buttonList.length) {
            createjs.Tween.get(this.buttonList[index], { loop: false }).to({ scaleX: 1.6, scaleY: 1.6 }, 500, createjs.Ease.linear);
        }
    };
    ScenePort.prototype.mouseOut = function (index) {
        if (index > 1) {
            createjs.Tween.get(this.buttonList[index - 2], { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.linear);
        }
        if (index < this.buttonList.length) {
            createjs.Tween.get(this.buttonList[index], { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.linear);
        }
    };
    return ScenePort;
})(Scene);
//# sourceMappingURL=ScenePort.js.map