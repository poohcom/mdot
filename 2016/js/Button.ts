/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class Button extends createjs.Bitmap {

    constructor(imageOrUrl: string|HTMLImageElement ,  w: number, h: number) {
        super(imageOrUrl);
        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
    }
}  

