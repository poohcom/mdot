/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />



class MenuBar extends Scene {

    private static _instance: MenuBar = null;

    public static instance(): MenuBar {
        if (MenuBar._instance === null) {
            MenuBar._instance = new MenuBar();
        }

        return MenuBar._instance;
    }

    constructor() {
        super();
        if (MenuBar._instance) {
            throw new Error("Error: Config instead of new.");
        }
        MenuBar._instance = this;

        this.init();
    }

    public main_scroll_bg: createjs.Bitmap;
    public underbar_gard_aboutmediadesign: createjs.Bitmap;

    

    public main_scroll_page1_button: ToggleButton;
    public main_scroll_page2_button: ToggleButton;
    public main_scroll_page3_button: ToggleButton;

    
    public main_scroll_page1_text: createjs.Bitmap;
    public main_scroll_page2_text: createjs.Bitmap;
    public main_scroll_page3_text: createjs.Bitmap;
        
    public aboutIndex: number = 0;
    public mainIndex: number = 0;

    public main_scroll: createjs.Container;

    public up_button: Button;
    public down_button: Button;

    public under_bar: createjs.Bitmap;

    public about_media_design_button: ToggleButton;
    //public menu_portfolio_button: Button;


    public home_button: ToggleButton;

    public information_button: ToggleButton;
    public site_map_button: ToggleButton;
    public sound_button: ToggleButton;
    public sound_off: ToggleButton;


    public about_media_design_menu: createjs.Container;
    public about_close_button: Button;



    public back_button_Group: createjs.Container;
    public button_back_portfolio: createjs.Bitmap;

    public button_back_1: createjs.Bitmap;
    public button_back: Button;
    
    public work_back_button_Group: createjs.Container;
    public work_page_button_back_1: createjs.Bitmap;
    public work_page_button_back_portfolio: createjs.Bitmap;

    public work_page_button_back: Button;


    public aboutmediadesign_navigation: createjs.Bitmap;

    public about_button1: ToggleButton;
    public about_button2: ToggleButton;
    public about_button3: ToggleButton;
    public about_button4: ToggleButton;
    public about_button5: ToggleButton;
    public about_button6: ToggleButton;
    public about_button7: ToggleButton;
    public about_button8: ToggleButton;
    public about_button_text1: createjs.Bitmap;
    public about_button_text2: createjs.Bitmap;
    public about_button_text3: createjs.Bitmap;
    public about_button_text4: createjs.Bitmap;

    public about_button_text5: createjs.Bitmap;
    public about_button_text6: createjs.Bitmap;
    public about_button_text7: createjs.Bitmap;
    public about_button_text8: createjs.Bitmap;

