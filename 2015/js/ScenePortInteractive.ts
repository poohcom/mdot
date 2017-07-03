/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class ScenePortInteractive extends ScenePort {


    private static _instance: ScenePortInteractive = null;

    constructor() {
        super();
        if (ScenePortInteractive._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortInteractive._instance = this;

        this.init();
    }

    public static instance(): ScenePortInteractive {
        if (ScenePortInteractive._instance === null) {
            ScenePortInteractive._instance = new ScenePortInteractive();
        }
        return ScenePortInteractive._instance;
    }

    
    public init(): void {
        this.listText = [
            "M.DOT",
            "Animal Farm",
            "The Secret forest",
            "궁금해요, 곤충의 숲",
            "깨비깨비 한국도깨비",
            "악마를 보았다"
        ];

        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.5;
        this.shape.graphics = this.g;
        this.addChild(this.shape);

        this.makeButton();

        this.makeList();

        for (var i: number = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function () {
                var index: number = ScenePortInteractive.instance().textButtonList.indexOf(this) + 1;
                SceneManager.instance().popupPort(25, index);

            });
        }

    }

    public thumbtext: string[][] = [["M.DOT", "김연희 노효정 오남경\n이예림 조다예 하진아"],
        ["Animal Farm", "남예은 오연택 이주희 홍보미"],
        ["The Secret forest - 비밀의 숲", "김수려 박경희 오명선"],
        ["궁금해요, 곤충의 숲", "김민지 도미래 정보경 정지선"],
        ["깨비깨비 한국도깨비", "김주연 김지영 임주희 정민주", ""],
        ["악마를 보았다", "권은혜 윤지혜 조은아"]
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


    public stopScene(): void {

        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    }

    
    private makeButton(): void {

        this.startX = 460;
        this.buttonCount = 6;
        this.gap = 20 * 10;

        for (var i: number = 0; i < this.buttonCount; i++) {

            var button: PortCircleButton = new PortCircleButton(this.getTex("students_work_button"), "assets/16th_web/interac/thumbnail/" + (i + 1) + ".png", 18, 53,
                this.thumbtext[i][0],
                this.thumbtext[i][1]
                );
            button.index = i+1;
            button.x = this.startX + this.gap * i;
            button.y = 1080 / 2;
            button.on("click", function () {
                SceneManager.instance().popupPort(25, this.index);
            });


            button.on("mouseover", function (event: createjs.MouseEvent) {
                ScenePortInteractive.instance().mouseOver((<PortCircleButton>event.currentTarget).index);
            });

            button.on("mouseout", function (event: createjs.MouseEvent) {
                ScenePortInteractive.instance().mouseOut((<PortCircleButton>event.currentTarget).index);
            });

            
            this.addChild(button);
            this.buttonList.push(button);
        }
    }

    public drawing(event: Event): void {
        ScenePortInteractive.instance().drawLines();
    }

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
        this.drawSine(960 / 400, r * 0.9, 100, 1 + this.gheight2, 0.5, 45, this.gheight, false);
        this.g.setStrokeStyle(0.5);
        this.drawSine(960 / 550.0, r * 1.1, 100, 1 + this.gheight2 * 3, 0.5, 25, this.gheight, false);
        this.g.setStrokeStyle(1.0);
        this.drawSine(960 / 100.0, sr * 0.5, 30, 4, 0.5, 15, this.gheight, false);
        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 300.0, sr * 0.8, 80, 1 + this.gheight2 * 2, 0.5, 10, this.gheight, true);
    }

    public drawSine(a1: number, a2: number, a3: number, b1: number, b2: number, b3: number, height: number, collide: boolean): void {

        this.g.moveTo(0, 540);
        var r: number = 0;
        
        //var c: number = Math.PI / 960;
        var c: number = 2 * Math.PI / (1920-600);

        for (var i: number = 300; i < 1620; i = i + 10) {
            var di: number = Math.min(1320, i - 300);
            r = c * di;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }

        this.g.lineTo(1920, 540);

        if (collide == false)
            return;

        for (var j: number = 0; j < this.buttonCount; j++) {
            var bx: number = this.startX + this.gap * j;
            var dbx: number = Math.min(1320, bx - 300);
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