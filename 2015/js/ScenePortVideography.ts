/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class ScenePortVideography extends ScenePort {


    private static _instance: ScenePortVideography = null;

    constructor() {
        super();
        if (ScenePortVideography._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortVideography._instance = this;

        this.init();
    }

    public static instance(): ScenePortVideography {
        if (ScenePortVideography._instance === null) {
            ScenePortVideography._instance = new ScenePortVideography();
        }
        return ScenePortVideography._instance;
    }

    public init(): void {
        
        this.listText = [
            "Gopher Wood 기타 CF","Night Light","Not for Nothing","OCN 뱀파이어검사3","Perfume","Seoul City Tour Bus","Stoker","Xiaomi Yi Camera CF","미궁 속의 티타임","스캔들","우아한 거짓말","은교","Happy Things MV"
       ];
//"GOPHER WOOD","J RABBIT - HAPPY THINGS","NIGHT LIGHT","NOT FOR NOTHING","STOKER","XIAOMI YI CAMERA","미궁속의 티타임","뱀파이어검사","서울시티투어버스","스캔들","우아한 거짓말","은교"

        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.4;
        this.shape.graphics = this.g;
        this.addChild(this.shape);

        this.makeButton();

        this.makeList();

        for (var i: number = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function () {
                var index: number = ScenePortVideography.instance().textButtonList.indexOf(this) + 1;
                SceneManager.instance().popupPort(27, index);

            });
        }
    }

    public thumbtext: string[][] = [
        ["Gopher Wood 기타 CF", "도미래 신효진 이예림\n임주희 정지선 하진아"],
        ["Night Light", "김민지 박정윤 이서현 정주희"],
        ["Not for Nothing", "권은혜 김수려 박경희 윤지혜"],
        ["OCN 뱀파이어검사3", "권은혜 김수려 박경희 윤지혜"],
        ["Perfume", "김주연 김지영 오명선 허초미"],
        ["Seoul City Tour Bus", "김수현 남예은 이다정"],
        ["Stoker", "김보경 순별이 신민아 이소영"],
        ["Xiaomi Yi Camera 광고영상", "김선형 나현아"],
        ["미궁 속의 티타임", "김아란 박성현 이소라 임소리"],
        ["스캔들", "김혜주 이민아 정하나"],
        ["우아한 거짓말", "배하린 송연아 양수련 윤새봄"],
        ["은교", "고현경 김연희 오남경\n윤소담 정보경"],
        ["제이레빗 - Happy Things MV", "정민주 한소린"]


        //["Gopher Wood 기타 CF", "도미래 신효진 이예림\n임주희 정지선 하진아"],
        //["Night Light", "김민지 박정윤 이서현 정주희"],
        //["Not for Nothing", "권은혜 김수려 박경희 윤지혜"],
        //["Stoker", "김보경 순별이 신민아 이소영"],
        //["Xiaomi Yi Camera 광고영상", "김선형 나현아"],
        //["OCN 뱀파이어검사3", "권은혜 김수려 박경희 윤지혜"],
        //["Seoul City Tour Bus", "김수현, 남예은, 이다정"],
        //["스캔들", "김혜주 이민아 정하나"],
        //["우아한 거짓말", "배하린 송연아 양수련 윤새봄"],
        //["은교", "고현경 김연희 오남경\n윤소담 정보경"],
        //["제이레빗 - Happy Things MV", "정민주 한소린"],
        //["Perfume", "김주연 김지영 오명선 허초미"],
        //["미궁 속의 티타임", "김아란 박성현 이소라 임소리"]

    ];


    public startScene(): void {

        this.count = 0;
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
        ScenePortVideography.instance().drawLines();
    }

    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    }

    private makeButton(): void
    {
        this.startX= 360;
        this.buttonCount = 13;
        this.gap = 20 * 5;

        for (var i: number = 0; i < this.buttonCount; i++) {

            var button: PortCircleButton = new PortCircleButton(this.getTex("students_work_button"), "assets/16th_web/video/thumbnail/" + (i + 1) + ".png", 18, 53,
                this.thumbtext[i][0],
                this.thumbtext[i][1]);
            button.index = i+1;
            button.x = this.startX + this.gap * i;
            button.y = 1080 / 2;
            button.on("click", function () {
                SceneManager.instance().popupPort(27, this.index);
            });

            button.on("mouseover", function (event: createjs.MouseEvent) {
                ScenePortVideography.instance().mouseOver((<PortCircleButton>event.currentTarget).index);
            });

            button.on("mouseout", function (event: createjs.MouseEvent) {
                ScenePortVideography.instance().mouseOut((<PortCircleButton>event.currentTarget).index);
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

    //    this.drawLine(3 + this.gheight2, 3 * this.gheight2, this.gheight, this.gheight * 20 + r / 180, 0);
    //    this.g.setStrokeStyle(0.5);
    //    this.drawLine(4 + this.gheight2, 3 * this.gheight2, 3, -this.gheight * 30 + r / 180, 400);
    //    this.g.setStrokeStyle(2.0);
    //    this.drawLine(5 + this.gheight2, 2 + this.gheight2, this.gheight, this.gheight * 20 + r / 180, 800);
    //    this.g.setStrokeStyle(1.0);
    //    this.drawLine(6, 2.5 + this.gheight2, this.gheight2 * 20, this.gheight * 10 + r / 180, 1200);


    //}
    //public fx(r: number, a1: number, a2: number, b1: number, b2: number): number {
    //    return Math.sin(r * a1) * 100 + Math.sin(r * a2) * 50 + Math.sin(r * a1 * a2) * 25;
    //}


    ///////////////
    public dr: number = 0;

    public drawLines(): void {

        this.count++;
        for (var j: number = 0; j < this.buttonCount; j++) {

            if (this.buttonList[j].isMouseOver == false) {

                //this.buttonList[j].y = this.buttonList[j].y + 2;
                this.buttonList[j].updateY();
            }
        }

        //var r: number = this.count / 5;
        //this.gheight = Math.sin(r / 29) / 4 + 0.75;

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
        this.drawSine(960 / 450, r * 0.9, 90, 1 + this.gheight2, 0.5, 45, this.gheight, false);
        this.g.setStrokeStyle(0.5);
        this.drawSine(960 / 300.0, r * 1.1, 70, 1 + this.gheight2 * 3, 0.5, 25, this.gheight, false);
        this.g.setStrokeStyle(1.0);
        this.drawSine(960 / 1000.0, sr * 0.5, 150, 4, 0.5, 50, this.gheight, false);
        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 350.0, sr * 0.8, 130, 1 + this.gheight2 * 2, 0.5, 10, this.gheight, true);
    }

    public drawSine(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number, height: number, collide: boolean): void {

        this.g.moveTo(0, 540);
        var r: number = 0;
        
        //var c: number = Math.PI / 960;
        var c: number = 2 * Math.PI / (1920 - 400);

        for (var i: number = 200; i < 1720; i = i + 10) {
            var di: number = Math.min(1520, i - 200);
            r = c * di;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }

        this.g.lineTo(1920, 540);

        if (collide == false)
            return;

        for (var j: number = 0; j < this.buttonCount; j++) {
            var bx: number = this.startX + this.gap * j;
            var dbx: number = Math.min(1520, bx - 200);
            r = c * dbx;

            var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight;

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