var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortContentsWork = (function (_super) {
    __extends(ScenePortContentsWork, _super);
    function ScenePortContentsWork() {
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
            [
                "GONG CHA",
                "임지원 임지혜 장지영",
                "Application",
                "프리미엄 차 브랜드인 공차(貢茶)의 애플리케이션이다. 다양하게 음료를\n선택할 수 있는 커스터마이징 시스템과 원거리 통신 기술인 비콘을 통해\n사용자가 보다 쉽고 빠르게 음료 주문을 할 수 있게 도와준다. \n음료 커스터마이징 과정을 시각적으로 볼 수 있어 사용자들의 이해를 돕는다."
            ],
            ["Fabien.H 스마트미러",
                "강민정 강은성\n김한별 유지원",
                "Fabien.H Smart mirror",
                "행동반경이 좁은 공간 속에서 앞 거울과 사용자 간의 생기는 심리적, 물리적 거리감을 \n콘텐츠와 립 모션으로 최소화하고맞춤 헤어 시뮬레이션을 통해 헤어 스타일링 실패율이 감소한다."
            ],
            ["Let’s Korail",
                "민선정 신다희 신유정 정예진",
                "Application Renewal",
                "기존의 복잡한 예약 과정을 간단하게 하여 보다 빠른 승차권 구매가 \n가능하도록 개선하였다.또한 어플리케이션을 통해 열차 탑승 전 \n나의 열차를 찾아주는 위젯 서비스 및 열차 내 편의 서비스를 제공함으로 \n승객의 편의를 돕는다."
            ],
            ["MERCY JUICE",
                "김하나 손승희 정보경",
                "Application & Smart Watch",
                "MERCY JUICE를 보다 편리하고 재미있게 즐길 수 있도록 다양한 서비스를 제공하는 \n어플리케이션이다.또한 웨어러블 기기인 ‘Smart Watch’를 연동하여 자신의 수분상태와 \n비타민상태를 직접 보고 느끼면서 평소 의식하지 못한 신체적 혹은 생리적 현상을 눈으로 \n확인하고 MERCY JUICE를 통하여 케어를 할 수 있도록 한다. \n그리고 간편하게 서비스를 이용할 수 있다."
            ],
            [
                "Innisfree Touch Screen",
                "손미리 유재희\n임수산나 차지예",
                "스마트 터치 스크린",
                "Innisfree Touch Screen은 이니스프리 매장 내에 설치되어\n고객들이 제품을 선택하고 구매하는데 도움을 주는 터치 디바이스이다.\n테스트를 통해 개인의 피부 톤과 피부 상태를 진단해주고,\n그에 따른 맞춤형 제품을 추천해준다.NFC 기능을 통해 제품의 성분 및 효능,\n원료와 같은 자세한 정보를 쉽고 빠르게 제공한다."
            ],
            ["Pocket Ward & Smart Watch",
                "김소희 김은정 장민지",
                "간호사용 Charting Pad & 환자용 Smart Watch",
                "Pocket Ward는 간호사가 작성하는 차트나 간호일지 등 Pad 하나에서\n처리할 수 있는 간호사용 Pad이며, Smart Watch는 기존 환자 네임 밴드의 \n역할을 대체한 환자용 Watch이다.이 두 개가 연동되면서 간호사는 환자에\n대한 정보를 한 번에 수집하여 환자를 더 효과적으로 관리할 수 있고,\n의료진과 환자들 사이의 소통을 극대화한다."
            ],
            ["Paagle",
                "맹예진 민지혜 배은영 이로사 이민지",
                "Iphone Application",
                "Paagle은 파충류 정글의 줄임말로써, 기존에 없는 파충류 종합\n애플리케이션이다.Paagle은 파충류 마니아들의 시장조사와 \n설문조사를 통해 4가지 콘텐츠를 개발하였다. \n원형을 적극적으로 사용하여 디자인하였고 탄력적인\n애니메이션을 적용하여 생동감 있는 어플을 제작하였다"
            ],
            ["Salon du parfumeur kiosk",
                "윤정연 이찬미 임우영 정수호 조지형",
                "Promotion kiosk",
                "Salon du parfumeur kiosk는 향수 자판기로 국내 향수 공방 브랜드\nGarnir, Louis, Perfumelifer의 제품에 대한 인터랙티브한 경험을 제공하는\n프로모션용 키오스크이다."
            ],
            ["Self Flower Studio",
                "방선경 방지은 이수정 정다정",
                "DIY Simulation APP",
                "Self Flower Studio는 다양한 연출이 가능한\nFlower D.I.Y Similation application이다.전문 플로리스트가 아니어도,\n누구나 쉽게 꽃다발을 제작하여 제품에 대한 만족감과 친밀감을\n느낄 수 있다.사용자가 직접 만든 꽃다발이기 때문에 더 큰 의미를 줄 수 있다."
            ],
            ["SEOUL METRO The Screen Door",
                "곽한송 김예원 김지영",
                "Kiosk",
                "서울 메트로 더 스크린도어는역내의 키오스크와 스크린도어를 결합시켜\n각각의 활용성을 높이고 효율적으로 컨텐츠 정보를 제공하자는 의도로 \n기획하였다.외국인이 타겟으로 외국인들에게 필요한 정보를 중심으로 \n제작하였다.상단은 기본 열차 도착 정보와 '승객포화도'를 제공한다. \n하단은 날씨와 노선도, 길찾기, 관광명소 등의 정보를 제공한다."
            ],
            ["고궁",
                "김효진 김효진\n유예람 이지아",
                "음식점 touchscreen table",
                "비빔밥 전문 음식점인 고궁에서 제공하는 방한 외국인 대상 멀티 주문 테이블이다.\n한국 음식점을 다녀간 외국인들이 꼽는 불편함은 종업원과 의사소통의 어려움,\n메뉴판을 알아보기 힘들다는 점이 있었다.이러한 서비스의 부재를 해결하고자\n이 작품을 제작하였다.관광, 한식과 같은 컨텐츠를 넣어 사용자의 흥미를 유발함과 동시에\n한식 홍보의 기회로 삼았다."
            ]
        ];
        if (ScenePortContentsWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortContentsWork._instance = this;
        this.init();
    }
    ScenePortContentsWork.instance = function () {
        if (ScenePortContentsWork._instance === null) {
            ScenePortContentsWork._instance = new ScenePortContentsWork();
        }
        return ScenePortContentsWork._instance;
    };
    ScenePortContentsWork.prototype.prev = function () {
        this.setIndex(this.index - 1);
    };
    ScenePortContentsWork.prototype.next = function () {
        this.setIndex(this.index + 1);
    };
    ScenePortContentsWork.prototype.setIndex = function (idx) {
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
            this.titleImg = new createjs.Bitmap("assets/work/contents/contents_work_title0" + this.index + ".png");
        }
        else {
            this.titleImg = new createjs.Bitmap("assets/work/contents/contents_work_title" + this.index + ".png");
        }
        this.titleImg.x = 89;
        this.titleImg.y = 405;
        this.addChild(this.titleImg);
        this.img1 = new createjs.Bitmap("assets/port/contents/" + this.index + "/sub/sub_1.jpg");
        this.img1.x = 275;
        this.img1.y = 353;
        this.img1.on("mouseover", function () { ScenePortContentsWork.instance().setImgIndex(1); });
        this.addChild(this.img1);
        this.img2 = new createjs.Bitmap("assets/port/contents/" + this.index + "/sub/sub_2.jpg");
        this.img2.x = 474;
        this.img2.y = 353;
        this.img2.on("mouseover", function () { ScenePortContentsWork.instance().setImgIndex(2); });
        this.addChild(this.img2);
        this.img3 = new createjs.Bitmap("assets/port/contents/" + this.index + "/sub/sub_3.jpg");
        this.img3.x = 1374;
        this.img3.y = 353;
        this.img3.on("mouseover", function () { ScenePortContentsWork.instance().setImgIndex(3); });
        this.addChild(this.img3);
        this.img4 = new createjs.Bitmap("assets/port/contents/" + this.index + "/sub/sub_4.jpg");
        this.img4.x = 1574;
        this.img4.y = 353;
        this.img4.on("mouseover", function () { ScenePortContentsWork.instance().setImgIndex(4); });
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
    ScenePortContentsWork.prototype.setImgIndex = function (idx) {
        this.imgIndex = idx;
        this.removeChild(this.bigimg);
        this.removeChild(this.bigimgButton);
        this.removeChild(this.line);
        this.setType();
    };
    ScenePortContentsWork.prototype.getlayout = function () {
        switch (this.index) {
            case 1:
            case 3:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                return 1;
            default:
                return 0;
        }
    };
    ScenePortContentsWork.prototype.setType = function () {
        switch (this.getlayout()) {
            case 1:
                this.bigimg = new createjs.Bitmap("assets/port/contents/" + this.index + "/main/main_" + this.imgIndex + ".jpg");
                this.bigimg.x = 476;
                this.bigimg.y = 153;
                this.addChild(this.bigimg);
                this.bigimgButton = new Button(this.getTex("mono_frame_big_3"), 400, 788);
                this.bigimgButton.x = 476;
                this.bigimgButton.y = 153;
                this.bigimgButton.alpha = 0;
                this.addChild(this.bigimgButton);
                this.bigimgButton.on("mouseover", function () {
                    ScenePortContentsWork.instance().bigimgButton.alpha = 1;
                });
                this.bigimgButton.on("mouseout", function () {
                    ScenePortContentsWork.instance().bigimgButton.alpha = 0;
                });
                this.bigimgButton.on("click", function () {
                    ScenePortContentsWork.instance().bigimgButton.alpha = 0;
                    ScenePortContentsWork.instance().popup(ScenePortContentsWork.instance().getlayout(), "assets/port/contents/", ScenePortContentsWork.instance().imgIndex, 4);
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
                this.naverCastButton.x = 1494;
                this.naverCastButton.y = 643;
                break;
            default:
                this.bigimg = new createjs.Bitmap("assets/port/contents/" + this.index + "/main/main_" + this.imgIndex + ".jpg");
                this.bigimg.x = 677;
                this.bigimg.y = 215;
                this.addChild(this.bigimg);
                this.bigimgButton = new Button(this.getTex("mono_frame_big_2"), 686, 388);
                this.bigimgButton.x = 677;
                this.bigimgButton.y = 215;
                this.bigimgButton.alpha = 0;
                this.addChild(this.bigimgButton);
                this.bigimgButton.on("mouseover", function () {
                    ScenePortContentsWork.instance().bigimgButton.alpha = 1;
                });
                this.bigimgButton.on("mouseout", function () {
                    ScenePortContentsWork.instance().bigimgButton.alpha = 0;
                });
                this.bigimgButton.on("click", function () {
                    ScenePortContentsWork.instance().bigimgButton.alpha = 0;
                    ScenePortContentsWork.instance().popup(ScenePortContentsWork.instance().getlayout(), "assets/port/contents/", ScenePortContentsWork.instance().imgIndex, 4);
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
                this.naverCastButton.x = 1400;
                this.naverCastButton.y = 696;
                break;
        }
    };
    ScenePortContentsWork.prototype.init = function () {
        var prev_button = new Button(this.getTex("work_up"), 30, 30);
        prev_button.x = 85;
        prev_button.y = 317;
        prev_button.on("click", function () { ScenePortContentsWork.instance().prev(); });
        this.addChild(prev_button);
        var next_button = new Button(this.getTex("work_down"), 30, 30);
        next_button.x = 85;
        next_button.y = 759;
        next_button.on("click", function () { ScenePortContentsWork.instance().next(); });
        this.addChild(next_button);
        var esc_button = new Button(this.getTex("X"), 45, 45);
        esc_button.x = 1734;
        esc_button.y = 128;
        esc_button.regX = 12;
        esc_button.regY = 12;
        esc_button.on("click", function () { SceneManager.instance().nextSceneIndex(SceneManager.CONTENTS); });
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
            "http://tvcast.naver.com/v/939533",
            "http://tvcast.naver.com/v/939522",
            "http://tvcast.naver.com/v/939534",
            "",
            "http://tvcast.naver.com/v/950190",
            "http://tvcast.naver.com/v/939560",
            "http://tvcast.naver.com/v/939543",
            "http://tvcast.naver.com/v/939546",
            "http://tvcast.naver.com/v/939548",
            "",
            "http://tvcast.naver.com/v/939523"
        ];
        this.naverCastButton = new Button(this.getTex("navercast_icon"), 73, 23);
        this.naverCastButton.x = 1400;
        this.naverCastButton.y = 696;
        this.naverCastButton.on("click", this.openNaverCast, this);
        this.addChild(this.naverCastButton);
    };
    ScenePortContentsWork.prototype.startScene = function () {
        this.closePopup();
        this.count = 0;
        this.alpha = 1;
    };
    ScenePortContentsWork.prototype.stopScene = function () {
        this.closePopup();
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {
        }
        ;
    };
    ScenePortContentsWork._instance = null;
    return ScenePortContentsWork;
})(ScenePortWork);
//# sourceMappingURL=ScenePortContentsWork.js.map