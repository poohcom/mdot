/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class Rect extends createjs.Shape {

    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public _max_w: number;
    public _w:number;
    public _h: number;
    public _color: string;
    public _fill: boolean;
    public _italic: boolean;
    
    public init(w: number, h: number, color: string, fill: boolean = false, italic=false): void {
        this._fill = fill;
        this._w = w;
        this._max_w = w;
        this._h = h;
        this._color = color;
        this._italic = italic;
        this.update();
    }

    private update(): void
    {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(this._color);
        if (this._fill) {
            this.graphics.beginFill(this._color);
        }
        if (this._italic == false) {
            this.graphics.drawRect(0, 0, this._w, this._h);
        } else {
            this.graphics.moveTo(0, 0);
            this.graphics.lineTo( Math.min(this._max_w, this._w+10 ), 0);
            this.graphics.lineTo(this._w, this._h);
            this.graphics.lineTo(0, this._h);
        }

    }

    public get w() {
        return this._w;
    }

    public get h() {
        return this._h;
    }


    public set w(value: number){
        this._w = value;
        this.update();
    }

    public set h(value: number){
        this._h = value;
        this.update();
    }

}