    public init(): void {

        var mask: createjs.Shape = new createjs.Shape();

        mask.graphics.beginFill("#FFF").drawRect(0, 0, 1920, 1080);
        this.mask = mask;

        this.main_scroll = new createjs.Container();
        this.main_scroll.visible = false;
        this.main_scroll.x = 1799+36;
        this.main_scroll.y = 271;
        this.addChild(this.main_scroll);

        

        this.main_scroll_bg = new createjs.Bitmap(this.getTex("main_scroll"));
        this.main_scroll.addChild(this.main_scroll_bg);

        this.main_scroll_page1_text = new createjs.Bitmap(this.getTex("main_scroll_page1_text"));
        this.main_scroll_page1_text.x = 1707 - 1799+40;
        this.main_scroll_page1_text.y = 0;
        this.main_scroll_page1_text.visible = false;

        this.main_scroll.addChild(this.main_scroll_page1_text);


        this.main_scroll_page2_text = new createjs.Bitmap(this.getTex("main_scroll_page2_text"));
        this.main_scroll_page2_text.x = 1707 - 1799;
        this.main_scroll_page2_text.y = 538 - 272;

        this.main_scroll.addChild(this.main_scroll_page2_text);

        this.main_scroll_page3_text = new createjs.Bitmap(this.getTex("main_scroll_page3_text"));
        this.main_scroll_page3_text.x = 1707 - 1799;
        this.main_scroll_page3_text.y = 538 - 271 + 263 + 15;
        this.main_scroll_page3_text.visible = false;

        this.main_scroll.addChild(this.main_scroll_page3_text);
        
        this.main_scroll_page1_button = new ToggleButton(this.getTex("main_scroll_selected"), null, this.getTex("main_scroll_mouseover"), 35, 35);
        this.main_scroll_page1_button.on("click", function () { SceneManager.instance().nextSceneIndex(0) });
        this.main_scroll_page1_button.on("mouseover", function () { MenuBar.instance().mouseOverMain(1)});
        this.main_scroll_page1_button.on("mouseout", function () { MenuBar.instance().mouseOutMain(1) });
        this.main_scroll_page1_button.x = -12;
        this.main_scroll_page1_button.y = -11;

        this.main_scroll.addChild(this.main_scroll_page1_button);


        this.main_scroll_page2_button = new ToggleButton(this.getTex("main_scroll_selected"), null, this.getTex("main_scroll_mouseover"), 35, 35);
        this.main_scroll_page2_button.x = -12;
        this.main_scroll_page2_button.y = 261;
        this.main_scroll_page2_button.on("click", function () { SceneManager.instance().nextSceneIndex(1) });
        this.main_scroll_page2_button.on("mouseover", function () { MenuBar.instance().mouseOverMain(2) });
        this.main_scroll_page2_button.on("mouseout", function () { MenuBar.instance().mouseOutMain(2) });
        this.main_scroll.addChild(this.main_scroll_page2_button);

        this.main_scroll_page3_button = new ToggleButton(this.getTex("main_scroll_selected"), null, this.getTex("main_scroll_mouseover"), 35, 35);
        this.main_scroll_page3_button.x = -12;
        this.main_scroll_page3_button.y = 534;
        this.main_scroll_page3_button.on("click", function () { SceneManager.instance().nextSceneIndex(2) });
        this.main_scroll_page3_button.on("mouseover", function () { MenuBar.instance().mouseOverMain(3) });
        this.main_scroll_page3_button.on("mouseout", function () { MenuBar.instance().mouseOutMain(3) });
        this.main_scroll.addChild(this.main_scroll_page3_button);

        //public main_scroll_page: createjs.Bitmap;

        this.up_button = new Button(this.getTex("main_button"), 38, 79);
        this.up_button.x = (1920 - 38) / 2;
        this.up_button.y = 38;
        this.up_button.visible = false;
        this.up_button.on("click", function () { MenuBar.instance().goUp() });
        this.addChild(this.up_button);


        createjs.Tween.get(this.up_button, { loop: false }).to({ y: 48 }, 1000, createjs.Ease.linear).call(upButton1);

        function upButton1() {

            createjs.Tween.get(this, { loop: false }).to({ y: 38 }, 1000, createjs.Ease.linear).call(upButton2);
        }

        function upButton2() {
            createjs.Tween.get(this, { loop: false }).to({ y: 48 }, 1000, createjs.Ease.linear).call(upButton1);
        }

        //// under_bar
        this.down_button = new Button(this.getTex("down_button"), 38, 78);
        this.down_button.x = (1920 - 38) / 2;
        this.down_button.y = 931;
        this.down_button.on("click", function () { MenuBar.instance().goDown() });
        this.addChild(this.down_button);

        createjs.Tween.get(this.down_button, { loop: false }).to({ y: 941 }, 1000, createjs.Ease.linear).call(downButton1);

        function downButton1() {
            createjs.Tween.get(this, { loop: false }).to({ y: 931 }, 1000, createjs.Ease.linear).call(downButton2);
        }

        function downButton2() {
            createjs.Tween.get(this, { loop: false }).to({ y: 941 }, 1000, createjs.Ease.linear).call(downButton1);
        }

        //// under_bar
        this.under_bar = new createjs.Bitmap(this.getTex("under_bar"));
        this.under_bar.x = 0;
        this.under_bar.y = 1038;
        this.under_bar.on("mouseover", function () { SceneManager.instance().soundplay()});
        this.addChild(this.under_bar);


        this.underbar_gard_aboutmediadesign = new createjs.Bitmap(this.getTex("underbar_gard_aboutmediadesign"));
        this.underbar_gard_aboutmediadesign.x = 0;
        this.underbar_gard_aboutmediadesign.y = 1080;
        this.underbar_gard_aboutmediadesign.regY = 207;
        this.underbar_gard_aboutmediadesign.alpha = 0;
        this.underbar_gard_aboutmediadesign.scaleY = 0;
        this.addChild(this.underbar_gard_aboutmediadesign);


        this.about_media_design_button = new ToggleButton(this.getTex("underbar_button_aboutmediadesign"), this.getTex("underbar_button_aboutmediadesign"), this.getTex("underbar_button_aboutmediadesign_mouseover"), 174, 16);
        this.about_media_design_button.x = 28 + 6;
        this.about_media_design_button.y = 1051;
        
        this.about_media_design_button.on("click", function (event) {


            if (SceneManager.instance().isPlaying == true)
                return;

            if (SceneManager.instance().isPoup == true) {
                SceneManager.instance().closeOnlySitemap();
            }

            SceneAbout.instance().y = 1080;
            SceneAbout.instance().sceneAboutAbout.about_media_design_background.alpha = 1;
            SceneManager.instance().nextSceneIndex(10);
            MenuBar.instance().about_media_design_menu.y = 1080;

            createjs.Tween.get(MenuBar.instance().about_media_design_button, { loop: false }).to({ alpha: 0 }, 500, createjs.Ease.circOut).call(function () {

                MenuBar.instance().about_media_design_button.visible = false;
                
            
            }
            );

            createjs.Tween.get(MenuBar.instance().about_media_design_menu, { loop: false }).to({ y:0  }, 1000, createjs.Ease.circOut);
            

        });
        this.addChild(this.about_media_design_button);


        //this.menu_portfolio_button = new Button(this.getTex("menu_portfolio_button"), 103, 16);
        //this.menu_portfolio_button.x = 47;
        //this.menu_portfolio_button.y = 1051;
        //this.menu_portfolio_button.visible = false;
        //this.menu_portfolio_button.on("click", function (event) {

        //    if (SceneManager.instance().isPlaying == true)
        //        return;

        //    if (SceneManager.instance().getSceneIndex() == 3)
        //        return;

        //    createjs.Tween.get(SceneAbout.instance(), { loop: false }).to({ y: 1080 }, 300, createjs.Ease.linear);

            
        //    SceneManager.instance().nextSceneIndex(2);

        //    MenuBar.instance().menu_portfolio_button.visible = false;
        //    MenuBar.instance().about_media_design_button.visible = true;
        //    MenuBar.instance().underbar_updown_icon.rotation = 0;
        //});

        //this.addChild(this.menu_portfolio_button);


        this.home_button = new ToggleButton(this.getTex("home_icon"), this.getTex("home_icon"), this.getTex("home_icon_mouseover"), 30, 30);
        this.home_button.x = 1764;
        
        this.home_button.y = 1051;
        this.home_button.on("click", function (event) {
            
            if (SceneManager.instance().isPoup == true) {
                SceneManager.instance().closeSitemap(0);
                return;
            }
            SceneManager.instance().nextSceneIndex(0);

        });
        this.addChild(this.home_button);

        this.information_button = new ToggleButton(this.getTex("info_icon"), this.getTex("info_icon"), this.getTex("info_icon_mouseover"), 30, 30);
        this.information_button.x = 1806;
        this.information_button.y = 1051;
        this.information_button.on("click", function (event) {
            if (SceneManager.instance().isPoup == true) {
                SceneManager.instance().closeSitemap(1);
                return;
            }
            
            SceneManager.instance().nextSceneIndex(1);
        });
        this.addChild(this.information_button);

        this.site_map_button = new ToggleButton(this.getTex("sitemap_icon"), this.getTex("sitemap_icon"), this.getTex("sitemap_icon_mouseover"), 30, 30);
        this.site_map_button.x = 1836;
        this.site_map_button.y = 1051;
        this.site_map_button.on("click", function (event: createjs.MouseEvent) {
            if (event.nativeEvent.altKey == true) {
                SceneManager.instance().popupSitemap2();
            } else {

                SceneManager.instance().popupSitemap();
            }

        });
        this.addChild(this.site_map_button);

        this.sound_button = new ToggleButton(this.getTex("sound_icon"), this.getTex("sound_icon"), this.getTex("sound_icon_mouseover"), 30, 30);
        this.sound_button.x = 1875;
        this.sound_button.y = 1051;

        this.sound_button.on("click", function (event) {
            SceneManager.instance().isResumeBGM = false;
            SceneManager.instance().bgm.paused = true;
            //SceneManager.instance().bgm.pause();
            //SceneManager.instance().bgm.stop();
            
            MenuBar.instance().sound_button.visible = false;
            MenuBar.instance().sound_off.visible = true;


        });
        this.addChild(this.sound_button);

        this.sound_off = new ToggleButton(this.getTex("nosound_icon"), this.getTex("nosound_icon"), this.getTex("nosound_icon_mousover"), 30, 30);
        this.sound_off.x = 1875;
        this.sound_off.y = 1051;
        this.sound_off.visible = false;

        this.sound_off.on("click", function (event) {
        
            SceneManager.instance().isResumeBGM = true;
            SceneManager.instance().bgm.paused = false;
            //SceneManager.instance().bgm = createjs.Sound.play("background_music", createjs.Sound.INTERRUPT_NONE);

            //SceneManager.instance().bgm.play("background_music", createjs.Sound.INTERRUPT_NONE);

            //SceneManager.instance().bgm.resume();
            //SceneManager.instance().bgm.paused = false;

            MenuBar.instance().sound_button.visible = true;
            MenuBar.instance().sound_off.visible = false;
        }
            );
        this.addChild(this.sound_off);

        /////////

        this.about_media_design_menu = new createjs.Container();
        this.about_media_design_menu.visible = false;
        this.addChild(this.about_media_design_menu);

        this.about_close_button = new Button(this.getTex("menu_close_button"), 60, 60);
        
        this.about_close_button.x = 1810+30;
        this.about_close_button.y = 96 + 30;
        this.about_close_button.regX = 22;
        this.about_close_button.regY = 22;
        this.about_close_button.on("click", function () {
            
            if (SceneManager.instance().isPlaying == true)
                return;
            //SceneAbout.instance().y = 0;

            createjs.Tween.get(SceneAbout.instance(), { loop: false }).to({ y: 1080 }, 300, createjs.Ease.linear);
            SceneManager.instance().nextSceneIndex(2);
            
        });


        this.about_close_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }

        });
        this.about_close_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }

        });


        this.about_media_design_menu.addChild(this.about_close_button);

        this.aboutmediadesign_navigation = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation"));
        this.aboutmediadesign_navigation.x = 1822 + 14;
        this.aboutmediadesign_navigation.y = 310;

        this.about_media_design_menu.addChild(this.aboutmediadesign_navigation);


        this.about_button1 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50,30);
        this.about_button1.x = 1827 - 13 + 14;
        this.about_button1.y = 316-13;
        this.about_button1.on("click", function (event) { SceneManager.instance().nextSceneIndex(10) });

        this.about_button1.on("mouseover", function () { MenuBar.instance().mouseOverAbout(1) });
        this.about_button1.on("mouseout", function () { MenuBar.instance().mouseOutAbout(1) });
        this.about_media_design_menu.addChild(this.about_button1);


        this.about_button2 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button2.x = 1827 - 13 + 14;
        this.about_button2.y = 426-13;
        this.about_button2.on("click", function (event) { SceneManager.instance().nextSceneIndex(11) });
        this.about_button2.on("mouseover", function () { MenuBar.instance().mouseOverAbout(2) });
        this.about_button2.on("mouseout", function () { MenuBar.instance().mouseOutAbout(2) });
        this.about_media_design_menu.addChild(this.about_button2);


        this.about_button3 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button3.x = 1827 - 13 + 14;
        this.about_button3.y = 529-13;
        this.about_button3.on("click", function (event) { SceneManager.instance().nextSceneIndex(12) });
        this.about_button3.on("mouseover", function () { MenuBar.instance().mouseOverAbout(3) });
        this.about_button3.on("mouseout", function () { MenuBar.instance().mouseOutAbout(3) });
        this.about_media_design_menu.addChild(this.about_button3);


        this.about_button4 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button4.x = 1827 - 13 + 14;
        this.about_button4.y = 634-13;
        this.about_button4.on("click", function (event) { SceneManager.instance().nextSceneIndex(13) });
        this.about_button4.on("mouseover", function () { MenuBar.instance().mouseOverAbout(4) });
        this.about_button4.on("mouseout", function () { MenuBar.instance().mouseOutAbout(4) });
        this.about_media_design_menu.addChild(this.about_button4);

        this.about_button5 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button5.x = 1827 - 13 + 14;
        this.about_button5.y = 661-13;
        this.about_button5.on("click", function (event) { SceneManager.instance().nextSceneIndex(14) });
        this.about_button5.on("mouseover", function () { MenuBar.instance().mouseOverAbout(5) });
        this.about_button5.on("mouseout", function () { MenuBar.instance().mouseOutAbout(5) });
        this.about_media_design_menu.addChild(this.about_button5);


        this.about_button6 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button6.x = 1827 - 13 + 14;
        this.about_button6.y = 708-13;
        this.about_button6.on("click", function (event) { SceneManager.instance().nextSceneIndex(15) });
        this.about_button6.on("mouseover", function () { MenuBar.instance().mouseOverAbout(6) });
        this.about_button6.on("mouseout", function () { MenuBar.instance().mouseOutAbout(6) });
        this.about_media_design_menu.addChild(this.about_button6);

        this.about_button7 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button7.x = 1827 - 13 + 14;
        this.about_button7.y = 737-13;
        this.about_button7.on("click", function (event) { SceneManager.instance().nextSceneIndex(16) });
        this.about_button7.on("mouseover", function () { MenuBar.instance().mouseOverAbout(7) });
        this.about_button7.on("mouseout", function () { MenuBar.instance().mouseOutAbout(7) });
        this.about_media_design_menu.addChild(this.about_button7);


        this.about_button8 = new ToggleButton(this.getTex("aboutmediadesign_navigation_selecteddot"), null, this.getTex("aboutmediadesign_navigation_selecteddot"), 50, 30);
        this.about_button8.x = 1827 - 13 + 14;
        this.about_button8.y = 768-13;
        this.about_button8.on("click", function (event) { SceneManager.instance().nextSceneIndex(17) });
        this.about_button8.on("mouseover", function () { MenuBar.instance().mouseOverAbout(8) });
        this.about_button8.on("mouseout", function () { MenuBar.instance().mouseOutAbout(8) });
        this.about_media_design_menu.addChild(this.about_button8);



        /////////////
        this.about_button_text1 = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation_page1text"));
        this.about_button_text1.x = 1800 - 53 + 14;
        this.about_button_text1.y = 284;

        this.about_button_text2 = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation_page2text"));
        this.about_button_text2.x = 1800 - 96 + 14;
        this.about_button_text2.y = 417;

        this.about_button_text3 = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation_page3text"));
        this.about_button_text3.x = 1800 - 76 + 14;
        this.about_button_text3.y = 523;

        this.about_button_text4 = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation_page4text"));
        this.about_button_text4.x = 1800 - 87 + 14;
        this.about_button_text4.y = 628;

        this.about_button_text5 = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation_page41text"));
        this.about_button_text5.x = 1800 - 82 + 14;
        this.about_button_text5.y = 650;
        

        this.about_button_text6 = new createjs.Bitmap( this.getTex("aboutmediadesign_navigation_page4234text"));
        this.about_button_text6.x = 1800 - 63 + 14;
        this.about_button_text6.y = 696;

        this.about_button_text7 = new createjs.Bitmap( this.getTex("aboutmediadesign_navigation_page4234text"));
        this.about_button_text7.x = 1800 - 63 + 14;
        this.about_button_text7.y = 720;

        this.about_button_text8 = new createjs.Bitmap(this.getTex("aboutmediadesign_navigation_page4234text"));
        this.about_button_text8.x = 1800 - 63+14;
        this.about_button_text8.y = 754;



        this.about_button_text1.alpha = 0;
        this.about_button_text2.alpha = 0;
        this.about_button_text3.alpha = 0;
        this.about_button_text4.alpha = 0;
        this.about_button_text5.alpha = 0;
        this.about_button_text6.alpha = 0;
        this.about_button_text7.alpha = 0;
        this.about_button_text8.alpha = 0;

        this.about_media_design_menu.addChild(this.about_button_text1);
        this.about_media_design_menu.addChild(this.about_button_text2);
        this.about_media_design_menu.addChild(this.about_button_text3);
        this.about_media_design_menu.addChild(this.about_button_text4);
        this.about_media_design_menu.addChild(this.about_button_text5);
        this.about_media_design_menu.addChild(this.about_button_text6);
        this.about_media_design_menu.addChild(this.about_button_text7);
        this.about_media_design_menu.addChild(this.about_button_text8);

        //////////////

        this.back_button_Group = new createjs.Container();
        this.back_button_Group.visible = false;
        this.addChild(this.back_button_Group);

        this.button_back_portfolio = new createjs.Bitmap(this.getTex("button_back_portfolio"));
        this.button_back_portfolio.visible = false;
        this.button_back_portfolio.x = 20;
        this.button_back_portfolio.y = 85;
        this.back_button_Group.addChild(this.button_back_portfolio);


        this.button_back_1 = new createjs.Bitmap(this.getTex("button_back_1"));
        this.button_back_1.x = 42;
        this.button_back_1.y = 32;
        this.button_back_1.alpha = 0;
        createjs.Tween.get(this.button_back_1, { loop: true }).to({ x: 31, alpha: 1 }, 500, createjs.Ease.linear).to({ x: 22, alpha: 0 }, 500, createjs.Ease.linear);

        this.back_button_Group.addChild(this.button_back_1);

        

        this.button_back = new Button(this.getTex("button_back"), 50, 25);
        this.button_back.x = 42;
        this.button_back.y = 32;
        this.button_back.on("mouseover", function (event) { MenuBar.instance().showIcon() });
        this.button_back.on("mouseout", function (event) { MenuBar.instance().hideIcon() });

        this.button_back.on("click", function (event) { SceneManager.instance().nextSceneIndex(2) });
        this.back_button_Group.addChild(this.button_back);

        this.work_back_button_Group = new createjs.Container();
        this.work_back_button_Group.visible = false;
        this.addChild(this.work_back_button_Group);




        this.work_page_button_back_portfolio = new createjs.Bitmap(this.getTex("work_page_button_back_portfolio"));
        this.work_page_button_back_portfolio.visible = false;
        this.work_page_button_back_portfolio.x = 69;
        this.work_page_button_back_portfolio.y = 151;
        this.work_back_button_Group.addChild(this.work_page_button_back_portfolio);


        this.work_page_button_back_1 = new createjs.Bitmap(this.getTex("work_page_button_back_1"));
        this.work_page_button_back_1.x = 92; // 70
        this.work_page_button_back_1.y = 98;
        this.work_page_button_back_1.alpha = 0;
        //createjs.Tween.get(this.work_page_button_back_1, { loop: true }).to({ x: 70 }, 500, createjs.Ease.linear);

        createjs.Tween.get(this.work_page_button_back_1, { loop: true }).to({ x: 81, alpha: 1 }, 500, createjs.Ease.linear).to({ x: 70, alpha: 0 }, 500, createjs.Ease.linear);

        this.work_back_button_Group.addChild(this.work_page_button_back_1);


        this.work_page_button_back = new Button(this.getTex("work_page_button_back"), 50, 25);
        this.work_page_button_back.x = 92;
        this.work_page_button_back.y = 98;
        this.work_back_button_Group.addChild(this.work_page_button_back);

        
        this.work_page_button_back.on("mouseover", function (event) { MenuBar.instance().showWorkIcon() });
        this.work_page_button_back.on("mouseout", function (event) { MenuBar.instance().hideWorkIcon() });

        this.work_page_button_back.on("click", function (event) { SceneManager.instance().nextSceneIndex(2) });
        this.work_back_button_Group.addChild(this.work_page_button_back);

        this.addChild(SceneSideMenu.instance());


        this.alpha = 0;

        createjs.Tween.get(this, { loop: false }).to({ alpha: 1 }, 2000, createjs.Ease.linear);

    }

    public mouseOverMain(index: number): void {
        SceneManager.instance().soundplay();

        if (this.mainIndex == index)
            return;
        if (index == 1) {
            createjs.Tween.removeTweens(this.main_scroll_page1_text);
            createjs.Tween.get(this.main_scroll_page1_text, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
        }

        if (index == 2) {

            createjs.Tween.removeTweens(this.main_scroll_page2_text);
            createjs.Tween.get(this.main_scroll_page2_text, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
        }

        if (index == 3) {
            createjs.Tween.removeTweens(this.main_scroll_page3_text);
            createjs.Tween.get(this.main_scroll_page3_text, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
        }
    }

    public mouseOutMain(index: number): void {

        if (this.mainIndex == index)
            return;
        if (index == 1) {

            createjs.Tween.removeTweens(this.main_scroll_page1_text);
            createjs.Tween.get(this.main_scroll_page1_text, { loop: false }).to({ alpha: 0 }, 500, createjs.Ease.linear);
        }



        if (index == 2) {

            createjs.Tween.removeTweens(this.main_scroll_page2_text);
            createjs.Tween.get(this.main_scroll_page2_text, { loop: false }).to({ alpha: 0 }, 500, createjs.Ease.linear);
        }

        if (index == 3) {
            createjs.Tween.removeTweens(this.main_scroll_page3_text);
            createjs.Tween.get(this.main_scroll_page3_text, { loop: false }).to({ alpha: 0 }, 500, createjs.Ease.linear);
        }
    }

    public mouseOverAbout(index: number): void {
        SceneManager.instance().soundplay();
        if (this.aboutIndex == index)
            return;

        var text: createjs.Bitmap = null;
        switch (index) {
            case 1:
                text = this.about_button_text1;
                break;
            case 2:
                text = this.about_button_text2;
                break;
            case 3:
                text = this.about_button_text3;
                break;
            case 4:
                text = this.about_button_text4;
                break;
            case 5:
                text = this.about_button_text5;
                break;
            case 6:
                text = this.about_button_text6;
                break;
            case 7:
                text = this.about_button_text7;
                break;
            case 8:
                text = this.about_button_text8;
                break;
        }

        text.alpha = 0;

        createjs.Tween.removeTweens(text);
        createjs.Tween.get(text, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);//.wait(1000).to({ alpha: 0 }, 1000, createjs.Ease.linear);
    }


    public mouseOutAbout(index: number): void {
        
        if (this.aboutIndex == index)
            return;

        var text: createjs.Bitmap = null;
        switch (index) {
            case 1:
                text = this.about_button_text1;
                break;
            case 2:
                text = this.about_button_text2;
                break;
            case 3:
                text = this.about_button_text3;
                break;
            case 4:
                text = this.about_button_text4;
                break;
            case 5:
                text = this.about_button_text5;
                break;
            case 6:
                text = this.about_button_text6;
                break;
            case 7:
                text = this.about_button_text7;
                break;
            case 8:
                text = this.about_button_text8;
                break;
        }

        createjs.Tween.removeTweens(text);
        createjs.Tween.get(text, { loop: false }).to({ alpha: 0 }, 500, createjs.Ease.linear);
    }

    
    public showIcon(): void {
        this.button_back_portfolio.visible = true;
    }

    public hideIcon(): void {
        this.button_back_portfolio.visible = false;
    }

    public showWorkIcon(): void {
        this.work_page_button_back_portfolio.visible = true;
    }

    public hideWorkIcon(): void {
        this.work_page_button_back_portfolio.visible = false;
    }


    public goUp(): void {

        switch (SceneManager.instance().getSceneIndex()) {
            case 1:
                SceneManager.instance().nextSceneIndex(0);
                break;
            case 2:
                SceneManager.instance().nextSceneIndex(1);
                break;
        }
   }

    public goDown(): void {
        switch (SceneManager.instance().getSceneIndex()) {
            case 0:
                SceneManager.instance().nextSceneIndex(1);
                break;
            case 1:
                SceneManager.instance().nextSceneIndex(2);
                break;

            case 10:
                SceneManager.instance().nextSceneIndex(11);
                break;
        }
    }

    public updateIndex(): void {
        console.log("updateIndex", SceneManager.instance().getSceneIndex());

        SceneSideMenu.instance().setSceneMode(SceneManager.instance().getSceneIndex());

        if (SceneManager.instance().getSceneIndex() == 0) {

            this.main_scroll_page1_button.setCheck(true);
            this.main_scroll_page2_button.setCheck(false);
            this.main_scroll_page3_button.setCheck(false);

            SceneMainMainPage.instance().startScene();
            SceneMainInfomation.instance().stopScene();
            SceneMainMenu.instance().stopScene();

            this.main_scroll.visible = true;
            this.main_scroll.alpha = 1;

            this.up_button.visible = false;
            this.down_button.visible = true;
            this.down_button.alpha = 0;
            createjs.Tween.get(this.down_button, { loop: false }).to({ alpha: 1 }, 1000, createjs.Ease.linear);

            createjs.Tween.get(this.main_scroll, { loop: false }).to({ alpha: 0 }, 1000, createjs.Ease.linear).call(scrollHide);

            function scrollHide(): void {
                this.visible = false;
            }

            this.mainIndex = 0;
            this.main_scroll_page1_text.visible = false;
            this.main_scroll_page2_text.visible = false;
            this.main_scroll_page3_text.visible = false;

            createjs.Tween.removeTweens(this.main_scroll_page1_text);
            createjs.Tween.removeTweens(this.main_scroll_page2_text);
            createjs.Tween.removeTweens(this.main_scroll_page3_text);
         
            
            this.about_media_design_button.visible = true;

            createjs.Tween.get(this.about_media_design_button, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
   
        }

        if (SceneManager.instance().getSceneIndex() == 1) {
            SceneMainMainPage.instance().stopScene();
            SceneMainInfomation.instance().startScene();
            SceneMainMenu.instance().stopScene();
            //this.up_button.visible = true;
            //this.down_button.visible = true;

            this.main_scroll.visible = true;
            this.main_scroll.alpha = 1;

            
            this.main_scroll_page1_button.setCheck(false);
            this.main_scroll_page2_button.setCheck(true);
            this.main_scroll_page3_button.setCheck(false);


            createjs.Tween.get(this.up_button, { loop: false }).to({ alpha: 0 }, 1000, createjs.Ease.linear).call(upHide);

            function upHide(): void {
                this.visible = false;
            }

            createjs.Tween.get(this.down_button, { loop: false }).to({ alpha: 0 }, 1000, createjs.Ease.linear).call(downHide);

            function downHide(): void {
                this.visible = false;
            }

            this.main_scroll_page1_text.visible = true;
            this.main_scroll_page2_text.visible = true;
            this.main_scroll_page3_text.visible = true;

            this.main_scroll_page1_text.alpha = 0;
            this.main_scroll_page2_text.alpha = 0;
            this.main_scroll_page3_text.alpha = 0;
            this.mainIndex = 2;



            createjs.Tween.removeTweens(this.main_scroll_page1_text);
            createjs.Tween.removeTweens(this.main_scroll_page2_text);
            createjs.Tween.removeTweens(this.main_scroll_page3_text);
            createjs.Tween.get(this.main_scroll_page2_text, { loop: false }).wait(1000).to({ alpha: 1 }, 1000, createjs.Ease.linear);//.call(hidePage2);

            //function hidePage2() {
            //    createjs.Tween.get(this, { loop: false }).wait(1000).to({ alpha: 0 }, 1000, createjs.Ease.linear);
            //}

            this.about_media_design_button.visible = true;

            createjs.Tween.get(this.about_media_design_button, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);

        }

        if (SceneManager.instance().getSceneIndex() == 2) {
            SceneMainMainPage.instance().stopScene();
            SceneMainMenu.instance().stopScene();
            SceneMainMenu.instance().startScene();

            this.main_scroll_page1_button.setCheck(false);
            this.main_scroll_page2_button.setCheck(false);
            this.main_scroll_page3_button.setCheck(true);


            this.up_button.visible = true;
            this.down_button.visible = false;

            this.down_button.alpha = 0;
            createjs.Tween.get(this.up_button, { loop: false }).to({ alpha: 1 }, 1000, createjs.Ease.linear);

            this.main_scroll.visible = true;
            this.main_scroll.alpha = 1;

            this.main_scroll_page1_text.visible = true;
            this.main_scroll_page2_text.visible = true;
            this.main_scroll_page3_text.visible = true;

            this.main_scroll_page2_text.alpha = 0;
            this.main_scroll_page2_text.alpha = 0;
            this.main_scroll_page3_text.alpha = 0;

            this.mainIndex = 3;

            createjs.Tween.removeTweens(this.main_scroll_page1_text);
            createjs.Tween.removeTweens(this.main_scroll_page2_text);
            createjs.Tween.removeTweens(this.main_scroll_page3_text);
            
            createjs.Tween.get(this.main_scroll_page3_text, { loop: false }).wait(1000).to({ alpha: 1 }, 1000, createjs.Ease.linear);//.call(hidePage3);

            this.about_media_design_button.visible = true;
            
            createjs.Tween.get(this.about_media_design_button, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);


            //function hidePage3(): void {
            //    createjs.Tween.get(this, { loop: false }).wait(1000).to({ alpha: 0 }, 1000, createjs.Ease.linear);
            //}

        }

        if (SceneManager.instance().getSceneIndex() == 3) {
            

            SceneMainMainPage.instance().stopScene();
            SceneMainMenu.instance().stopScene();
            this.up_button.visible = false;
            this.down_button.visible = false;
            this.main_scroll.visible = false;
            this.about_media_design_menu.visible = false;
            
        }
        

        if (SceneManager.instance().getSceneIndex() > 2) {
            SceneMainMainPage.instance().stopScene();
            SceneMainMenu.instance().stopScene();
            this.up_button.visible = false;
            this.down_button.visible = false;
            this.main_scroll.visible = false;
        }

        if (SceneManager.instance().getSceneIndex() >= 10 && SceneManager.instance().getSceneIndex() < 20)
        {
            this.about_media_design_menu.visible = true;
            this.about_button1.setCheck(SceneManager.instance().getSceneIndex()==10);
            this.about_button2.setCheck(SceneManager.instance().getSceneIndex() == 11);
            this.about_button3.setCheck(SceneManager.instance().getSceneIndex() == 12);
            this.about_button4.setCheck(SceneManager.instance().getSceneIndex() == 13);
            this.about_button5.setCheck(SceneManager.instance().getSceneIndex() == 14);
            this.about_button6.setCheck(SceneManager.instance().getSceneIndex() == 15);
            this.about_button7.setCheck(SceneManager.instance().getSceneIndex() == 16);
            this.about_button8.setCheck(SceneManager.instance().getSceneIndex() == 17);

            if (SceneManager.instance().getSceneIndex() == 10) {
                this.down_button.visible = true;
            }
            
            this.about_button_text1.alpha = 0;
            this.about_button_text2.alpha = 0;
            this.about_button_text3.alpha = 0;
            this.about_button_text4.alpha = 0;
            this.about_button_text5.alpha = 0;
            this.about_button_text6.alpha = 0;
            this.about_button_text7.alpha = 0;
            this.about_button_text8.alpha = 0;

            var text: createjs.Bitmap;

            switch (SceneManager.instance().getSceneIndex()) {
                case 10:
                    text = this.about_button_text1;
                    this.aboutIndex = 1;
                    break;
                case 11:
                    
                    text = this.about_button_text2;
                    this.aboutIndex = 2;
                    break;
                case 12:
                    text = this.about_button_text3;
                    this.aboutIndex = 3;
                    break;
                case 13:
                    text = this.about_button_text4;
                    this.aboutIndex = 4;
                    break;
                case 14:
                    text = this.about_button_text5;
                    this.aboutIndex = 5;
                    break;
                case 15:
                    text = this.about_button_text6;
                    this.aboutIndex = 6;
                    break;
                case 16:
                    text = this.about_button_text7;
                    this.aboutIndex = 7;
                    break;
                case 17:
                    text = this.about_button_text8;
                    this.aboutIndex = 8;
                    break;
            }
            
            createjs.Tween.removeTweens(this.about_button_text1);
            createjs.Tween.removeTweens(this.about_button_text2);
            createjs.Tween.removeTweens(this.about_button_text3);
            createjs.Tween.removeTweens(this.about_button_text4);

            createjs.Tween.removeTweens(this.about_button_text5);
            createjs.Tween.removeTweens(this.about_button_text6);
            createjs.Tween.removeTweens(this.about_button_text7);
            createjs.Tween.removeTweens(this.about_button_text8);

            createjs.Tween.get(text, { loop: false }).wait(1000).to({ alpha: 1 }, 1000, createjs.Ease.linear);
            
        } else {
            this.about_media_design_menu.visible = false;
            
        }
    }

    // 0 메인
    // 1 about
    // 2 port
    // 3 black

    public oldMode: number = -1;
    public setMode(mode: number): void
    {
        this.button_back_portfolio.visible = false;
        this.work_page_button_back_portfolio.visible = false;
        switch (mode) {
            case 0:
                this.back_button_Group.visible = false;
                this.work_back_button_Group.visible = false;

                if (this.oldMode != mode) {
                    this.hideAboutBar();
                }
                break;
            case 1:
                this.back_button_Group.visible = false;
                this.work_back_button_Group.visible = false;
                this.showAboutBar();
                if (this.oldMode != mode) {
                    this.showAboutBar();
                }
                
                break;
            case 2:
                this.back_button_Group.visible = true;
                this.work_back_button_Group.visible = false;
                if (this.oldMode != mode) {
                    this.hideAboutBar();
                }
                
                break;
            case 3:
                this.back_button_Group.visible = false;
                this.work_back_button_Group.visible = true;
                if (this.oldMode != mode) {
                    this.hideAboutBar();
                }
                
                break;

        }
        this.oldMode = mode;
    }


    public showAboutBar(): void {
        
        createjs.Tween.removeTweens(this.under_bar);
        createjs.Tween.removeTweens(this.underbar_gard_aboutmediadesign);
        createjs.Tween.get(this.under_bar, { loop: false }).to({ alpha: 0 }, 500, createjs.Ease.linear);
        createjs.Tween.get(this.underbar_gard_aboutmediadesign, { loop: false }).to({ alpha: 1, scaleY:1 }, 500, createjs.Ease.linear);

        
    }

    public hideAboutBar(): void {

        createjs.Tween.removeTweens(this.under_bar);
        createjs.Tween.removeTweens(this.underbar_gard_aboutmediadesign);
        createjs.Tween.get(this.under_bar, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
        createjs.Tween.get(this.underbar_gard_aboutmediadesign, { loop: false }).to({ alpha: 0, scaleY: 0 }, 500, createjs.Ease.linear);

    }



} 