/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />

class SceneAbout16thCommittee extends Scene {

    private static _instance: SceneAbout16thCommittee = null;

    constructor() {
        super();
        if (SceneAbout16thCommittee._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thCommittee._instance = this;

        this.professor19 = this.getLabel('sixteenthmdot19');
        this.professor19.x = 733;
        this.professor19.y = 347;
        this.addChild(this.professor19);



        this.professor2 = this.getLabel('sixteenthmdot2');
        this.professor2.x = 662;
        this.professor2.y = 345;
        this.addChild(this.professor2);

        this.professor3 = this.getLabel('sixteenthmdot3');
        this.professor3.x = 661;
        this.professor3.y = 377;
        this.addChild(this.professor3);



        this.professor4 = this.getLabel('sixteenthmdot4');
        this.professor4.x = 1042;
        this.professor4.y = 486;
        this.addChild(this.professor4);

        this.professor5 = this.getLabel('sixteenthmdot5');
        this.professor5.x = 1041;
        this.professor5.y = 518;
        this.addChild(this.professor5);



        this.professor6 = this.getLabel('sixteenthmdot6');
        this.professor6.x = 1276;
        this.professor6.y = 314;
        this.addChild(this.professor6);

        this.professor7 = this.getLabel('sixteenthmdot7');
        this.professor7.x = 1275;
        this.professor7.y = 346;
        this.addChild(this.professor7);




        this.professor8 = this.getLabel('sixteenthmdot8');
        this.professor8.x = 393;
        this.professor8.y = 529;
        this.addChild(this.professor8);

        this.professor9 = this.getLabel('sixteenthmdot9');
        this.professor9.x = 392;
        this.professor9.y = 561;
        this.addChild(this.professor9);




        this.professor10 = this.getLabel('sixteenthmdot10');
        this.professor10.x = 749;
        this.professor10.y = 712;
        this.addChild(this.professor10);

        this.professor11 = this.getLabel('sixteenthmdot11');
        this.professor11.x = 748;
        this.professor11.y = 744;
        this.addChild(this.professor11);




        this.professor12 = this.getLabel('sixteenthmdot12');
        this.professor12.x = 1458;
        this.professor12.y = 560;
        this.addChild(this.professor12);

        this.professor13 = this.getLabel('sixteenthmdot13');
        this.professor13.x = 1457;
        this.professor13.y = 592;
        this.addChild(this.professor13);


        this.professor14 = this.getLabel('sixteenthmdot14');
        this.professor14.x = 890;
        this.professor14.y = 176;
        this.addChild(this.professor14);

        this.professor15 = this.getLabel('sixteenthmdot15');
        this.professor15.x = 889;
        this.professor15.y = 208;
        this.addChild(this.professor15);



        this.professor16 = this.getLabel('sixteenthmdot16');
        this.professor16.x = 1229;
        this.professor16.y = 744;
        this.addChild(this.professor16);

        this.professor17 = this.getLabel('sixteenthmdot17');
        this.professor17.x = 1326;
        this.professor17.y = 744;
        this.addChild(this.professor17);


        this.professor17_1 = this.getLabel('sixteenthmdot17_1');
        this.professor17_1.x = 1326;
        this.professor17_1.y = 744+98;
        this.addChild(this.professor17_1);


        this.professor18 = this.getLabel('sixteenthmdot18');
        this.professor18.x = 1034;
        this.professor18.y = 175;
        this.addChild(this.professor18);


        this.init();

    }

    public static instance(): SceneAbout16thCommittee {
        if (SceneAbout16thCommittee._instance === null) {
            SceneAbout16thCommittee._instance = new SceneAbout16thCommittee();
        }
        return SceneAbout16thCommittee._instance;
    }

    private professor19: createjs.DOMElement;
    private professor2: createjs.DOMElement;
    private professor3: createjs.DOMElement;
    private professor4: createjs.DOMElement;
    private professor5: createjs.DOMElement;
    private professor6: createjs.DOMElement;
    private professor7: createjs.DOMElement;
    private professor8: createjs.DOMElement;
    private professor9: createjs.DOMElement;
    private professor10: createjs.DOMElement;
    private professor11: createjs.DOMElement;
    private professor12: createjs.DOMElement;
    private professor13: createjs.DOMElement;
    private professor14: createjs.DOMElement;
    private professor15: createjs.DOMElement;
    private professor16: createjs.DOMElement;
    private professor17: createjs.DOMElement;
    private professor17_1: createjs.DOMElement;
    
    private professor18: createjs.DOMElement;

    private circle1: createjs.Bitmap;
    private circle2: createjs.Bitmap;
    private circle3: createjs.Bitmap;
    private circle4: createjs.Bitmap;
    private circle5: createjs.Bitmap;
    private circle6: createjs.Bitmap;
    private circle7: createjs.Bitmap;
    private circle8: createjs.Bitmap;


    public init(): void {
        this.initBubble();

        this.circle1 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle1.x = 586;
        this.circle1.y = 348;

        this.circle1.addEventListener("mouseover", this.onCircleStart);
        this.circle1.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle1);

        this.circle2 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle2.x = 973;
        this.circle2.y = 490;

        this.circle2.addEventListener("mouseover", this.onCircleStart);
        this.circle2.addEventListener("mouseout", this.onCircleStop);


        this.addChild(this.circle2);

        this.circle3 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle3.x = 1205;
        this.circle3.y = 317;

        this.circle3.addEventListener("mouseover", this.onCircleStart);
        this.circle3.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle3);

        this.circle4 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle4.x = 316;
        this.circle4.y = 532;

