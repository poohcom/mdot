/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class ScenePortVideo extends ScenePort {

    private static _instance: ScenePortVideo = null;
    public static instance(): ScenePortVideo {
        if (ScenePortVideo._instance === null) {
            ScenePortVideo._instance = new ScenePortVideo();
        }
        return ScenePortVideo._instance;
    }

    constructor() {
        super();

        if (ScenePortVideo._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortVideo._instance = this;
        this.init();
    }
    
    public page_w: number = 2500;
    public page_h: number = 1080;
    public particleManager: ParticleManager;

    public thumbtext: string[][] = [
    ["Canon 5Ds 광고", "기소을 김주현\n임수산나 조지형"],
    ["Devil’s cantata", "맹예진 민지혜\n배은영 홍정원"],
    ["Magazine B", "김소희 김은정 장민지"],	
    ["Merchen Studio", "곽한송 김예원 임수현"],
    ["Outta time", "손미리 유예람\n이찬미 정수호"],
    ["Peter Man", "김하나 김효진\n김효진 이지아"],
    ["Standing Egg - 무지개", "강민정 김지영 김한별\n유지원 임지혜"],
    ["UP ALL NIGHT", "신유정 이로사\n차지예 황은하"],
    ["We Need to Talk about Kevin","김지현 방선경\n배효영 이효원"],
    ["검은 사제들", "손승희 정보경"],
    ["퍼플 커튼 - 홀로 걷는 길", "민선정 윤정연 이수정\n임우영 정예진"]
    ];


    public listText: string[] = [
        "Canon 5Ds 광고",
        "Devil’s cantata",
        "Magazine B",
        "Merchen Studio",
        "Outta time", 
        "Peter Man", 
        "Standing Egg - 무지개", 
        "UP ALL NIGHT", 
        "We Need to Talk about Kevin", 
        "검은 사제들",
        "퍼플 커튼 - 홀로 걷는 길"
    ];

    public init(): void {
        this.group = new createjs.Container;
        this.addChild(this.group);
        this.particleManager = new ParticleManager;
        this.group.addChild(this.particleManager);

        this.shape = new TriangleShape();
        this.shape.initTri(DataVideo.p, DataVideo.l, DataVideo.t);
        this.shape.gradientType = SceneManager.VIDEOGRAPHY;


        this.shape.alpha = 0.5;

        this.shape.lineSize = 1;
        this.group.addChild(this.shape);

        //this.group.x = (1920 - this.page_w) / 2;
        this.group.x = 0;

        this.makeButton();
        this.makeList();

        for (var i: number = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function (event: createjs.MouseEvent) {
                SceneManager.instance().popupPortVideo((<CircleButton>event.currentTarget).index);
            });
        }

    }


    private makeButton(): void {

        for (var i: number = 0; i < this.listText.length; i++) {
            var button: PortButton = new PortButton(this.shape, "assets/port/video/" + (i + 1) + "/" + (i + 1) + ".jpg", this.shape.getHitArea(i), this.thumbtext[i][0], this.thumbtext[i][1], i);
            var pos: number[] = this.shape.getTriangleCenter(i);

            button.x = pos[0];
            button.y = pos[1];
            button.on("click", function (event: createjs.MouseEvent) {

                SceneManager.instance().popupPortVideo((<PortButton>event.currentTarget).index);
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
        this.group.x = Math.max(1920-this.page_w+300, this.group.x);

        this.shape.updateMouseXY(mx - this.group.x, my);
    }

    public startScene(): void {
        //this.group.x = (1920 - this.page_w) / 2;
        this.group.x = 0;
        this.m_x = 0;
        this.m_y = 0;

        this.alpha = 1;
        //createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);


        this.shape.playToLeft(this.page_w, 4);

        this.particleManager.playToLeft(this.page_w, 20);
    }


    public playScene(): void {
        //this.updateMouseXY(this.m_x,this.m_y);
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(1920-this.page_w+300, this.group.x);
        this.shape.drawUpdate();
        this.particleManager.update();
    }

    
    public stopScene(): void {
        this.particleManager.clear();
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    }


    public studentList: any = [
        ["강민정", "boaramovie@naver.com"],
        ["강은성", "kangsung13@naver.com"],
        ["곽한송", "giugno14@naver.com"],
        ["기소을", "soul0ki@naver.com"],
        ["김소희", "sssssheee@daum.net"],
        ["김예원", "sksdpdnjs12@naver.com"],
        ["김은정", "kejreal@naver.com"],
        ["김주현", "jjjjjjj.oh@gmail.com"],
        ["김지영", "rosuvk@naver.com"],
        ["김지현", "sept_ee@naver.com"],
        ["김하나", "kdwkhn@naver.com"],
        ["김한별", "onestar951@naver.com"],
        ["김효진", "bbibigi0250@naver.com"],
        ["김효진", "hjzzhang0421@gmail.com"],
        ["맹예진", "3036953@naver.com"],
        ["문소진", "94msj@naver.com"],
        ["민선정", "iambalcony@gmail.com"],
        ["민지혜", "dnp2011s@naver.com"],
        ["방선경", "bsk0528@naver.com"],
        ["방지은", "wldms3182@gmail.com"],
        ["배은영", "pencilbb@naver.com"],
        ["배효영", "qogydud1234@naver.com"],
        ["손미리", "unreturn1@naver.com"],
        ["손승희", "ssh117@naver.com"],
        ["신다희", "sdashinlove@naver.com"],
        ["신유정", "sinyou0923@gmail.com"],
        ["양다솔", "dsy9464@naver.com"],
        ["유예람", "newdayram@naver.com"],
        ["유재희", "fukuari_ryu@icloud.com"],
        ["유지원", "jiwon_u@naver.com"],
        ["윤정연", "lake20126@naver.com"],
        ["이로사", "lrs2002@hanmail.net"],
        ["이민지", "wogns3885@naver.com"],
        ["이수정", "abcd157@naver.com"],
        ["이지아", "jia0420@naver.com"],
        ["이찬미", "cksal585@naver.com"],
        ["이효원", "leehyoone@naver.com"],
        ["임수산나", "bbingwool@naver.com"],
        ["임수현", "dbcjsdl0478@naver.com"],
        ["임우영", "limwoo_oo@naver.com"],
        ["임지원", "imxg0@naver.com"],
        ["임지혜", "dlawhl@naver.com"],
        ["장민지", "m_zee@naver.com"],
        ["장지영", "255222147@naver.com"],
        ["정다정", "thejjj33@gmail.com"],
        ["정보경", "blacktoast88@gmail.com"],
        ["정수호", "suho_j@naver.com"],
        ["정예진", "yejin0424_@naver.com"],
        ["조지형", "jojh923@naver.com"],
        ["차지예", "kanna96@naver.com"],
        ["홍정원", "hjewn@naver.com"],
        ["황은하", "galaxy_hehe@naver.com"]];


}


