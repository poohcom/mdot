/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class SineShape extends createjs.Shape {

    public lineSize: number = 1;
    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public drawSine(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number, height:number): void {
        this.graphics.clear();
        this.graphics.beginStroke("#FFF");
        this.graphics.setStrokeStyle(this.lineSize);
        
        this.graphics.moveTo(0, 540);
        var r: number = 0;
        var c: number = Math.PI / 960;

        for (var i: number = 10; i < 1920; i = i + 10) {
            r = c * i;

            this.graphics.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * height);
        }

        this.graphics.lineTo(1920, 540);
    }


    // 가운데 저정렬
    public drawMiddleSine(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number, height: number): void {
        this.graphics.clear();
        this.graphics.beginStroke("#FFF");
        this.graphics.setStrokeStyle(this.lineSize);

        this.graphics.moveTo(0, 540);
        var r: number = 0;
        var c: number = Math.PI / 960;

        for (var i: number = 10; i < 1920; i = i + 10) {
            r = c * i;

            this.graphics.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * (0.7 - Math.cos(r * 2) / 2) *this.fx2(r, a1, a2, a3, b1, b2, b3) * height);
        }

        this.graphics.lineTo(1920, 540);
    }


    public fx2(r: number, a1: number, a2: number, a3: number, b1: number, b2: number, b3): number {
        return Math.sin((-r + a2) * a1) * a3 + Math.sin((-r + b2) * b1) * b3;
        //return Math.sin((-r + a2) * a1) * a3;
    }

}  

