/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />

class SceneMainMainPage extends Scene {

    private static _instance: SceneMainMainPage = null;
    public static instance(): SceneMainMainPage {
        if (SceneMainMainPage._instance === null) {
            SceneMainMainPage._instance = new SceneMainMainPage();
        }
        return SceneMainMainPage._instance;
    }

    constructor() {
        super();
        
        if (SceneMainMainPage._instance) {
            throw new Error("Error: Config instead of new.");
        }

        SceneMainMainPage._instance = this;

        this.init();
        
    }
    
    public main_page_text_image: createjs.Bitmap;
    public main_page_title: createjs.Bitmap;

    public shape: createjs.Shape;
    public g: createjs.Graphics;

    public shape1: SineShape;
    public shape2: SineShape;
    public shape3: SineShape;
    public shape4: SineShape;
    public shape5: SineShape;

    public init(): void {


        this.shape1 = new SineShape();
        this.shape1.alpha = 0.4;
        this.shape1.lineSize = 0.8;
        this.shape2 = new SineShape();
        this.shape2.alpha = 0.7;
        this.shape2.lineSize = 1;
        this.shape3 = new SineShape();
        this.shape3.alpha = 0.7;
        this.shape3.lineSize = 1;
        this.shape4 = new SineShape();
        this.shape4.alpha = 0.5;
        this.shape4.lineSize = 0.5;
        this.shape5 = new SineShape();
        this.shape5.alpha = 0.4;
        this.shape5.lineSize = 0.8;

        this.addChild(this.shape1);
        this.addChild(this.shape2);
        this.addChild(this.shape3);
        this.addChild(this.shape4);
        this.addChild(this.shape5);



        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.6;
        this.shape.graphics = this.g;
        this.addChild(this.shape);

        this.main_page_text_image = new createjs.Bitmap(this.getTex("main_page_text_image"));
        this.main_page_text_image.x = 227;
        this.main_page_text_image.y = 679;
        this.addChild(this.main_page_text_image);

        this.main_page_title = new createjs.Bitmap(this.getTex("title_1"));
        this.main_page_title.x = 90+50;
        this.main_page_title.y = 322;
        this.addChild(this.main_page_title);

        this.startScene();




    }

    public initBubble(color: string): void {

        for (var i: number = 0; i < 40; i++) {
            var circle: Circle = new Circle();
            circle.initColor(2 + 3 * Math.random(), 0.2 + 0.2 * Math.random(), color);
            circle.x = 1520 * Math.random() + 200;
            circle.y = 540 * Math.random();
            circle.alpha = 0;
            this.circleList.push(circle);
            this.addChild(circle);
        }
    }

    public updateBubble(): void {
        for (var i: number = 0; i < this.circleList.length; i++) {

            this.circleList[i].x = this.circleList[i].x + Math.sin(this.count / 90 * i / 3);
            
            this.circleList[i].y = this.circleList[i].y - 2;
            if (this.circleList[i].y < 0) {
                this.circleList[i].alpha = 0.2 + 0.2 * Math.random();
                this.circleList[i].y = 520 + Math.random() * 40;
            }
        }
    }
    public initStart: boolean = true;

    public startScene(): void {
        if (this.initStart == true) {
            this.initStart = false;

            this.initBubble("#FFF");
            this.count = 0;
            this.addEventListener("tick", this.drawing);
            this.alpha = 1;

            this.main_page_text_image.alpha = 0;
            this.main_page_title.alpha = 0;

            createjs.Tween.get(this.main_page_text_image, { loop: false }).wait(5000).to({ alpha: 1 }, 1000, createjs.Ease.linear);

            createjs.Tween.get(this.main_page_title, { loop: false }).wait(4000).to({ alpha: 1 }, 1000, createjs.Ease.linear).call(function () {

                SceneMainMainPage.instance().addEventListener("tick", SceneMainMainPage.instance().drawAni);
            }
                );

        } else {

            this.main_page_text_image.alpha = 1;
            this.main_page_title.alpha = 1;
            this.initBubble("#FFF");
            this.addEventListener("tick", this.drawing);
            this.alpha = 1;
            this.addEventListener("tick", SceneMainMainPage.instance().drawAni);
        }
        
    }


    public drawing(event:Event): void {
        SceneMainMainPage.instance().drawLines2();
    }

    public drawAni(event: Event): void {
        SceneMainMainPage.instance().drawMovieClip();
    }

    public gheight: number = 0;
    public gheight2: number = 0;

