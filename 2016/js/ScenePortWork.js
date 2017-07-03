var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortWork = (function (_super) {
    __extends(ScenePortWork, _super);
    function ScenePortWork() {
        _super.call(this);
        this.popupWindow = null;
        this.index = 1;
        this.popupType = 0;
        this.popupUrl = "";
        this.popupIndex = 1;
        this.popupMaxIndex = 1;
        this.popupImg = null;
        this.naverCast = null;
        this.naverCastButton = null;
        this.createPopup();
    }
    ScenePortWork.prototype.openNaverCast = function () {
        if (this.naverCast[this.index - 1] == "")
            return;
        window.open(this.naverCast[this.index - 1]);
    };
    ScenePortWork.prototype.getStopSceneTime = function () {
        return 1;
    };
    ScenePortWork.prototype.createPopup = function () {
        this.popupWindow = new createjs.Container();
        this._prev_button = new Button(this.getTex("work_left"), 25, 50);
        this._prev_button.x = 67;
        this._prev_button.y = 516;
        this._prev_button.on("click", this.prevPopup, this);
        this.popupWindow.addChild(this._prev_button);
        this._next_button = new Button(this.getTex("work_right"), 25, 50);
        this._next_button.x = 1832;
        this._next_button.y = 516;
        this._next_button.on("click", this.nextPopup, this);
        this.popupWindow.addChild(this._next_button);
        this._esc_button = new Button(this.getTex("X"), 60, 60);
        this._esc_button.x = 1832;
        this._esc_button.y = 78 + 30;
        this._esc_button.regX = 12;
        this._esc_button.regY = 12;
        this._esc_button.on("click", this.closePopup, this);
        this._esc_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }
        });
        this._esc_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }
        });
        this.popupWindow.addChild(this._esc_button);
    };
    ScenePortWork.prototype.popup = function (type, url, index, maxIndex) {
        this.popupType = type;
        this.popupUrl = url + this.index + "/big/big";
        this.popupIndex = index;
        this.popupMaxIndex = maxIndex;
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].visible = false;
        }
        this.addChild(this.popupWindow);
        this.setPopupIndex(index);
    };
    ScenePortWork.prototype.closePopup = function () {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].visible = true;
        }
        this.removeChild(this.popupWindow);
    };
    ScenePortWork.prototype.prevPopup = function () {
        this.setPopupIndex(this.popupIndex - 1);
    };
    ScenePortWork.prototype.nextPopup = function () {
        this.setPopupIndex(this.popupIndex + 1);
    };
    ScenePortWork.prototype.setPopupIndex = function (idx) {
        if (idx < 1) {
            idx = this.popupMaxIndex;
        }
        if (idx > this.popupMaxIndex) {
            idx = 1;
        }
        this.popupIndex = idx;
        if (this.popupImg === null) {
        }
        else {
            this.popupWindow.removeChild(this.popupImg);
            this.popupImg = null;
        }
        if (this.popupType == 4) {
            this.popupImg = new createjs.Bitmap(this.popupUrl + ".jpg");
        }
        else {
            this.popupImg = new createjs.Bitmap(this.popupUrl + "_" + this.popupIndex + ".jpg");
        }
        this.popupWindow.addChild(this.popupImg);
        this.setPopupType();
    };
    ScenePortWork.prototype.setPopupType = function () {
        switch (this.popupType) {
            case 0:
                this.popupImg.x = 274;
                this.popupImg.y = 170;
                break;
            case 1:
                this.popupImg.x = 687;
                this.popupImg.y = 47;
                break;
            case 2:
                this.popupImg.x = 211;
                this.popupImg.y = 118;
                break;
            case 3:
                this.popupImg.x = 687;
                this.popupImg.y = 47;
                break;
            case 4:
                this.popupImg.x = 589;
                this.popupImg.y = 21;
                this._prev_button.visible = false;
                this._next_button.visible = false;
                break;
        }
    };
    return ScenePortWork;
})(Scene);
//# sourceMappingURL=ScenePortWork.js.map