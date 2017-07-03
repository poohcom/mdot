/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneStar extends Scene {

    private static _instance: SceneStar = null;
    public static instance(): SceneStar {
        if (SceneStar._instance === null) {
            SceneStar._instance = new SceneStar();
        }
        return SceneStar._instance;
    }

    public circleList: Circle[] = [];

    constructor() {
        super();

        if (SceneStar._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneStar._instance = this;
        this.init();
    }

    public init(): void {

        for (var i: number = 0; i < 70; i++) {
            var circle: Circle = new Circle();
            circle.init(0.5, 1);
            circle.x = 1920 * Math.random();
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }

        for (var i: number = 0; i < 40; i++) {
            var circle: Circle = new Circle();
            circle.init(0.7, 1);
            circle.x = 1920 * Math.random();
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }


        for (var i: number = 0; i < 15; i++) {
            var circle: Circle = new Circle();
            circle.init(1, 1);
            circle.x = 1920 * Math.random();
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }

        this.startScene();
    }

    private mx: number = 0;
    private my: number = 0;

    public updateMouseXY(mx1: number, my1: number): void {
        this.mx = (mx1-1920/2)/100;
        this.my = (my1-1080/2)/100;
    }

    public startScene(): void {
    }

    public scroll(dx: number, dy: number, time: number) {
        // 초
        var ddx: number = dx * 1920 / 30 / time;
        var ddy: number = dy * 1080 / 30 / time;
        this.mx = ddx;
        this.my = ddy;
        
        createjs.Tween.get(this).to({ mx: ddx, my: ddy }, (time) * 1000, createjs.Ease.quadInOut);
    }

    public playScene(): void {

        this.mx *= 0.9;
        this.my *= 0.9;

        for (var i: number = 0; i < this.circleList.length; i++) {
            this.circleList[i].update(this.mx,this.my);
        }
    }

    public stopScene(): void {
        //createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    }

}


