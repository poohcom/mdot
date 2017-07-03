/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class Circle extends createjs.Shape{
    
    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public index: number = 0;
    public _r: number = 0;

    public initFill(r: number, a:number): void{
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        //this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;

    }

    public init(r: number, a: number): void {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;

    }

    public initColor(r: number, a: number, color:string): void {

        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(color);
        this.graphics.beginFill(color);
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;

    }

    public initLine(r: number, a: number): void {
        this._r = r;
        
        this.graphics.clear();

        if (r <= 0)
            return;

        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;

    }

}  

