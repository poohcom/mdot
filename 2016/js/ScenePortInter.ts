/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class ScenePortInter extends  ScenePort {

    private static _instance: ScenePortInter = null;
    public static instance(): ScenePortInter {
        if (ScenePortInter._instance === null) {
            ScenePortInter._instance = new ScenePortInter();
        }
        return ScenePortInter._instance;
    }

    constructor() {
        super();

        if (ScenePortInter._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortInter._instance = this;
        this.init();
    }
    
    public page_w: number = 2500;
    public page_h: number = 1080;
    public particleManager: ParticleManager;

    public thumbtext: string[][] = [
        ["m.dot","강민정 방선경 배은영\n장지영 정다정 홍정원"],
        ["AREA 51","신다희 이찬미"],		
        ["Billy Milligan", "김효진 이지아\n임우영 임지원"],
        ["SEE THROUGH", "김지현 방지은 윤정연\n정수호 조지형"],
        ["Vegan", "강은성 문소진\n유지원 임수현"],
        ["단테의 신곡", "맹예진 양다솔\n이민지 임지혜"],
        ["심해 탐험대","김지영 차지예 황은하"]
    ];

    public listText: string[] = [
        "m.dot",
        "AREA 51",
        "Billy Milligan",
        "SEE THROUGH",
        "Vegan",
        "단테의 신곡",
        "심해 탐험대"
    ];


    public init(): void {
        this.group = new createjs.Container;
        this.addChild(this.group);

        this.particleManager = new ParticleManager;
        this.group.addChild(this.particleManager);


        this.shape = new TriangleShape();
        this.shape.initTri(DataInter.p, DataInter.l, DataInter.t);
        this.shape.gradientType = SceneManager.INTERACTIVE;


        this.shape.alpha = 0.5;

        this.shape.lineSize = 1;
        this.group.addChild(this.shape);

        //this.group.x = (1920 - this.page_w) / 2;
        this.group.x = 0;

        this.makeButton();
        this.makeList();

        for (var i: number = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function (event: createjs.MouseEvent) {
                SceneManager.instance().popupPortInter((<CircleButton>event.currentTarget).index);
            });
        }

    }
    private makeButton(): void {

        for (var i: number = 0; i < this.listText.length; i++) {
            var button: PortButton = new PortButton(this.shape, "assets/port/inter/" + (i + 1) + "/" + (i + 1) + ".jpg", this.shape.getHitArea(i), this.thumbtext[i][0], this.thumbtext[i][1], i);
            var pos: number[] = this.shape.getTriangleCenter(i);

            button.x = pos[0];
            button.y = pos[1];
            button.on("click", function (event: createjs.MouseEvent) {

                SceneManager.instance().popupPortInter((<PortButton>event.currentTarget).index);
            });

            this.group.addChild(button);
            this.buttonList.push(button);
        }
    }
    public updateOver(index: number): void {
        this.shape.setSelectIndex(index);
    }


    private dx: number = 0;
    private m_x: number = 0;
    private m_y: number = 0;
    public updateMouseXY(mx: number, my: number): void {
        this.m_x = mx;
        this.m_y = my;
        this.dx = - (mx - 960) / 200;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(1920 - this.page_w + 300, this.group.x);

        this.shape.updateMouseXY(mx - this.group.x, my);
    }

    public startScene(): void {
        //this.group.x = (1920 - this.page_w) / 2;
        this.group.x = 0;
        this.m_x = 0;
        this.m_y = 0;

        this.alpha = 1;
        //createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);

        this.shape.playToLeft(this.page_w,   4);
        this.particleManager.playToLeft(this.page_w, 20);

    }
    public playScene(): void {
        //this.updateMouseXY(this.m_x,this.m_y);
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(1920 - this.page_w + 300, this.group.x);
        this.shape.drawUpdate();

        this.particleManager.update();
    }

    

    public stopScene(): void {

        this.particleManager.clear();
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    }



}


