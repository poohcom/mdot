/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneAboutStudents extends Scene {

    private static _instance: SceneAboutStudents = null;
    public static instance(): SceneAboutStudents {
        if (SceneAboutStudents._instance === null) {
            SceneAboutStudents._instance = new SceneAboutStudents();
        }
        return SceneAboutStudents._instance;
    }

    constructor() {
        super();

        if (SceneAboutStudents._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutStudents._instance = this;
        this.init();
    }

    public shape: TriangleShape;
    
    public group: createjs.Container;
    public init(): void {
        this.group = new createjs.Container;
        this.addChild(this.group);

        this.shape = new TriangleShape();
        this.shape.initTri(DataAboutMediaDesignStudents.p, DataAboutMediaDesignStudents.l, DataAboutMediaDesignStudents.t);
        this.shape.alpha = 0.5;
        this.shape.gradientType = SceneManager.STUDENTS;

        this.shape.lineSize = 1;
        this.group.addChild(this.shape);

        this.group.x = -1920 / 2;

        var aboutmd_students_gradiant: createjs.Bitmap = new createjs.Bitmap(this.getTex("aboutmd_students_gradiant"));
        this.addChild(aboutmd_students_gradiant);


        var label: LabelStudent;
        for (var i: number = 0; i < this.studentList.length; i++) {

            label = new LabelStudent(this.shape.getHitArea(i),
                this.studentList[i][0],
                this.studentList[i][1] , i);

            var pos: number[] = this.shape.getTriangleCenter(i);
            label.x = pos[0];
            label.y = pos[1];
            this.group.addChild(label);
        }



        var title: createjs.Bitmap = new createjs.Bitmap(this.getTex("3_students_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);

        
    }

    public updateOver(index: number): void {

        
        //if (index == -1) {
        //    SceneManager.instance().soundTreeStop();

        //} else {
        //    SceneManager.instance().soundTreePlay();

        //}
        this.shape.setSelectIndex(index);


    }


    private dx: number = 0;
    private m_x: number = 0;
    private m_y: number = 0;
    public updateMouseXY(mx: number, my: number): void {
        this.m_x = mx;
        this.m_y = my;
        this.dx = - (mx - 960) / 200;
        this.group.x = this.group.x + this.dx ;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(-1920, this.group.x);

        this.shape.updateMouseXY(mx - this.group.x, my);
    }

    public startScene(): void {
        this.group.x = -1920 / 2;
        this.m_x = 0;
        this.m_y = 0;

        this.alpha = 0;
        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    }
    public playScene(): void {
        //this.updateMouseXY(this.m_x,this.m_y);
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(-1920, this.group.x);
        this.shape.drawUpdate();
    }

    public getStopSceneTime(): number {
        return 2;
    }

    
    public stopScene(): void {
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


