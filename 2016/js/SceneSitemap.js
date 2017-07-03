var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
        var close_button = new Button(this.getTex("X"), 45, 45);
        close_button.x = 1679;
        close_button.y = 185;
        close_button.on("click", function () { SceneManager.instance().closeSitemap(); });
        close_button.regX = 12;
        close_button.regY = 12;
        close_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }
        });
        close_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }
        });
        this.addChild(close_button);
        var site_map_title = new createjs.Bitmap(this.getTex("s_sitemap"));
        site_map_title.x = 194;
        site_map_title.y = 182;
        this.addChild(site_map_title);
        var text_line_etc = new createjs.Bitmap(this.getTex("s_line_dot"));
        text_line_etc.x = 636;
        text_line_etc.y = 374;
        this.addChild(text_line_etc);
        var media_design_button = new Button(this.getTex("s_media design"), 200, 26);
        media_design_button.x = 386;
        media_design_button.y = 431;
        this.addChild(media_design_button);
        var portfolio_button = new Button(this.getTex("s_portfolio"), 114, 17);
        portfolio_button.x = 689;
        portfolio_button.y = 373;
        this.addChild(portfolio_button);
        var about_media_design_title_button = new Button(this.getTex("s_about media_1"), 221, 14);
        about_media_design_title_button.x = 687;
        about_media_design_title_button.y = 549;
        this.addChild(about_media_design_title_button);
        var interactive_button = new Button(this.getTex("s_interactive"), 159, 51);
        interactive_button.x = 904;
        interactive_button.y = 394;
        interactive_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.INTERACTIVE); });
        this.addChild(interactive_button);
        var animation_button = new Button(this.getTex("s_animation"), 99, 51);
        animation_button.x = 1062;
        animation_button.y = 394;
        animation_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.ANIMATION); });
        this.addChild(animation_button);
        var videography_button = new Button(this.getTex("s_videography"), 125, 51);
        videography_button.x = 1188;
        videography_button.y = 394;
        videography_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.VIDEOGRAPHY); });
        this.addChild(videography_button);
        var contents_button = new Button(this.getTex("s_contents"), 150, 51);
        contents_button.x = 1357;
        contents_button.y = 394;
        contents_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.CONTENTS); });
        this.addChild(contents_button);
        var poster_button = new Button(this.getTex("s_poster"), 159, 51);
        poster_button.x = 1518;
        poster_button.y = 394;
        poster_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.POSTER); });
        this.addChild(poster_button);
        var about_media_design_button = new Button(this.getTex("s_about media_2"), 165, 57);
        about_media_design_button.x = 954;
        about_media_design_button.y = 570;
        about_media_design_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.ABOUT_MEDIA_DESIGN); });
        this.addChild(about_media_design_button);
        var professors_button = new Button(this.getTex("s_professors"), 102, 49);
        professors_button.x = 1170;
        professors_button.y = 570;
        professors_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.PROFESSORS); });
        this.addChild(professors_button);
        var students_button = new Button(this.getTex("s_students"), 91, 49);
        students_button.x = 1353;
        students_button.y = 570;
        students_button.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.STUDENTS); });
        this.addChild(students_button);
        var mdot = new Button(this.getTex("s_17th_mdot"), 90, 49);
        mdot.x = 1502;
        mdot.y = 570;
        mdot.on("click", function () { SceneManager.instance().closeSitemapNext(SceneManager.MDOT_17_1); });
        this.addChild(mdot);
        var s_years = new createjs.Bitmap(this.getTex("s_years"));
        s_years.x = 270;
        s_years.y = 812;
        this.addChild(s_years);
        var s_facebook_titile = new createjs.Bitmap(this.getTex("s_facebook_title"));
        s_facebook_titile.x = 621;
        s_facebook_titile.y = 812;
        this.addChild(s_facebook_titile);
        var s_instagram_title = new createjs.Bitmap(this.getTex("s_instagram_title"));
        s_instagram_title.x = 1013;
        s_instagram_title.y = 812;
        this.addChild(s_instagram_title);
        var s_mediahome_title = new createjs.Bitmap(this.getTex("s_mediahome_title"));
        s_mediahome_title.x = 1407;
        s_mediahome_title.y = 812;
        this.addChild(s_mediahome_title);
        var year2010 = new Button(this.getTex("s_2010"), 35, 21);
        year2010.x = 266;
        year2010.y = 837;
        year2010.on("click", function () { window.open("http://m-dot.net/exhibition/2010/index.html"); });
        this.addChild(year2010);
        var year2011 = new Button(this.getTex("s_2011"), 35, 21);
        year2011.x = 304;
        year2011.y = 837;
        year2011.on("click", function () { window.open("http://m-dot.net/exhibition/2011/index.html"); });
        this.addChild(year2011);
        var year2012 = new Button(this.getTex("s_2012"), 35, 21);
        year2012.x = 347;
        year2012.y = 837;
        year2012.on("click", function () { window.open("http://m-dot.net/exhibition/2012/index.html"); });
        this.addChild(year2012);
        var year2013 = new Button(this.getTex("s_2013"), 35, 21);
        year2013.x = 379;
        year2013.y = 837;
        year2013.on("click", function () { window.open("http://m-dot.net/exhibition/2013/index.html"); });
        this.addChild(year2013);
        var year2014 = new Button(this.getTex("s_2014"), 35, 21);
        year2014.x = 417;
        year2014.y = 837;
        year2014.on("click", function () { window.open("http://m-dot.net/exhibition/2014/index.html"); });
        this.addChild(year2014);
        var year2015 = new Button(this.getTex("s_2015"), 35, 21);
        year2015.x = 455;
        year2015.y = 837;
        year2015.on("click", function () { window.open("http://m-dot.net/exhibition/2015/index.html"); });
        this.addChild(year2015);
        var facebook = new Button(this.getTex("s_facebook"), 215, 25);
        facebook.x = 665;
        facebook.y = 835;
        facebook.on("click", function () { window.open("http://facebook.com/mdot.media"); });
        this.addChild(facebook);
        var instagram = new Button(this.getTex("s_instagram"), 215, 25);
        instagram.x = 1072;
        instagram.y = 835;
        instagram.on("click", function () { window.open("http://instagram.com/mdot.17th"); });
        this.addChild(instagram);
        var homepage = new Button(this.getTex("s_mediahome"), 169, 25);
        homepage.x = 1470;
        homepage.y = 835;
        homepage.on("click", function () { window.open("http://media.dongduk.ac.kr"); });
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