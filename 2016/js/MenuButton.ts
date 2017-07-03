/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class MenuButton extends createjs.Container{

    public _checkImage: HTMLImageElement;
    public _uncheckImage: HTMLImageElement;
    public _overImage: HTMLImageElement;

    public _check: boolean = false

    public textBG: createjs.Bitmap;
    public text: createjs.Bitmap;

    constructor(uncheckImage: HTMLImageElement, checkImage: HTMLImageElement, overImage: HTMLImageElement , checkBGImage: HTMLImageElement, w: number=0, h: number=0) {
        super();

        this.textBG = new createjs.Bitmap(checkBGImage);
        this.textBG.alpha = 0;

        this.addChild(this.textBG);

        this.text = new createjs.Bitmap(uncheckImage);
        this.addChild(this.text);

        this._checkImage = checkImage;
        this._uncheckImage = uncheckImage;
        this._overImage = overImage;

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, checkImage.width, checkImage.height);
        this.hitArea = hit;

        if (this._overImage === null)
        { }
        else {
            this.on("mouseover", this.onMouseOver);
            this.on("mouseout", this.onMouseOut);
        }
    }

    public toggle(): void {
        this.setCheck(!this._check);
    }

    public setCheck(check: boolean) {
        this._check = check;
        if (check == true) {
            this.text.image = this._checkImage;
        } else {
            this.text.image = this._uncheckImage;
        }
    }

    public onMouseOver(e: createjs.MouseEvent) {
        this.text.image = this._overImage;
        createjs.Tween.get(this.textBG).to({ alpha: 1 }, (7/12) * 1000, createjs.Ease.linear);
    }

    public onMouseOut(e: createjs.MouseEvent) {
        this.setCheck(this._check);
        createjs.Tween.get(this.textBG).to({ alpha: 0 }, (7 / 12) * 1000, createjs.Ease.linear);

    }

}

