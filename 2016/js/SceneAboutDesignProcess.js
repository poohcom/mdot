var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneAboutDesignProcess = (function (_super) {
    __extends(SceneAboutDesignProcess, _super);
    function SceneAboutDesignProcess() {
        _super.call(this);
        this.index = 0;
        if (SceneAboutDesignProcess._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutDesignProcess._instance = this;
        this.init();
    }
    SceneAboutDesignProcess.instance = function () {
        if (SceneAboutDesignProcess._instance === null) {
            SceneAboutDesignProcess._instance = new SceneAboutDesignProcess();
        }
        return SceneAboutDesignProcess._instance;
    };
    SceneAboutDesignProcess.prototype.init = function () {
        this.group = new createjs.Container;
        this.addChild(this.group);
        var process_line = new createjs.Bitmap(this.getTex("process_line"));
        this.group.addChild(process_line);
        this.process01 = new createjs.Bitmap(this.getTex("process01"));
        this.process01.x = 213;
        this.process01.y = 681;
        this.group.addChild(this.process01);
        this.process02 = new createjs.Bitmap(this.getTex("process02"));
        this.process02.x = 1027;
        this.process02.y = 315;
        this.group.addChild(this.process02);
        this.b2015_10 = new createjs.Bitmap(this.getTex("2015_10"));
        this.b2015_10.x = 224;
        this.b2015_10.y = 851;
        this.group.addChild(this.b2015_10);
        this.b2015_11 = new createjs.Bitmap(this.getTex("2015_11"));
        this.b2015_11.x = 1257;
        this.b2015_11.y = 200;
        this.group.addChild(this.b2015_11);
        this.process03 = new createjs.Bitmap(this.getTex("process03"));
        this.process03.x = 295 + 1920;
        this.process03.y = 411;
        this.group.addChild(this.process03);
        this.process04 = new createjs.Bitmap(this.getTex("process04"));
        this.process04.x = 1101 + 1920;
        this.process04.y = 405;
        this.group.addChild(this.process04);
        this.b2016_03 = new createjs.Bitmap(this.getTex("2016_03"));
        this.b2016_03.x = 525 + 1920;
        this.b2016_03.y = 411;
        this.group.addChild(this.b2016_03);
        this.b2016_04 = new createjs.Bitmap(this.getTex("2016_04"));
        this.b2016_04.x = 1329 + 1920;
        this.b2016_04.y = 296;
        this.group.addChild(this.b2016_04);
        this.center_process = new createjs.Bitmap(this.getTex("center_process"));
        this.center_process.x = 982 + 1920 * 2;
        this.center_process.y = 654 - 319;
        this.group.addChild(this.center_process);
        this.process_ob = new createjs.Bitmap(this.getTex("process_ob"));
        this.process_ob.x = 1736 + 1920 * 1;
        this.process_ob.y = 565;
        this.group.addChild(this.process_ob);
        this.process_left = new Button(this.getTex("process_left"), 40, 20);
        this.process_left.x = 34;
        this.process_left.y = 1080 / 2 - 5;
        this.addChild(this.process_left);
        this.process_light = new Button(this.getTex("process_light"), 40, 20);
        this.process_light.x = 1920 - 34 - 34;
        this.process_light.y = 1080 / 2 - 5;
        this.addChild(this.process_light);
        this.process_left.on("click", function (event) {
            SceneAboutDesignProcess.instance().setPage(SceneAboutDesignProcess.instance().index - 1);
        });
        this.process_light.on("click", function (event) {
            SceneAboutDesignProcess.instance().setPage(SceneAboutDesignProcess.instance().index + 1);
        });
        var title = new createjs.Bitmap(this.getTex("4_2_design_process_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);
    };
    SceneAboutDesignProcess.prototype.setPage = function (index) {
        this.index = index;
        switch (index) {
            case 0:
                this.process01.alpha = 0;
                this.process01.x = 213;
                this.process01.y = 681;
                createjs.Tween.get(this.process01).wait(1 * 1000).to({ alpha: 1, x: 213, y: 649 }, (1.45 - 1) * 1000, createjs.Ease.linear);
                this.process02.alpha = 0;
                this.process02.x = 1027;
                this.process02.y = 315;
                createjs.Tween.get(this.process02).wait(1.48 * 1000).to({ alpha: 1, x: 1027, y: 345 }, (2 - 1.48) * 1000, createjs.Ease.linear);
                this.b2015_10.alpha = 0;
                this.b2015_10.x = 224;
                this.b2015_10.y = 851;
                createjs.Tween.get(this.b2015_10).wait(1.4 * 1000).to({ alpha: 1, x: 224, y: 840 }, (1.8 - 1.4) * 1000, createjs.Ease.linear);
                this.b2015_11.alpha = 0;
                this.b2015_11.x = 1257;
                this.b2015_11.y = 200;
                createjs.Tween.get(this.b2015_11).wait(1.48 * 1000).to({ alpha: 1, x: 1257, y: 236 }, (2.18 - 1.48) * 1000, createjs.Ease.linear);
                this.process_left.visible = false;
                this.process_light.visible = true;
                createjs.Tween.get(this.group).to({ x: 0 }, (1) * 1000, createjs.Ease.quadInOut);
                break;
            case 1:
                this.process03.alpha = 0;
                this.process03.y = 518;
                createjs.Tween.get(this.process03).wait(1 * 1000).to({ alpha: 1, y: 548 }, (1.45 - 1) * 1000, createjs.Ease.linear);
                this.process04.alpha = 0;
                this.process04.y = 405;
                createjs.Tween.get(this.process04).wait(1.48 * 1000).to({ alpha: 1, y: 433 }, (2 - 1.48) * 1000, createjs.Ease.linear);
                this.b2016_03.alpha = 0;
                this.b2016_03.y = 411;
                createjs.Tween.get(this.b2016_03).wait(1.4 * 1000).to({ alpha: 1, y: 435 }, (1.8 - 1.4) * 1000, createjs.Ease.linear);
                this.b2016_04.alpha = 0;
                this.b2016_04.y = 296;
                createjs.Tween.get(this.b2016_04).wait(1.48 * 1000).to({ alpha: 1, y: 320 }, (2.18 - 1.48) * 1000, createjs.Ease.linear);
                this.process_left.visible = true;
                this.process_light.visible = true;
                createjs.Tween.get(this.group).to({ x: -1920 }, (1) * 1000, createjs.Ease.quadInOut);
                break;
            case 2:
                this.process_left.visible = true;
                this.process_light.visible = false;
                createjs.Tween.get(this.group).to({ x: -1920 * 2 }, (1) * 1000, createjs.Ease.quadInOut);
                break;
        }
    };
    SceneAboutDesignProcess.prototype.updateMouseXY = function (mx, my) {
    };
    SceneAboutDesignProcess.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
        this.setPage(0);
    };
    SceneAboutDesignProcess.prototype.stopScene = function () {
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutDesignProcess.prototype.getStopSceneTime = function () {
        return 2;
    };
    SceneAboutDesignProcess._instance = null;
    return SceneAboutDesignProcess;
})(Scene);
//# sourceMappingURL=SceneAboutDesignProcess.js.map