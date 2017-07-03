/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class Arc extends createjs.Shape {

    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public _r: number = 0;

    public initLine(r: number, a: number): void {
        this._r = r;

        this.graphics.clear();

        if (r <= 0)
            return;

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.alpha = a;
        this.graphics.arc(0, 0, this._r, 0,  Math.PI / 2, false);
    }

}  

