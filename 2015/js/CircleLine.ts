/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class CircleLine extends createjs.Shape {

    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    private _r: number = 1;
    public min_r: number = 1;
    public max_r: number = 1;

    public rad: number = 0;

    public init(min_r: number, max_r: number, r: number): void {
        this._r = r;
        this.min_r = min_r;
        this.max_r = max_r;
    }

    public drawLine(): void {
        

        this._r = this._r + 0.5;
        if (this._r > this.max_r) {
            this._r = this.min_r;
        }
        if (this._r < this.min_r) {
            return;
        }


        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.alpha = 1 - (this._r - this.min_r) / (this.max_r - this.min_r);
        //this.graphics.drawCircle(0, 0, this._max_r);
        //this.scaleX = this.scaleY = this._r / this._max_r;
        //
        //this.graphics.drawCircle(0, 0, this._r);
        //

        this.graphics.arc(0, 0, this._r, 0, 2 * Math.PI*2, false);

    }


    public drawLineRad(): void {

        var x1: number = Math.sin(Math.PI * this.rad / 180) * this.min_r;
        var y1: number = - Math.cos(Math.PI * this.rad / 180) * this.min_r;
        
        var x2: number = Math.sin(Math.PI * this.rad / 180) * this.max_r;
        var y2: number = - Math.cos(Math.PI * this.rad / 180) * this.max_r;
        
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");

        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);

    }



}  

