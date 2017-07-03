/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class SineShape extends createjs.Shape {

    public lineSize: number = 1;
    constructor() {
        super();
        this.graphics = new createjs.Graphics();
    }

    public color: string="#fff";
    protected p: any;
    protected l: any;

    protected dx: Array<number>;
    protected dy: Array<number>;

    protected rx: Array<number>;
    protected ry: Array<number>;

    public init(pList: any, lList: any): void {
        this.p = pList;
        this.l = lList;

        this.dx = new Array<number>(this.p.length);
        this.dy = new Array<number>(this.p.length);
        this.rx = new Array<number>(this.p.length);
        this.ry = new Array<number>(this.p.length);

        for (var i: number = 0; i < this.p.length; i = i + 1) {
            this.dx[i] = 0;
            this.dy[i] = 0;
        }

    }

    public updateMouseXY(mx: number, my: number): void {

        var r: number = 0;
        for (var i: number = 0; i < this.p.length; i++) {
            r = (this.p[i][0] - mx) * (this.p[i][0] - mx) + (this.p[i][1] - my) * (this.p[i][1] - my);
            //if (r < 3600 && r > 400) {
            if (r < 10000) {
                this.dx[i] += -(mx - this.p[i][0]) / 50;
                this.dy[i] += -(my - this.p[i][1]) / 50;
            }
        }
    }
    //public updateMouseXY(mx:number, my:number): void {
        
    //    //var r: number = 0;
    //    //for (var i: number = 0; i < this.p.length; i++) {
    //    //    r = (this.p[i][0] - mx) * (this.p[i][0] - mx) + (this.p[i][1] - my) * (this.p[i][1] - my) ;
    //    //    if (r < 2500 * (1 + Math.random()*16 ) ){
    //    //        this.dx[i] += -(mx - this.p[i][0]) / 50);
    //    //        this.dy[i] += -(my - this.p[i][1]) / 50);
    //    //    }

    //    //}

    //    var rx: number = 0;
    //    var rx: number = 0;
    //    var bx: number = Math.random() * 80 + 20;
    //    var by: number = Math.random() * 80 + 20;

    //    for (var i: number = 0; i < this.p.length; i++) {
    //       if ((Math.abs(this.p[i][0] - mx) < bx) && (Math.abs(this.p[i][1] - my) < by))
    //       {
    //            this.dx[i] += -(mx - this.p[i][0]) / 50;
    //            this.dy[i] += -(my - this.p[i][1]) / 50;
    //        }
    //    }
    //}

    private count: number = 0;
    public drawUpdate(): void {
        this.count++;
           // this.updateMouseXY(960 + Math.sin(this.count / 100) * Math.random() * 960/2, 540 + Math.cos(this.count / 100) * Math.random() * 540/2);

        for (var i: number = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i]; 
            this.ry[i] = this.p[i][1] + this.dy[i]; 
        }

        this.graphics.clear();
        this.graphics.beginLinearGradientStroke(["#000", "#FFF"], [0, 1], 0, 0, 1920, 1080);
        this.graphics.setStrokeStyle(this.lineSize);
        this.graphics.beginStroke(this.color);
        this.graphics.beginFill(this.color);
        
        for (var k: number = 0; k < this.p.length; k++) {
            this.graphics.moveTo(this.rx[k], this.ry[k]);    
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }

        this.graphics.endFill();

        var x1: number = 0;
        var x2: number = 0;
        var y1: number;
        var y2: number;

        for (var i: number = 0; i < this.l.length; i++) {
            
            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];

            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];
            
            this.graphics.moveTo(x1, y1);    
            this.graphics.lineTo(x2, y2);
        }
    }
    

    public drawUpdate2(): void {
        for (var i: number = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }

        this.graphics.clear();
        //this.graphics.beginLinearGradientStroke(["#000", "#FFF"], [0, 1], 0, 0, 1920, 1080);
        this.graphics.setStrokeStyle(0);
        //this.graphics.beginStroke(this.color);
        
        for (var k: number = 0; k < this.p.length; k++) {
            //this.graphics.beginStroke(this.p[i][2] );
            this.graphics.beginFill(this.p[k][2]);

            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }

        this.graphics.endFill();

        var x1: number = 0;
        var x2: number = 0;
        var y1: number;
        var y2: number;

        for (var i: number = 0; i < this.l.length; i++) {

            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];

            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];

            this.graphics.beginStroke(this.l[i][2]);
            this.graphics.setStrokeStyle(this.l[i][3]);

            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }
    }


}  

