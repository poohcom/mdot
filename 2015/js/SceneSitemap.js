/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneSitemap = (function (_super) {
    __extends(SceneSitemap, _super);
    function SceneSitemap() {
        _super.call(this);
        if (SceneSitemap._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneSitemap._instance = this;
        this.init();
    }
    SceneSitemap.instance = function () {
        if (SceneSitemap._instance === null) {
            SceneSitemap._instance = new SceneSitemap();
        }
        return SceneSitemap._instance;
    };
    SceneSitemap.prototype.init = function () {
        var close_button = new Button(this.getTex("site_close_button"), 49, 45);
        close_button.x = 1785;
        close_button.y = 90;
        close_button.on("click", function () {
            SceneManager.instance().closeSitemap(SceneManager.instance().popup_index);
        });
        this.addChild(close_button);
        var site_map_title = new createjs.Bitmap(this.getTex("site_map_title"));
        site_map_title.x = 267;
        site_map_title.y = 140;
        this.addChild(site_map_title);
        var text_line_etc = new createjs.Bitmap(this.getTex("site_text_line_etc"));
        text_line_etc.x = 224;
        text_line_etc.y = 370;
        this.addChild(text_line_etc);
        var about_media_design_button = new Button(this.getTex("site_about_media_design_button"), 165, 57);
        about_media_design_button.x = 979;
        about_media_design_button.y = 601;
        about_media_design_button.on("click", function () {
            SceneManager.instance().closeSitemap(10);
        });
        this.addChild(about_media_design_button);
        var professors_button = new Button(this.getTex("site_professors_button"), 102, 49);
        professors_button.x = 1221;
        professors_button.y = 602;
        professors_button.on("click", function () {
            SceneManager.instance().closeSitemap(11);
        });
        this.addChild(professors_button);
        var students_button = new Button(this.getTex("site_students_button"), 91, 49);
        students_button.x = 1420;
        students_button.y = 602;
        students_button.on("click", function () {
            SceneManager.instance().closeSitemap(12);
        });
        this.addChild(students_button);
        var sixttenth_mdot = new Button(this.getTex("site_sixttenth_mdot"), 90, 49);
        sixttenth_mdot.x = 1601;
        sixttenth_mdot.y = 602;
        sixttenth_mdot.on("click", function () {
            SceneManager.instance().closeSitemap(13);
        });
        this.addChild(sixttenth_mdot);
        var interactive_button = new Button(this.getTex("site_interactive_button"), 159, 51);
        interactive_button.x = 872;
        interactive_button.y = 397;
        interactive_button.on("click", function () {
            SceneManager.instance().closeSitemap(20);
        });
        this.addChild(interactive_button);
        var animation_button = new Button(this.getTex("site_animation_button"), 99, 51);
        animation_button.x = 1086;
        animation_button.y = 397;
        animation_button.on("click", function () {
            SceneManager.instance().closeSitemap(21);
        });
        this.addChild(animation_button);
        var videography_button = new Button(this.getTex("site_videography_button"), 125, 51);
        videography_button.x = 1241;
        videography_button.y = 397;
        videography_button.on("click", function () {
            SceneManager.instance().closeSitemap(22);
        });
        this.addChild(videography_button);
        var contents_button = new Button(this.getTex("site_contents_button"), 150, 51);
        contents_button.x = 1400;
        contents_button.y = 397;
        contents_button.on("click", function () {
            SceneManager.instance().closeSitemap(23);
        });
        this.addChild(contents_button);
        var poster_button = new Button(this.getTex("site_poster_button"), 159, 51);
        poster_button.x = 1605;
        poster_button.y = 397;
        poster_button.on("click", function () {
            SceneManager.instance().closeSitemap(24);
        });
        this.addChild(poster_button);
        //////////////////////
        var exhibition_information_button = new Button(this.getTex("site_exhibition_information_button"), 118, 40);
        exhibition_information_button.x = 510;
        exhibition_information_button.y = 494;
        exhibition_information_button.on("click", function () {
            SceneManager.instance().closeSitemap(1);
        });
        this.addChild(exhibition_information_button);
        ///////////////
        var year2010 = new Button(this.getTex("year2010"), 39, 21);
        year2010.x = 428;
        year2010.y = 848;
        year2010.on("click", function () {
            window.open("http://m-dot.net/exhibition/2010/index.html");
        });
        this.addChild(year2010);
        var year2011 = new Button(this.getTex("year2011"), 39, 21);
        year2011.x = 478;
        year2011.y = 848;
        year2011.on("click", function () {
            window.open("http://m-dot.net/exhibition/2011/index.html");
        });
        this.addChild(year2011);
        var year2012 = new Button(this.getTex("year2012"), 39, 21);
        year2012.x = 528;
        year2012.y = 848;
        year2012.on("click", function () {
            window.open("http://m-dot.net/exhibition/2012/index.html");
        });
        this.addChild(year2012);
        var year2013 = new Button(this.getTex("year2013"), 39, 21);
        year2013.x = 578;
        year2013.y = 848;
        year2013.on("click", function () {
            window.open("http://m-dot.net/exhibition/2013/index.html");
        });
        this.addChild(year2013);
        var year2014 = new Button(this.getTex("year2014"), 39, 21);
        year2014.x = 628;
        year2014.y = 848;
        year2014.on("click", function () {
            window.open("http://m-dot.net/exhibition/2014/index.html");
        });
        this.addChild(year2014);
        var facebook = new Button(this.getTex("facebook"), 215, 25);
        facebook.x = 821;
        facebook.y = 848;
        facebook.on("click", function () {
            window.open("http://facebook.com/mdot.media");
        });
        this.addChild(facebook);
        var homepage = new Button(this.getTex("homepage"), 169, 25);
        homepage.x = 1212;
        homepage.y = 848;
        homepage.on("click", function () {
            window.open("http://media.dongduk.ac.kr");
        });
        this.addChild(homepage);
    };
    SceneSitemap.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
    };
    SceneSitemap.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    };
    SceneSitemap._instance = null;
    return SceneSitemap;
})(Scene);
//# sourceMappingURL=SceneSitemap.js.map