/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class TitleCircle extends createjs.Container {


    public _imageOrUrl: createjs.Bitmap;

    constructor(imageOrUrl: HTMLImageElement, center1: number) {
            super();

            this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
            this._imageOrUrl.regX = center1;
            this._imageOrUrl.regY = center1;
            this.addChild(this._imageOrUrl);


            for (var i: number = 0; i < 4; i++) {

                var c: Circle = new Circle();
                this.list.push(c);
                this.addChild(c);
            }

    }

    public list: Circle[] = [];

    public r: number = 0;
    public count: number = 0;

    
    public drawCircle(): void {
        
        this.count++;
        for (var i: number = 0; i < this.list.length; i++) {
            this.list[i].initLine(((i * 10 + this.count/2) % 40)/2+20,  1-Math.abs( ( (i * 10 + this.count/2) % 40 / 20 ) - 1  ) ) ;

            //this.list[i].initLine((i * 10 + this.count) % 40 + 20, 1 - (i * 10 + this.count) % 40 / 20);
        }

    }




}  

