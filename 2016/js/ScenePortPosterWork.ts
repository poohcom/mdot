/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ScenePortPosterWork extends ScenePortWork {

    private static _instance: ScenePortPosterWork = null;

    constructor() {
        super();
        if (ScenePortPosterWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortPosterWork._instance = this;

        this.init();
    }

    public static instance(): ScenePortPosterWork {
        if (ScenePortPosterWork._instance === null) {
            ScenePortPosterWork._instance = new ScenePortPosterWork();
        }
        return ScenePortPosterWork._instance;
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

    private line: createjs.Bitmap = null;
    private bigimg: createjs.Bitmap = null;

    public imgIndex: number = 1;

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
        this.imgIndex = 1;

        if (this.bigimg === null) {
        } else {
            this.removeChild(this.titleImg);
            this.removeChild(this.bigimgButton);
            this.removeChild(this.bigimg);
            this.removeChild(this.label1);
            this.removeChild(this.label2);
            this.removeChild(this.label3);
            this.removeChild(this.label4);
        }

        if (this.index < 10) {
            this.titleImg = new createjs.Bitmap("assets/work/poster/poster_work_title0" + this.index + ".png");
        } else {
            this.titleImg = new createjs.Bitmap("assets/work/poster/poster_work_title" + this.index + ".png");
        }

        this.titleImg.x = 89;
        this.titleImg.y = 405;

        this.addChild(this.titleImg);

        this.bigimg = new createjs.Bitmap("assets/port/poster/" + this.index + "/main/main_" + this.imgIndex + ".jpg");
        this.bigimg.x = 491;
        this.bigimg.y = 190;

        this.addChild(this.bigimg);


        this.bigimgButton = new Button(this.getTex("mono_frame_big_4"), 501, 709);

        this.bigimgButton.x = 491;
        this.bigimgButton.y = 190;
        this.bigimgButton.alpha = 0;

        this.addChild(this.bigimgButton);

        this.bigimgButton.on("mouseover", function () {

            ScenePortPosterWork.instance().bigimgButton.alpha = 1;
        });

        this.bigimgButton.on("mouseout", function () {
            ScenePortPosterWork.instance().bigimgButton.alpha = 0;
        });

        this.bigimgButton.on("click", function () {
            ScenePortPosterWork.instance().bigimgButton.alpha = 0;
            ScenePortPosterWork.instance().popup(ScenePortPosterWork.instance().getlayout(), "assets/port/poster/", ScenePortPosterWork.instance().imgIndex, 1);

        });


        this.label1 = new createjs.Text(this.desc[this.index - 1][0], "bold 22px yoon", "#959595");
        this.label1.x = 1064;
        this.label1.y = 569;
        this.addChild(this.label1);

        this.label2 = new createjs.Text(this.desc[this.index - 1][1], "normal 15px yoon", "#808080");
        this.label2.x = 1189;
        this.label2.y = 646;
        this.label2.lineHeight = 29;
        this.addChild(this.label2);

        this.label3 = new createjs.Text(this.desc[this.index - 1][2], "normal 15px yoon", "#808080");
        this.label3.x = 1189;
        this.label3.y = 675;
        this.addChild(this.label3);

        this.label4 = new createjs.Text(this.desc[this.index - 1][3], "normal 15px yoon", "#8b8b8b");
        this.label4.x = 1066;
        this.label4.y = 763;
        this.label4.lineHeight = 25;
        this.addChild(this.label4);
    }
    
    public getlayout(): number {
        switch (this.index) {
            default:
                return 4;
        }
    }

    public init(): void {

        var prev_button: Button = new Button(this.getTex("work_up"), 30, 30);
        prev_button.x = 85;
        prev_button.y = 317;
        prev_button.on("click", function () { ScenePortPosterWork.instance().prev() });

        this.addChild(prev_button);

        var next_button: Button = new Button(this.getTex("work_down"), 30, 30);
        next_button.x = 85;
        next_button.y = 759;
        next_button.on("click", function () { ScenePortPosterWork.instance().next() });

        this.addChild(next_button);

        var esc_button: Button = new Button(this.getTex("X"), 45, 45);
        esc_button.x = 1734;
        esc_button.y = 128;
        esc_button.regX = 12;
        esc_button.regY = 12;

        esc_button.on("click", function () { SceneManager.instance().nextSceneIndex(SceneManager.POSTER); });

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
        this.text1.x = 1066;
        this.text1.y = 646;

        this.addChild(this.text1);

        this.text2 = new createjs.Text("CATEGORY", "bold 15px yoon", "#B4B4B4");
        this.text2.x = 1066;
        this.text2.y = 675;

        this.addChild(this.text2);

        this.text3 = new createjs.Text("DESCRIPTION", "bold 15px yoon", "#4951de");
        this.text3.x = 1066;
        this.text3.y = 738;

        this.addChild(this.text3);



        this.line = new createjs.Bitmap(this.getTex("work_text_line_poster"));
        this.line.x = 1063;
        this.line.y = 612;
        this.addChild(this.line);


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

    }

    

    public desc: string[][] = [
        ["Romantic Illumination",
            "곽한송",
            "포스터",
            "에버랜드에서 동절기에 열리는'로맨틱 일루미네이션'포스터이다.\n일 몰 후 에버랜드 전역에서 시행되며 사랑하는 연인과의\n데이트 코스를 중심으로 이루어져 있다.\n형형색색의 조명과 음악, 분수쇼로 이벤트의 화려함을 더한다."
        ],
        ["치즈랑 소금이랑 콩이랑",
            "기소을",
            "포스터",
            "일본 여성작가들이 유럽의 슬로푸드와 소울푸드를 찾아 여행한 이야기를\n엮은 단편소설집의 책 표지 포스터이다. 단풍이 든 유럽 시골 숲을 배경으로\n나무 사이로 보이는 집을 알록달록하게 표현했고, 그 경치를 보며 피크닉을\n즐기는 사람들을 상상하며 만들었다."
        ],
        ["Owl City Concert",
            "김예원",
            "포스터",
            "아담 랜달 영(Adam Randal Young)의 신스 팝 원맨 밴드 프로젝트인\n'Owl City'의 콘서트를 홍보하는 포스터이다. Owl City 음악의 특징인 \n발랄함과 몽환적 분위기가 섞인 일렉트로니카의 분위기를 살렸다."
        ],
        [
            "The Fantsatic Jungle",
            "김주현",
            "Poster",
            "자연을 사랑하고 Jungle 그림으로 유명해진 화가 헨리 루소\n(Henri Rousseau) 책 포스터이다.\n루소가 정글을 상상하여 그려가는 듯한 모습을 표현하였다."
        ],
        ["I Fall in Love Too Easily",
            "김지현",
            "포스터",
            "미국의 재즈 뮤지션 쳇 베이커의 앨범 홍보 포스터이다.\n이 앨범의 대표곡 ‘I Fall in Love Too Easily’를 주제로 잡아 디자인했다.\n사랑에 빠진다는 가사를 호수에 점점 빠지고 있는 쳇 베이커와\n배의 모습으로 형상화하여 음악의 몽환적인 이미지를 담았다."
        ],
        [
            "Beenzino concert",
            "김하나",
            "포스터",
            "여름에 열리는 빈지노의 단독 콘서트를 홍보하는 포스터이다.\n콘서트의 분위기와 여름을 나타내기 위해 두가지 배경을 표현하였다."
        ],
        [
            "아이슬란드 블루라군 페스티벌",
            "김효진",
            "포스터",
            "아이슬란드에 있는 블루라군 온천의 가상 페스티벌 포스터이다. \n아이슬란드의 차가운 기후와 달리 따뜻한 온천을 즐기는 사람들의 모습을\n다양하게 표현하였으며 빙하와 얼음 등 아이슬란드에서만 볼 수 있는\n풍경을 다양한 컬러로 나타내었다."
        ], [
            "오오이시 마사요시 솔로콘서트",
            "김효진",
            "포스터",
            "일본 그룹 sound schedule의 보컬이자 싱어송라이터인\n‘오오이시 마사요시’의 솔로 콘서트 포스터이다. 그는 출중한 기타 실력으로 \n‘오른손의 마술사’라는 칭호를 가지고 있다. \n이에 걸맞게 ‘그가 연주하면 풍경이 바뀐다’라는 주제를 담았다."
        ], [
            "2016 GARDENING FAIR",
            "문소진",
            "포스터",
            "2016년 킨텍스에서 개최되는 원예 페어의 홍보 포스터이다. \n드로잉과 사진을 활용하여 가든 잡화, 조경자재 등 페어의 행사 품목들을 \n표현하였다."
        ],
        ["Frida Kahlo",
            "민선정",
            "포스터",
            "소마미술관의 ‘Frida Kahlo’전시회 포스터이다.\n‘Frida Kahlo’가 자신의 고통을 담아냈던 화폭 위 그림들을 재구성시켜 \n그녀의 인생을 담은 세상을 표현한다.주로 콜라주 기법을 이용하였고, \n그녀가 살았던 고향을 배경으로 소스를 제작해 작품을 표현하였다. "
        ], [
            "Penumbra's 24 hour Book store",
            "방선경",
            "포스터",
            "Penumbra's 24 hour Book store의 북 커버 디자인이다. \n야간에 서점에서 벌어지는 미스터리 한 내용을 담은 책이다. 비밀스럽고 \n신비로운 일들이 벌어지는 서점의 공간을 표현하였다."
        ], [
            "ADVENTUROUS BASE CAMP FESTIVAL",
            "방지은",
            "포스터",
            "영국에서 열리는 Base Camp Festival 행사가 2016년에 열린다고 \n가정하고 홍보 포스터를 디자인하였다. Base Camp Festival은 숲 속에서 \n사람들이 모여 캠핑을 함께 즐기는 축제이다.\n별똥별이 쏟아지는 밤하늘과 따듯한 분위기 속에 동물과 사람이 모여 \n다들 신나게 춤추고 노래하며 축제를 즐기는 모습을 표현하였다."
        ], [
            "The Spirit of indian women",
            "배효영",
            "포스터",
            "이 작품은 The Spirit of indian women 책 발매 포스터 이다.\n인디언 여성의 강인하고 당당한 모습을 담고있는 책으로 화려한 컬러로 \n강조하려고 했다."
        ], [
            "Nekotopia",
            "손미리",
            "포스터",
            "일본 작가 아스카 후지모리의 소설 '네코토피아'가 애니메이션화된다는 \n가정하에 만들어진 포스터이다. 잔인하게 고양이들을 죽이는 것이 취미인 \n주인공 꼬마 아스카를 둘러싸고 벌어지는 이야기를 \n어둡고 기괴한 분위기로 표현하였다."
        ], [
            "2016 World DJ Festival",
            "손승희",
            "포스터",
            "대한민국 대표 EDM페스티벌인 '2016 World DJ Festival’ 포스터이다. \nWorld DJ Festival은 여러 DJ들을 통해 다양한 EDM사운드를 선보인다.\n메인 무대는 레이저와 조명, 음악이 하나가 되도록 꾸몄다."
        ], [
            "GRAN GALA FLAMENCO",
            "신다희",
            "포스터",
            "카탈루냐 음악당은 도메네크 이 몬타네르라는 건축가가 지은 건물로\n유네스코 세계문화유산에 지정된 음악당이다. 내부는 매우 화려하고 \n천장에는 장미와 백합으로 장식이 되어있다. 반대로 플라멩코 음악은 \n서민과 집시들이 고단한 삶을 노래하기 위해 부르던 것이다.\n포스터에 카탈루냐 음악당의 느낌과 플라멩코의 서민적인 느낌을 \n함께 내려 했다."
        ], [
            "Beer 'Desperados'",
            "신유정",
            "포스터",
            "1995년 출시된 최초의 데낄라가 들어간 네덜란드 맥주 'Desperados'의 \n홍보 포스터이다.  데낄라와 맥주의 강렬하고 시원한 맛과 라임을 비롯한 \n과일을 생생한 컬러로 표현하였다."
        ], [
            "The Snow Queen",
            "양다솔",
            "포스터",
            "덴마크 작가 '한스 안데르센'의 동화, <눈의 여왕>이 애니메이션으로 \n상영되는 것을 홍보하기 위한 홍보 포스터이다. 포스터의 장면은 \n소녀 게르다가 친구를 찾아 길을 떠나는 모습을 담아냈다."
        ], [
            "2016 Melody forest camp",
            "유예람",
            "포스터",
            "멜로디 포레스트 캠프는 자라섬에서 열리는, 캠핑과 함께 즐길 수 있는\n음악 축제이다. 캐릭터들이 포스터 속의 자라섬을 자신들만의 땅으로 \n여기며 각자의 방법대로 축제를 즐기는 방법을 표현하였다. \n축제의 제목인 멜로디와 포레스트, 캠프, 이 세 단어를 모두 담으려 했으며, \n캐릭터의 각각의 독특함과 생동감에 중점을 두어 그리고자 하였다."
        ], [
            "輝亮(휘양)",
            "유재희",
            "포스터",
            "밝게 빛나다'라는 뜻의 '휘양'. 십이지 동물들이 지상 최고의 권력 '빛'을\n걸고 각개전투를 벌인다. 현재 그 빛을 가진 자는 하늘의 신 용이며, \n그에게서 빛을 빼앗아 만물의 지존이 되고자 투쟁하는 땅의 동물들의 \n스토리를 담은 애니메이션 포스터이다.\n2016년 병신년 붉은 원숭이의 해인 만큼 원숭이가 주인공이다."
        ], [
            "구교영 콘서트 포스터",
            "유지원",
            "포스터",
            "구교영의 가상 콘서트 포스터이다. 노래 속 도시의 느낌을 라인드로잉\n으로 표현했다. 노래의 분위기를 레코드와 마이크, 호른등이 공중에 날아\n다니는 모습으로 표현했다. 여성스럽고 차분한 분위기의 자작곡들로 \n구성된 콘서트라고 가정하고 악기들이 공중에 날아다니는 모습으로\n표현했다. "
        ], [
            "Alice through the Looking Glass",
            "이로사",
            "포스터",
            "영화 'Alice through the Looking Glass'의 홍보 포스터이다.\n거울 안과 밖을 낮과 밤으로 표현하여 대비를 주었고, 판타지적인 요소들을\n추가하여 개성을 표현하고자 하였다."
        ], [
            "Rainbow Island Music Festival 2016",
            "이수정",
            "포스터",
            "레인보우아일랜드 뮤직 페스티벌은 음악과 캠핑이 결합된 페스티벌이다.\n환상의 섬 속에서 즐거운 축제를 펼치고 있는 사람들의 모습과\n자연 속에서의 여유를 느끼고 있는 모습을 표현하였다."
        ], [
            "최낙타 첫 번째 콘서트",
            "이지아",
            "포스터",
            "<최낙타 첫 번째 콘서트>는 싱어송라이터 최낙타의 첫 번째 단독 콘서트를 \n기원하며 제작한 가상의 콘서트 포스터이다. 한 몸인 낙타와 기타를 \n중심으로, '고막 남자친구'이라는 별칭에 어울리는 귀엽고 달콤한 그의 \n음악들을 사막 한가운데서 꽃이 만개하는 풍경으로 표현하였다."
        ], [
            "나쓰미의 반딧불이",
            "이찬미",
            "포스터",
            "‘모리사와 아키오’의 ‘나쓰미의 반딧불이'라는 책을 애니메이션 영화로 \n만든다는 가정하에 제작한 포스터이다. 나쓰미가 '다케야'라는 가게에서 \n보낸 아름다웠던 여름날의 추억을 그려보았다."
        ], [
            "Pinup Girl Clothing",
            "이효원",
            "포스터",
            "미국 캘리포니아에 있는 '핀업걸'컨셉의 여성의류 브랜드 포스터이다. \n여성스러운 레이스로 서브그래픽을 표현하였으며, 귀엽고 섹시한 핀업걸\n의상을 입은 여성을 메인 그래픽으로 넣어 'Pinup Girl Clothing' 브랜드의\n전체적인 분위기를 표현했다."
        ], [
            "Don't forget Indio",
            "임수현",
            "포스터",
            "Don't forget Indio는 인디오들을 기리기 위한 가상 전시회 포스터이다.\n메인 그래픽으로 남아메리카의 지도의 형태를 사용하고 브라질 영토의 \n형태를 이용해 인디오의 옆모습을 형상화해 보았다."
        ], [
            "푸른새벽 콘서트 포스터",
            "임지혜",
            "포스터",
            "푸른새벽은 인디 드림팝 듀오 밴드이다. 현재 밴드는 해체되었으나 \n재결합이 된다는 가정 하에 푸른새벽의 콘서트 포스터를 디자인했다. \n콘서트 제목인 ‘호접지몽 (胡蝶之夢)’은 푸른새벽의 노래 제목으로 \n음악의 분위기를 나비(胡)를 통해 표현하고자 하였다."
        ], [
            "The five people you meet in heaven",
            "장지영",
            "포스터",
            "미치 앨봄의 '천국에서 만난 다섯사람'이라는 책의 애니메이션 필름에 \n관한 포스터이다. 애디가 만나게 될 다섯 사람들과의 장소들을 표현하였\n으며, 천국의 의미를 담고 있는 남색을 상징적으로 사용하여 제작하였다."
        ], [
            "Magic in the Moonlight",
            "정다정",
            "포스터",
            "우디 앨런의 영화 <매직 인 더 문 라이트>의 포스터이다. \n남자 주인공이 심령 술사인 여자 주인공이 가짜 심령 술사임을 밝히려다가 \n사랑에 빠지게 되는 내용이다. 두 주인공이 드라이브를 하면서 서로에 대해 \n알아가기 때문에 드라이브를 하는 풍경을 배경으로 포스터를 제작하였다."
        ], [
            "2016 ULTRA MUSIC FESTIVAL 포스터",
            "정보경",
            "포스터",
            "일렉트로닉 뮤직 페스티벌 UMF 2016년 홍보 포스터이다. UMF의 주요 \n음악 장르인 EDM사운드의 분위기를 선적인 요소들로 표현하여 UMF가 \n올림픽 경기장에 착륙하는 듯한 느낌을 표현하고자 하였다."
        ], [
            "무주 산골 영화제",
            "정예진",
            "포스터",
            "무주에서 열리는 무주 산골 영화제의 홍보 포스터이다.\n산골의 특성을 살려 동글동글한 모습으로 나타내고 그 안에서 일어나는 \n장면들을 담았다. "
        ], [
            "MOBY-DICK",
            "조지형",
            "포스터",
            "소설 <모비딕>의 책 표지를 디자인하였다. 거친 풍랑이 일렁이는 바다와 \n배를 향해 다가오는 흰고래의 모습은 소설의 핵심 장면이라고 할 수 있는\n데, 이 장면을 저채도의 무거운 색감과 거친 그림체로 구성하였다. "
        ], ["Garden Of Oblivious",
            "황은하",
            "포스터",
            "Garden Of Oblivious'라는 책이 애니메이션화되었을 때의\n홍보 포스터이다. '노름'이라는 도시에서 온 어린 여자아이인 소피헨이\n망각의 정원 안에서 모험을 겪는 내용으로 '망각'을 강조하기 위해\n안개 낀 느낌을 주었다."
        ]
    ];

}
