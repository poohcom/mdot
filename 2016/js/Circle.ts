/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class Circle extends createjs.Shape{
    
    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public index: number = 0;
    public _r: number = 0;

    public init(r: number, a: number): void {
        this._r = r;
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);

        //#7f8386 / #929699 / #aaaeb1 / #b9babc

        switch (Math.floor(Math.random() * 4)) {
            case 0:
                //this.graphics.beginStroke("#7f8386");
                this.graphics.beginStroke("#66686a");
                this.graphics.beginFill("#66686a");

                break;
            case 1:
                //this.graphics.beginStroke("#929699");
                this.graphics.beginStroke("#595a5f");
                this.graphics.beginFill("#595a5f");

                break;

            case 2:
                //this.graphics.beginStroke("#aaaeb1");
                this.graphics.beginStroke("#5e5e62");
                this.graphics.beginFill("#5e5e62");

                break;
            case 3:
                //this.graphics.beginStroke("#b9babc");
                this.graphics.beginStroke("#7c7d82");
                this.graphics.beginFill("#7c7d82");

                break;

        }

        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;
    }

    public update(mx: number, my: number): void {
        
        this.x = this.x - mx + (this._r-0.6) * 3;
        this.y = this.y - my;

        if (this.x < 0) {
            this.x = 1920;
        }

        if (this.x > 1920) {
            this.x = 0;
        }

        if (this.y < 0) {
            this.y = 1080;
        }

        if (this.y > 1080) {
            this.y = 0;
        }

    }
}  

