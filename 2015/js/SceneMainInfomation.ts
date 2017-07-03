/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class SceneMainInfomation extends Scene {


    private static _instance: SceneMainInfomation = null;

    constructor() {
        super();
        if (SceneMainInfomation._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMainInfomation._instance = this;
        this.init();
    }

    public static instance(): SceneMainInfomation {
        if (SceneMainInfomation._instance === null) {
            SceneMainInfomation._instance = new SceneMainInfomation();
        }
        return SceneMainInfomation._instance;
    }


    public exhibition_information: createjs.Bitmap;
    public map: createjs.Bitmap;
    public map_icon: createjs.Bitmap;
    public text_image: createjs.Bitmap;
    public menu_icon: TitleCircle;

    public init(): void
    {
        this.initBubble();

        this.menu_icon = new TitleCircle(this.getTex("aboutmediadesign_titledot"), 19);
        this.menu_icon.x = 129;
        this.menu_icon.y = 117;

        //this.menu_icon.x = 179;
        //this.menu_icon.y = 277;
        

        this.addChild(this.menu_icon);


        this.exhibition_information = new createjs.Bitmap(this.getTex("main_exhibitioninformation_title"));
        this.exhibition_information.x = 195;
        this.exhibition_information.y = 96;
        //this.exhibition_information.x = 245;
        //this.exhibition_information.y = 237;
        
        this.addChild(this.exhibition_information);

        this.map = new createjs.Bitmap(this.getTex("map_flatten_1"));
        this.map.x = 238;
        this.map.y = 400;
        this.addChild(this.map);

        this.map_icon = new createjs.Bitmap(this.getTex("map_icon"));
        this.map_icon.x = 600;
        this.map_icon.y = 610;
        this.map_icon.regX = 41;
        this.map_icon.regY = 39;
        this.map_icon.scaleX = 0.7;
        this.map_icon.scaleY = 0.7;
        this.addChild(this.map_icon);


        for (var i: number = 0; i < 3; i++) {
            var circle: Circle = new Circle();
            circle.x = 600;
            circle.y = 610;
            this.addChild(circle);
            this.arr.push(circle);
        }

        this.text_image = new createjs.Bitmap(this.getTex("text_image"));
        this.text_image.x = 1258;
        this.text_image.y = 256;
        this.addChild(this.text_image);
    }

    public startScene(): void {
        this.count = 0;
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    }

    public stopScene(): void {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    }

    public clearScene(): void {
        super.clearScene();

    }

    public playScene(): void {
    }


    public drawing(event: Event): void {
        (<SceneMainInfomation>event.target).drawLines();
    }

    public arr: Circle[] = [];

    public drawLines(): void {
        this.count++;

        this.updateBubble();

        var mapindex: number = Math.round(this.count / 5) % 30 + 1;
        if (mapindex > 15) {
            mapindex = 16 - (mapindex - 15);
        }
        this.map.image = this.getTex("map_flatten_" + mapindex);

        for (var i: number = 0; i < 3; i++) {
            this.arr[i].initLine((this.count / 10 + i * 10) % 30, 1 - (this.count / 10 + i * 10) % 30 / 30);
        }

        this.menu_icon.drawCircle();

    }
    

    
    private circlePosX: number[] = [279, 1011];
    private circlePosY: number[] = [570, 500];

    public initBubble(): void {

        for (var i: number = 0; i < 2; i++) {
            for (var j: number = 0; j < 30; j++) {
                var circle: Circle = new Circle();
                circle.index = i;
                circle.init(2 + 3 * Math.random(), 0.2 * Math.random());

                var dx:number = Math.random() * 200;
                circle.x = this.circlePosX[i] + dx;
                circle.y = this.circlePosY[i] - Math.random() * 100 + dx * ((i==0) ? -0.3:0.4);
                this.circleList.push(circle);
                this.addChild(circle);
            }
        }
    }

    public updateBubble(): void {
        for (var i: number = 0; i < this.circleList.length; i++) {

            this.circleList[i].x = this.circleList[i].x + Math.sin(this.count / 90 * i / 3) / 5;

            this.circleList[i].y = this.circleList[i].y - 1;
            this.circleList[i].alpha = this.circleList[i].alpha - 0.002;

            if (this.circleList[i].alpha <= 0) {
                var index: number = this.circleList[i].index;
                var dx: number = Math.random() * 200;
                this.circleList[i].initFill(2 + 3 * Math.random(), 0.1 + 0.2 * Math.random());
                this.circleList[i].x = this.circlePosX[index] + dx;
                this.circleList[i].y = this.circlePosY[index] + Math.random() * 10 + dx * ((index == 0) ? -0.3 : 0.4);

            }
        }
    }

} 