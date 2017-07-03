/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class Button extends createjs.Bitmap {

    //public _imageOrUrl: HTMLImageElement;
    

    constructor(imageOrUrl: string|HTMLImageElement ,  w: number, h: number) {
        super(imageOrUrl);
        //this._imageOrUrl = imageOrUrl;

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
    }





}  

