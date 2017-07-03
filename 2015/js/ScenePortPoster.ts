/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class ScenePortPoster extends ScenePort {
    private static _instance: ScenePortPoster = null;
    constructor() {
        super();
        if (ScenePortPoster._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortPoster._instance = this;

        this.init();
    }

    public static instance(): ScenePortPoster {
        if (ScenePortPoster._instance === null) {
            ScenePortPoster._instance = new ScenePortPoster();
        }
        return ScenePortPoster._instance;
    }

    public init(): void {

        this.listText = [

            "고현경", "권은혜", "김민지",
            "김보경", "김선형", "김수려",
            "김수현", "김아란", "김연희",
            "김주연", "김지영", "김혜주",
            "나현아", "노효정", "도미래",
            "박경희", "박성현", "박정윤",
            "배하린", "송연아", "순별이",
            "신민아", "신효진", "양수련",
            "오남경", "오명선", "오연택",
            "윤새봄", "윤소담", "윤지혜",
            "이다정", "이민아", "이서현",
            "이소라", "이소영", "이예림",
            "이정민", "이주희", "임소리",
            "임주희", "정미애", "정민주",
            "정보경", "정주희", "정지선",
            "정채원", "정하나", "조다예",
            "조은아", "최새봄나", "하진아",
            "한소린", "허초미", "홍보미"
        ];

        this.group = new createjs.Container();

        this.addChild(this.group);

        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.4;
        this.shape.graphics = this.g;
        this.group.addChild(this.shape);

        this.makeButton();

        this.makeList();

        for (var i: number = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function () {
                var index: number = ScenePortPoster.instance().textButtonList.indexOf(this) + 1;
                SceneManager.instance().popupPort(29, index);

            });
        }
    }

    public thumbtext: string[] = ["고현경", "권은혜", "김민지",
        "김보경", "김선형", "김수려",
        "김수현", "김아란", "김연희",
        "김주연", "김지영", "김혜주",
        "나현아", "노효정", "도미래",
        "박경희", "박성현", "박정윤",
        "배하린", "송연아", "순별이",
        "신민아", "신효진", "양수련",
        "오남경", "오명선", "오연택",
        "윤새봄", "윤소담", "윤지혜", "이다정", "이민아", "이서현", "이소라", "이소영", "이예림", "이정민", "이주희", "임소리", "임주희", "정미애", "정민주", "정보경", "정주희", "정지선",
        "정채원","정하나","조다예","조은아","최새봄나","하진아","한소린","허초미","홍보미" ];

    private group: createjs.Container=null;

    public dx: number = 0;
    public startScene(): void {
        this.count = 0;
        this.group.x = -1920;
        this.dx = 0;
        this.addEventListener("tick", this.drawing);
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        
        SceneManager.instance().stage.mouseMoveOutside = true;
        SceneManager.instance().stage.on("stagemousemove", function (evt: createjs.MouseEvent) {
            var w: number = window.innerWidth;
            var h: number = window.innerHeight;

            var dd: number = (evt.stageX / window.innerWidth - 0.5) * 10;
            ScenePortPoster.instance().dx = - dd * dd * dd;
        });
    }

    public drawing(event: Event): void {
        ScenePortPoster.instance().drawLines();
    }

    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);

        this.removeEventListener("tick", this.drawing);

        SceneManager.instance().stage.mouseMoveOutside = false;
        SceneManager.instance().stage.removeAllEventListeners();

    }

    
    private makeButton(): void {

        this.startX = 150;
        this.buttonCount = 54;
        this.gap = 40 * 3;

        for (var i: number = 0; i < this.buttonCount; i++) {

            var button: PortCircleButton = new PortCircleButton(this.getTex("students_work_button"), "assets/16th_web/poster/thumbnail/" + (i + 1) + ".png", 18, 53,
                this.thumbtext[i],
                null);
            button.index = i + 1;
            //button._imageOrUrl.scaleX = button._imageOrUrl.scaleY = 0.1*(Math.floor( Math.random() * 10000 ) % 4) + 1;

            button.x = this.startX + this.gap * i;
            button.y = 1080 / 2;
            button.on("click", function () {
                SceneManager.instance().popupPort(29, this.index);
            });

            button.on("mouseover", function (event: createjs.MouseEvent) {
                ScenePortPoster.instance().mouseOver((<PortCircleButton>event.currentTarget).index);
            });

            button.on("mouseout", function (event: createjs.MouseEvent) {
                ScenePortPoster.instance().mouseOut((<PortCircleButton>event.currentTarget).index);
            });

            button.alpha = 0;
            createjs.Tween.get(button, { loop: false }).wait(2000).to({ alpha: 1 }, 1000, createjs.Ease.linear);

            this.group.addChild(button);
            this.buttonList.push(button);
        }

    }


    public makeListTextButton(): void {

        var startY: number = 44;
        for (var i: number = 0; i < this.listText.length; i=i+3) {
            var dy: number = 23;
            
            var button: Label = new Label();
            button.setText2(this.listText[i]);
            button.x = 25;
            button.y = startY;
            
            this._listTextGroup.addChild(button);
            this.textButtonList.push(button);

            /////////////////////////////////
            var button: Label = new Label();
            button.setText2(this.listText[i+1]);

            button.x = 25+40;
            button.y = startY;
            
            this._listTextGroup.addChild(button);
            this.textButtonList.push(button);

            //////////

            var button: Label = new Label();
            button.setText2(this.listText[i + 2]);

            button.x = 25+80;
            button.y = startY;

            this._listTextGroup.addChild(button);
            this.textButtonList.push(button);

            startY += dy;
        }

    }

    public dr: number = 0;

    public drawLines(): void {

        this.count++;
        for (var j: number = 0; j < this.buttonCount; j++) {

            if (this.buttonList[j].isMouseOver == false) {
                //this.buttonList[j].y = this.buttonList[j].y + 2;
                this.buttonList[j].updateY();
            } else {
                this.dx = 0;
            }
        }

        //var r: number = this.count / 5;
        //this.gheight = Math.sin(r / 29) / 4 + 0.75;

        this.gheight = 1;//Math.sin(r / 29) / 4 + 0.75;
        this.dr = this.dr + 0.02 + Math.sin(this.count / 15) / 100;
        var sr: number = this.count / 50;
        

        if (this.count < 60) {
            this.gheight = 0;
        }else
        if (this.count < 150) {
            var h1: number = Math.sin((this.count-60) / 90 * Math.PI / 2);
            this.gheight = this.gheight * h1;
        }

        var r: number = this.dr;
///        this.gheight2 = Math.cos(r / 37);

        this.g.clear();
        this.g.setStrokeStyle(1.5);
        this.g.beginStroke("#FFF");


        //this.drawLine2(3 + this.gheight2, 3 * this.gheight2, this.gheight, this.gheight * 20 + r / 180, false);
        //this.g.setStrokeStyle(0.5);
        //this.drawLine2(4 + this.gheight2, 3 * this.gheight2, 3, -this.gheight * 30 + r / 180, false);
        //this.g.setStrokeStyle(2.0);
        //this.drawLine2(5 + this.gheight2, 2 + this.gheight2, this.gheight, this.gheight * 20 + r / 180, true);
        //this.g.setStrokeStyle(1.0);
        //this.drawLine2(6, 2.5 + this.gheight2, this.gheight2 * 20, this.gheight * 10 + r / 180, false);


        this.g.setStrokeStyle(1.5);
        //this.drawSine(960 / 800, r * 0.9, 180, 1 + this.gheight2, 0.5, 45, this.gheight, false);
        this.drawSine(960 / 200.0, sr * 0.8, 40, 1 + this.gheight2 * 2, 0.5, 10, this.gheight, false);

        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 100.0, r * 0.5, 100, 1 + this.gheight2 * 3, 0.5, 25, this.gheight, true);
        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 60.0, sr * 0.5, 17, 1, 0.5, 8, this.gheight, false);
        this.g.setStrokeStyle(1.0);
        this.drawSine(960 / 150.0, r, 100, 1, 0.5, 25, this.gheight, false);



        this.group.x += this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(-(6780 - 1920), this.group.x);
    }

    public drawLine2(a1: number, a2: number, b1: number, b2: number, collide:boolean): void {
        this.g.moveTo(0, 540);
        var r: number = 0;
        var c: number = Math.PI / (960*4);

        for (var i: number = 20; i < 6480+600 ; i = i + 10) {
            r = c * i;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight);
        }
        
        this.g.lineTo(6480 + 600, 540);

        if (collide == false)
            return;

        for (var j: number = 0; j < this.buttonCount; j++) {
            var bx: number = this.startX + this.gap * j;
            r = c * bx;

            var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight;

            if (this.buttonList[j].y > by && this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].y = by;
                this.buttonList[j].dy = -5;
            }
        }
    }


    public drawSine(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number, height: number, collide: boolean): void {

        this.g.moveTo(0, 540);
        var r: number = 0;
        //var c: number = Math.PI / (960 * 4);

        var c: number = Math.PI / (6780/2);

        for (var i: number = 20; i < 6480 + 600; i = i + 10) {
            r = c * i;
            this.g.lineTo(i, 540 + ((0.5 - Math.cos(r) / 2) * 0.8+0.2) * (0.7 - Math.cos(r * 2) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }

        this.g.lineTo(6780, 540);

        if (collide == false)
            return;

        for (var j: number = 0; j < this.buttonCount; j++) {
            var bx: number = this.startX + this.gap * j;
            r = c * bx;

            var by = 540 + ((0.5 - Math.cos(r) / 2)*0.8 + 0.2) * ( 0.7 - Math.cos(r*2) /2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight;

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

