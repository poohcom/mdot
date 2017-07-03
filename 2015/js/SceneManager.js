/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var SceneManager = (function () {
    function SceneManager() {
        this._sceneIndex = 0;
        this._startTime = 0;
        this.bgstage = null;
        this.stage = null;
        this.bgContainer = null;
        this.rootContainer = null;
        this.sceneContainer = null;
        this.menuContainer = null;
        this.sceneMain = null;
        this.scene = null;
        this.message = null;
        this.bgImage1 = null;
        this.bgImage2 = null;
        this.loadProgressLabel = null;
        this.isLoadedBgm = false;
        this.isLoadedData = false;
        this.bgm = null;
        this.mouse_sound = null;
        this.darkBG = null;
        this.darkBGMask = null;
        this.popup_index = 0;
        this.isPoup = false;
        this.port_index = 0;
        this.bgList = [
            "main_color_2",
            "main_color_1",
            "main_color_1",
            "site_map_background",
            "main_color_1",
            "main_color_1",
            "main_color_1",
            "main_color_1",
            "main_color_1",
            "main_color_1",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "about_media_design_background",
            "interactive_design_background",
            "animation_background",
            "vediography_background",
            "contents_design_background",
            "poster_background",
            "interactive_design_background",
            "animation_background",
            "vediography_background",
            "contents_design_background",
            "poster_background",
        ];
        //private bgList: string[] = [
        //    "main_color_2", // 메인 0 
        //    "main_color_1", // 인포 1 //main_color_4
        //    "main_color_1", // 메뉴 2
        //    "about_media_design_background", // about 3
        //    "about_media_design_background", // professor 4
        //    "about_media_design_background", // 3_students 5
        //    "about_media_design_background", // 4_16th_concept 6
        //    "interactive_design_background", // 7
        //    "animation_background", // 8
        //    "vediography_background", // 9
        //    "contents_design_background", // 10
        //    "poster_background", // 11
        //    "poster_background", // 12
        //    "site_map_background", // 13
        //    "interactive_design_background", // 14
        //    "animation_background", // 15
        //    "vediography_background", // 16
        //    "contents_design_background", // 17
        //    "poster_background", // 18
        //    "about_media_design_background", // 19
        //    "about_media_design_background", // 20
        //    "about_media_design_background", // 21
        //    "about_media_design_background", // 22
        //    "about_media_design_background", // 23
        //];
        this.oldIndex = 0;
        this.isPlaying = false;
        this.isResumeBGM = true;
        if (SceneManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneManager._instance = this;
    }
    SceneManager.instance = function () {
        if (SceneManager._instance === null) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    };
    SceneManager.prototype.getSceneIndex = function () {
        return this._sceneIndex;
    };
    SceneManager.prototype.getStartTime = function () {
        return this._startTime;
    };
    //1024
    SceneManager.prototype.getRatio = function () {
        return Math.min(1, (Date.now() - this._startTime) / 2000);
    };
    SceneManager.prototype.soundplay = function () {
        createjs.Sound.play("mouse_over", createjs.Sound.INTERRUPT_NONE);
        //if (this.mouse_sound === null) {
        //    this.mouse_sound = createjs.Sound.play("mouse_over", createjs.Sound.INTERRUPT_NONE);
        //} else {
        //    if (this.mouse_sound.playState == createjs.Sound.PLAY_FINISHED) {
        //        this.mouse_sound.play();
        //    }
        //}
    };
    SceneManager.prototype.preload = function (applyshader, applyScene) {
        this.queueBG = new createjs.LoadQueue();
        this.queueBG.on("complete", handleCompleteBG, this);
        //this.queueBG.loadManifest([
        //    { id: "main_color_1", src: "assets/main_color/main_color_1024_1024/main_color_1.jpg" },
        //    { id: "main_color_2", src: "assets/main_color/main_color_1024_1024/main_color_2.jpg" },
        //    { id: "main_color_4", src: "assets/main_color/main_color_1024_1024/main_color_4.jpg" },
        //    { id: "about_media_design_background", src: "assets/main_color/main_color_1024_1024/about_media_design_background.jpg" },
        //    { id: "animation_background", src: "assets/main_color/main_color_1024_1024/animation_background.jpg" },
        //    { id: "contents_design_background", src: "assets/main_color/main_color_1024_1024/contents_design_background.jpg" },
        //    { id: "interactive_design_background", src: "assets/main_color/main_color_1024_1024/interactive_design_background.jpg" },
        //    { id: "poster_background", src: "assets/main_color/main_color_1024_1024/poster_background.jpg" },
        //    { id: "vediography_background", src: "assets/main_color/main_color_1024_1024/vediography_background.jpg" },
        //    { id: "site_map_background", src: "assets/main_color/main_color_1024_1024/site_map_background.jpg" }
        //    ]);
        this.queueBG.loadManifest([
            { id: "main_color_1", src: "assets/main_color/main_color_512_512/main_color_1.jpg" },
            { id: "main_color_2", src: "assets/main_color/main_color_512_512/main_color_2.jpg" },
            { id: "main_color_4", src: "assets/main_color/main_color_512_512/main_color_4.jpg" },
            { id: "about_media_design_background", src: "assets/main_color/main_color_512_512/about_media_design_background.jpg" },
            { id: "animation_background", src: "assets/main_color/main_color_512_512/animation_background.jpg" },
            { id: "contents_design_background", src: "assets/main_color/main_color_512_512/contents_design_background.jpg" },
            { id: "interactive_design_background", src: "assets/main_color/main_color_512_512/interactive_design_background.jpg" },
            { id: "poster_background", src: "assets/main_color/main_color_512_512/poster_background.jpg" },
            { id: "vediography_background", src: "assets/main_color/main_color_512_512/vediography_background.jpg" },
            { id: "site_map_background", src: "assets/main_color/main_color_512_512/site_map_background.jpg" }
        ]);
        function handleCompleteBG() {
            applyshader();
            this.preload2(applyScene);
        }
    };
    SceneManager.prototype.preload2 = function (applyshader) {
        this.queue = new createjs.LoadQueue();
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
        createjs.Sound.addEventListener("fileload", handleFileLoad);
        createjs.Sound.registerSound({ id: "background_music", src: "assets/sound/background_music.mp3" });
        createjs.Sound.registerSound({ id: "mouse_over", src: "assets/sound/mouse_over.mp3" });
        createjs.Sound.registerSound({ id: "portfolio_menu_open", src: "assets/sound/portfolio_menu_open.mp3" });
        function handleFileLoad(event) {
            SceneManager.instance().isLoadedBgm = true;
            if (SceneManager.instance().isLoadedData == true) {
                if (SceneManager.instance().bgm === null) {
                }
            }
        }
        this.queue.on("complete", handleComplete, this);
        this.queue.on("progress", handleProgress, this);
        this.queue.loadManifest([
            { id: "students_work_button", src: "assets/portfolio/3_videography/students_work_button.png" },
            { id: "main_page_text_image", src: "assets/main/1_main_page/main_page_text_image.png" },
            { id: "main_page_title_text_image_1", src: "assets/main/1_main_page/main_page_title_text_image_1.png" },
            { id: "main_page_title_text_image_2", src: "assets/main/1_main_page/main_page_title_text_image_2.png" },
            { id: "down_button", src: "assets/main/1_main_page/down_button.png" },
            { id: "main_button", src: "assets/main/1_main_page/up_button.png" },
            { id: "home_icon", src: "assets/main/menu_bar/home_icon.png" },
            { id: "home_icon_mouseover", src: "assets/main/menu_bar/home_icon_mouseover.png" },
            { id: "info_icon", src: "assets/main/menu_bar/info_icon.png" },
            { id: "info_icon_mouseover", src: "assets/main/menu_bar/info_icon_mouseover.png" },
            { id: "nosound_icon", src: "assets/main/menu_bar/nosound_icon.png" },
            { id: "nosound_icon_mousover", src: "assets/main/menu_bar/nosound_icon_mousover.png" },
            { id: "sitemap_icon", src: "assets/main/menu_bar/sitemap_icon.png" },
            { id: "sitemap_icon_mouseover", src: "assets/main/menu_bar/sitemap_icon_mouseover.png" },
            { id: "sound_icon", src: "assets/main/menu_bar/sound_icon.png" },
            { id: "sound_icon_mouseover", src: "assets/main/menu_bar/sound_icon_mouseover.png" },
            { id: "underbar_button_aboutmediadesign", src: "assets/main/menu_bar/underbar_button_aboutmediadesign.png" },
            { id: "underbar_button_aboutmediadesign_mouseover", src: "assets/main/menu_bar/underbar_button_aboutmediadesign_mouseover.png" },
            { id: "underbar_gard_aboutmediadesign", src: "assets/main/menu_bar/underbar_gard_aboutmediadesign.png" },
            { id: "menu_portfolio_button", src: "assets/main/menu_bar/portfolio_button.png" },
            { id: "under_bar", src: "assets/main/menu_bar/under_bar.png" },
            { id: "main_scroll", src: "assets/main/scroll/main_scroll.png" },
            { id: "main_scroll_mouseover", src: "assets/main/scroll/main_scroll_mouseover.png" },
            { id: "main_scroll_selected", src: "assets/main/scroll/main_scroll_selected.png" },
            { id: "main_scroll_page1_text", src: "assets/main/scroll/main_scroll_page1_text.png" },
            { id: "main_scroll_page2_text", src: "assets/main/scroll/main_scroll_page2_text.png" },
            { id: "main_scroll_page3_text", src: "assets/main/scroll/main_scroll_page3_text.png" },
            { id: "about_media_design_text", src: "assets/about_media_design/1_about/about_media_design_text.png" },
            { id: "aboutmediadesign_title_page1", src: "assets/main/menu_bar/aboutmediadesign_title_page1.png" },
            { id: "aboutmediadesign_title_page42", src: "assets/main/menu_bar/aboutmediadesign_title_page4-2.png" },
            { id: "aboutmediadesign_title_page4234", src: "assets/main/menu_bar/aboutmediadesign_title_page4-2,3,4.png" },
            { id: "aboutmediadesign_title_page2", src: "assets/main/menu_bar/aboutmediadesign_title_page2.png" },
            { id: "aboutmediadesign_title_page3", src: "assets/main/menu_bar/aboutmediadesign_title_page3.png" },
            { id: "aboutmediadesign_title_page41", src: "assets/main/menu_bar/aboutmediadesign_title_page4-1.png" },
            { id: "aboutmediadesign_navigation", src: "assets/main/menu_bar/aboutmediadesign_navigation.png" },
            { id: "aboutmediadesign_navigation_page1text", src: "assets/main/menu_bar/aboutmediadesign_navigation_page1text.png" },
            { id: "aboutmediadesign_navigation_page41text", src: "assets/main/menu_bar/aboutmediadesign_navigation_page4-1text.png" },
            { id: "aboutmediadesign_titledot", src: "assets/main/menu_bar/aboutmediadesign_titledot.png" },
            { id: "aboutmediadesign_navigation_page4234text", src: "assets/main/menu_bar/aboutmediadesign_navigation_page4-2,3,4text.png" },
            { id: "menu_close_button", src: "assets/main/menu_bar/aboutmediadesign_button_close.png" },
            { id: "aboutmediadesign_navigation_page2text", src: "assets/main/menu_bar/aboutmediadesign_navigation_page2text.png" },
            { id: "aboutmediadesign_navigation_page4text", src: "assets/main/menu_bar/aboutmediadesign_navigation_page4text.png" },
            { id: "aboutmediadesign_navigation_page3text", src: "assets/main/menu_bar/aboutmediadesign_navigation_page3text.png" },
            { id: "aboutmediadesign_navigation_selecteddot", src: "assets/main/menu_bar/aboutmediadesign_navigation_selecteddot.png" },
            { id: "main_exhibitioninformation_title", src: "assets/main/menu_bar/main_exhibitioninformation_title.png" },
            { id: "main_portfolio_title", src: "assets/main/menu_bar/main_portfolio_title.png" },
            { id: "image_decoration_text", src: "assets/about_media_design/4_16th_concept/image_decoration_text.png" },
            { id: "process_image1", src: "assets/about_media_design/5_process/1/process_image1.png" },
            { id: "process_image2", src: "assets/about_media_design/5_process/1/process_image2.png" },
            { id: "process_line_decoration1", src: "assets/about_media_design/5_process/1/process_line_decoration.png" },
            { id: "date2", src: "assets/about_media_design/5_process/1/date2.png" },
            { id: "date1", src: "assets/about_media_design/5_process/1/date1.png" },
            { id: "process_image4", src: "assets/about_media_design/5_process/2/process_image4.png" },
            { id: "process_image3", src: "assets/about_media_design/5_process/2/process_image3.png" },
            { id: "process_line_decoration2", src: "assets/about_media_design/5_process/2/process_line_decoration.png" },
            { id: "date4", src: "assets/about_media_design/5_process/2/date4.png" },
            { id: "date3", src: "assets/about_media_design/5_process/2/date3.png" },
            { id: "process_image5", src: "assets/about_media_design/5_process/3/process_image5.png" },
            { id: "process_line_decoration3", src: "assets/about_media_design/5_process/3/process_line_decoration.png" },
            { id: "spectrum_concept_typo", src: "assets/about_media_design/5_process/3/spectrum_concept_typo.png" },
            { id: "16th_mdot_category1", src: "assets/about_media_design/6_16th_committee/16th_mdot_category1.png" },
            { id: "16th_mdot_category2", src: "assets/about_media_design/6_16th_committee/16th_mdot_category2.png" },
            { id: "image_decoration", src: "assets/about_media_design/4_16th_concept/image_decoration.png" },
            { id: "16thmdot_text", src: "assets/about_media_design/4_16th_concept/16thmdot_text.png" },
            { id: "cicle", src: "assets/about_media_design/2_professors/cicle.png" },
            { id: "exhibition_information", src: "assets/main/2_exhibition_infomation/exhibition_information.png" },
            { id: "map_icon", src: "assets/main/2_exhibition_infomation/icon.png" },
            { id: "text_image", src: "assets/main/2_exhibition_infomation/exhibition_infomation_text.png" },
            { id: "map_flatten_1", src: "assets/main/2_exhibition_infomation/map_1.png" },
            { id: "map_flatten_2", src: "assets/main/2_exhibition_infomation/map_2.png" },
            { id: "map_flatten_3", src: "assets/main/2_exhibition_infomation/map_3.png" },
            { id: "map_flatten_4", src: "assets/main/2_exhibition_infomation/map_4.png" },
            { id: "map_flatten_5", src: "assets/main/2_exhibition_infomation/map_5.png" },
            { id: "map_flatten_6", src: "assets/main/2_exhibition_infomation/map_6.png" },
            { id: "map_flatten_7", src: "assets/main/2_exhibition_infomation/map_7.png" },
            { id: "map_flatten_8", src: "assets/main/2_exhibition_infomation/map_8.png" },
            { id: "map_flatten_9", src: "assets/main/2_exhibition_infomation/map_9.png" },
            { id: "map_flatten_10", src: "assets/main/2_exhibition_infomation/map_10.png" },
            { id: "map_flatten_11", src: "assets/main/2_exhibition_infomation/map_11.png" },
            { id: "map_flatten_12", src: "assets/main/2_exhibition_infomation/map_12.png" },
            { id: "map_flatten_13", src: "assets/main/2_exhibition_infomation/map_13.png" },
            { id: "map_flatten_14", src: "assets/main/2_exhibition_infomation/map_14.png" },
            { id: "map_flatten_15", src: "assets/main/2_exhibition_infomation/map_15.png" },
            { id: "circle_5", src: "assets/main/circle_menu/circle_5.png" },
            { id: "circle_4", src: "assets/main/circle_menu/circle_4.png" },
            { id: "decoration", src: "assets/main/circle_menu/decoration.png" },
            { id: "circle_2", src: "assets/main/circle_menu/circle_2.png" },
            { id: "circle_3", src: "assets/main/circle_menu/circle_3.png" },
            { id: "menu_interactive_design", src: "assets/main/circle_menu/interactive_design.png" },
            { id: "menu_contents_design", src: "assets/main/circle_menu/contents_design.png" },
            { id: "circle_1", src: "assets/main/circle_menu/circle_1.png" },
            { id: "menu_videography", src: "assets/main/circle_menu/videography.png" },
            { id: "menu_animation", src: "assets/main/circle_menu/animation.png" },
            { id: "menu_portfolio", src: "assets/main/circle_menu/portfolio.png" },
            { id: "menu_poster", src: "assets/main/circle_menu/poster.png" },
            { id: "menu_mouse_over", src: "assets/main/circle_menu/mouse_over.png" },
            { id: "menu_line", src: "assets/main/circle_menu/line.png" },
            { id: "mouse_over_rotation", src: "assets/main/circle_menu/mouse_over_rotation.png" },
            { id: "mouse_over_interactive_design", src: "assets/main/circle_menu/mouse_over_interactive_design.png" },
            { id: "mouse_over_contents_design", src: "assets/main/circle_menu/mouse_over_contents_design.png" },
            { id: "mouse_over_videography", src: "assets/main/circle_menu/mouse_over_videography.png" },
            { id: "mouse_over_title_animation", src: "assets/main/circle_menu/mouse_over_title_animation.png" },
            { id: "mouse_over_poster", src: "assets/main/circle_menu/mouse_over_poster.png" },
            { id: "circle_button", src: "assets/main/circle_menu/circle_button.png" },
            { id: "main_portfolio_copyrights", src: "assets/portfolio/main_portfolio_copyrights.png" },
            { id: "subject_name_animation", src: "assets/main/subject_name/animation.png" },
            { id: "subject_name_contents_design", src: "assets/main/subject_name/contents_design.png" },
            { id: "subject_name_interactive_design", src: "assets/main/subject_name/interactive_design.png" },
            { id: "subject_name_poster", src: "assets/main/subject_name/poster.png" },
            { id: "subject_name_videopraphy", src: "assets/main/subject_name/videopraphy.png" },
            { id: "work_button_play", src: "assets/work_page/videography/work_button_play.png" },
            { id: "work_button_fullscreen", src: "assets/work_page/videography/work_button_fullscreen.png" },
            { id: "work_loadingdot", src: "assets/work_page/videography/work_loadingdot.png" },
            { id: "btm_1", src: "assets/work_page/videography/btm_1.png" },
            { id: "btn_2", src: "assets/work_page/videography/btn_2.png" },
            { id: "esc", src: "assets/work_page/videography/esc.png" },
            { id: "button_back", src: "assets/main/menu_bar/button_back.png" },
            { id: "button_back_portfolio", src: "assets/main/menu_bar/button_back_portfolio.png" },
            { id: "button_back_1", src: "assets/main/menu_bar/button_back_1-1.png" },
            { id: "work_page_button_back", src: "assets/work_page/button_back_1.png" },
            { id: "work_page_button_back_portfolio", src: "assets/work_page/button_back_portfolio.png" },
            { id: "work_page_button_back_1", src: "assets/work_page/button_back_1-1.png" },
            { id: "work_button_close", src: "assets/work_page/work_button_close.png" },
            { id: "site_close_button", src: "assets/site_map/close_button.png" },
            { id: "site_map_title", src: "assets/site_map/site_map_title.png" },
            { id: "site_text_line_etc", src: "assets/site_map/text_line_etc.png" },
            { id: "site_professors_button", src: "assets/site_map/professors_button.png" },
            { id: "site_about_media_design_button", src: "assets/site_map/about_media_design_button.png" },
            { id: "site_students_button", src: "assets/site_map/students_button.png" },
            { id: "site_sixttenth_mdot", src: "assets/site_map/16th_mdot.png" },
            { id: "site_interactive_button", src: "assets/site_map/interactive_button.png" },
            { id: "site_animation_button", src: "assets/site_map/animation_button.png" },
            { id: "site_videography_button", src: "assets/site_map/videography_button.png" },
            { id: "site_contents_button", src: "assets/site_map/contents_button.png" },
            { id: "site_poster_button", src: "assets/site_map/poster_button.png" },
            { id: "site_exhibition_information_button", src: "assets/site_map/exhibition_information_button.png" },
            { id: "year2010", src: "assets/site_map/2010.png" },
            { id: "year2011", src: "assets/site_map/2011.png" },
            { id: "year2012", src: "assets/site_map/2012.png" },
            { id: "year2013", src: "assets/site_map/2013.png" },
            { id: "year2014", src: "assets/site_map/2014.png" },
            { id: "facebook", src: "assets/site_map/facebook.png" },
            { id: "homepage", src: "assets/site_map/homepage.png" },
            { id: "animation_subject", src: "assets/portfolio/animation_subject.png" },
            { id: "contentsdesign_subject", src: "assets/portfolio/contentsdesign_subject.png" },
            { id: "interactivedesign_subject", src: "assets/portfolio/interactivedesign_subject.png" },
            { id: "poster_subject", src: "assets/portfolio/poster_subject.png" },
            { id: "videography_subject", src: "assets/portfolio/videography_subject.png" },
            { id: "interactive_design_title", src: "assets/portfolio/1_interactive_design/interactive_design_title.png" },
            { id: "animation_title", src: "assets/portfolio/2_animation/animation_title.png" },
            { id: "videography_tiltie", src: "assets/portfolio/3_videography/videography_tiltie.png" },
            { id: "contents_design_title", src: "assets/portfolio/4_contents_design/contents_design_title.png" },
            { id: "poster_title", src: "assets/portfolio/5_poster/poster_title.png" },
            { id: "list_on", src: "assets/menu_list/list_on.png" },
            { id: "list_off", src: "assets/menu_list/list_off.png" },
            { id: "title_1", src: "assets/main/1_main_page/titledesign/titledesign_1.png" },
            { id: "title_2", src: "assets/main/1_main_page/titledesign/titledesign_70.png" },
            { id: "title_3", src: "assets/main/1_main_page/titledesign/titledesign_71.png" },
            { id: "title_4", src: "assets/main/1_main_page/titledesign/titledesign_72.png" },
            { id: "title_5", src: "assets/main/1_main_page/titledesign/titledesign_73.png" },
            { id: "title_6", src: "assets/main/1_main_page/titledesign/titledesign_74.png" },
            { id: "title_7", src: "assets/main/1_main_page/titledesign/titledesign_75.png" },
            { id: "title_8", src: "assets/main/1_main_page/titledesign/titledesign_76.png" },
            { id: "title_9", src: "assets/main/1_main_page/titledesign/titledesign_77.png" },
            { id: "title_10", src: "assets/main/1_main_page/titledesign/titledesign_78.png" },
            { id: "title_11", src: "assets/main/1_main_page/titledesign/titledesign_79.png" },
            { id: "title_12", src: "assets/main/1_main_page/titledesign/titledesign_80.png" },
            { id: "title_13", src: "assets/main/1_main_page/titledesign/titledesign_81.png" },
            { id: "title_14", src: "assets/main/1_main_page/titledesign/titledesign_82.png" },
            { id: "title_15", src: "assets/main/1_main_page/titledesign/titledesign_83.png" },
            { id: "title_16", src: "assets/main/1_main_page/titledesign/titledesign_84.png" },
            { id: "title_17", src: "assets/main/1_main_page/titledesign/titledesign_85.png" },
            { id: "title_18", src: "assets/main/1_main_page/titledesign/titledesign_86.png" },
            { id: "title_19", src: "assets/main/1_main_page/titledesign/titledesign_87.png" },
            { id: "title_20", src: "assets/main/1_main_page/titledesign/titledesign_88.png" },
            { id: "title_21", src: "assets/main/1_main_page/titledesign/titledesign_89.png" },
            { id: "title_22", src: "assets/main/1_main_page/titledesign/titledesign_90.png" },
            { id: "title_23", src: "assets/main/1_main_page/titledesign/titledesign_91.png" },
            { id: "title_24", src: "assets/main/1_main_page/titledesign/titledesign_92.png" },
            { id: "title_25", src: "assets/main/1_main_page/titledesign/titledesign_93.png" },
            { id: "title_26", src: "assets/main/1_main_page/titledesign/titledesign_94.png" },
            { id: "title_27", src: "assets/main/1_main_page/titledesign/titledesign_95.png" },
            { id: "title_28", src: "assets/main/1_main_page/titledesign/titledesign_96.png" },
            { id: "title_29", src: "assets/main/1_main_page/titledesign/titledesign_97.png" },
            { id: "title_30", src: "assets/main/1_main_page/titledesign/titledesign_98.png" },
            { id: "title_31", src: "assets/main/1_main_page/titledesign/titledesign_99.png" },
            { id: "title_32", src: "assets/main/1_main_page/titledesign/titledesign_100.png" },
            { id: "title_33", src: "assets/main/1_main_page/titledesign/titledesign_101.png" },
            { id: "title_34", src: "assets/main/1_main_page/titledesign/titledesign_102.png" },
            { id: "title_35", src: "assets/main/1_main_page/titledesign/titledesign_103.png" },
            { id: "title_36", src: "assets/main/1_main_page/titledesign/titledesign_104.png" },
            { id: "title_37", src: "assets/main/1_main_page/titledesign/titledesign_105.png" },
            { id: "title_38", src: "assets/main/1_main_page/titledesign/titledesign_106.png" },
            { id: "title_39", src: "assets/main/1_main_page/titledesign/titledesign_107.png" },
            { id: "title_40", src: "assets/main/1_main_page/titledesign/titledesign_108.png" },
            { id: "title_41", src: "assets/main/1_main_page/titledesign/titledesign_109.png" },
            { id: "title_42", src: "assets/main/1_main_page/titledesign/titledesign_110.png" },
            { id: "title_43", src: "assets/main/1_main_page/titledesign/titledesign_111.png" },
            { id: "title_44", src: "assets/main/1_main_page/titledesign/titledesign_112.png" },
            { id: "title_45", src: "assets/main/1_main_page/titledesign/titledesign_113.png" },
            { id: "title_46", src: "assets/main/1_main_page/titledesign/titledesign_114.png" },
            { id: "title_47", src: "assets/main/1_main_page/titledesign/titledesign_115.png" },
            { id: "title_48", src: "assets/main/1_main_page/titledesign/titledesign_116.png" },
            { id: "title_49", src: "assets/main/1_main_page/titledesign/titledesign_117.png" },
            { id: "title_50", src: "assets/main/1_main_page/titledesign/titledesign_118.png" },
            { id: "title_51", src: "assets/main/1_main_page/titledesign/titledesign_119.png" },
            { id: "title_52", src: "assets/main/1_main_page/titledesign/titledesign_120.png" },
            { id: "title_53", src: "assets/main/1_main_page/titledesign/titledesign_121.png" },
            { id: "title_54", src: "assets/main/1_main_page/titledesign/titledesign_122.png" },
            { id: "title_55", src: "assets/main/1_main_page/titledesign/titledesign_123.png" },
            { id: "title_56", src: "assets/main/1_main_page/titledesign/titledesign_124.png" },
            { id: "title_57", src: "assets/main/1_main_page/titledesign/titledesign_125.png" },
            { id: "title_58", src: "assets/main/1_main_page/titledesign/titledesign_126.png" },
            { id: "title_59", src: "assets/main/1_main_page/titledesign/titledesign_127.png" },
            { id: "title_60", src: "assets/main/1_main_page/titledesign/titledesign_128.png" },
            { id: "title_61", src: "assets/main/1_main_page/titledesign/titledesign_129.png" },
            { id: "title_62", src: "assets/main/1_main_page/titledesign/titledesign_130.png" },
            { id: "title_63", src: "assets/main/1_main_page/titledesign/titledesign_131.png" },
            { id: "title_64", src: "assets/main/1_main_page/titledesign/titledesign_132.png" },
            { id: "title_65", src: "assets/main/1_main_page/titledesign/titledesign_133.png" },
            { id: "title_66", src: "assets/main/1_main_page/titledesign/titledesign_134.png" },
            { id: "title_67", src: "assets/main/1_main_page/titledesign/titledesign_135.png" },
            { id: "title_68", src: "assets/main/1_main_page/titledesign/titledesign_136.png" },
            { id: "title_69", src: "assets/main/1_main_page/titledesign/titledesign_137.png" },
            { id: "title_70", src: "assets/main/1_main_page/titledesign/titledesign_138.png" },
            { id: "title_71", src: "assets/main/1_main_page/titledesign/titledesign_139.png" },
            { id: "title_72", src: "assets/main/1_main_page/titledesign/titledesign_140.png" },
            { id: "title_73", src: "assets/main/1_main_page/titledesign/titledesign_141.png" },
            { id: "title_74", src: "assets/main/1_main_page/titledesign/titledesign_142.png" },
            { id: "title_75", src: "assets/main/1_main_page/titledesign/titledesign_143.png" },
            { id: "title_76", src: "assets/main/1_main_page/titledesign/titledesign_144.png" },
            { id: "title_77", src: "assets/main/1_main_page/titledesign/titledesign_145.png" },
            { id: "title_78", src: "assets/main/1_main_page/titledesign/titledesign_146.png" },
            { id: "title_79", src: "assets/main/1_main_page/titledesign/titledesign_147.png" },
            { id: "title_80", src: "assets/main/1_main_page/titledesign/titledesign_148.png" },
            { id: "title_81", src: "assets/main/1_main_page/titledesign/titledesign_149.png" },
            { id: "title_82", src: "assets/main/1_main_page/titledesign/titledesign_150.png" },
            { id: "title_83", src: "assets/main/1_main_page/titledesign/titledesign_151.png" },
            { id: "title_84", src: "assets/main/1_main_page/titledesign/titledesign_152.png" },
            { id: "title_85", src: "assets/main/1_main_page/titledesign/titledesign_196.png" },
            { id: "title_86", src: "assets/main/1_main_page/titledesign/titledesign_197.png" },
            { id: "title_87", src: "assets/main/1_main_page/titledesign/titledesign_198.png" },
            { id: "title_88", src: "assets/main/1_main_page/titledesign/titledesign_199.png" },
            { id: "title_89", src: "assets/main/1_main_page/titledesign/titledesign_200.png" },
            { id: "title_90", src: "assets/main/1_main_page/titledesign/titledesign_201.png" },
            { id: "title_91", src: "assets/main/1_main_page/titledesign/titledesign_202.png" },
            { id: "title_92", src: "assets/main/1_main_page/titledesign/titledesign_203.png" },
            { id: "title_93", src: "assets/main/1_main_page/titledesign/titledesign_204.png" },
            { id: "title_94", src: "assets/main/1_main_page/titledesign/titledesign_205.png" },
            { id: "title_95", src: "assets/main/1_main_page/titledesign/titledesign_206.png" },
            { id: "title_96", src: "assets/main/1_main_page/titledesign/titledesign_207.png" },
            { id: "title_97", src: "assets/main/1_main_page/titledesign/titledesign_208.png" },
            { id: "title_98", src: "assets/main/1_main_page/titledesign/titledesign_209.png" },
            { id: "title_99", src: "assets/main/1_main_page/titledesign/titledesign_210.png" },
            { id: "title_100", src: "assets/main/1_main_page/titledesign/titledesign_211.png" },
            { id: "title_101", src: "assets/main/1_main_page/titledesign/titledesign_212.png" },
            { id: "title_102", src: "assets/main/1_main_page/titledesign/titledesign_213.png" },
            { id: "title_103", src: "assets/main/1_main_page/titledesign/titledesign_214.png" },
            { id: "title_104", src: "assets/main/1_main_page/titledesign/titledesign_215.png" },
            { id: "title_105", src: "assets/main/1_main_page/titledesign/titledesign_216.png" },
            { id: "title_106", src: "assets/main/1_main_page/titledesign/titledesign_217.png" },
            { id: "title_107", src: "assets/main/1_main_page/titledesign/titledesign_218.png" },
            { id: "title_108", src: "assets/main/1_main_page/titledesign/titledesign_219.png" },
            { id: "title_109", src: "assets/main/1_main_page/titledesign/titledesign_220.png" },
            { id: "title_110", src: "assets/main/1_main_page/titledesign/titledesign_221.png" },
            { id: "title_111", src: "assets/main/1_main_page/titledesign/titledesign_222.png" },
            { id: "title_112", src: "assets/main/1_main_page/titledesign/titledesign_223.png" },
            { id: "title_113", src: "assets/main/1_main_page/titledesign/titledesign_224.png" },
            { id: "title_114", src: "assets/main/1_main_page/titledesign/titledesign_225.png" },
            { id: "title_115", src: "assets/main/1_main_page/titledesign/titledesign_226.png" },
            { id: "title_116", src: "assets/main/1_main_page/titledesign/titledesign_227.png" },
            { id: "title_117", src: "assets/main/1_main_page/titledesign/titledesign_228.png" },
            { id: "title_118", src: "assets/main/1_main_page/titledesign/titledesign_229.png" },
            { id: "title_119", src: "assets/main/1_main_page/titledesign/titledesign_230.png" },
            { id: "title_120", src: "assets/main/1_main_page/titledesign/titledesign_231.png" },
            { id: "title_121", src: "assets/main/1_main_page/titledesign/titledesign_232.png" },
            { id: "title_122", src: "assets/main/1_main_page/titledesign/titledesign_233.png" },
            { id: "title_123", src: "assets/main/1_main_page/titledesign/titledesign_234.png" },
            { id: "title_124", src: "assets/main/1_main_page/titledesign/titledesign_235.png" },
            { id: "title_125", src: "assets/main/1_main_page/titledesign/titledesign_236.png" },
            { id: "title_126", src: "assets/main/1_main_page/titledesign/titledesign_237.png" },
            { id: "title_127", src: "assets/main/1_main_page/titledesign/titledesign_238.png" },
            { id: "title_128", src: "assets/main/1_main_page/titledesign/titledesign_239.png" },
            { id: "title_129", src: "assets/main/1_main_page/titledesign/titledesign_240.png" },
            { id: "title_130", src: "assets/main/1_main_page/titledesign/titledesign_241.png" },
            { id: "title_131", src: "assets/main/1_main_page/titledesign/titledesign_242.png" },
            { id: "title_132", src: "assets/main/1_main_page/titledesign/titledesign_243.png" },
            { id: "title_133", src: "assets/main/1_main_page/titledesign/titledesign_244.png" },
            { id: "title_134", src: "assets/main/1_main_page/titledesign/titledesign_245.png" },
            { id: "title_135", src: "assets/main/1_main_page/titledesign/titledesign_246.png" },
            { id: "title_136", src: "assets/main/1_main_page/titledesign/titledesign_247.png" },
            { id: "title_137", src: "assets/main/1_main_page/titledesign/titledesign_248.png" },
            { id: "title_138", src: "assets/main/1_main_page/titledesign/titledesign_249.png" },
            { id: "title_139", src: "assets/main/1_main_page/titledesign/titledesign_250.png" },
            { id: "title_140", src: "assets/main/1_main_page/titledesign/titledesign_251.png" },
            { id: "title_141", src: "assets/main/1_main_page/titledesign/titledesign_252.png" },
            { id: "title_142", src: "assets/main/1_main_page/titledesign/titledesign_253.png" },
            { id: "title_143", src: "assets/main/1_main_page/titledesign/titledesign_254.png" },
            { id: "title_144", src: "assets/main/1_main_page/titledesign/titledesign_255.png" },
            { id: "title_145", src: "assets/main/1_main_page/titledesign/titledesign_256.png" },
            { id: "title_146", src: "assets/main/1_main_page/titledesign/titledesign_257.png" },
            { id: "title_147", src: "assets/main/1_main_page/titledesign/titledesign_258.png" },
            { id: "title_148", src: "assets/main/1_main_page/titledesign/titledesign_259.png" },
            { id: "title_149", src: "assets/main/1_main_page/titledesign/titledesign_260.png" },
            { id: "title_150", src: "assets/main/1_main_page/titledesign/titledesign_261.png" },
            { id: "title_151", src: "assets/main/1_main_page/titledesign/titledesign_262.png" },
            { id: "title_152", src: "assets/main/1_main_page/titledesign/titledesign_263.png" },
            { id: "title_153", src: "assets/main/1_main_page/titledesign/titledesign_264.png" },
            { id: "title_154", src: "assets/main/1_main_page/titledesign/titledesign_265.png" },
            { id: "title_155", src: "assets/main/1_main_page/titledesign/titledesign_266.png" },
            { id: "title_156", src: "assets/main/1_main_page/titledesign/titledesign_267.png" },
            { id: "title_157", src: "assets/main/1_main_page/titledesign/titledesign_268.png" },
            { id: "title_158", src: "assets/main/1_main_page/titledesign/titledesign_269.png" },
            { id: "title_159", src: "assets/main/1_main_page/titledesign/titledesign_270.png" },
            { id: "title_160", src: "assets/main/1_main_page/titledesign/titledesign_271.png" },
            { id: "title_161", src: "assets/main/1_main_page/titledesign/titledesign_272.png" },
            { id: "title_162", src: "assets/main/1_main_page/titledesign/titledesign_273.png" },
            { id: "title_163", src: "assets/main/1_main_page/titledesign/titledesign_274.png" },
            { id: "title_164", src: "assets/main/1_main_page/titledesign/titledesign_275.png" },
            { id: "title_165", src: "assets/main/1_main_page/titledesign/titledesign_276.png" }
        ]);
        function handleComplete() {
            applyshader();
            //createjs.Sound.play("sound");
            this.sceneContainer.removeEventListener("tick", this.drawing);
            this.sceneContainer.removeChild(this.loadProgressLabel);
            this.sceneContainer.removeChild(this.line);
            //for (var i: number = 0; i < 3; i++) {
            //    this.sceneContainer.removeChild(this.arr[i]);
            //}
            SceneManager.instance().isLoadedData = true;
            if (SceneManager.instance().isLoadedBgm == true) {
                if (SceneManager.instance().bgm === null) {
                    //SceneManager.instance().bgm = createjs.Sound.play("background_music", createjs.Sound.INTERRUPT_ANY);
                    //SceneManager.instance().bgm = createjs.Sound.play("mouse_over", createjs.Sound.INTERRUPT_ANY);
                    SceneManager.instance().bgm = createjs.Sound.play("background_music", createjs.Sound.INTERRUPT_ANY, 0, 0, -1);
                }
            }
        }
        function handleProgress() {
            var progresPrecentage = Math.round(this.queue.progress * 100);
            this.g.clear();
            this.g.setStrokeStyle(1);
            this.g.beginStroke("#FFF");
            this.g.moveTo(0, 540);
            this.g.lineTo(1920 * this.queue.progress, 540);
            var msg = progresPrecentage + "%";
            this.loadProgressLabel.text = msg;
            this.loadProgressLabel.x = 970 - msg.length * 5;
            this.stage.update();
        }
    };
    SceneManager.prototype.createBG = function () {
        this.stage = new createjs.Stage(document.getElementById('uicanvas'));
        createjs.Touch.enable(this.stage);
        this.darkBG = new createjs.Shape();
        var w = window.innerWidth;
        var h = window.innerHeight;
        this.darkBG.graphics.beginFill("#FFF").drawRect(0, 0, w, h);
        this.darkBGMask = new createjs.Shape();
        if (1920 / 1080 > w / h) {
            this.darkBGMask.graphics.beginFill("#FFF").drawRect(0, 0, w, (h - 1080 * w / 1920) / 2).drawRect(0, (h - 1080 * w / 1920) / 2 + 1080 * w / 1920, w, h - (h - 1080 * w / 1920) / 2 + 1080 * w / 1920);
        }
        else {
            this.darkBGMask.graphics.beginFill("#FFF").drawRect(0, 0, (w - 1920 * h / 1080) / 2, h).drawRect((w - 1920 * h / 1080) / 2 + 1920 * h / 1080, 0, w - ((w - 1920 * h / 1080) / 2 + 1920 * h / 1080), h);
        }
        this.darkBG.mask = this.darkBGMask;
        this.stage.addChild(this.darkBG);
        this.rootContainer = new createjs.Container();
        this.stage.addChild(this.rootContainer);
        this.sceneContainer = new createjs.Container();
        var mask = new createjs.Shape();
        mask.graphics.beginFill("#FFF").drawRect(0, 0, 1920, 1080);
        this.sceneContainer.mask = mask;
        this.rootContainer.addChild(this.sceneContainer);
        createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Ticker.setFPS(30);
        this.stage.update();
        this.stage.enableMouseOver(5);
        this.loadProgressLabel = new createjs.Text("", "bold 20px yoon", "#ffffff");
        this.loadProgressLabel.x = 950;
        this.loadProgressLabel.y = 560;
        this.sceneContainer.addChild(this.loadProgressLabel);
        this.sceneContainer.addEventListener("tick", this.drawing);
        this.line = new createjs.Shape();
        this.g = new createjs.Graphics();
        this.line.graphics = this.g;
        this.sceneContainer.addChild(this.line);
        //for (var i: number = 0; i < 3; i++) {
        //    var circle: Circle = new Circle();
        //    circle.x = 1920 / 2+15;
        //    circle.y = 400;
        //    this.sceneContainer.addChild(circle);
        //    this.arr.push(circle);
        //}
    };
    //public arr: Circle[] = [];
    SceneManager.prototype.drawing = function (event) {
        SceneManager.instance().drawLines();
    };
    //public count: number = 0;
    SceneManager.prototype.drawLines = function () {
        //    this.count++;
        //    for (var i: number = 0; i < 3; i++) {
        //        this.arr[i].initLine((this.count / 10 + i * 10) % 30, 1 - (this.count / 10 + i * 10) % 30 / 30 );
        //    }
    };
    SceneManager.prototype.initBG = function () {
        this.sceneMain = SceneMain.instance();
        this.sceneContainer.addChild(this.sceneMain);
        this.menuContainer = new createjs.Container();
        this.rootContainer.addChild(this.menuContainer);
        this.menuContainer.addChild(MenuBar.instance());
    };
    // 
    SceneManager.prototype.setSize = function (w, h) {
        this.darkBG.graphics.clear();
        this.darkBG.graphics.beginFill("#FFF").drawRect(0, 0, w, h);
        this.darkBGMask.graphics.clear();
        if (1920 / 1080 > w / h) {
            this.rootContainer.scaleX = w / 1920;
            this.rootContainer.scaleY = w / 1920;
            this.rootContainer.x = 0;
            this.rootContainer.y = (h - 1080 * w / 1920) / 2;
            this.darkBGMask.graphics.beginFill("#FFF").drawRect(0, 0, w, (h - 1080 * w / 1920) / 2).drawRect(0, (h - 1080 * w / 1920) / 2 + 1080 * w / 1920, w, h - (h - 1080 * w / 1920) / 2 + 1080 * w / 1920);
        }
        else {
            this.rootContainer.scaleX = h / 1080;
            this.rootContainer.scaleY = h / 1080;
            this.rootContainer.x = (w - 1920 * h / 1080) / 2;
            this.rootContainer.y = 0;
            this.darkBGMask.graphics.beginFill("#FFF").drawRect(0, 0, (w - 1920 * h / 1080) / 2, h).drawRect((w - 1920 * h / 1080) / 2 + 1920 * h / 1080, 0, w - ((w - 1920 * h / 1080) / 2 + 1920 * h / 1080), h);
        }
        document.getElementById('bgcanvas').width = w;
        document.getElementById('bgcanvas').height = h;
        //this.bgContainer.scaleX = w / 1024;
        //this.bgContainer.scaleY = h / 1024;
    };
    SceneManager.prototype.getBGImage1 = function () {
        return this.queueBG.getResult(this.bgList[this.oldIndex]);
    };
    SceneManager.prototype.getBGImage2 = function () {
        return this.queueBG.getResult(this.bgList[this._sceneIndex]);
    };
    SceneManager.prototype.initCanvas = function () {
        this.bgstage = new createjs.Stage(document.getElementById('bgcanvas'));
        createjs.Ticker.addEventListener("tick", this.bgstage);
        createjs.Ticker.setFPS(30);
        this.bgstage.update();
        this.bgContainer = new createjs.Container();
        this.bgContainer.scaleX = 1920 / Config.BG_SIZE;
        this.bgContainer.scaleY = 1080 / Config.BG_SIZE;
        //this.bgstage.addChildAt(this.bgContainer,0);
        this.rootContainer.addChildAt(this.bgContainer, 0);
        this.whitebg = new createjs.Shape();
        this.whitebg.graphics = new createjs.Graphics();
        this.whitebg.graphics.clear();
        this.whitebg.graphics.beginLinearGradientFill(["rgba(0,0,0,0)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)"], [0, 0.1, 0.15], 0, 0, 0, 1024).drawRect(0, 0, 1024, 1024);
    };
    SceneManager.prototype.fadeInStart = function () {
        var _this = this;
        this.bgContainer.removeAllChildren();
        this.bgImage1 = new createjs.Bitmap(this.queueBG.getResult(this.bgList[this.oldIndex]));
        this.bgImage1.alpha = 1;
        this.bgImage2 = new createjs.Bitmap(this.queueBG.getResult(this.bgList[this._sceneIndex]));
        this.bgImage2.alpha = 0;
        this.bgContainer.addChild(this.bgImage1);
        this.bgContainer.addChild(this.bgImage2);
        clearInterval(this.timerAlpha);
        this.timerAlpha = setInterval(function () { return _this.fadeIn(); }, 50);
    };
    SceneManager.prototype.fadeIn = function () {
        this.bgImage1.alpha = 1 - this.getRatio();
        this.bgImage2.alpha = this.getRatio();
        if (this.getRatio() == 1) {
            clearInterval(this.timerAlpha);
            this.bgImage2.alpha = 1;
            this.bgContainer.removeChild(this.bgImage1);
            return;
        }
    };
    SceneManager.prototype.popupSitemap = function () {
        if (this.isPlaying == true)
            return;
        this.isPoup = true;
        this.sceneContainer.visible = false;
        this.popup_index = this._sceneIndex;
        this.nextSceneIndex(3);
        this.menuContainer.addChild(SceneSitemap.instance());
    };
    SceneManager.prototype.popupSitemap2 = function () {
        this.sceneContainer.visible = false;
        this.popup_index = this._sceneIndex;
        this.menuContainer.alpha = 0;
        this.menuContainer.addChild(SceneSitemap.instance());
        SceneManager.instance().nextSceneIndex(0);
        createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: 0 }, 8000, createjs.Ease.circOut).call(f1);
        createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: 0 }, 16000, createjs.Ease.circOut).call(f2);
        createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: 0 }, 24000, createjs.Ease.circOut).call(f3);
        createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: 0 }, 32000, createjs.Ease.circOut).call(f4);
        createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: 0 }, 40000, createjs.Ease.circOut).call(f5);
        function f1() {
            SceneManager.instance().nextSceneIndex(7);
        }
        function f2() {
            SceneManager.instance().nextSceneIndex(8);
        }
        function f3() {
            SceneManager.instance().nextSceneIndex(9);
        }
        function f4() {
            SceneManager.instance().nextSceneIndex(10);
        }
        function f5() {
            SceneManager.instance().nextSceneIndex(11);
        }
    };
    SceneManager.prototype.closeOnlySitemap = function () {
        this.isPoup = false;
        this.sceneContainer.visible = true;
        this.menuContainer.removeChild(SceneSitemap.instance());
    };
    SceneManager.prototype.closeSitemap = function (index) {
        this.isPoup = false;
        this.sceneContainer.visible = true;
        this.menuContainer.removeChild(SceneSitemap.instance());
        this.nextSceneIndex(index);
    };
    SceneManager.prototype.popupPort = function (index, page_index) {
        if (this.isPlaying == true)
            return;
        this.port_index = this._sceneIndex;
        this.nextSceneIndex(index);
        this.bgContainer.addChild(this.whitebg);
        switch (index) {
            case 25:
                ScenePortInteractiveWork.instance().setIndex(page_index);
                break;
            case 26:
                ScenePortAnimationWork.instance().setIndex(page_index);
                break;
            case 27:
                //ScenePortVideographyWork.instance().setIndex(page_index);
                ScenePortVideographyWork.instance().setIndex(page_index);
                break;
            case 28:
                ScenePortContentsWork.instance().setIndex(page_index);
                break;
            case 29:
                ScenePortPosterWork.instance().setIndex(page_index);
                break;
        }
        SceneMain.instance().visible = false;
    };
    SceneManager.prototype.closePort = function () {
        this.nextSceneIndex(this.port_index);
    };
    SceneManager.prototype.nextSceneIndex = function (index) {
        //if (this.isPoup == true) {
        //return;
        //}
        if (this.isPlaying == true)
            return;
        this.isPlaying = true;
        createjs.Tween.get(SceneManager.instance(), { loop: false }).to({}, 1000, createjs.Ease.linear).call(function () {
            SceneManager.instance().isPlaying = false;
        });
        this.bgContainer.removeChild(this.whitebg);
        console.log("index", index, this._sceneIndex, this.oldIndex);
        if (this._sceneIndex == index) {
            switch (index) {
                case 0:
                case 1:
                case 2:
                    createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: (SceneManager.instance().getSceneIndex() * -1080) }, 1000, createjs.Ease.circOut);
                    break;
            }
            return;
        }
        //this.isClick = false;
        if (this.oldIndex > 2 && index == 0) {
            SceneMainMainPage.instance().initStart = true;
        }
        if (this.scene === null) {
        }
        else {
            this.scene.stopScene();
            var s = this.scene;
            if (index >= 10 && index < 19 && this._sceneIndex >= 10 && this._sceneIndex <= 19) {
            }
            else {
                setTimeout(function () {
                    SceneManager.instance().sceneContainer.removeChild(s);
                }, 1000);
            }
            this.scene = null;
        }
        this.oldIndex = this._sceneIndex;
        this._sceneIndex = index;
        this._startTime = Date.now();
        if (Config.instance().isChrome() == false) {
            this.fadeInStart();
        }
        MenuBar.instance().updateIndex();
        switch (index) {
            case 0:
            case 1:
            case 2:
                SceneMain.instance().visible = true;
                SceneMain.instance().x = 0;
                SceneMainMenu.instance().setMode(0);
                //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ x: 0 }, 200, createjs.Ease.circOut);
                createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: (index * -1080) }, 1000, createjs.Ease.circOut);
                break;
            case 3:
                break;
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                SceneMain.instance().visible = true;
                SceneMainMenu.instance().setMode(1);
                // 205 94
                createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 + 94, x: -960 - 380 + 205 }, 1000, createjs.Ease.circOut);
                this.scene = SceneAbout.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                createjs.Tween.get(this.scene, { loop: false }).to({ y: ((index - 10) * -1080) }, 1000, createjs.Ease.circOut);
                break;
            case 20:
                SceneMain.instance().visible = true;
                //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 + 94, x: -960 - 380 + 205 }, 1000, createjs.Ease.circOut);
                SceneMainMenu.instance().setMode(2);
                this.scene = ScenePortInteractive.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 21:
                SceneMain.instance().visible = true;
                //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 + 94, x: -960 - 380 + 205 }, 1000, createjs.Ease.circOut);
                SceneMainMenu.instance().setMode(2);
                this.scene = ScenePortAnimation.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 22:
                SceneMain.instance().visible = true;
                //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 + 94, x: -960 - 380 + 205 }, 1000, createjs.Ease.circOut);
                SceneMainMenu.instance().setMode(2);
                this.scene = ScenePortVideography.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 23:
                SceneMain.instance().visible = true;
                //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 + 94, x: -960 - 380 + 205 }, 1000, createjs.Ease.circOut);
                SceneMainMenu.instance().setMode(2);
                this.scene = ScenePortContents.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 24:
                SceneMain.instance().visible = true;
                //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 + 94, x: -960 - 380 + 205 }, 1000, createjs.Ease.circOut);
                SceneMainMenu.instance().setMode(2);
                this.scene = ScenePortPoster.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 25:
                SceneMainMenu.instance().setMode(3);
                this.scene = ScenePortInteractiveWork.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 26:
                SceneMainMenu.instance().setMode(3);
                this.scene = ScenePortAnimationWork.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 27:
                SceneMainMenu.instance().setMode(3);
                this.scene = ScenePortVideographyWork.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 28:
                SceneMainMenu.instance().setMode(3);
                this.scene = ScenePortContentsWork.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
            case 29:
                SceneMainMenu.instance().setMode(3);
                this.scene = ScenePortPosterWork.instance();
                this.scene.startScene();
                if (this.sceneContainer.getChildIndex(this.scene) == -1) {
                    this.sceneContainer.addChild(this.scene);
                }
                break;
        }
    };
    SceneManager.prototype.fullscreenOn = function () {
        if (this._sceneIndex == 26) {
            ScenePortAnimationWork.instance().fullscreenOn();
        }
        if (this._sceneIndex == 27) {
            ScenePortVideographyWork.instance().fullscreenOn();
        }
    };
    SceneManager.prototype.fullscreenOff = function () {
        if (this._sceneIndex == 26) {
            ScenePortAnimationWork.instance().fullscreenOff();
        }
        if (this._sceneIndex == 27) {
            ScenePortVideographyWork.instance().fullscreenOff();
        }
    };
    SceneManager.prototype.upScene = function () {
        if (this._sceneIndex >= 1 && this._sceneIndex < 3) {
            this.nextSceneIndex(this._sceneIndex - 1);
        }
        if (this._sceneIndex >= 11 && this._sceneIndex < 18) {
            this.nextSceneIndex(this._sceneIndex - 1);
        }
    };
    SceneManager.prototype.downScene = function () {
        if (this._sceneIndex >= 0 && this._sceneIndex < 2) {
            this.nextSceneIndex(this._sceneIndex + 1);
        }
        if (this._sceneIndex >= 10 && this._sceneIndex < 17) {
            this.nextSceneIndex(this._sceneIndex + 1);
        }
    };
    SceneManager.prototype.bgmOff = function () {
        MenuBar.instance().sound_button.visible = false;
        MenuBar.instance().sound_off.visible = true;
        this.bgm.paused = true;
    };
    SceneManager.prototype.resumeBGM = function () {
        if (this.isResumeBGM == true) {
            MenuBar.instance().sound_button.visible = true;
            MenuBar.instance().sound_off.visible = false;
            this.bgm.paused = false;
        }
    };
    SceneManager._instance = null;
    return SceneManager;
})();
//# sourceMappingURL=SceneManager.js.map