/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class DarkButton extends createjs.Shape {

    //public _imageOrUrl: HTMLImageElement;
    
    public w: number = 0;
    public h: number = 0;

    constructor( w: number, h: number) {
        super();

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
        this.regX = w / 2;
        this.regY = h / 2;

        this.w = w;
        this.h = h;

        this.graphics = new createjs.Graphics();
        this.graphics.clear();


        this.graphics.clear();
        this.graphics.beginFill("#000");
        this.graphics.drawRect(0,0,w,h);

        this.alpha = 0.0;
    }

    public setPos(x: number, y: number) {
        this.x = x + this.w / 2; 
        this.y = y + this.h / 2; 
    }

    public setVisible(): void {
        createjs.Tween.removeTweens(this);
        //this.scaleX = 0;
        //this.scaleY = 0;
        this.alpha = 0.0;
        createjs.Tween.get(this, { loop: false }).to({ alpha:0.3 }, 500, createjs.Ease.circOut);
        
    }


    public setInvisible(): void {
        //this.scaleX = 1;
        //this.scaleY = 1;

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0.0 }, 500, createjs.Ease.circOut);
        
    }



}  


