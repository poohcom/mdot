/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />

class SideButton extends createjs.Container {

    public _base: createjs.Bitmap;
    public _imageOrUrl: createjs.Bitmap;
    public sceneIndex: number;
    public min_r: number;
    public max_r: number;
    public _r: number;
    public rad: number;
    public isMouseOver: boolean = false;

    constructor(imageOrUrl: HTMLImageElement, base: HTMLImageElement, w: number, h: number, index: number, min:number, max:number, rad:number) {
        super();

        this.min_r = min;
        this.max_r = max;
        this.rad = rad;
        this._r = min;

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w*2, h*2);
        hit.x = -w;
        hit.y = -h;
        this.hitArea = hit;
        this.sceneIndex = index;
        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = w / 2;
        this._imageOrUrl.regY = h / 2;

        this.addChild(this._imageOrUrl);

        this._base = new createjs.Bitmap(base);
        this._base.regX = 0;
        this._base.regY = 12 / 2;
        this._base.x = w;
        this._base.y = h/2;

        this._base.visible = true;
        this._base.alpha = 0;
        this.addChild(this._base);

        this.on("mouseover", function (event: createjs.MouseEvent) {
            (<SideButton>event.currentTarget).setMouseover();
               SceneManager.instance().soundplay();
        });

        this.on("mouseout", function (event: createjs.MouseEvent) {
            (<SideButton>event.currentTarget).setMouseout();
        });

        this.on("click", function (event: createjs.MouseEvent) {
            SceneManager.instance().nextSceneIndex((<SideButton>event.currentTarget).sceneIndex);
        });
    }

    public setMouseover(): void {
        this._base.visible = true;
        this.isMouseOver = true;
        this._base.alpha = 0;
        createjs.Tween.get(this._base, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
    }

    public setMouseout(): void {
        this._base.visible = false;
        this.isMouseOver = false;
    }

    public getMax(): number {
        if (SceneManager.instance().getSceneIndex() == this.sceneIndex) {
            return this.min_r + (this.max_r - this.min_r )/3;
        } else {
            return this.max_r;
        }
    }

    public setCirclePosition(): void {
        if (this._r > this.min_r) {
            this._r = this._r - 1;
        }

        this.x = Math.sin(Math.PI * this.rad / 180) * this._r-50;
        this.y = - Math.cos(Math.PI * this.rad / 180) * this._r - 50;
    }

}  

