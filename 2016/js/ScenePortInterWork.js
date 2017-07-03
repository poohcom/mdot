var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortInterWork = (function (_super) {
    __extends(ScenePortInterWork, _super);
    function ScenePortInterWork() {
        _super.call(this);
        this.titleImg = null;
        this.text1 = null;
        this.text2 = null;
        this.text3 = null;
        this.label1 = null;
        this.label2 = null;
        this.label3 = null;
        this.label4 = null;
        this.bigimg = null;
        this.line = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.img4 = null;
        this.imgIndex = 1;
        this.desc = [
            ["m.dot",
                "강민정 방선경 배은영\n장지영 정다정 홍정원",
                "Portfolio Website",
                "M.DOT은 제 17회 동덕여자대학교 미디어디자인과의 졸업전시 웹 사이트이다.\n17회 졸업전시는 성장하고 변화하는 나무의 의미를 담아 미디어디자인과 \n학생들의 성장을 컨셉으로 잡았다.\n부제목인 CONNECT TREE를 학생들의 작품들이 나무로 부터 플렉서스가 \n연결되어 나오는 것으로 나타내었다."
            ],
            ["AREA 51",
                "신다희 이찬미",
                "Information Website",
                "AREA51’은 미국에 위치하고 있는 51구역의 미스터리하고 비밀스러운 사건들과 정보들을 볼 수 \n있는 웹사이트이다.인터넷상에서 루머로 돌고 있는 51구역의 이야기와 51구역에서 근무했다고 \n주장하는 박사들의 증언을 토대로 정보들과 이미지를 구성하였다."
            ],
            ["Billy Milligan",
                "김효진 이지아\n임우영 임지원",
                "E- BOOK",
                "Biily Milligan'은 납치와 강간 혐의로 기소됐다가 다중인격장애와 정신이상으로 최초로 무죄 혐의를\n받은 '빌리 밀리건'의 일대기를 E- BOOK 형식으로 구성한 논픽션 인터랙티브 작품이다.\n빌리의 24명 인격들의 소개하고, 그의 인생에서 중요한 에피소드를 볼 수 있다."
            ],
            ["SEE THROUGH",
                "김지현 방지은 윤정연\n정수호 조지형",
                "Interactive Website",
                "지루하고 단조로운 일상에서 새로운 세상을 볼 수 있다면? SEE THROUGH에서는 평범한 일상에서\n볼 수 없는 시청각적 재미를 제공한다.테마별 안경을 쓸 때마다 사용자가 특별한 능력을 얻어 일상\n과 반전된 캐릭터들을 보며 다양한 인터랙션을 체험할 수 있다."
            ],
            ["Vegan",
                "강은성 문소진\n유지원 임수현",
                "Information Website",
                "Vegan은 비건들과 채식에 관심이 있는 사람들에게 채식에 대한 정보를 제공하는 목적으로 제작\n되었다.비건이라는 주제에 맞춰 오가닉과 신선함을 키워드로 한 Vegan 웹사이트는 비건의 의미,\n채식에 대한 오해와 상식 등의 메뉴를 제공함으로써 채식 생활에 도움을 주고자 하였다."
            ],
            [
                "단테의 신곡",
                "맹예진 양다솔\n이민지 임지혜",
                "Information Kinect",
                "단테 알리기에리가 서술한 책 <신곡-지옥 편>의 내용을 기반으로 한 키넥트 작품이다. \n사용자의 행동을 이용한 인터랙티브 요소와 사운드의 활용을 통해 < 신곡 - 지옥편 > 속 지옥을\n체험할 수 있으며, 대략적인 책의 정보를 소개받을 수 있다."
            ],
            ["심해 탐험대",
                "김지영 차지예 황은하",
                "Interaction information site",
                "심해 탐험대'는 심해와 그곳에서 살아가는 심해어에 대한 정보를 제공하는 사이트이다. \n5세 아동의 빠르고 쉬운 이해를 돕기 위해 이미지와 더빙으로 정보를 제공한다.\n또한 캠을 이용해 나만의 잠수부를 만들고 바다를 꾸미는 콘텐츠를 제공한다."
            ]
        ];
        if (ScenePortInterWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortInterWork._instance = this;
        this.init();
    }
    ScenePortInterWork.instance = function () {
        if (ScenePortInterWork._instance === null) {
            ScenePortInterWork._instance = new ScenePortInterWork();
        }
        return ScenePortInterWork._instance;
    };
    ScenePortInterWork.prototype.prev = function () {
        this.setIndex(this.index - 1);
    };
    ScenePortInterWork.prototype.next = function () {
        this.setIndex(this.index + 1);
    };
    ScenePortInterWork.prototype.setIndex = function (idx) {
        if (idx < 1) {
            idx = this.desc.length;
        }
        if (idx > this.desc.length) {
            idx = 1;
        }
        this.index = idx;
        this.imgIndex = 1;
        if (this.bigimg === null) {
        }
        else {
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
            this.titleImg = new createjs.Bitmap("assets/work/inter/interactive_work_title0" + this.index + ".png");
        }
        else {
            this.titleImg = new createjs.Bitmap("assets/work/inter/interactive_work_title" + this.index + ".png");
        }
        this.titleImg.x = 89;
        this.titleImg.y = 405;
        this.addChild(this.titleImg);
        this.img1 = new createjs.Bitmap("assets/port/inter/" + this.index + "/sub/sub_1.jpg");
        this.img1.x = 275;
        this.img1.y = 353;
        this.img1.on("mouseover", function () { ScenePortInterWork.instance().setImgIndex(1); });
        this.addChild(this.img1);
        this.img2 = new createjs.Bitmap("assets/port/inter/" + this.index + "/sub/sub_2.jpg");
        this.img2.x = 474;
        this.img2.y = 353;
        this.img2.on("mouseover", function () { ScenePortInterWork.instance().setImgIndex(2); });
        this.addChild(this.img2);
        this.img3 = new createjs.Bitmap("assets/port/inter/" + this.index + "/sub/sub_3.jpg");
        this.img3.x = 1374;
        this.img3.y = 353;
        this.img3.on("mouseover", function () { ScenePortInterWork.instance().setImgIndex(3); });
        this.addChild(this.img3);
        this.img4 = new createjs.Bitmap("assets/port/inter/" + this.index + "/sub/sub_4.jpg");
        this.img4.x = 1574;
        this.img4.y = 353;
        this.img4.on("mouseover", function () { ScenePortInterWork.instance().setImgIndex(4); });
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
        this.setType();
    };
    ScenePortInterWork.prototype.setImgIndex = function (idx) {
        this.imgIndex = idx;
        this.removeChild(this.bigimg);
        this.removeChild(this.bigimgButton);
        this.removeChild(this.line);
        this.setType();
    };
    ScenePortInterWork.prototype.getlayout = function () {
        switch (this.index) {
            default:
                return 2;
        }
    };
    ScenePortInterWork.prototype.setType = function () {
        switch (this.getlayout()) {
            case 3:
                this.bigimg = new createjs.Bitmap("assets/port/inter/" + this.index + "/main/main_" + this.imgIndex + ".jpg");
                this.bigimg.x = 476;
                this.bigimg.y = 153;
                this.addChild(this.bigimg);
                this.bigimgButton = new Button(this.getTex("mono_frame_big_3"), 400, 788);
                this.bigimgButton.x = 476;
                this.bigimgButton.y = 153;
                this.bigimgButton.alpha = 0;
                this.addChild(this.bigimgButton);
                this.bigimgButton.on("mouseover", function () {
                    ScenePortInterWork.instance().bigimgButton.alpha = 1;
                });
                this.bigimgButton.on("mouseout", function () {
                    ScenePortInterWork.instance().bigimgButton.alpha = 0;
                });
                this.bigimgButton.on("click", function () {
                    ScenePortInterWork.instance().bigimgButton.alpha = 0;
                    ScenePortInterWork.instance().popup(ScenePortInterWork.instance().getlayout(), "assets/port/inter/", ScenePortInterWork.instance().imgIndex, 4);
                });
                this.line = new createjs.Bitmap(this.getTex("work_text_line_contents"));
                this.line.x = 1108;
                this.line.y = 680;
                this.addChild(this.line);
                this.img1.x = 936;
                this.img1.y = 153;
                this.img2.x = 936;
                this.img2.y = 351;
                this.img3.x = 936;
                this.img3.y = 549;
                this.img4.x = 936;
                this.img4.y = 749;
                this.label1.x = 1104;
                this.label1.y = 637;
                this.label2.x = 1227;
                this.label2.y = 699;
                this.label3.x = 1227;
                this.label3.y = 738;
                this.label4.x = 1104;
                this.label4.y = 805;
                this.text1.x = 1104;
                this.text1.y = 699;
                this.text2.x = 1104;
                this.text2.y = 738;
                this.text3.x = 1104;
                this.text3.y = 777;
                break;
            case 2:
                this.bigimg = new createjs.Bitmap("assets/port/inter/" + this.index + "/main/main_" + this.imgIndex + ".jpg");
                this.bigimg.x = 677;
                this.bigimg.y = 215;
                this.addChild(this.bigimg);
                this.bigimgButton = new Button(this.getTex("mono_frame_big_2"), 686, 388);
                this.bigimgButton.x = 677;
                this.bigimgButton.y = 215;
                this.bigimgButton.alpha = 0;
                this.addChild(this.bigimgButton);
                this.bigimgButton.on("mouseover", function () {
                    ScenePortInterWork.instance().bigimgButton.alpha = 1;
                });
                this.bigimgButton.on("mouseout", function () {
                    ScenePortInterWork.instance().bigimgButton.alpha = 0;
                });
                this.bigimgButton.on("click", function () {
                    ScenePortInterWork.instance().bigimgButton.alpha = 0;
                    ScenePortInterWork.instance().popup(ScenePortInterWork.instance().getlayout(), "assets/port/inter/", ScenePortInterWork.instance().imgIndex, 4);
                });
                this.line = new createjs.Bitmap(this.getTex("work_text_line"));
                this.line.x = 501;
                this.line.y = 735;
                this.addChild(this.line);
                this.img1.x = 275;
                this.img1.y = 353;
                this.img2.x = 474;
                this.img2.y = 353;
                this.img3.x = 1374;
                this.img3.y = 353;
                this.img4.x = 1574;
                this.img4.y = 353;
                this.label1.x = 502;
                this.label1.y = 692;
                this.label2.x = 622;
                this.label2.y = 779;
                this.label3.x = 622;
                this.label3.y = 833;
                this.label4.x = 886;
                this.label4.y = 805;
                this.text1.x = 501;
                this.text1.y = 779;
                this.text2.x = 501;
                this.text2.y = 833;
                this.text3.x = 886;
                this.text3.y = 776;
                break;
        }
    };
    ScenePortInterWork.prototype.init = function () {
        var prev_button = new Button(this.getTex("work_up"), 30, 30);
        prev_button.x = 85;
        prev_button.y = 317;
        prev_button.on("click", function () { ScenePortInterWork.instance().prev(); });
        this.addChild(prev_button);
        var next_button = new Button(this.getTex("work_down"), 30, 30);
        next_button.x = 85;
        next_button.y = 759;
        next_button.on("click", function () { ScenePortInterWork.instance().next(); });
        this.addChild(next_button);
        var esc_button = new Button(this.getTex("X"), 45, 45);
        esc_button.x = 1734;
        esc_button.y = 128;
        esc_button.regX = 12;
        esc_button.regY = 12;
        esc_button.on("click", function () { SceneManager.instance().nextSceneIndex(SceneManager.INTERACTIVE); });
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
            "http://tvcast.naver.com/v/939608",
            "http://tvcast.naver.com/v/939503",
            "http://tvcast.naver.com/v/939514",
            "http://tvcast.naver.com/v/939505",
            "http://tvcast.naver.com/v/939510",
            "http://tvcast.naver.com/v/939512",
            ""];
        this.naverCastButton = new Button(this.getTex("navercast_icon"), 73, 23);
        this.naverCastButton.x = 1397;
        this.naverCastButton.y = 696;
        this.naverCastButton.on("click", this.openNaverCast, this);
        this.addChild(this.naverCastButton);
    };
    ScenePortInterWork.prototype.startScene = function () {
        this.closePopup();
        this.count = 0;
        this.alpha = 1;
    };
    ScenePortInterWork.prototype.stopScene = function () {
        this.closePopup();
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {
        }
        ;
    };
    ScenePortInterWork._instance = null;
    return ScenePortInterWork;
})(ScenePortWork);
//# sourceMappingURL=ScenePortInterWork.js.map