var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneLoading = (function (_super) {
    __extends(SceneLoading, _super);
    function SceneLoading() {
        _super.call(this);
        this.loadProgressLabel = null;
        this.logo = null;
        this.logos = [];
        this.count = 0;
        for (var i = 1; i < 30; i++) {
            if (i < 10) {
                this.logo = new createjs.Bitmap("assets/loading/loading_0000" + i + ".png");
            }
            else {
                this.logo = new createjs.Bitmap("assets/loading/loading_000" + i + ".png");
            }
            this.logo.x = 897;
            this.logo.y = 511;
            this.addChild(this.logo);
            this.logos.push(this.logo);
        }
        this.loadProgressLabel = new createjs.Text("", "bold 20px yoon", "#ffffff");
        this.loadProgressLabel.x = 975;
        this.loadProgressLabel.y = 586;
        this.addChild(this.loadProgressLabel);
        SceneManager.instance().queue = new createjs.LoadQueue();
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
        createjs.Sound.addEventListener("fileload", handleFileLoad);
        createjs.Sound.registerSound({ id: "background_music", src: "assets/sound/background_music.mp3" });
        createjs.Sound.registerSound({ id: "mouse_over", src: "assets/sound/mouse_over.mp3" });
        createjs.Sound.registerSound({ id: "mouse_click", src: "assets/sound/mouse_click.mp3" });
        createjs.Sound.registerSound({ id: "tree_mouse_over", src: "assets/sound/tree_mouse_over.mp3" });
        createjs.Sound.registerSound({ id: "page_movement", src: "assets/sound/page_movement.mp3" });
        function handleFileLoad(event) {
            SceneManager.instance().isLoadedBgm = true;
        }
        SceneManager.instance().queue.on("complete", handleComplete, this);
        SceneManager.instance().queue.loadManifest([
            { id: "particle", src: "assets/main/paticle.png" },
            { id: "particle1", src: "assets/main/paticle_1.png" },
            { id: "particle2", src: "assets/main/paticle_2.png" },
            { id: "particle3", src: "assets/main/paticle_3.png" },
            { id: "Tree_stem", src: "assets/main/Tree_stem.png" },
            { id: "main_-02", src: "assets/main/main_-02.png" },
            { id: "interactive_stop", src: "assets/main/interactive_stop.png" },
            { id: "inter_17x10", src: "assets/main/inter_17x10.png" },
            { id: "main_-03", src: "assets/main/main_-03.png" },
            { id: "animation_16x9", src: "assets/main/animation_16x9.png" },
            { id: "animation_stop", src: "assets/main/animation_stop.png" },
            { id: "main_-04", src: "assets/main/main_-04.png" },
            { id: "video_17x8", src: "assets/main/video_17x8.png" },
            { id: "video_stop", src: "assets/main/video_stop.png" },
            { id: "main_-05", src: "assets/main/main_-05.png" },
            { id: "contents_stop", src: "assets/main/contents_stop.png" },
            { id: "contents_17x8", src: "assets/main/contents_17x8.png" },
            { id: "main_-06", src: "assets/main/main_-06.png" },
            { id: "poster_15x7", src: "assets/main/poster_15x7.png" },
            { id: "poster_stop", src: "assets/main/poster_stop.png" },
            { id: "mono_frame_big_1", src: "assets/work/mono_frame_big_1.png" },
            { id: "mono_frame_big_2", src: "assets/work/mono_frame_big_2.png" },
            { id: "mono_frame_big_3", src: "assets/work/mono_frame_big_3.png" },
            { id: "mono_frame_big_4", src: "assets/work/mono_frame_big_4.png" },
            { id: "mono_frame_play_1", src: "assets/work/mono_frame_play_1.png" },
            { id: "mono_frame_play_2", src: "assets/work/mono_frame_play_2.png" },
            { id: "work_down", src: "assets/work/work_down.png" },
            { id: "work_left", src: "assets/work/work_left.png" },
            { id: "work_right", src: "assets/work/work_right.png" },
            { id: "work_up", src: "assets/work/work_up.png" },
            { id: "work_text_line", src: "assets/work/work_text_line.png" },
            { id: "work_text_line_contents", src: "assets/work/work_text_line_contents.png" },
            { id: "work_text_line_poster", src: "assets/work/work_text_line_poster.png" },
            { id: "about_text", src: "assets/about_media_design/about_text.png" },
            { id: "1_about_media_design_typo", src: "assets/about_media_design/1_about_media_design_typo.png" },
            { id: "2_professors_typo", src: "assets/about_media_design/2_professors_typo.png" },
            { id: "3_students_typo", src: "assets/about_media_design/3_students_typo.png" },
            { id: "4_1_concept_typo", src: "assets/about_media_design/4_1_concept_typo.png" },
            { id: "4_2_design_process_typo", src: "assets/about_media_design/4_2_design_process_typo.png" },
            { id: "4_3_17th_committee_typo", src: "assets/about_media_design/4_3_17th_committee_typo.png" },
            { id: "ANIMATION-01", src: "assets/about_professors/ANIMATION-01.png" },
            { id: "CONTENTS-01", src: "assets/about_professors/CONTENTS-01.png" },
            { id: "INTERACTIVE-01", src: "assets/about_professors/INTERACTIVE-01.png" },
            { id: "POSTER-01", src: "assets/about_professors/POSTER-01.png" },
            { id: "VIDEOGRAPHY-01", src: "assets/about_professors/VIDEOGRAPHY-01.png" },
            { id: "animation_color_14x19", src: "assets/about_professors/animation_color_14x19.png" },
            { id: "animation_mono_14x19", src: "assets/about_professors/animation_mono_14x19.png" },
            { id: "contents_color_14x18", src: "assets/about_professors/contents_color_14x18.png" },
            { id: "contents_mono_14x18", src: "assets/about_professors/contents_mono_14x18.png" },
            { id: "interact_color_14x21", src: "assets/about_professors/interact_color_14x21.png" },
            { id: "interact_mono_14x21", src: "assets/about_professors/interact_mono_14x21.png" },
            { id: "poster_color_12x19", src: "assets/about_professors/poster_color_12x19.png" },
            { id: "poster_mono_12x19", src: "assets/about_professors/poster_mono_12x19.png" },
            { id: "video_color_10x32", src: "assets/about_professors/video_color_10x32.png" },
            { id: "video_mono_10x32", src: "assets/about_professors/video_mono_10x32.png" },
            { id: "committee_1_20x8", src: "assets/about_17/committee_1_20x8.png" },
            { id: "committee_2_17x6", src: "assets/about_17/committee_2_17x6.png" },
            { id: "committee_3_20x7", src: "assets/about_17/committee_3_20x7.png" },
            { id: "committee_4_18x8", src: "assets/about_17/committee_4_18x8.png" },
            { id: "committee_5_19x7", src: "assets/about_17/committee_5_19x7.png" },
            { id: "committee_6_17x10", src: "assets/about_17/committee_6_17x10.png" },
            { id: "concept", src: "assets/about_17/concept.jpg" },
            { id: "about media_concept", src: "assets/about_17/about media_concept.png" },
            { id: "about media _17th_concept_mdot Logo-02", src: "assets/about_17/about media _17th_concept_mdot Logo-02.png" },
            { id: "2015_10", src: "assets/about_17/2015_10.png" },
            { id: "2015_11", src: "assets/about_17/2015_11.png" },
            { id: "2016_03", src: "assets/about_17/2016_03.png" },
            { id: "2016_04", src: "assets/about_17/2016_04.png" },
            { id: "center_process", src: "assets/about_17/center_process.png" },
            { id: "process01", src: "assets/about_17/process01.png" },
            { id: "process02", src: "assets/about_17/process02.png" },
            { id: "process03", src: "assets/about_17/process03.png" },
            { id: "process04", src: "assets/about_17/process04.png" },
            { id: "process_left", src: "assets/about_17/process_left.png" },
            { id: "process_light", src: "assets/about_17/process_light.png" },
            { id: "process_line", src: "assets/about_17/process_line.png" },
            { id: "process_ob", src: "assets/about_17/process_ob.png" },
            { id: "aboutmd_students_gradiant", src: "assets/about_media_design_students/aboutmd_students_gradiant.png" },
            { id: "exhibition_info", src: "assets/exhibition_info/exhibition_info.png" },
            { id: "light", src: "assets/exhibition_info/light.png" },
            { id: "X", src: "assets/exhibition_info/X.png" },
            { id: "navercast_icon", src: "assets/icon/navercast_icon.png" },
            { id: "info_icon", src: "assets/icon/info_icon.png" },
            { id: "music_icon", src: "assets/icon/music_icon.png" },
            { id: "mute_icon", src: "assets/icon/mute_icon.png" },
            { id: "sitemap_icon", src: "assets/icon/sitemap_icon.png" },
            { id: "connect line", src: "assets/intro/connect line.png" },
            { id: "copyright", src: "assets/intro/copyright.png" },
            { id: "D", src: "assets/intro/D.png" },
            { id: "EXPLORE_OFF", src: "assets/intro/EXPLORE_OFF.png" },
            { id: "EXPLORE_ON", src: "assets/intro/EXPLORE_ON.png" },
            { id: "intro_info", src: "assets/intro/intro_info.png" },
            { id: "INTRO_LOGO", src: "assets/intro/INTRO_LOGO.png" },
            { id: "intro_media_design", src: "assets/intro/intro_media_design.png" },
            { id: "JUNE2_2016", src: "assets/intro/JUNE2_2016.png" },
            { id: "JUNE7", src: "assets/intro/JUNE7.png" },
            { id: "M", src: "assets/intro/M.png" },
            { id: "n", src: "assets/intro/n.png" },
            { id: "Y", src: "assets/intro/Y.png" },
            { id: "m_dot_logo", src: "assets/navigation/m_dot_logo.png" },
            { id: "17th-mdot_after_1", src: "assets/navigation/navigation_about_mediadesign/btn_after/17th-mdot_after_1.png" },
            { id: "17th-mdot_after_2", src: "assets/navigation/navigation_about_mediadesign/btn_after/17th-mdot_after_2.png" },
            { id: "17th-mdot_committee_after", src: "assets/navigation/navigation_about_mediadesign/btn_after/17th-mdot_committee_after.png" },
            { id: "17th-mdot_concept_after", src: "assets/navigation/navigation_about_mediadesign/btn_after/17th-mdot_concept_after.png" },
            { id: "17th-mdot_process_after", src: "assets/navigation/navigation_about_mediadesign/btn_after/17th-mdot_process_after.png" },
            { id: "about-md_after_1", src: "assets/navigation/navigation_about_mediadesign/btn_after/about-md_after_1.png" },
            { id: "about-md_after_2", src: "assets/navigation/navigation_about_mediadesign/btn_after/about-md_after_2.png" },
            { id: "professors_after_1", src: "assets/navigation/navigation_about_mediadesign/btn_after/professors_after_1.png" },
            { id: "professors_after_2", src: "assets/navigation/navigation_about_mediadesign/btn_after/professors_after_2.png" },
            { id: "students_after_1", src: "assets/navigation/navigation_about_mediadesign/btn_after/students_after_1.png" },
            { id: "students_after_2", src: "assets/navigation/navigation_about_mediadesign/btn_after/students_after_2.png" },
            { id: "17th-mdot_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/17th-mdot_before.png" },
            { id: "17th-mdot_committee_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/17th-mdot_committee_before.png" },
            { id: "17th-mdot_concept_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/17th-mdot_concept_before.png" },
            { id: "17th-mdot_process_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/17th-mdot_process_before.png" },
            { id: "about-md_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/about-md_before.png" },
            { id: "portfolio-btn", src: "assets/navigation/navigation_about_mediadesign/btn_before/portfolio-btn.png" },
            { id: "professors_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/professors_before.png" },
            { id: "students_before", src: "assets/navigation/navigation_about_mediadesign/btn_before/students_before.png" },
            { id: "list_btn", src: "assets/navigation/navigation_portfolio/list_btn.png" },
            { id: "mediadesign_btn", src: "assets/navigation/navigation_portfolio/mediadesign_btn.png" },
            { id: "animation_after_1", src: "assets/navigation/navigation_portfolio/btn_after/animation_after_1.png" },
            { id: "animation_after_2", src: "assets/navigation/navigation_portfolio/btn_after/animation_after_2.png" },
            { id: "contents_after_1", src: "assets/navigation/navigation_portfolio/btn_after/contents_after_1.png" },
            { id: "contents_after_2", src: "assets/navigation/navigation_portfolio/btn_after/contents_after_2.png" },
            { id: "interactive_after_1", src: "assets/navigation/navigation_portfolio/btn_after/interactive_after_1.png" },
            { id: "interactive_after_2", src: "assets/navigation/navigation_portfolio/btn_after/interactive_after_2.png" },
            { id: "poster_after_1", src: "assets/navigation/navigation_portfolio/btn_after/poster_after_1.png" },
            { id: "poster_after_2", src: "assets/navigation/navigation_portfolio/btn_after/poster_after_2.png" },
            { id: "videography_after_1", src: "assets/navigation/navigation_portfolio/btn_after/videography_after_1.png" },
            { id: "videography_after_2", src: "assets/navigation/navigation_portfolio/btn_after/videography_after_2.png" },
            { id: "animation_before", src: "assets/navigation/navigation_portfolio/btn_before/animation_before.png" },
            { id: "contents_before", src: "assets/navigation/navigation_portfolio/btn_before/contents_before.png" },
            { id: "interactive_before", src: "assets/navigation/navigation_portfolio/btn_before/interactive_before.png" },
            { id: "poster_before", src: "assets/navigation/navigation_portfolio/btn_before/poster_before.png" },
            { id: "videography_before", src: "assets/navigation/navigation_portfolio/btn_before/videography_before.png" },
            { id: "s_17th_mdot", src: "assets/site_map/s_17th_mdot.png" },
            { id: "s_2010", src: "assets/site_map/s_2010.png" },
            { id: "s_2011", src: "assets/site_map/s_2011.png" },
            { id: "s_2012", src: "assets/site_map/s_2012.png" },
            { id: "s_2013", src: "assets/site_map/s_2013.png" },
            { id: "s_2014", src: "assets/site_map/s_2014.png" },
            { id: "s_2015", src: "assets/site_map/s_2015.png" },
            { id: "s_about media_1", src: "assets/site_map/s_about media_1.png" },
            { id: "s_about media_2", src: "assets/site_map/s_about media_2.png" },
            { id: "s_animation", src: "assets/site_map/s_animation.png" },
            { id: "s_contents", src: "assets/site_map/s_contents.png" },
            { id: "s_facebook", src: "assets/site_map/s_facebook.png" },
            { id: "s_facebook_title", src: "assets/site_map/s_facebook_title.png" },
            { id: "s_instagram", src: "assets/site_map/s_instagram.png" },
            { id: "s_instagram_title", src: "assets/site_map/s_instagram_title.png" },
            { id: "s_interactive", src: "assets/site_map/s_interactive.png" },
            { id: "s_line_dot", src: "assets/site_map/s_line_dot.png" },
            { id: "s_media design", src: "assets/site_map/s_media design.png" },
            { id: "s_mediahome", src: "assets/site_map/s_mediahome.png" },
            { id: "s_mediahome_title", src: "assets/site_map/s_mediahome_title.png" },
            { id: "s_portfolio", src: "assets/site_map/s_portfolio.png" },
            { id: "s_poster", src: "assets/site_map/s_poster.png" },
            { id: "s_professors", src: "assets/site_map/s_professors.png" },
            { id: "s_sitemap", src: "assets/site_map/s_sitemap.png" },
            { id: "s_students", src: "assets/site_map/s_students.png" },
            { id: "s_videography", src: "assets/site_map/s_videography.png" },
            { id: "s_years", src: "assets/site_map/s_years.png" },
            { id: "site_map_X", src: "assets/site_map/X.png" }
        ]);
        function handleComplete() {
            SceneManager.instance().initBG();
            SceneManager.instance().nextSceneIndex(SceneManager.INTRO);
            if (SceneManager.instance().isLoadedBgm == true) {
                if (SceneManager.instance().bgm === null) {
                    SceneManager.instance().bgm = createjs.Sound.play("background_music", createjs.Sound.INTERRUPT_ANY, 0, 0, -1);
                }
            }
        }
    }
    SceneLoading.prototype.startScene = function () {
    };
    SceneLoading.prototype.playScene = function () {
        this.count++;
        var n = (Math.floor(this.count / 3)) % 29;
        for (var i = 0; i < this.logos.length; i++) {
            if (n == i) {
                this.logos[i].visible = true;
            }
            else {
                this.logos[i].visible = false;
            }
        }
        var progresPrecentage = Math.round(SceneManager.instance().queue.progress * 100);
        var msg = progresPrecentage + "%";
        this.loadProgressLabel.text = msg;
        this.loadProgressLabel.x = 985 - this.loadProgressLabel.getMeasuredWidth();
    };
    SceneLoading.prototype.stopScene = function () {
        this.removeAllChildren();
    };
    return SceneLoading;
})(Scene);
//# sourceMappingURL=SceneLoading.js.map