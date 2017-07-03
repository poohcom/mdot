/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />

class SceneAboutProfessors extends Scene {

    private static _instance: SceneAboutProfessors = null;

    constructor() {
        super();
        if (SceneAboutProfessors._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutProfessors._instance = this;

        this.alpha = 0;
        //this.assets.loadManifest([
        //    { id: "cicle", src: "assets/about_media_design/2_professors/cicle.png" }
        //]);
        var dx: number = -50;
        var dy: number = -100;

        this.professor2 = this.getLabel('professor2');
        this.professor2.x = 630+dx;
        this.professor2.y = 453+dy;
        this.addChild(this.professor2);

        this.professor3 = this.getLabel('professor3');
        this.professor3.x = 629 + dx;;
        this.professor3.y = 495 + dy;;
        this.addChild(this.professor3);

        this.professor4 = this.getLabel('professor4');
        this.professor4.x = 973 + dx;;
        this.professor4.y = 453 + dy;;
        this.addChild(this.professor4);

        this.professor5 = this.getLabel('professor5');
        this.professor5.x = 972 + dx;;
        this.professor5.y = 495 + dy;;
        this.addChild(this.professor5);

        this.professor6 = this.getLabel('professor6');
        this.professor6.x = 1283 + dx;;
        this.professor6.y = 453 + dy;;
        this.addChild(this.professor6);

        this.professor7 = this.getLabel('professor7');
        this.professor7.x = 1283 + dx;;
        this.professor7.y = 495 + dy;;
        this.addChild(this.professor7);

        this.professor8 = this.getLabel('professor8');
        this.professor8.x = 629 + dx;;
        this.professor8.y = 681 + dy;;
        this.addChild(this.professor8);

        this.professor9 = this.getLabel('professor9');
        this.professor9.x = 629 + dx;;
        this.professor9.y = 723 + dy;;
        this.addChild(this.professor9);

        this.professor10 = this.getLabel('professor10');
        this.professor10.x = 972 + dx;;
        this.professor10.y = 681 + dy;;
        this.addChild(this.professor10);

        this.professor11 = this.getLabel('professor11');
        this.professor11.x = 972 + dx;;
        this.professor11.y = 723 + dy;;
        this.addChild(this.professor11);

        this.init();
    }

    public static instance(): SceneAboutProfessors {
        if (SceneAboutProfessors._instance === null) {
            SceneAboutProfessors._instance = new SceneAboutProfessors();
        }


        return SceneAboutProfessors._instance;
    }

    
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

    private circle1: createjs.Bitmap;
    private circle2: createjs.Bitmap;
    private circle3: createjs.Bitmap;
    private circle4: createjs.Bitmap;
    private circle5: createjs.Bitmap;

    
    public init(): void {
        this.initBubble();


        var dx: number = -50;
        var dy: number = -100;


        this.circle1 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle1.x = 556+dx;
        this.circle1.y = 442 + dy;

        this.circle1.addEventListener("mouseover", this.onCircleStart);
        this.circle1.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle1);

        this.circle2 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle2.x = 903 + dx;;
        this.circle2.y = 442 + dy;

        this.circle2.addEventListener("mouseover", this.onCircleStart);
        this.circle2.addEventListener("mouseout", this.onCircleStop);


        this.addChild(this.circle2);

        this.circle3 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle3.x = 1225 + dx;;
        this.circle3.y = 442 + dy;

        this.circle3.addEventListener("mouseover", this.onCircleStart);
        this.circle3.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle3);

        this.circle4 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle4.x = 556 + dx;;
        this.circle4.y = 669 + dy;

        this.circle4.addEventListener("mouseover", this.onCircleStart);
        this.circle4.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle4);

        this.circle5 = new createjs.Bitmap(this.getTex("cicle"));
        this.circle5.x = 903 + dx;;
        this.circle5.y = 669 + dy;

        this.circle5.addEventListener("mouseover", this.onCircleStart);
        this.circle5.addEventListener("mouseout", this.onCircleStop);

        this.addChild(this.circle5);
        
    }

    public isCircle: boolean = false;
    public circleX: number = 0;
    public circleY: number = 0;

    public onCircleStart(event: createjs.MouseEvent) {
        SceneAboutProfessors.instance().isCircle = true;
        SceneAboutProfessors.instance().circleX = (<createjs.Bitmap>event.target).x;
        SceneAboutProfessors.instance().circleY = (<createjs.Bitmap>event.target).y;
        SceneAboutProfessors.instance().initGraphic();
    }

    public onCircleStop(event: createjs.MouseEvent) {
        SceneAboutProfessors.instance().isCircle = false;
        SceneAboutProfessors.instance().clearGraphic();
    }

    public startScene(): void {
        this.count = 0;
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 1000, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);

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
    }

    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {
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
        };

        this.removeEventListener("tick", this.drawing);


    }
    
    public playScene(): void {
    }

    public drawing(event: Event): void {
        (<SceneAboutProfessors>event.target).drawLines();
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

    //private circlePosX: number[] = [556, 903, 1225, 556, 903];
    //private circlePosY: number[] = [442, 442, 442, 669, 669];

    private circlePosX: number[] = [506, 853, 1175, 506, 853];
    private circlePosY: number[] = [342, 342, 342, 569, 569];
 
    public initBubble(): void {
        
        for (var i: number = 0; i < 5; i++) {
            for (var j: number = 0; j < 5; j++) {
                var circle: Circle = new Circle();
                circle.index = i;
                circle.init(2 + 3 * Math.random(), 0.2 + 0.5 * Math.random());
                circle.x = this.circlePosX[i] + 25;
                circle.y = this.circlePosY[i] + 25+50;
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
                this.circleList[i].y = this.circlePosY[index] + 25+50;

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

    public clearGraphic(): void{
         

        for (var i: number = 0; i < this.shapeList.length; i++)
        {
            this.removeChild(this.shapeList[i]);
        }

        this.shapeList = [];
    }
    
    private shapeList: CircleLine[] = [];

    //private g: createjs.Graphics;

} 