    public drawLines(): void {
        this.count++;

        var r: number = this.count / 5;

        this.gheight = Math.sin(r / 29) / 4 + 0.75 ;

        if (this.count < 60) {
            var h1: number = Math.sin(this.count / 60 * Math.PI / 2);
            this.gheight = this.gheight * h1;
        }

        this.gheight2 = Math.cos(r / 37);
        this.g.clear();
        this.g.setStrokeStyle(1.5);
        this.g.beginStroke("#FFF");
        
        this.drawLine(-3 + this.gheight2 / 2, 2+4 * this.gheight2, r / 7, this.gheight * 19 + r / 180);
        this.g.setStrokeStyle(0.5);
        this.drawLine(-4 + this.gheight2 / 3, 2+4 , 2*r / 7, -this.gheight * 13 + r / 180);
        this.g.setStrokeStyle(2.0);
        this.drawLine(-5 + this.gheight2 / 4, 2 + this.gheight2, r / 7, this.gheight * 7 + r / 180);
        this.g.setStrokeStyle(1.0);
        this.drawLine(-6 + this.gheight2 / 5, 2.5 + 3, r / 10, this.gheight * 10 + r / 180);

        if (this.count > 80) {
            this.updateBubble();
        }

    }

    public dr: number = 0;
    public drawLines2(): void {
        this.count++;

        this.gheight = 1;//Math.sin(r / 29) / 4 + 0.75;

        this.dr = this.dr + 0.035 + Math.sin(this.count / 15)  / 100 * 1.5;

        var sr: number = this.count / 50;

        if (this.count < 60) {
            var h1: number = Math.sin(this.count / 60 * Math.PI / 2);
            this.gheight = this.gheight * h1;
        }
        
        var r: number =this.dr;
        this.gheight2 = Math.sin(this.count / 29) / 4 + 0.75;
        
        //var dd: number = 30 / 50 * 60 * 60;
        //                    가로 , 진행, 높이,           가로,                , 진행,               , 높이
        //this.shape1.drawSine(960 / 800, r * 0.9 + dd, 180, 1 + this.gheight2, 0.5               , 45, this.gheight );
        //this.shape2.drawSine(960 / 300.0, sr * 0.8 + dd, 40, 1 + this.gheight2 * 2, 0.5                 , 10, this.gheight );
        //this.shape3.drawSine(960 / 550.0, r * 1.1+dd, 100, 1 + this.gheight2 * 3, 0.5                  , 25, this.gheight );
        //this.shape4.drawSine(960 / 60.0, sr*0.5+dd , 17,   1                    , 0.5, 8, this.gheight );
        //this.shape5.drawSine(960 / 400.0, r+dd, 100,       1                    , 0.5, 25, this.gheight );

        this.shape1.drawSine(960 / 800, r * 0.9 , 180, 1 + this.gheight2, 0.5, 45, this.gheight);
        this.shape2.drawSine(960 / 300.0, sr * 0.8 , 40, 1 + this.gheight2 * 2, 0.5, 10, this.gheight);
        this.shape3.drawSine(960 / 550.0, r * 1.1 , 100, 1 + this.gheight2 * 3, 0.5, 25, this.gheight);
        this.shape4.drawMiddleSine(960 / 60.0, sr * 0.5 , 17, 1, 0.5, 8, this.gheight);
        this.shape5.drawSine(960 / 400.0, r , 100, 1, 0.5, 25, this.gheight);

        if (this.count > 80) {
            this.updateBubble();
        }

    }


    public movieclip: number[] = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        155
    ];

    public drawMovieClip(): void {
        var index: number = this.count % this.movieclip.length;
        this.main_page_title.image = this.getTex("title_" + this.movieclip[index]);
    }


    public drawLine(a1: number, a2: number, b1: number, b2: number): void {
        this.g.moveTo(0, 540);
        var r: number = 0;
        var c: number = Math.PI / 960;

        for (var i: number = 20; i < 1920 ; i = i + 10) {
            r = c * i;

            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight);
        }
        this.g.lineTo(1920, 540);
    }

    public drawLine2(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number): void {
        this.g.moveTo(0, 540);
        var r: number = 0;
        var c: number = Math.PI / 960;

        for (var i: number = 20; i < 1920; i = i + 10) {
            r = c * i;

            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }

        this.g.lineTo(1920, 540);

    }

    public fx(r: number, a1: number, a2: number, b1: number, b2: number): number {
        return Math.sin(r * a1) * 100 + Math.sin(r * a2) * 50;
    }

    public fx2(r: number, a1: number, a2: number, a3: number, b1: number, b2: number, b3): number {
        //return Math.sin((-r + a2) * a1) * a3 + Math.sin((-r + b2) * b1) * b3;
        return Math.sin((-r + a2) * a1) * a3;
    }
    
    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
        this.removeEventListener("tick", this.drawAni);
        
        createjs.Tween.removeTweens(this.main_page_title);

        for (var i: number = 0; i < this.circleList.length; i++) {
            this.removeChild(this.circleList[i]);
        }
        this.circleList = [];
    }

} 


