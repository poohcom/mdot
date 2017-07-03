/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ScenePortAnimationWork extends ScenePortWork {

    private static _instance: ScenePortAnimationWork = null;

    constructor() {
        super();
        if (ScenePortAnimationWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortAnimationWork._instance = this;

        this.init();
    }

    public static instance(): ScenePortAnimationWork {
        if (ScenePortAnimationWork._instance === null) {
            ScenePortAnimationWork._instance = new ScenePortAnimationWork();
        }
        return ScenePortAnimationWork._instance;
    }


    public bigimgButton: Button;
    private titleImg: createjs.Bitmap = null;

    private text1: createjs.Text = null;
    private text2: createjs.Text = null;
    private text3: createjs.Text = null;


    private label1: createjs.Text = null;
    private label2: createjs.Text = null;
    private label3: createjs.Text = null;
    private label4: createjs.Text = null;



    private bigimg: createjs.Bitmap = null;

    private line: createjs.Bitmap = null;
    private img1: createjs.Bitmap = null;
    private img2: createjs.Bitmap = null;
    private img3: createjs.Bitmap = null;
    private img4: createjs.Bitmap = null;


    public lVideoDOMElement: createjs.DOMElement = null;
    public lVideo: HTMLVideoElement = null;

    public prev(): void {
        this.setIndex(this.index - 1);
    }

    public next(): void {
        this.setIndex(this.index + 1);
    }

    public setIndex(idx: number) {
        if (idx < 1) {
            idx = this.desc.length;
        }

        if (idx > this.desc.length) {
            idx = 1;
        }

        this.index = idx;
        this.stopVideo();

        //this.lVideo = document.createElement('video');
        //this.lVideo.src = "./assets/work_page/videography/" + this.index + "/video.mp4";
        //this.lVideo.hidden = false;
        //this.lVideo.width = 810;
        //this.lVideo.height = 456;
        //this.lVideo.volume = 0.6;
        //this.lVideo.controls = true;
        //this.lVideo.autoplay = true;
        //var rootGroup = document.getElementById('videocontainer');
        //rootGroup.appendChild(this.lVideo);
        //var lVideoDOMElement: createjs.DOMElement = new createjs.DOMElement(this.lVideo);
        //lVideoDOMElement.x = 466;
        //lVideoDOMElement.y = 241;
        //this.addChild(lVideoDOMElement);

        if (this.bigimg === null) {
        } else {
            this.removeChild(this.titleImg);
            this.removeChild(this.bigimgButton);
            this.removeChild(this.bigimg);
            this.removeChild(this.line);
            this.removeChild(this.img1);
            this.removeChild(this.img2);
            this.removeChild(this.img3);
            this.removeChild(this.img4);

            this.removeChild(this.label1);
            this.removeChild(this.label2);
            this.removeChild(this.label3);
            this.removeChild(this.label4);
        }

        if (this.index < 10) {
            this.titleImg = new createjs.Bitmap("assets/work/ani/animation_work_title0" + this.index + ".png");
        } else {
            this.titleImg = new createjs.Bitmap("assets/work/ani/animation_work_title" + this.index + ".png");
        }

        this.titleImg.x = 89;
        this.titleImg.y = 405;

        this.addChild(this.titleImg);


        this.bigimg = new createjs.Bitmap("assets/port/ani/" + this.index + "/main/main_1.jpg");
        this.bigimg.x = 677;
        this.bigimg.y = 215;

        this.addChild(this.bigimg);

        this.bigimgButton = new Button(this.getTex("mono_frame_play_2"), 686, 388);

        this.bigimgButton.x = 677;
        this.bigimgButton.y = 215;

        this.addChild(this.bigimgButton);

        this.bigimgButton.on("mouseover", function () {

            ScenePortAnimationWork.instance().bigimgButton.alpha = 1;
        });

        this.bigimgButton.on("mouseout", function () {
            ScenePortAnimationWork.instance().bigimgButton.alpha = 0;
        });

        this.bigimgButton.on("click", function () {
            ScenePortAnimationWork.instance().bigimgButton.alpha = 0;
            ScenePortAnimationWork.instance().playVideo();
            SceneManager.instance().bgmOff();
        });


        this.line = new createjs.Bitmap(this.getTex("work_text_line"));
        this.line.x = 501;
        this.line.y = 735;
        this.addChild(this.line);


        this.img1 = new createjs.Bitmap("assets/port/ani/" + this.index + "/sub/sub_1.jpg");
        this.img1.x = 275;
        this.img1.y = 353;
        this.img1.on("mouseover", function () { ScenePortAnimationWork.instance().setImgIndex(1) });
        this.addChild(this.img1);

        this.img2 = new createjs.Bitmap("assets/port/ani/" + this.index + "/sub/sub_2.jpg");
        this.img2.x = 474;
        this.img2.y = 353;
        this.img2.on("mouseover", function () { ScenePortAnimationWork.instance().setImgIndex(2) });
        this.addChild(this.img2);

        this.img3 = new createjs.Bitmap("assets/port/ani/" + this.index + "/sub/sub_3.jpg");
        this.img3.x = 1374;
        this.img3.y = 353;
        this.img3.on("mouseover", function () { ScenePortAnimationWork.instance().setImgIndex(3) });
        this.addChild(this.img3);

        this.img4 = new createjs.Bitmap("assets/port/ani/" + this.index + "/sub/sub_4.jpg");
        this.img4.x = 1574;
        this.img4.y = 353;
        this.img4.on("mouseover", function () { ScenePortAnimationWork.instance().setImgIndex(4) });
        this.addChild(this.img4);


        this.label1 = new createjs.Text(this.desc[this.index - 1][0], "bold 22px yoon", "#959595");
        this.label1.x = 502;
        this.label1.y = 692;
        this.addChild(this.label1);

        this.label2 = new createjs.Text(this.desc[this.index - 1][1], "normal 15px yoon", "#808080");
        this.label2.x = 622;
        this.label2.y = 779;
        this.label2.lineHeight = 29;
        this.addChild(this.label2);

        this.label3 = new createjs.Text(this.desc[this.index - 1][2], "normal 15px yoon", "#808080");
        this.label3.x = 622;
        this.label3.y = 833;
        this.addChild(this.label3);

        this.label4 = new createjs.Text(this.desc[this.index - 1][3], "normal 15px yoon", "#8b8b8b");
        this.label4.x = 886;
        this.label4.y = 805;
        this.label4.lineHeight = 25;
        this.addChild(this.label4);
    }

    public setImgIndex(idx: number): void {

        if (this.lVideo === null) {
        } else {
            if (this.lVideo.paused == false) {
                return;
            }
        }

        this.stopVideo();

        this.removeChild(this.bigimg);

        this.bigimg = new createjs.Bitmap("assets/port/ani/" + this.index + "/main/main_" + idx + ".jpg");
        this.bigimg.x = 677;
        this.bigimg.y = 215;
        this.addChildAt(this.bigimg, 1);
        this.bigimgButton.alpha = 0;
    }


    public playVideo(): void {
        ////////////////
        if (this.lVideo === null) {
        } else {
            this.stopVideo();
        }

        this.lVideo = document.createElement('video');

        this.lVideo.hidden = true;

        setTimeout(showVideo, 1000);

        function showVideo(): void {
            
            if (ScenePortAnimationWork.instance().lVideo === null)
            { } else {
                ScenePortAnimationWork.instance().lVideo.hidden = false;
            }
        }

        this.lVideo.src = "assets/port/ani_mp4/" + this.index + ".mp4";
        this.lVideo.poster = "assets/port/ani/" + this.index + "/main/main_1.jpg";
        this.lVideo.preload = "metadata";

        this.lVideo.width = 688;
        this.lVideo.height = 389;

        this.lVideo.volume = 0.6;
        this.lVideo.controls = true;
        this.lVideo.autoplay = true;
        var rootGroup = document.getElementById('videocontainer');
        rootGroup.appendChild(this.lVideo);

        this.lVideoDOMElement = new createjs.DOMElement(this.lVideo);

        this.lVideoDOMElement.x = 676;
        this.lVideoDOMElement.y = 214;

        this.addChild(this.lVideoDOMElement);
    }

    public fullscreenOn(): void {
        if (this.lVideoDOMElement === null)
            return;

        this.lVideoDOMElement.x = 0;
        this.lVideoDOMElement.y = 0;
        this.removeChild(this.lVideoDOMElement);
        this.stage.addChild(this.lVideoDOMElement);
    }

    public fullscreenOff(): void {

        if (this.lVideoDOMElement === null)
            return;

        this.lVideoDOMElement.x = 676;
        this.lVideoDOMElement.y = 214;

        this.stage.removeChild(this.lVideoDOMElement);
        this.addChild(this.lVideoDOMElement);
    }

    public stopVideo(): void {
        SceneManager.instance().resumeBGM();

        if (this.lVideo === null)
            return;

        this.lVideo.pause();
        var rootGroup = document.getElementById('videocontainer');
        rootGroup.removeChild(this.lVideo);
        this.removeChild(this.lVideoDOMElement);
        this.lVideoDOMElement = null;

        this.lVideo = null;
    }


    public init(): void {

        var prev_button: Button = new Button(this.getTex("work_up"), 30, 30);
        prev_button.x = 85;
        prev_button.y = 317;
        prev_button.on("click", function () { ScenePortAnimationWork.instance().prev() });

        this.addChild(prev_button);

        var next_button: Button = new Button(this.getTex("work_down"), 30, 30);
        next_button.x = 85;
        next_button.y = 759;
        next_button.on("click", function () { ScenePortAnimationWork.instance().next() });

        this.addChild(next_button);

        var esc_button: Button = new Button(this.getTex("X"), 45, 45);
        esc_button.x = 1734;
        esc_button.y = 128;
        esc_button.regX = 12;
        esc_button.regY = 12;

        esc_button.on("click", function () { SceneManager.instance().nextSceneIndex(SceneManager.ANIMATION); });

        esc_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }

        });
        esc_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }

        });

        this.addChild(esc_button);


        this.text1 = new createjs.Text("DESIGNER", "bold 15px yoon", "#B4B4B4");
        this.text1.x = 501;
        this.text1.y = 779;

        this.addChild(this.text1);

        this.text2 = new createjs.Text("CATEGORY", "bold 15px yoon", "#B4B4B4");
        this.text2.x = 501;
        this.text2.y = 833;

        this.addChild(this.text2);

        this.text3 = new createjs.Text("DESCRIPTION", "bold 15px yoon", "#4951de");
        this.text3.x = 886;
        this.text3.y = 776;

        this.addChild(this.text3);




        this.naverCast = [
            "http://tvcast.naver.com/v/926864/list/79808",
            "http://tvcast.naver.com/v/926870/list/79808",
            "http://tvcast.naver.com/v/926886/list/79808",
            "http://tvcast.naver.com/v/926897/list/79808",
            "http://tvcast.naver.com/v/926903/list/79808",
            "http://tvcast.naver.com/v/926910/list/79808",
            "http://tvcast.naver.com/v/926916/list/79808",
            "http://tvcast.naver.com/v/926950/list/79808",
            "http://tvcast.naver.com/v/926921/list/79808"

        ];

        this.naverCastButton = new Button(this.getTex("navercast_icon"), 73, 23);
        this.naverCastButton.x = 1400;
        this.naverCastButton.y = 696;
        this.naverCastButton.on("click", this.openNaverCast, this);

        this.addChild(this.naverCastButton);
    }

    public startScene(): void {
        this.closePopup();
        this.count = 0;
        this.alpha = 1;


    }

    public stopScene(): void {
        this.closePopup();
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {


        };

        this.stopVideo();

    }


    public desc: string[][] = [


        ["BODY",
            "기소을 김주현 임수산나",
            "2D Animation",
            "몸을 완성해 나가는 과정을 보여주는 애니메이션이다.\n아무것도 없는 배경에서 잘려있는 발이 등장하고, 다리, 몸통 등의 신체 부위들이 서로 붙는다. \n큰 신체 부위가 만들어진 후 다양한 배경에서 코, 귀, 눈 등이 붙어 점점 인간의 모습이 완성된다."
        ],
        [
            "GOAT",
            "배효영 이효원 임지원",
            "2D Animation",
            "평화로운 대관령에 할아버지와 가축들이 살고 있다. 여느 때와 같이 사랑하는 가축들에게 아침을 \n주던 할아버지는 가장 아끼는 염소인 '복덩이'가 사라진 것을 발견한다! 할아버지는 허겁지겁 \n복덩이를 찾아다닌다.결국 할아버지의 노력으로 복덩이를 무사히 구출해내고 애지중지 복덩이를 \n안고 집으로 데려온다.해가 지도록 복덩이를 찾으러 다니느라 배가 고파진 할아버지는 저녁상을 \n준비한다.그런데.. "
        ],
        [
            "MATILDA",
            "신유정",
            "Opening Title Sequence",
            "동명 소설 원작의 영화, 마틸다의 타이틀 시퀀스이다. 소설의 주인공인 6살 마틸다는 어렸을 때부터\n가족들의 무시를 당하며 자랐지만 어느 순간 발견한 자신의 특별한 능력을 이용하여 힘든 상황을 \n유쾌하게 이겨낸다.영화의 흐름대로 진행시키며 간단한 모션그래픽으로 타이틀 시퀀스를 \n제작하였다."
        ],
        ["RAIL",
            "문소진 양다솔",
            "Animation",
            "현대사회와 기계의 공통점 중 하나인 ‘멈추면 안 된다.’라는 것에 초점을 맞춘 애니메이션이다.\n기계가 멈추면 고장 났다고 인식하고 버려지듯이 사람도 무언가를 하지 않으면 도태되고 자리를\n잃게 되는, 소위 ‘멈추면 안 되는’ 사회를 담담하게 나타내고자 하였다."
        ],
        ["바퀴의자",
            "맹예진 배은영 이민지",
            "2D Animation",
            "엉망진창인 집에 피곤한 상태로 돌아온 소녀는 바퀴의자에 축 늘어앉아서 휴식을 취한다.\n하지만 갑작스레 얼굴을 보러 오겠다는 남자친구의 전화에 소녀의 평화는 깨지고 만다. \n소녀는 자신의 바퀴의자를 이용해서 집을 순식간에 치우고, 화장을 한 뒤 남자친구를 맞이한다.\n일상의 소소한 이야기를 역동적인 움직임으로 표현하여 재미를 주려 하였다."
        ],
        ["방귀향수공장",
            "신다희",
            "Cell Animation",
            "방귀향수공장은 병 맛 콘셉트의 셀 애니메이션이다.\n백수가 방귀향수공장에 취직해 일을 하게 된다.\n백수는 각종 방귀에 좋은 음식을 먹으며 방귀를 뀌다가 어느 날 엄청난 방귀를 뀌게 된다.\n그 방귀로 호스가 막히고 호스를 풀자 엄청난 가스가 나온다.\n그 가스가 모여 레벨 10의 로얄방귀베이비가 탄생하게 된다."
        ],
        ["소꿉놀이",
            "김소희 김은정 장민지",
            "Digital Animation",
            "소꿉놀이는 어렸을 적 아동 폭력으로 인해 제대로 성장하지 못한 부모의 모습이 아이에게 그대로\n전해지며 아이도 부모와 같은 행동을 하게 되는 모습을 담은 애니메이션이다.물체와 풍경들은 \n비정상적인 투시를 이용하여 왜곡된 형태로 연출하였는데, 이 왜곡됨은 주인공이 집안으로 \n들어오면서 더 심해지며, 주인공의 심리상태가 더욱더 불안해지는 공감임을 의미한다."
        ],
        ["양화대교",
            "강은성 김한별\n장지영 홍정원",
            "Animation",
            "애니메이션 '양화대교'는 합정과 영등포를 오가는 대교로 가지각색의 사람들이 모여, 각자의 사건을\n소위 말하는 '막장' 형식으로 풀어간다.이렇게 펼쳐지는 사건들이 일상 대한 해소와 약간의 \n일탈감을 안겨준다.이 양화대교 애니메이션을 통해 일상에 지친 사람들에게 잠시나마 소소한 \n웃음을 안겨주고자 하는 것이 목적이다."
        ],
        [
            "엄마와 뻐꾸기시계",
            "유재희 민지혜",
            "Animation",
            "하루 종일 딸을 기다리는 할머니의 내용이다. 이 방문한 후 둘만의 추억에 젖어들지만 다시 현실을 \n직시했을 때 딸은 없다.특징적 연출은, 재회장면과 추억에 젖는 과정, 다시 현실로 돌아오는 장면 등\n에서 인물과 장소의 모습이 바뀌는 애니메이션의 특징적 기법을 사용하여 제작.뻐꾸기시계의 \n사운드를 활용하여 편집하였다."
        ]
    ];

}
