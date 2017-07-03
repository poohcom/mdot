/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ToggleButton extends createjs.Bitmap {

    public _checkImage: HTMLImageElement;
    public _uncheckImage: HTMLImageElement;
    public _overImage: HTMLImageElement;
    public _check: boolean=false


    constructor(checkImage: HTMLImageElement, uncheckImage: HTMLImageElement, overImage: HTMLImageElement, w: number, h: number) {
        super(uncheckImage);
        this._checkImage = checkImage;
        this._uncheckImage = uncheckImage;
        this._overImage = overImage;

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;

        if (this._overImage === null)
        { }
        else {
            this.on("mouseover", this.onMouseOver);
            this.on("mouseout", this.onMouseOut);
        }
    }

    //public hitW: number = 0;
    //public hitH: number = 0;
    //public setHitArea2(): void {
    //    var hit: createjs.Shape = new createjs.Shape();
    //    hit.graphics.beginFill("#000").drawRect(0, 0, this.hitW, this.hitH);
    //    this.hitArea = hit;

    //}

    //public setHitArea(w: number, h: number): void {
    //    var hit: createjs.Shape = new createjs.Shape();
    //    hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
    //    this.hitArea = hit;

    //}

    public toggle(): void
    {
        this.setCheck(!this._check);
    }

    public setCheck(check: boolean) {
        this._check = check;
        if (check == true) {
            this.image = this._checkImage;
        } else {
            this.image = this._uncheckImage;
        }
    }

    public onMouseOver(e: createjs.MouseEvent) {
        this.image = this._overImage;
    }

    public onMouseOut(e: createjs.MouseEvent) {
        this.setCheck(this._check);
    }

}  

