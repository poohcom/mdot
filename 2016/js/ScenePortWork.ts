/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ScenePortWork extends Scene {
    constructor() {
        super();
        this.createPopup();
    }

    public popupWindow: createjs.Container = null;

    public index: number = 1;
    public popupType: number = 0;
    public popupUrl: string = "";
    public popupIndex: number = 1;
    public popupMaxIndex: number = 1;
    public popupImg: createjs.Bitmap = null;

    private _prev_button: Button;
    private _next_button: Button;
    private _esc_button: Button;


    //
    public naverCast: string[] = null;
    public naverCastButton: Button = null;

    public openNaverCast(): void {

        if (this.naverCast[this.index - 1] == "")
            return;

        window.open(this.naverCast[this.index - 1]);
    }


    public getStopSceneTime(): number {
        return 1;
    }


    public createPopup(): void {

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
    }

    public popup(type: number, url: string, index: number, maxIndex: number): void {
        this.popupType = type;
        this.popupUrl = url + this.index + "/big/big";
        this.popupIndex = index;
        this.popupMaxIndex = maxIndex;

        for (var i: number = 0; i < this.children.length; i++) {
            this.children[i].visible = false;
        }
        this.addChild(this.popupWindow);

        this.setPopupIndex(index);
    }

    public closePopup(): void {
        for (var i: number = 0; i < this.children.length; i++) {
            this.children[i].visible = true;
        }

        this.removeChild(this.popupWindow);

    }

    public prevPopup(): void {
        this.setPopupIndex(this.popupIndex - 1);
    }

    public nextPopup(): void {
        this.setPopupIndex(this.popupIndex + 1);
    }

    public setPopupIndex(idx: number) {
        if (idx < 1) {
            idx = this.popupMaxIndex;
        }

        if (idx > this.popupMaxIndex) {
            idx = 1;
        }

        this.popupIndex = idx;
        if (this.popupImg === null) {

        } else {
            this.popupWindow.removeChild(this.popupImg);
            this.popupImg = null;
        }
        if (this.popupType == 4) {
            this.popupImg = new createjs.Bitmap(this.popupUrl + ".jpg");
        } else {
            this.popupImg = new createjs.Bitmap(this.popupUrl + "_" + this.popupIndex + ".jpg");
        }

        
        this.popupWindow.addChild(this.popupImg);

        this.setPopupType();
    }

    public setPopupType(): void {


        switch (this.popupType) {
            case 0: // contents // 가로 
                this.popupImg.x = 274;
                this.popupImg.y = 170;
                break;
            case 1:  // contents // 세로 
                this.popupImg.x = 687;
                //this.popupImg.x = 477;
                this.popupImg.y = 47;
                break;
            case 2: //inter// 가로 
                this.popupImg.x = 211;
                this.popupImg.y = 118;
                break;
            case 3: // inter // 세러
                this.popupImg.x = 687;
                //this.popupImg.x = 477;
                this.popupImg.y = 47;
                break;
            case 4: // poster // 세러
                this.popupImg.x = 589;
                this.popupImg.y = 21;
                this._prev_button.visible = false;
                this._next_button.visible = false;
                break;

        }

    }
} 