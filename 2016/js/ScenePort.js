var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePort = (function (_super) {
    __extends(ScenePort, _super);
    function ScenePort() {
        _super.apply(this, arguments);
        this.buttonList = [];
        this.listText = null;
        this.textButtonList = [];
        this._listTextGroup = null;
        this._listGroup = null;
    }
    ScenePort.prototype.makeList = function () {
        this._listGroup = new createjs.Container();
        this.addChild(this._listGroup);
        this._listGroup.x = 1833;
        this._listGroup.y = 111;
        this._listTextGroup = new createjs.Container();
        this._listTextGroup.visible = false;
        this._listGroup.addChild(this._listTextGroup);
        this._listButton = new ToggleButton(this.getTex("list_btn"), this.getTex("list_btn"), null, 92, 31);
        this._listButton.on("mouseover", function (event) {
            SceneManager.instance().soundplay();
        });
        this._listButton.on("click", function (e) {
            e.currentTarget.toggle();
            if (e.currentTarget._check == true) {
                createjs.Tween.get(e.currentTarget.parent, { loop: false }).to({ x: 1688 }, 500, createjs.Ease.circIn);
                e.currentTarget.parent.getChildAt(0).visible = true;
            }
            else {
                createjs.Tween.get(e.currentTarget.parent, { loop: false }).to({ x: 1833 }, 500, createjs.Ease.circIn);
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
            button.index = i;
            button.x = 0;
            button.y = startY;
            startY += dy;
            this._listTextGroup.addChild(button);
            this.textButtonList.push(button);
        }
    };
    ScenePort.prototype.getStopSceneTime = function () {
        return 1;
    };
    return ScenePort;
})(Scene);
//# sourceMappingURL=ScenePort.js.map