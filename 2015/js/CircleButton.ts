/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />

class CircleButton extends createjs.Container {

    public _base: createjs.Bitmap;
    public _imageOrUrl: createjs.Bitmap;
    //public _center1: number;
    //public _center2: number;
    public index: number;
    public isMouseOver: boolean = false;
    public rad: number = 0;
    public ts: number = 1;

    constructor(imageOrUrl: HTMLImageElement, base: HTMLImageElement, center1: number, center2: number) {
        super();

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, center2 * 2, center2 * 2);
        hit.x = -center2;
        hit.y = -center2;
        this.hitArea = hit;


        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = center1;
        this._imageOrUrl.regY = center1;
        

        this.addChild(this._imageOrUrl);

        this._base = new createjs.Bitmap(base);
        this._base.regX = center2;
        this._base.regY = center2;
        
        
        this._base.visible = false;
        this._base.scaleX = 0.1;
        this._base.scaleY = 0.1;
        this._base.alpha = 0;
        this.addChild(this._base);
        this.index = 0;

        //this.regX = center1;
        //this.regY = center1;
        //this._center1 = center1;
        //this._center2 = center2;

        this.on("mouseover", function (event: createjs.MouseEvent) {
            (<CircleButton>event.currentTarget).setMouseover();
        });

        this.on("mouseout", function (event: createjs.MouseEvent) {
            (<CircleButton>event.currentTarget).setMouseout();
        });
    }

    public setMouseover(): void {
        this._imageOrUrl.visible = false;
        this._base.visible = true;
        this.isMouseOver = true;

        this._base.alpha = 0;
        this._base.scaleX = 0.1;
        this._base.scaleY = 0.1;

        createjs.Tween.get(this._base, { loop: false }).to({ alpha: 1, scaleX: this.ts, scaleY: this.ts }, 500, createjs.Ease.circOut);
    }


    public setMouseout(): void {
        this._imageOrUrl.visible = true;
        this._base.visible = false;
        this.isMouseOver = false;
    }




}  




//class CircleButton extends createjs.Bitmap {
    
//    public _base: HTMLImageElement;
//    public _imageOrUrl: HTMLImageElement;
//    public _center1: number;
//    public _center2: number;
//    public index: number;
    

//    constructor(imageOrUrl: HTMLImageElement, base: HTMLImageElement, center1:number, center2:number) {
//        super(imageOrUrl);
//        this._imageOrUrl = imageOrUrl;
//        this._base = base;
//        this.index = 0;

//        var hit: createjs.Shape = new createjs.Shape();
//        hit.graphics.beginFill("#000").drawRect(0, 0, center2 * 2, center2 * 2);
//        this.hitArea = hit;

//        this.regX = center1;
//        this.regY = center1;
//        this._center1 = center1;
//        this._center2 = center2;

//        this.on("mouseover", function (event: MouseEvent) {
//            (<CircleButton>event.target).image = (<CircleButton>event.target)._base;
//            (<CircleButton>event.target).regX = (<CircleButton>event.target)._center2;
//            (<CircleButton>event.target).regY = (<CircleButton>event.target)._center2;
//        });

//        this.on("mouseout", function (event: MouseEvent) {
//            (<CircleButton>event.target).image = (<CircleButton>event.target)._imageOrUrl;
//            (<CircleButton>event.target).regX = (<CircleButton>event.target)._center1;
//            (<CircleButton>event.target).regY = (<CircleButton>event.target)._center1;
//        });
//    }
//}  

