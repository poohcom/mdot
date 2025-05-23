﻿/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

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

    public about_media_design_button: MenuButton;
    public portfolio_button: MenuButton;

    public group_top_menu: createjs.Container;
    public sound_button: ToggleButton;
    public sound_off: ToggleButton;

    public site_map_button: ToggleButton;
    public information_button: ToggleButton;

    public group_about_media_design: createjs.Container;

    public leftAboutMediaDesignButton: MenuButton;
    public leftProfessorsButton: MenuButton;
    public leftStudentsButton: MenuButton;
    public left17thMdotButton: MenuButton;

    public leftConceptButton: MenuButton;
    public leftProcessButton: MenuButton;
    public leftCommitee: MenuButton;

    public group_portfolo: createjs.Container;
    public group_portfolo_child: createjs.Container;
    

    public leftInteractiveButton: MenuButton;
    public leftAnimationButton: MenuButton;
    public leftVideographyButton: MenuButton;
    public leftContentseButton: MenuButton;
    public leftPosterButton: MenuButton;

    public leftLogoButton: ToggleButton;
    

    public init(): void {


        this.group_top_menu = new createjs.Container();
        this.addChild(this.group_top_menu);

        this.sound_button = new ToggleButton(this.getTex("music_icon"), this.getTex("music_icon"), this.getTex("music_icon"), 30, 30);
        this.sound_button.x = 1793;
        this.sound_button.y = 28;

        this.sound_button.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().isResumeBGM = false;

            if (SceneManager.instance().bgm != null) {
                SceneManager.instance().bgm.paused = true;
            }
            MenuBar.instance().sound_button.visible = false;
            MenuBar.instance().sound_off.visible = true;


        });
        this.group_top_menu.addChild(this.sound_button);

        this.sound_off = new ToggleButton(this.getTex("mute_icon"), this.getTex("mute_icon"), this.getTex("mute_icon"), 30, 30);
        this.sound_off.x = 1793;
        this.sound_off.y = 28;
        this.sound_off.visible = false;

        this.sound_off.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().isResumeBGM = true;
            if (SceneManager.instance().bgm != null) {

                SceneManager.instance().bgm.paused = false;
            }
            MenuBar.instance().sound_button.visible = true;
            MenuBar.instance().sound_off.visible = false;
        }
        );
        this.group_top_menu.addChild(this.sound_off);


        this.site_map_button = new ToggleButton(this.getTex("sitemap_icon"), this.getTex("sitemap_icon"), this.getTex("sitemap_icon_mouseover"), 30, 30);
        this.site_map_button.x = 1837;
        this.site_map_button.y = 28;
        this.site_map_button.on("click", function (event: createjs.MouseEvent) {
            SceneManager.instance().popupSitemap();
        });
        this.group_top_menu.addChild(this.site_map_button);


        this.information_button = new ToggleButton(this.getTex("info_icon"), this.getTex("info_icon"), this.getTex("info_icon_mouseover"), 30, 30);
        this.information_button.x = 1883;
        this.information_button.y = 28;
        this.information_button.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().popupInfomation();
        });
        this.group_top_menu.addChild(this.information_button);


        this.leftLogoButton = new ToggleButton(this.getTex("m_dot_logo"), this.getTex("m_dot_logo"), this.getTex("m_dot_logo"), 100, 30);
        this.leftLogoButton.x = 52;
        this.leftLogoButton.y = 47;
        this.leftLogoButton.visible = false;
        this.leftLogoButton.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.MAIN);
        });
        this.group_top_menu.addChild(this.leftLogoButton);



        



        /////////
        this.group_about_media_design = new createjs.Container;
        
        this.addChild(this.group_about_media_design);

        ///////
        this.leftAboutMediaDesignButton = new MenuButton(
            this.getTex("about-md_before"),
            this.getTex("about-md_after_1"),
            this.getTex("about-md_after_1"),
            this.getTex("about-md_after_2")
            );

        this.leftAboutMediaDesignButton.x = 45;
        this.leftAboutMediaDesignButton.y = 113.5;


        this.leftAboutMediaDesignButton.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.ABOUT_MEDIA_DESIGN);

        });

        this.group_about_media_design.addChild(this.leftAboutMediaDesignButton);

        //////////////////////////////////
        this.leftProfessorsButton = new MenuButton(
            this.getTex("professors_before"),
            this.getTex("professors_after_1"),
            this.getTex("professors_after_1"),
            this.getTex("professors_after_2")
        );

        this.leftProfessorsButton.x = 45;
        this.leftProfessorsButton.y = 163.5;
        this.group_about_media_design.addChild(this.leftProfessorsButton);


        this.leftProfessorsButton.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.PROFESSORS);

        });
        //////////////////////////////////
        this.leftStudentsButton = new MenuButton(
            this.getTex("students_before"),
            this.getTex("students_after_1"),
            this.getTex("students_after_1"),
            this.getTex("students_after_2")
        );

        this.leftStudentsButton.x = 45;
        this.leftStudentsButton.y = 218.5;

        this.leftStudentsButton.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.STUDENTS);

        });

        this.group_about_media_design.addChild(this.leftStudentsButton);


        //////////////////////////////////
        this.left17thMdotButton = new MenuButton(
            this.getTex("17th-mdot_before"),
            this.getTex("17th-mdot_after_1"),
            this.getTex("17th-mdot_after_1"),
            this.getTex("17th-mdot_after_2")
        );

        this.left17thMdotButton.x = 45;
        this.left17thMdotButton.y = 272;

        

        this.left17thMdotButton.on("click", function (event: createjs.MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.MDOT_17_1);
            MenuBar.instance().leftConceptButton.visible = true;
            MenuBar.instance().leftConceptButton.setCheck(true);

            MenuBar.instance().leftProcessButton.visible = true;
            MenuBar.instance().leftProcessButton.setCheck(false);

            MenuBar.instance().leftCommitee.visible = true;

            MenuBar.instance().leftCommitee.setCheck(false);

        });

        this.group_about_media_design.addChild(this.left17thMdotButton);

        this.leftConceptButton = new MenuButton(
            this.getTex("17th-mdot_concept_before"),
            this.getTex("17th-mdot_concept_after"),
            this.getTex("17th-mdot_concept_after"),
           null
        );

        this.leftConceptButton.x = 72;
        this.leftConceptButton.y = 324;


        this.leftConceptButton.on("click", function (event: createjs.MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.MDOT_17_1);
            MenuBar.instance().leftConceptButton.visible = true;
            MenuBar.instance().leftConceptButton.setCheck(true);
            MenuBar.instance().leftProcessButton.visible = true;
            MenuBar.instance().leftProcessButton.setCheck(false);
            MenuBar.instance().leftCommitee.visible = true;
            MenuBar.instance().leftCommitee.setCheck(false);

        });
        this.group_about_media_design.addChild(this.leftConceptButton);
        /////////////////////
        this.leftProcessButton = new MenuButton(
            this.getTex("17th-mdot_process_before"),
            this.getTex("17th-mdot_process_after"),
            this.getTex("17th-mdot_process_after"),
            null
        );

        this.leftProcessButton.x = 72;
        this.leftProcessButton.y = 347;

        this.leftProcessButton.on("click", function (event: createjs.MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.MDOT_17_2);
            MenuBar.instance().leftConceptButton.visible = true;
            MenuBar.instance().leftConceptButton.setCheck(false);
            MenuBar.instance().leftProcessButton.visible = true;
            MenuBar.instance().leftProcessButton.setCheck(true);
            MenuBar.instance().leftCommitee.visible = true;
            MenuBar.instance().leftCommitee.setCheck(false);

        });
        this.group_about_media_design.addChild(this.leftProcessButton);
        ////

        this.leftCommitee = new MenuButton(
            this.getTex("17th-mdot_committee_before"),
            this.getTex("17th-mdot_committee_after"),
            this.getTex("17th-mdot_committee_after"),
            null
        );

        this.leftCommitee.x = 72;
        this.leftCommitee.y = 369;

        this.leftCommitee.on("click", function (event: createjs.MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.MDOT_17_3);
            MenuBar.instance().leftConceptButton.visible = true;
            MenuBar.instance().leftConceptButton.setCheck(false);
            MenuBar.instance().leftProcessButton.visible = true;
            MenuBar.instance().leftProcessButton.setCheck(false);
            MenuBar.instance().leftCommitee.visible = true;
            MenuBar.instance().leftCommitee.setCheck(true);

        });

        this.group_about_media_design.addChild(this.leftCommitee);

        this.hide17Th();

        


        ////////////////////////////////////
        this.portfolio_button = new MenuButton(
            this.getTex("portfolio-btn"),
            this.getTex("portfolio-btn"),
            null,
            null
        );
        this.portfolio_button.x = 30;
        this.portfolio_button.y = 1042;

        this.portfolio_button.on("click", function (event: MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.MAIN);
            //MenuBar.instance().setAbout(false);
            //MenuBar.instance().group_portfolo.visible = true;
            //MenuBar.instance().group_about_media_design.visible = false;

        });

        this.group_about_media_design.addChild(this.portfolio_button);
        
        //////////////
        /////////
        this.group_portfolo = new createjs.Container;
        this.addChild(this.group_portfolo);

        this.group_portfolo_child = new createjs.Container;
        this.group_portfolo.addChild(this.group_portfolo_child);

        ///////
        this.leftInteractiveButton = new MenuButton(
            this.getTex("interactive_before"),
            this.getTex("interactive_after_1"),
            this.getTex("interactive_after_1"),
            this.getTex("interactive_after_2")
        );
        this.leftInteractiveButton.x = 45;
        this.leftInteractiveButton.y = 114;

        this.leftInteractiveButton.on("click", function (event: MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.INTERACTIVE, false);
        });

        this.group_portfolo_child.addChild(this.leftInteractiveButton);

        //

        ///
        this.leftAnimationButton = new MenuButton(
            this.getTex("animation_before"),
            this.getTex("animation_after_1"),
            this.getTex("animation_after_1"),
            this.getTex("animation_after_2")
        );
        this.leftAnimationButton.x = 45;
        this.leftAnimationButton.y = 169;

        this.leftAnimationButton.on("click", function (event: MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.ANIMATION, false);
        });


        this.group_portfolo_child.addChild(this.leftAnimationButton);

        this.leftVideographyButton = new MenuButton(
            this.getTex("videography_before"),
            this.getTex("videography_after_1"),
            this.getTex("videography_after_1"),
            this.getTex("videography_after_2")
        );
        this.leftVideographyButton.x = 45;
        this.leftVideographyButton.y = 220;

        this.leftVideographyButton.on("click", function (event: MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.VIDEOGRAPHY, false);
        });


        this.group_portfolo_child.addChild(this.leftVideographyButton);

        this.leftContentseButton = new MenuButton(
            this.getTex("contents_before"),
            this.getTex("contents_after_1"),
            this.getTex("contents_after_1"),
            this.getTex("contents_after_2")
        );
        this.leftContentseButton.x = 45;
        this.leftContentseButton.y = 274;

        this.leftContentseButton.on("click", function (event: MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.CONTENTS, false);
        });

        this.group_portfolo_child.addChild(this.leftContentseButton);

        this.leftPosterButton = new MenuButton(
            this.getTex("poster_before"),
            this.getTex("poster_after_1"),
            this.getTex("poster_after_1"),
            this.getTex("poster_after_2")
        );
        this.leftPosterButton.x = 45;
        this.leftPosterButton.y = 326;
        this.leftPosterButton.on("click", function (event: MouseEvent) {
            SceneManager.instance().nextSceneIndex(SceneManager.POSTER, false);
        });

        this.group_portfolo_child.addChild(this.leftPosterButton);

        //////////////////////////////////
        this.about_media_design_button = new MenuButton(
            this.getTex("mediadesign_btn"),
            this.getTex("mediadesign_btn"),
            null,
            null
        );
        this.about_media_design_button.x = 30;
        this.about_media_design_button.y = 1042;

        this.about_media_design_button.on("click", function (event: MouseEvent) {

            SceneManager.instance().nextSceneIndex(SceneManager.ABOUT_MEDIA_DESIGN);
            //MenuBar.instance().setAbout(true);
        });

        this.group_portfolo.addChild(this.about_media_design_button);

        this.group_portfolo.visible = false;
        this.group_about_media_design.visible = false;
        this.modeVisible = 0;
    }

    private modeVisible:number = 0;

    public static NO_MENU: number = 0; // 로고만 출력
    public static ABOUT_MEDIA: number = 1;
    public static PORTFOLO: number = 2;
    public static NO_SUB_MENU: number = 4;

    public setMenu(value: number): void {
        switch (value) {
            case MenuBar.NO_MENU:
                this.group_portfolo.visible = false;
                this.group_about_media_design.visible = false;
                this.leftLogoButton.visible = true;
                this.group_portfolo_child.visible = true
                
                break;
            case MenuBar.ABOUT_MEDIA:
                this.group_portfolo.visible = false;
                this.group_portfolo_child.visible = false;
                this.group_about_media_design.visible = true;
                this.leftLogoButton.visible = true;
                break;

            case MenuBar.PORTFOLO:
                this.group_portfolo.visible = true;
                this.group_portfolo_child.visible = true;
                this.group_about_media_design.visible = false;
                this.leftLogoButton.visible = true;
                break;
            case MenuBar.NO_SUB_MENU:
                this.group_portfolo.visible = true;
                this.group_about_media_design.visible = false;
                this.group_portfolo_child.visible = false;
                this.leftLogoButton.visible = true;
                break;
        }
        
        this.modeVisible = value;
    }

    //public setAbout(flag: boolean): void {

    //    this.group_portfolo.visible = !flag;
    //    this.group_portfolo_child.visible = !flag;
        
    //    this.group_about_media_design.visible = flag;
        

    //    // 1 = about 2 port
    //    this.modeVisible = (flag==true) ? 1:2;
    //}

    public hide17Th(): void {
        this.leftConceptButton.visible = false;
        this.leftProcessButton.visible = false;
        this.leftCommitee.visible = false;
    }

    public hideForPopup(): void {
        this.group_about_media_design.visible = false;
        this.group_portfolo.visible = false;
        this.group_portfolo_child.visible = false;
    }

    public show(): void {

        this.setMenu(this.modeVisible);

        //if (this.modeVisible == 1) {
        //    this.setAbout(true);
        //}
        //if (this.modeVisible == 2) {
        //    this.setAbout(false);
        //}

        //if (this.modeVisible == 4) {
        //    this.setAbout(false);
        //    this.setMenu(4);

        //}
    }




    public setMenuButton(select: number): void {

        this.leftAboutMediaDesignButton.setCheck(SceneManager.ABOUT_MEDIA_DESIGN == select);
        this.leftProfessorsButton.setCheck (SceneManager.PROFESSORS == select);
        this.leftStudentsButton.setCheck(SceneManager.STUDENTS == select);
        this.left17thMdotButton.setCheck(SceneManager.MDOT_17_1 == select);
        this.leftConceptButton.setCheck(SceneManager.MDOT_17_1 == select);
        this.leftProcessButton.setCheck(SceneManager.MDOT_17_2 == select);
        this.leftCommitee.setCheck(SceneManager.MDOT_17_3 == select);
        this.leftInteractiveButton.setCheck(SceneManager.INTERACTIVE == select);
        this.leftAnimationButton.setCheck(SceneManager.ANIMATION == select);
        this.leftVideographyButton.setCheck(SceneManager.VIDEOGRAPHY == select);
        this.leftContentseButton.setCheck(SceneManager.CONTENTS == select);
        this.leftPosterButton.setCheck(SceneManager.POSTER == select);
        

    }

} 