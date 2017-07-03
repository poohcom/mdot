/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class CircleMask extends createjs.Shape {

    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public r: number = 0;

    public drawCircle(): void {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.drawCircle( 1920/2+15, 400, this.r);
    }

    public drawArc(s:number, t:number): void {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.arc(0, 0, this.r, s, t, false);
        this.graphics.lineTo(0,0);

    }




}  

