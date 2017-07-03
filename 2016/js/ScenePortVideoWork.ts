/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ScenePortVideographyWork extends ScenePortWork {

    private static _instance: ScenePortVideographyWork = null;

    constructor() {
        super();
        if (ScenePortVideographyWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortVideographyWork._instance = this;

        this.init();
    }

    public static instance(): ScenePortVideographyWork {
        if (ScenePortVideographyWork._instance === null) {
            ScenePortVideographyWork._instance = new ScenePortVideographyWork();
        }
        return ScenePortVideographyWork._instance;
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
            this.titleImg = new createjs.Bitmap("assets/work/video/video_work_title0" + this.index + ".png");
        } else {
            this.titleImg = new createjs.Bitmap("assets/work/video/video_work_title" + this.index + ".png");
        }

        this.titleImg.x = 89;
        this.titleImg.y = 405;

        this.addChild(this.titleImg);


        this.bigimg = new createjs.Bitmap("assets/port/video/" + this.index + "/main/main_1.jpg");
        this.bigimg.x = 677;
        this.bigimg.y = 215;

        this.addChild(this.bigimg);

        this.bigimgButton = new Button(this.getTex("mono_frame_play_2"), 686, 388);

        this.bigimgButton.x = 677;
        this.bigimgButton.y = 215;

        this.addChild(this.bigimgButton);

        this.bigimgButton.on("mouseover", function () {

            ScenePortVideographyWork.instance().bigimgButton.alpha = 1;
        });

        this.bigimgButton.on("mouseout", function () {
            ScenePortVideographyWork.instance().bigimgButton.alpha = 0;
        });

        this.bigimgButton.on("click", function () {
            ScenePortVideographyWork.instance().bigimgButton.alpha = 0;
            ScenePortVideographyWork.instance().playVideo();
            SceneManager.instance().bgmOff();
        });


        this.line = new createjs.Bitmap(this.getTex("work_text_line"));
        this.line.x = 501;
        this.line.y = 735;
        this.addChild(this.line);



        this.img1 = new createjs.Bitmap("assets/port/video/" + this.index + "/sub/sub_1.jpg");
        this.img1.x = 275;
        this.img1.y = 353;
        this.img1.on("mouseover", function () { ScenePortVideographyWork.instance().setImgIndex(1) });
        this.addChild(this.img1);

        this.img2 = new createjs.Bitmap("assets/port/video/" + this.index + "/sub/sub_2.jpg");
        this.img2.x = 474;
        this.img2.y = 353;
        this.img2.on("mouseover", function () { ScenePortVideographyWork.instance().setImgIndex(2) });
        this.addChild(this.img2);

        this.img3 = new createjs.Bitmap("assets/port/video/" + this.index + "/sub/sub_3.jpg");
        this.img3.x = 1374;
        this.img3.y = 353;
        this.img3.on("mouseover", function () { ScenePortVideographyWork.instance().setImgIndex(3) });
        this.addChild(this.img3);

        this.img4 = new createjs.Bitmap("assets/port/video/" + this.index + "/sub/sub_4.jpg");
        this.img4.x = 1574;
        this.img4.y = 353;
        this.img4.on("mouseover", function () { ScenePortVideographyWork.instance().setImgIndex(4) });
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

        this.bigimg = new createjs.Bitmap("assets/port/video/" + this.index + "/main/main_" + idx + ".jpg");
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

            if (ScenePortVideographyWork.instance().lVideo === null)
            { } else {
                ScenePortVideographyWork.instance().lVideo.hidden = false;
            }
        }

        this.lVideo.src = "assets/port/video_mp4/" + this.index + ".mp4";
        this.lVideo.poster = "assets/port/video/" + this.index + "/main/main_1.jpg";
        this.lVideo.preload = "metadata";

        //this.lVideo.width = 686;
        //this.lVideo.height = 388;

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
        prev_button.on("click", function () { ScenePortVideographyWork.instance().prev() });

        this.addChild(prev_button);

        var next_button: Button = new Button(this.getTex("work_down"), 30, 30);
        next_button.x = 85;
        next_button.y = 759;
        next_button.on("click", function () { ScenePortVideographyWork.instance().next() });

        this.addChild(next_button);

        var esc_button: Button = new Button(this.getTex("X"), 45, 45);
        esc_button.x = 1734;
        esc_button.y = 128;
        esc_button.regX = 12;
        esc_button.regY = 12;

        esc_button.on("click", function () { SceneManager.instance().nextSceneIndex(SceneManager.VIDEOGRAPHY); });

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
        "http://tvcast.naver.com/v/926822",
        "http://tvcast.naver.com/v/926833",
        "http://tvcast.naver.com/v/926834",
        "http://tvcast.naver.com/v/926847",
        "http://tvcast.naver.com/v/926848",
        "http://tvcast.naver.com/v/926853",
        "http://tvcast.naver.com/v/926856",
        "http://tvcast.naver.com/v/926863",
        "http://tvcast.naver.com/v/926866",
        "http://tvcast.naver.com/v/926868",
        "http://tvcast.naver.com/v/926885"

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
        [
            "Canon 5Ds 광고",
            "기소을 김주현\n임수산나 조지형",
            "Commercial Film",
            "캐논이 EOS 최초로 적용시킨 타임랩스 자동 동영상 기능을 홍보하는 광고 영상이다.\n'시간의 흐름을 담다'를 슬로건으로 하여 하루 시간의 흐름을 타임랩스 기능을 이용해 촬영하였다.\n타임랩스의 매력을 가장 잘 보여주는 일출, 구름, 일몰, 달, 은하수의 풍경을 담았다."
        ],
        [
            "Devil’s cantata",
            "맹예진 민지혜\n배은영 홍정원",
            "music video",
            "사람들이 모두 떠나간 늦은 시간, 버려진 외딴 곳에 숨어사는 소녀가 자신만의 생일파티를 준비한다.\n소녀는 설레는 마음으로 인형들에게 나누어 줄 초대장을 만들고 자신의 파티장소를 꾸미기 시작한다.\n그러던 중 우연히 한 남자가 초대장을 발견하게 되고 소녀가 홀로 있는 곳으로 찾아온다.\n신비로운 소녀의 자축파티를 호기심 있게 지켜보던 남자는 카메라로 소녀를 몰래 찍으려 하지만\n예기치 않게  플래시가 터지고 만다. 불청객의 등장에 놀란 소녀는 급히 도망치며\n영상은 클라이맥스에 다다른다."
        ],
        [
            "Magazine B",
            "김소희 김은정 장민지",
            "Promotion Video",
            "Magazine B는 '매달 한 브랜드만을 소개하는 잡지'인 Magazine B를 홍보하는 Promotion Video이다.\n다양한 브랜드를 다루는 잡지인 만큼 영상 안에서 다양한 카테고리의 제품을 다루었다.\n전체적으로 다채로운 색과, 그에 어울리는 사운드를 이용하여 시각적 청각적 효과를 주었다."
        ],
        [
            "Merchen Studio",
            "곽한송 김예원 임수현",
            "CF",
            "Merchen Studio는 수채화 클래스와 팝아트 클래스를 운영하고 있는 아틀리에다.\nMerchen Studio 광고를 총 두 편으로 나누어 제작하였다. 1편에서는 아틀리에 오픈 전 준비과정과\n수채화 작업 영상을 교차 편집하여 잔잔한 분위기를 연출하였다. 2편에서는 팝아트 클래스를\n주제로 여러 사람들이 연인, 가족 등을 위한 팝아트 작품을 그리는 영상 중심으로\n여유로운 분위기를 담아냈다."
        ],
        [
            "Outta time",
            "손미리 유예람\n이찬미 정수호",
            "Short Film",
            "자기만의 세상 속에서 매일 홀로 반복되는 일상에 묶여 삶에 권태를 느끼는 여자가 있다. 여자는\nTV를 매개로 하여 지루한 일상을 탈출하려 소극적인 일탈을 시도한다. 꽃을 먹거나,\n신나게 뛰는 행위, 지루한 삶을 상징하는 오브제들을 파괴하는 등의 엉뚱한 행동을 통해 외부가 아닌 \n자기만의 세상 속에서 소극적이지만 나름대로의, 여자만의 방식의 일탈을 표현하였다."
        ],
        [
            "Peter Man",
            "김하나 김효진\n김효진 이지아",
            "Music video",
            "피터팬 증후군을 앓고 있는 20대 한국 남성의 이야기이다. 그는 사회에 적응하지 못하고 불안해하며\n쉽게 공상에 빠진다. 그러던 도중 그는 자신만의 공상에 빠져 금가루를 찾아 떠나게 된다."
        ],
        [
            "Standing Egg - 무지개",
            "강민정 김지영 김한별\n유지원 임지혜",
            "Music Video",
            "만난 지 얼마 되지 않은 풋풋한 남녀가 데이트를 하기 위해 만나는 과정을 그린 Standing Egg의\n무지개 뮤직비디오이다.멜로디에서 느껴지는 설레는 감정을 두 남녀가 데이트를 준비하는 모습을\n통해 영상에 담아내고자 하였다.영상의 색감과 그래픽을 통해 봄의 분위기를 연출했다."
        ],
        [
            "UP ALL NIGHT",
            "신유정 이로사\n차지예 황은하",
            "Promotion Film",
            "24시간 즐길 거리로 가득한 한국. ‘Up All Night’은 ‘밤새 깨어있다’는 뜻으로 대한민국의 다양한 밤\n문화에 대한 내용을 담은 영상이다. 빠른 화면전환과 BGM을 바탕으로 화려하고 활기찬 이미지를\n보여주려 하였다.‘Up All Night’은 외국인뿐만 아니라 한국인에게도 신나고 흥미로운 영상으로\n다가갈 것이다."
        ],
        [
            "We Need to Talk about Kevin",
            "김지현 방선경\n배효영 이효원",
            "Movie Title Sequence",
            "We Need to Talk about Kevin'은 엄마와 아들에 대한 영화이다.\n생각지 못하게 케빈을 낳게 된 에바는 자신에게 강요되는 모성애로 케빈을 대하고, 케빈은 이유 모를\n반항으로 에바에게 정신적 고통을 준다. 청소년이 된 케빈은 어느 날 에바가 평생 혼자 짊어져야\n할 살인을 저지른다. 이 영화는 케빈의 '탄생'으로 비극이 시작되며, 자신의 생일을 단 며칠\n앞두고 살인을 저지른다. 이 점에 초점을 맞추어 '생일파티'라는 주제로, 케빈이 살인을 준비하는\n과정을 자신의 생일파티를 준비하는 과정에 빗대어 표현한다."
        ],
        [
            "검은 사제들",
            "손승희 정보경",
            "Opening Title Sequence",
            "영화 “검은 사제들”은 미스터리한 사건에 맞서는 두 사제들을 그린 이야기로, 악령을 퇴치하는\n구마 의식을 바탕으로 긴박한 분위기의 영화이다.이러한 영화 속 이야기 중 구마 의식 단계에\n초점을 맞춰 실제 검은 사제들 영화에 썼던 소품들을 사용하여 기존 영화의 긴박한 분위기와는\n다르게 차분한 분위기로 클로즈업 샷을 중심으로 한 오프닝 타이틀 시퀀스를 연출하였다."
        ],
        [
            "퍼플 커튼 - 홀로 걷는 길",
            "민선정 윤정연 이수정\n임우영 정예진",
            "Music Video",
            "청춘은 언제나 찬란해 보이지만 때로 외로움을 느낀다. 인생에서 20대의 청춘들은 이별 그리고 꿈\n그 어떤 것이든 어려움을 겪고 포기하고 싶을 때가 있다. 홀로 걷는 길의 제목과 가사처럼 누구나\n겪어본 힘든 상황에 처한 청춘들의 이야기를 뮤직비디오에 담았다."
        ]
    ];


    
} 