        this.circle4.addEventListener("mouseover", this.onCircleStart);
        this.circle4.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle4);

        this.circle5 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle5.x = 680;
        this.circle5.y = 715;

        this.circle5.addEventListener("mouseover", this.onCircleStart);
        this.circle5.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle5);

        this.circle6 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle6.x = 1390;
        this.circle6.y = 561;

        this.circle6.addEventListener("mouseover", this.onCircleStart);
        this.circle6.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle6);


        this.circle7 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle7.x = 825;
        this.circle7.y = 177;

        this.circle7.addEventListener("mouseover", this.onCircleStart);
        this.circle7.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle7);


        this.circle8 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle8.x = 1160;
        this.circle8.y = 776-36;

        this.circle8.addEventListener("mouseover", this.onCircleStart);
        this.circle8.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle8);



    }

    public isCircle: boolean = false;
    public circleX: number = 0;
    public circleY: number = 0;


    public onCircleStart(event: createjs.MouseEvent) {
        SceneAbout16thCommittee.instance().isCircle = true;
        SceneAbout16thCommittee.instance().circleX = (<createjs.Bitmap>event.target).x;
        SceneAbout16thCommittee.instance().circleY = (<createjs.Bitmap>event.target).y;
        SceneAbout16thCommittee.instance().initGraphic();
    }

    public onCircleStop(event: createjs.MouseEvent) {
        SceneAbout16thCommittee.instance().isCircle = false;
        SceneAbout16thCommittee.instance().clearGraphic();
    }

    public startScene(): void {
        this.count = 0;
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);

        this.showLabel(this.professor19);
        this.showLabel(this.professor2);
        this.showLabel(this.professor3);
        this.showLabel(this.professor4);
        this.showLabel(this.professor5);
        this.showLabel(this.professor6);
        this.showLabel(this.professor7);
        this.showLabel(this.professor8);
        this.showLabel(this.professor9);
        this.showLabel(this.professor10);
        this.showLabel(this.professor11);
        this.showLabel(this.professor12);
        this.showLabel(this.professor13);

        this.showLabel(this.professor14);
        this.showLabel(this.professor15);
        this.showLabel(this.professor16);
        this.showLabel(this.professor17);
        this.showLabel(this.professor17_1);
        
        this.showLabel(this.professor18);
    }

    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {

            this.removeLabel(this.professor19);
            this.removeLabel(this.professor2);
            this.removeLabel(this.professor3);
            this.removeLabel(this.professor4);
            this.removeLabel(this.professor5);
            this.removeLabel(this.professor6);
            this.removeLabel(this.professor7);
            this.removeLabel(this.professor8);
            this.removeLabel(this.professor9);
            this.removeLabel(this.professor10);
            this.removeLabel(this.professor11);
            this.removeLabel(this.professor12);
            this.removeLabel(this.professor13);

            this.removeLabel(this.professor14);
            this.removeLabel(this.professor15);
            this.removeLabel(this.professor16);
            this.removeLabel(this.professor17);
            this.removeLabel(this.professor17_1);
            
            this.removeLabel(this.professor18);
        };

        this.removeEventListener("tick", this.drawing);


    }

    public drawing(event: Event): void {
        (<SceneAbout16thConceptPage3>event.target).drawLines();
    }

    public drawLines(): void {
        this.count++;

        this.updateBubble();

        if (this.isCircle == true) {
            for (var i: number = 0; i < this.shapeList.length; i++) {
                this.shapeList[i].drawLine();
            }
        }
    }


    private circlePosX: number[] = [586, 973, 1205, 316, 680, 1390, 825, 1160];
    private circlePosY: number[] = [348, 490, 317, 532, 715, 561, 177, 776];

    public initBubble(): void {

        for (var i: number = 0; i < 8; i++) {
            for (var j: number = 0; j < 5; j++) {
                var circle: Circle = new Circle();
                circle.index = i;
                circle.init(2 + 3 * Math.random(), 0.2 + 0.5 * Math.random());
                circle.x = this.circlePosX[i] + 25;
                circle.y = this.circlePosY[i] + 25 + 50;
                this.circleList.push(circle);
                this.addChild(circle);
            }
        }
    }

    public updateBubble(): void {
        for (var i: number = 0; i < this.circleList.length; i++) {

            this.circleList[i].x = this.circleList[i].x + Math.sin(this.count / 90 * i / 3);

            this.circleList[i].y = this.circleList[i].y - 1;
            this.circleList[i].alpha = this.circleList[i].alpha - 0.005;

            if (this.circleList[i].alpha <= 0) {
                var index: number = this.circleList[i].index;
                this.circleList[i].init(2 + 3 * Math.random(), 0.2 + 0.5 * Math.random());
                this.circleList[i].x = this.circlePosX[index] + 25;
                this.circleList[i].y = this.circlePosY[index] + 25 + 50;

            }
        }
    }

    private arcSize: number[] = [15, 4, -7, -18, -29];

    public initGraphic(): void {

        for (var i: number = 0; i < this.arcSize.length; i++) {
            var shape: CircleLine = new CircleLine();
            shape.x = this.circleX + 24;
            shape.y = this.circleY + 25;

            shape.init(15, 59, this.arcSize[i]);
            this.addChild(shape);
            this.shapeList.push(shape);
        }
    }

    public clearGraphic(): void {


        for (var i: number = 0; i < this.shapeList.length; i++) {
            this.removeChild(this.shapeList[i]);
        }

        this.shapeList = [];
    }



    private shapeList: CircleLine[] = [];




} 


