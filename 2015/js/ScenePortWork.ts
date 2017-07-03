/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class ScenePortWork extends Scene {
    constructor() {
        super();
        this.createPopup();
    }
    
    public popupWindow: createjs.Container=null;

    public index: number = 1;
    public popupType: number = 0;
    public popupUrl: string = "";
    public popupIndex: number = 1;
    public popupMaxIndex: number = 1;
    public popupImg: createjs.Bitmap = null;

    private _prev_button: Button;
    private _next_button: Button;
    private _esc_button: Button;

    public work_loadingdot: createjs.Container;

    public work_loadingdot1: createjs.Bitmap;
    public work_loadingdot2: createjs.Bitmap;
    public work_loadingdot3: createjs.Bitmap;


    public popup_work_loadingdot: createjs.Container;

    public popup_work_loadingdot1: createjs.Bitmap;
    public popup_work_loadingdot2: createjs.Bitmap;
    public popup_work_loadingdot3: createjs.Bitmap;

    public createPopup(): void {
        this.work_loadingdot = new createjs.Container();
        this.addChild(this.work_loadingdot);

        this.work_loadingdot1 = new createjs.Bitmap(this.getTex("work_loadingdot"));
        this.work_loadingdot1.x = -20;
        this.work_loadingdot1.regX = 8;
        this.work_loadingdot1.regY = 8;

        this.work_loadingdot2 = new createjs.Bitmap(this.getTex("work_loadingdot"));
        this.work_loadingdot2.regX = 8;
        this.work_loadingdot2.regY = 8;


        this.work_loadingdot3 = new createjs.Bitmap(this.getTex("work_loadingdot"));
        this.work_loadingdot3.x = 20;
        this.work_loadingdot3.regX = 8;
        this.work_loadingdot3.regY = 8;

        this.work_loadingdot1.scaleX = 0;
        this.work_loadingdot1.scaleY = 0;
        this.work_loadingdot2.scaleX = 0;
        this.work_loadingdot2.scaleY = 0;
        this.work_loadingdot3.scaleX = 0;
        this.work_loadingdot3.scaleY = 0;


        createjs.Tween.get(this.work_loadingdot1, { loop: false }).call(function () {
            createjs.Tween.get(this, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.circOut);
        });
        

        createjs.Tween.get(this.work_loadingdot2, { loop: false }).wait(200).call(function () {
            createjs.Tween.get(this, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.circOut);
        });
        

        createjs.Tween.get(this.work_loadingdot3, { loop: false }).wait(400).call(function () {
            createjs.Tween.get(this, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.circOut);
        });


        this.work_loadingdot.addChild(this.work_loadingdot1);
        this.work_loadingdot.addChild(this.work_loadingdot2);
        this.work_loadingdot.addChild(this.work_loadingdot3);
        ////////

        this.popup_work_loadingdot = new createjs.Container();
        //this.addChild(this.popup_work_loadingdot);

        this.popup_work_loadingdot1 = new createjs.Bitmap(this.getTex("work_loadingdot"));
        this.popup_work_loadingdot1.regX = 8;
        this.popup_work_loadingdot1.regY = 8;

        this.popup_work_loadingdot1.x = -20;

        this.popup_work_loadingdot2 = new createjs.Bitmap(this.getTex("work_loadingdot"));
        this.popup_work_loadingdot2.regX = 8;
        this.popup_work_loadingdot2.regY = 8;


        this.popup_work_loadingdot3 = new createjs.Bitmap(this.getTex("work_loadingdot"));
        this.popup_work_loadingdot3.x = 20;

        this.popup_work_loadingdot3.regX = 8;
        this.popup_work_loadingdot3.regY = 8;

        this.popup_work_loadingdot1.scaleX = 0;
        this.popup_work_loadingdot1.scaleY = 0;
        this.popup_work_loadingdot2.scaleX = 0;
        this.popup_work_loadingdot2.scaleY = 0;
        this.popup_work_loadingdot3.scaleX = 0;
        this.popup_work_loadingdot3.scaleY = 0;


        createjs.Tween.get(this.popup_work_loadingdot1, { loop: false }).call(function () {
            createjs.Tween.get(this, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.circOut);
        });


        createjs.Tween.get(this.popup_work_loadingdot2, { loop: false }).wait(200).call(function () {
            createjs.Tween.get(this, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.circOut);
        });


        createjs.Tween.get(this.popup_work_loadingdot3, { loop: false }).wait(400).call(function () {
            createjs.Tween.get(this, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.circOut);
        });


        this.popup_work_loadingdot.addChild(this.popup_work_loadingdot1);
        this.popup_work_loadingdot.addChild(this.popup_work_loadingdot2);
        this.popup_work_loadingdot.addChild(this.popup_work_loadingdot3);

        /////////


        this.popupWindow = new createjs.Container();
        this.popupWindow.addChild(this.popup_work_loadingdot);

        this._prev_button = new Button(this.getTex("btm_1"), 80, 80);
        this._prev_button.x = 114;
        this._prev_button.y = 485;
        this._prev_button.on("click", this.prevPopup, this);

        
        this.popupWindow.addChild(this._prev_button);

        this._next_button = new Button(this.getTex("btn_2"), 80, 80);
        this._next_button.x = 1767;
        this._next_button.y = 485;
        this._next_button.on("click", this.nextPopup, this);

        
        this.popupWindow.addChild(this._next_button);

        this._esc_button = new Button(this.getTex("work_button_close"), 60, 60);
        this._esc_button.x = 1787;
        this._esc_button.y = 78 + 30;
        this._esc_button.regX = 18;
        this._esc_button.regY = 18;
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
        this.popupUrl = url + this.index + "_";
        this.popupIndex = index;
        this.popupMaxIndex = maxIndex;

        for (var i: number = 0; i < this.children.length; i++) {
            this.children[i].visible = false;
        }
        this.addChild(this.popupWindow);

        this.setPopupIndex(index);
    }

    public popup2(type: number, url: string, index: number, maxIndex: number): void {
        this.popupType = type;
        this.popupUrl = url + this.index + "_";
        this.popupIndex = index;
        this.popupMaxIndex = maxIndex;
        this._prev_button.visible = false;
        this._next_button.visible = false;


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

        this.popupImg = new createjs.Bitmap(this.popupUrl + this.popupIndex + ".jpg");
        this.popupWindow.addChild(this.popupImg);

        this.setPopupType();
    }

    public setPopupType():void
    {

        // contetns 
        // 1500 x 843
        // 545 x 965

        // interac
        // 1500 x 843

        // 포스터=
        // 742 x 1049


        switch (this.popupType) {
            case 1:
                this.popupImg.x = (1920 - 545) / 2;
                this.popupImg.y = 61;

                this._prev_button.x = 470;
                this._prev_button.y = 485;
                this._next_button.x = 1920 - 470 - 22;
                this._next_button.y = 485;
                this._esc_button.x = 1920 - 470 - 22+18;
                this._esc_button.y = 98 + 18;

                this.popup_work_loadingdot.x = 1920 / 2;
                this.popup_work_loadingdot.y = 61+965/2;

                break;
            case 2: // poster
                this.popupImg.x = (1920-742)/2;
                this.popupImg.y = 1;

                this._prev_button.x = 470;
                this._prev_button.y = 485;
                this._next_button.x = 1920-470-22;
                this._next_button.y = 485;
                this._esc_button.x = 1920 - 470 - 22+18;
                this._esc_button.y = 98 + 18;


                this.popup_work_loadingdot.x = 1920 / 2;
                this.popup_work_loadingdot.y = 1 + 1049 / 2;


                break;

            default:
                this.popupImg.x = (1920 - 1500) / 2;
                this.popupImg.y = 78;

                this._prev_button.x = 110;
                this._prev_button.y = 485;
                this._next_button.x = 1920-110-22;
                this._next_button.y = 485;

                this._esc_button.x = 1920 - 110 - 22+18;
                this._esc_button.y = 98 + 18;

                this.popup_work_loadingdot.x = 1920 / 2;
                this.popup_work_loadingdot.y = 78 + 843 / 2;

                break;

        }
        
        
    }
} 