/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class ScenePortAnimation extends ScenePort {


    private static _instance: ScenePortAnimation = null;

    constructor() {
        super();
        if (ScenePortAnimation._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortAnimation._instance = this;

        this.init();
    }

    public static instance(): ScenePortAnimation {
        if (ScenePortAnimation._instance === null) {
            ScenePortAnimation._instance = new ScenePortAnimation();
        }
        return ScenePortAnimation._instance;
    }

    public init(): void {

        this.listText = [
           "DIY Company","Fantasy Parfait","Girl Talk","ZOMBIE MOVIE","괴물","눈코입귀","등골 브레이커","묘구전설","백일홍","빅도그","실","창문넘어 도망친\n100세 노인"
        ];

        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.4;
        this.shape.graphics = this.g;
        this.addChild(this.shape);

        this.makeButton();

        this.makeList();

        
        for (var i: number = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function () {
                var index: number = ScenePortAnimation.instance().textButtonList.indexOf(this)+1;
                SceneManager.instance().popupPort(26, index);

            });
        }

    }

    public thumbtext: string[][] = [["DIY Company\n나만의 행성 만들기", "고현경 박경희 오명선 허초미"],
        ["Fantasy Parfait", "정미애"],
        ["Girl Talk", "김수현 이소영"],
        ["ZOMBIE MOVIE", "정지선"],
        ["괴물", "홍보미"],
        ["눈코입귀", "이주희"],
        ["등골 브레이커", "양수련 윤새봄 임소리"],
        ["묘구전설", "박정윤 이다정 이서현 정주희"],
        ["백일홍", "정채원 최새봄나"],
        ["빅도그", "김혜주 윤소담 이민아 이정민"],
        ["실", "나현아"],
        ["창문넘어 도망친 100세 노인", "김수려 노효정 조다예 조은아"]];

    public startScene(): void {
        this.count++;
        this.dr = 0;
        this.addEventListener("tick", this.drawing);
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);

        for (var i: number = 0; i < this.buttonCount; i++) {
            this.buttonList[i].alpha = 0;
            createjs.Tween.get(this.buttonList[i], { loop: false }).wait(2000).to({ alpha: 1 }, 1000, createjs.Ease.linear);
        }

    }

    public drawing(event: Event): void {
        ScenePortAnimation.instance().drawLines();
    }

    
    public stopScene(): void {
        
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        
        this.removeEventListener("tick", this.drawing);
    }

    
    private makeButton(): void {

        this.startX = 340;
        this.buttonCount = 12;
        this.gap = 20 * 5;

        for (var i: number = 0; i < this.buttonCount; i++) {

            var button: PortCircleButton = new PortCircleButton(this.getTex("students_work_button"), "assets/16th_web/ani/thumbnail/" + (i + 1) + ".png", 18, 53,
                this.thumbtext[i][0],
                this.thumbtext[i][1]
                );
            button.index = i+1;
            button.x = this.startX + this.gap * i;
            button.y = 1080 / 2;
            button.on("click", function () {
                SceneManager.instance().popupPort(26, this.index);
            });

            button.on("mouseover", function (event: createjs.MouseEvent) {
                ScenePortAnimation.instance().mouseOver((<PortCircleButton>event.currentTarget).index);
                });

            button.on("mouseout", function (event: createjs.MouseEvent) {
                ScenePortAnimation.instance().mouseOut( (<PortCircleButton>event.currentTarget).index );
            });
        
            this.addChild(button);
            this.buttonList.push(button);
        }
    }


    //public drawLines(): void {

    //    this.count++;
    //    for (var j: number = 0; j < this.buttonCount; j++) {

    //        if (this.buttonList[j].isMouseOver == false) {
    //            this.buttonList[j].y = this.buttonList[j].y + 2;
    //        }
    //    }

    //    var r: number = this.count / 5;

    //    this.gheight = Math.sin(r / 29) / 4 + 0.75;
    //    this.gheight2 = Math.cos(r / 37);
    //    this.g.clear();
    //    this.g.setStrokeStyle(1.5);
    //    this.g.beginStroke("#FFF");

    //    this.drawLine( 5+this.gheight2, 3 * this.gheight2, this.gheight, this.gheight * 20 + r / 180, 0);
    //    this.g.setStrokeStyle(0.5);
    //    this.drawLine( 3+this.gheight, 2+3 * this.gheight2, 3, -this.gheight * 30 + r / 180, 1920);
    //    this.g.setStrokeStyle(2.0);
    //    this.drawLine( this.gheight2, 2 + this.gheight2, this.gheight, this.gheight * 20 + r / 180, 1920 * 2);
    //    this.g.setStrokeStyle(1.0);
    //    this.drawLine(6, 2.5 + this.gheight2, this.gheight2 * 20, this.gheight * 10 + r / 180, 1920 * 3);

    //}

    //public drawLine(a1: number, a2: number, b1: number, b2: number, delayIndex: number): void {
        
    //    this.g.moveTo(0, 540 + this.fx(0, a1, a2, b1, b2) * this.gheight);
    //    var r: number = 0;
    //    var c: number = Math.PI / 960;

    //    for (var i: number = 20; i <= 1920 && i < this.count * 20 - delayIndex; i = i + 10) {
    //        r = c * i;
    //        //this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight);
    //        this.g.lineTo(i, 540 + this.fx(r, a1, a2, b1, b2) * this.gheight);
    //    }

    //    for (var j: number = 0; j < this.buttonCount; j++) {
    //        var bx: number = this.startX + this.gap * j;
    //        r = c * bx;

    //        var by = 540 + this.fx(r, a1, a2, b1, b2) * this.gheight;

    //        if (this.buttonList[j].y > by) {
    //            this.buttonList[j].y = by;
    //        }
    //    }


    //}

    
    public dr: number = 0;

    public drawLines(): void {

        this.count++;
        for (var j: number = 0; j < this.buttonCount; j++)
        {
            if (this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].updateY();
                //this.buttonList[j].y = this.buttonList[j].y + 2;
            }
        }
        
        this.gheight = 1;//Math.sin(r / 29) / 4 + 0.75;
        this.dr = this.dr + 0.02 + Math.sin(this.count / 15) / 100;
        var sr: number = this.count / 50;

        if (this.count < 60) {
            this.gheight = 0;
        } else
            if (this.count < 150) {
                var h1: number = Math.sin((this.count - 60) / 90 * Math.PI / 2);
                this.gheight = this.gheight * h1;
            }

        var r: number = this.dr;

        this.g.clear();

        this.g.beginStroke("#FFF");
        this.g.setStrokeStyle(1.5);
        this.drawSine(960 / 400, r * 0.9, 100, 1 + this.gheight2, 0.5, 45, this.gheight, false);
        this.g.setStrokeStyle(0.5);
        this.drawSine(960 / 350.0, r * 1.1, 100, 1 + this.gheight2 * 3, 0.5, 25, this.gheight, false);
        this.g.setStrokeStyle(1.0);
        this.drawSine(960 / 170.0, sr * 0.5, 30, 4, 0.5, 15, this.gheight, false);
        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 300.0, sr * 0.8, 80, 1 + this.gheight2 * 2, 0.5, 10, this.gheight, true);
    }

    public drawSine(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number, height: number, collide: boolean): void {

        var r: number = 0;
        var c: number = Math.PI / 960;

        //this.g.moveTo(0, 540 + this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        this.g.moveTo(0, 540);

        for (var i: number = 10; i < 1920; i = i + 10) {
            r = c * i;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) *this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }

        this.g.lineTo(1920, 540);
        //this.g.lineTo(1920, 540 + (0.5 - Math.cos(r) / 2)*this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);

        if (collide == false)
            return;

        
        for (var j: number = 0; j < this.buttonCount; j++) {
            var bx: number = this.startX + this.gap * j;
            r = c * bx;

            var by = 540 + (0.5 - Math.cos(r) / 2)*this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight;

            if (this.buttonList[j].y > by && this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].y = by;
                this.buttonList[j].dy = -5;
            }
        }
    }


    public fx2(r: number, a1: number, a2: number, a3: number, b1: number, b2: number, b3): number {
        return Math.sin((-r + a2) * a1) * a3 + Math.sin((-r + b2) * b1) * b3;

    }




} 