﻿/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />

class SceneAbout16thConceptPage3 extends Scene {

    private static _instance: SceneAbout16thConceptPage3 = null;

    constructor() {
        super();
        if (SceneAbout16thConceptPage3._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thConceptPage3._instance = this;

        this.professor1 = this.getLabel('sixteenthmdot14');
        this.professor1.x = 700;
        this.professor1.y = 453;
        this.addChild(this.professor1);


        this.professor2 = this.getLabel('sixteenthmdot2');
        this.professor2.x = 630;
        this.professor2.y = 453;
        this.addChild(this.professor2);

        this.professor3 = this.getLabel('sixteenthmdot3');
        this.professor3.x = 629;
        this.professor3.y = 475;
        this.addChild(this.professor3);

        this.professor4 = this.getLabel('sixteenthmdot4');
        this.professor4.x = 973;
        this.professor4.y = 453;
        this.addChild(this.professor4);

        this.professor5 = this.getLabel('sixteenthmdot5');
        this.professor5.x = 972;
        this.professor5.y = 475;
        this.addChild(this.professor5);

        this.professor6 = this.getLabel('sixteenthmdot6');
        this.professor6.x = 1283;
        this.professor6.y = 453;
        this.addChild(this.professor6);

        this.professor7 = this.getLabel('sixteenthmdot7');
        this.professor7.x = 1283;
        this.professor7.y = 475;
        this.addChild(this.professor7);

        this.professor8 = this.getLabel('sixteenthmdot8');
        this.professor8.x = 629;
        this.professor8.y = 681;
        this.addChild(this.professor8);

        this.professor9 = this.getLabel('sixteenthmdot9');
        this.professor9.x = 629;
        this.professor9.y = 703;
        this.addChild(this.professor9);

        this.professor10 = this.getLabel('sixteenthmdot10');
        this.professor10.x = 972;
        this.professor10.y = 681;
        this.addChild(this.professor10);

        this.professor11 = this.getLabel('sixteenthmdot11');
        this.professor11.x = 972;
        this.professor11.y = 703;
        this.addChild(this.professor11);


        this.professor12 = this.getLabel('sixteenthmdot12');
        this.professor12.x = 1283;
        this.professor12.y = 681;
        this.addChild(this.professor12);

        this.professor13 = this.getLabel('sixteenthmdot13');
        this.professor13.x = 1283;
        this.professor13.y = 703;
        this.addChild(this.professor13);


        this.init();

    }

    public static instance(): SceneAbout16thConceptPage3 {
        if (SceneAbout16thConceptPage3._instance === null) {
            SceneAbout16thConceptPage3._instance = new SceneAbout16thConceptPage3();
        }
        return SceneAbout16thConceptPage3._instance;
    }

    private professor1: createjs.DOMElement;
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

    private circle1: createjs.Bitmap;
    private circle2: createjs.Bitmap;
    private circle3: createjs.Bitmap;
    private circle4: createjs.Bitmap;
    private circle5: createjs.Bitmap;
    private circle6: createjs.Bitmap;


    public init(): void {
        this.initBubble();




        this.circle1 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle1.x = 556;
        this.circle1.y = 442;

        this.circle1.addEventListener("mouseover", this.onCircleStart);
        this.circle1.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle1);

        this.circle2 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle2.x = 903;
        this.circle2.y = 442;

        this.circle2.addEventListener("mouseover", this.onCircleStart);
        this.circle2.addEventListener("mouseout", this.onCircleStop);


        this.addChild(this.circle2);

        this.circle3 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle3.x = 1225;
        this.circle3.y = 442;

        this.circle3.addEventListener("mouseover", this.onCircleStart);
        this.circle3.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle3);

        this.circle4 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle4.x = 556;
        this.circle4.y = 669;

        this.circle4.addEventListener("mouseover", this.onCircleStart);
        this.circle4.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle4);

        this.circle5 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle5.x = 903;
        this.circle5.y = 669;

        this.circle5.addEventListener("mouseover", this.onCircleStart);
        this.circle5.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle5);

        this.circle6 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle6.x = 1225;
        this.circle6.y = 669;

        this.circle6.addEventListener("mouseover", this.onCircleStart);
        this.circle6.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle6);


    }

    public isCircle: boolean = false;
    public circleX: number = 0;
    public circleY: number = 0;


    public onCircleStart(event: createjs.MouseEvent) {
        SceneAbout16thConceptPage3.instance().isCircle = true;
        SceneAbout16thConceptPage3.instance().circleX = (<createjs.Bitmap>event.target).x;
        SceneAbout16thConceptPage3.instance().circleY = (<createjs.Bitmap>event.target).y;
        SceneAbout16thConceptPage3.instance().initGraphic();
    }

    public onCircleStop(event: createjs.MouseEvent) {
        SceneAbout16thConceptPage3.instance().isCircle = false;
        SceneAbout16thConceptPage3.instance().clearGraphic();
    }

    public startScene(): void {
        this.count = 0;
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);

        this.showLabel(this.professor1);
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
    }

    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {
            
            this.removeLabel(this.professor1);
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

    private circlePosX: number[] = [556, 903, 1225, 556, 903, 1225];
    private circlePosY: number[] = [442, 442, 442, 669, 669, 669];

    public initBubble(): void {

        for (var i: number = 0; i < 6; i++) {
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


