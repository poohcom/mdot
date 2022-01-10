/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "PIXI"
const external_PIXI_namespaceObject = PIXI;
;// CONCATENATED MODULE: ./output/Config.js
class Config {
    static get SCREEN_WIDTH() {
        return Config._SCREEN_WIDTH;
    }
    static get SCREEN_HEIGHT() {
        return Config._SCREEN_HEIGHT;
    }
}
// 2 : 3
//public static SCREEN_WIDTH: number = 224;
//public static SCREEN_HEIGHT: number = 336;
//public static GAME_WIDTH: number = 224;
//public static GAME_HEIGHT: number = 336;
//public static SCREEN_WIDTH: number = 224;
//public static SCREEN_HEIGHT: number = 320;
//public static SCREEN_WIDTH: number = 480;
//public static SCREEN_HEIGHT: number = 640;
//public static SCREEN_WIDTH: number = 420;
//public static SCREEN_HEIGHT: number = 640;
//public static SCREEN_WIDTH: number = window.innerWidth;
//public static SCREEN_HEIGHT: number = window.innerHeight;
Config._SCREEN_WIDTH = 640;
Config._SCREEN_HEIGHT = 1136;

//# sourceMappingURL=Config.js.map
;// CONCATENATED MODULE: ./output/Scene.js

class Scene extends external_PIXI_namespaceObject.Container {
    constructor() {
        super();
    }
    startScene() {
    }
    stopScene() {
    }
    dispose() {
    }
    update(t) {
    }
}

//# sourceMappingURL=Scene.js.map
;// CONCATENATED MODULE: ./output/DataManager.js

class DataManager {
    constructor() {
        if (DataManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        DataManager._instance = this;
        this.loader = new external_PIXI_namespaceObject.Loader();
    }
    static instance() {
        if (DataManager._instance === null) {
            DataManager._instance = new DataManager();
        }
        return DataManager._instance;
    }
    Init() {
        this.sheet = this.loader.resources["images/spritesheet.json"].spritesheet;
    }
}
DataManager._instance = null;

//# sourceMappingURL=DataManager.js.map
;// CONCATENATED MODULE: ./output/Image.js


class Image extends external_PIXI_namespaceObject.Sprite {
    constructor(name) {
        super(DataManager.instance().sheet.textures[name]);
        super.anchor.set(0.5);
        // Opt-in to interactivity
    }
}

//# sourceMappingURL=Image.js.map
;// CONCATENATED MODULE: ./output/Scene18.js



class Scene18 extends Scene {
    constructor() {
        super();
        this.image = new Image("layer-4.png");
        this.image.x = Config.SCREEN_WIDTH / 2;
        // 기준 밑에서 
        //this.image.y = Config.SCREEN_HEIGHT - 50 - Config.SCREEN_WIDTH - 50;
        this.image.y = Config.SCREEN_HEIGHT / 2;
        super.addChild(this.image);
    }
    startScene() {
    }
    stopScene() {
    }
    dispose() {
    }
    update(t) { }
}

//# sourceMappingURL=Scene18.js.map
;// CONCATENATED MODULE: ./output/Button.js


class Button extends external_PIXI_namespaceObject.Sprite {
    constructor(name) {
        super(DataManager.instance().sheet.textures[name]);
        super.anchor.set(0.5);
        // Opt-in to interactivity
        super.interactive = true;
        // Shows hand cursor
        super.buttonMode = true;
        // Pointers normalize touch and mouse
        super.on('pointerdown', this.onClickDown);
        super.on('pointerup', this.onClickUp);
        super.on('pointerupoutside', this.onClickUp);
    }
    DelayActive(t) {
        this.visible = false;
        setTimeout(() => { this.visible = true; }, t);
    }
    onClickDown() {
        super.scale.x = 1.25;
        super.scale.y = 1.25;
    }
    onClickUp() {
        super.scale.x = 1;
        super.scale.y = 1;
    }
}

//# sourceMappingURL=Button.js.map
;// CONCATENATED MODULE: ./output/TextBox.js


class TextBox extends external_PIXI_namespaceObject.Sprite {
    constructor(text) {
        super(DataManager.instance().sheet.textures["rounded-rectangle-4.png"]);
        this.time = 0;
        super.anchor.set(0.5);
        let sp = new external_PIXI_namespaceObject.Sprite(DataManager.instance().sheet.textures["rounded-rectangle-4-copy.png"]);
        sp.anchor.set(0.5);
        super.addChild(sp);
        this.time = 0;
        this.text = text;
        //this.textArea = new PIXI.Text(text, {
        this.textArea = new external_PIXI_namespaceObject.Text("", {
            fontFamily: "MaplestoryLight",
            fontSize: 40,
            fill: "#ffffff",
            stroke: "black",
            strokeThickness: 0,
            letterSpacing: 0,
            align: 'center'
        });
        this.textArea.anchor.set(0.5);
        this.textArea.x = 0;
        this.textArea.y = 0;
        super.addChild(this.textArea);
    }
    init(text) {
        this.time = 0;
        this.text = text;
    }
    Update(t) {
        if (this.time == 0) {
            this.time = t / 200;
        }
        let l = Math.min(this.text.length, t / 200 - this.time);
        l = Math.max(0, l);
        this.textArea.text = this.text.substring(0, Math.floor(l));
    }
}

//# sourceMappingURL=TextBox.js.map
;// CONCATENATED MODULE: ./output/Scene20.js







class Scene20 extends Scene {
    constructor() {
        super();
        this.index = 0;
        this.image = new Image("layer-4.png");
        this.image.x = Config.SCREEN_WIDTH / 2;
        this.image.y = Config.SCREEN_HEIGHT / 2;
        super.addChild(this.image);
        this.dandiimage = new Image("dandi.png");
        this.dandiimage.x = 386 + 212 / 2;
        this.dandiimage.y = 593 + 234 / 2;
        super.addChild(this.dandiimage);
        this.TextBox1 = new TextBox("괜찮아?\n많이 안다쳤어?");
        this.TextBox1.x = Config.SCREEN_WIDTH / 2;
        this.TextBox1.y = 100 + 234 / 2;
        super.addChild(this.TextBox1);
        this.startButton = new Button("vector-smart-object.png");
        this.startButton.x = Config.SCREEN_WIDTH / 2;
        this.startButton.y = 882 + 43;
        this.textButton = new external_PIXI_namespaceObject.Text("응 괜찮아! 너는 괜찮아?", {
            fontFamily: "MaplestoryBold",
            fontWeight: "bold",
            fontSize: 40,
            fill: "#ffffff",
            stroke: "black",
            strokeThickness: 0,
            letterSpacing: 0
        });
        this.startButton.DelayActive(2500);
        this.textButton.anchor.set(0.5);
        //this.textButton.x= Config.SCREEN_WIDTH / 2;
        //this.textButton.y=882+43;
        var THIS = this;
        this.startButton.on('pointerup', function () {
            THIS.index++;
            if (THIS.index == 1) {
                THIS.textButton.text = "어휴..도대체 무슨 일이야?";
                THIS.startButton.DelayActive(2000);
                THIS.TextBox1.init("응 나는 괜찮아!");
            }
            else if (THIS.index == 2) {
                THIS.textButton.text = "(??: 저기요! 거기 누구요!)";
                THIS.TextBox1.init("맞게 잘 도착한 것 같은데…\n대평마을이 옆 부족에게\n침략을 당했나봐\n많이 어수선 하네…");
                THIS.startButton.DelayActive(10000);
            }
            else {
                SceneManager.instance().SetScene(SCENE.SCENE25);
            }
        });
        //startButton.on('pointerdown',this.onClickStartButton);   
        this.startButton.addChild(this.textButton);
        super.addChild(this.startButton);
    }
    startScene() {
    }
    stopScene() {
    }
    dispose() {
    }
    update(t) {
        this.dandiimage.y = 593 + 234 / 2 + 30.0 * Math.sin(t / 1000 * Math.PI);
        this.TextBox1.Update(t);
    }
}

//# sourceMappingURL=Scene20.js.map
;// CONCATENATED MODULE: ./output/Scene25.js






class Scene25 extends Scene {
    constructor() {
        super();
        this.index = 0;
        this.image = new Image("layer-9.png");
        this.image.x = Config.SCREEN_WIDTH / 2;
        this.image.y = Config.SCREEN_HEIGHT / 2;
        super.addChild(this.image);
        this.dandiimage = new Image("layer-10.png");
        this.dandiimage.x = 386 + 212 / 2;
        this.dandiimage.y = 593 + 234 / 2;
        super.addChild(this.dandiimage);
        this.TextBox1 = new TextBox("새로운 친구구나!\만나서 반가워.");
        this.TextBox1.x = Config.SCREEN_WIDTH / 2;
        this.TextBox1.y = 100 + 234 / 2;
        super.addChild(this.TextBox1);
        this.startButton = new Button("vector-smart-object.png");
        this.startButton.x = Config.SCREEN_WIDTH / 2;
        this.startButton.y = 882 + 43;
        this.textButton = new external_PIXI_namespaceObject.Text("안녕! 반가워", {
            fontFamily: "MaplestoryBold",
            fontWeight: "bold",
            fontSize: 40,
            fill: "#ffffff",
            stroke: "black",
            strokeThickness: 0,
            letterSpacing: 0
        });
        this.startButton.DelayActive(3000);
        this.textButton.anchor.set(0.5);
        //this.textButton.x= Config.SCREEN_WIDTH / 2;
        //this.textButton.y=882+43;
        var THIS = this;
        this.startButton.on('pointerup', function () {
            THIS.index++;
            if (THIS.index == 1) {
                THIS.textButton.text = "이런, 내가 도와줄까?";
                THIS.startButton.DelayActive(12000);
                THIS.TextBox1.init("오랜만에 손님이 왔는데…\n어제 침략이 있었어.\n그래서 대접할 것이 없네.\n내가 아끼던 돌칼도 잃어버렸어");
            }
            else if (THIS.index == 2) {
                THIS.textButton.text = "좋아, 한번 찾아볼게!";
                THIS.startButton.DelayActive(7000);
                THIS.TextBox1.init("그래줄 수 있어?\n그럼 돌칼 좀 찾아줄래?\n분명 이 주변에 있을거야!");
            }
            else if (THIS.index == 3) {
                THIS.textButton.text = "알았어!";
                THIS.startButton.DelayActive(9000);
                THIS.TextBox1.init("농사꾼 친구의 돌칼을\n찾아주기로 했구나!\n아래 모양을 잘 보고\n돌칼을 찾아보자!");
            }
            else {
                //SceneManager.instance().SetScene(SCENE.SCENE20);
            }
        });
        //startButton.on('pointerdown',this.onClickStartButton);   
        this.startButton.addChild(this.textButton);
        super.addChild(this.startButton);
    }
    startScene() {
    }
    stopScene() {
    }
    dispose() {
    }
    update(t) {
        this.dandiimage.y = 593 + 234 / 2 + 30.0 * Math.sin(t / 1000 * Math.PI);
        this.TextBox1.Update(t);
    }
}

//# sourceMappingURL=Scene25.js.map
;// CONCATENATED MODULE: ./output/SceneManager.js




var SCENE;
(function (SCENE) {
    SCENE[SCENE["SCENE18"] = 0] = "SCENE18";
    SCENE[SCENE["SCENE20"] = 1] = "SCENE20";
    SCENE[SCENE["SCENE25"] = 2] = "SCENE25";
})(SCENE || (SCENE = {}));
class SceneManager {
    constructor() {
        this.root = null;
        this.scene = null;
        if (SceneManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneManager._instance = this;
        this.root = new external_PIXI_namespaceObject.Container();
    }
    static instance() {
        if (SceneManager._instance === null) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    }
    Init() {
        this.SetScene(SCENE.SCENE20);
    }
    update(t) {
        if (this.scene != null) {
            this.scene.update(t);
        }
    }
    SetScene(s) {
        if (this.scene != null) {
            this.scene.stopScene();
            this.root.removeChild(this.scene);
        }
        switch (s) {
            case SCENE.SCENE18:
                this.scene = new Scene18();
                break;
            case SCENE.SCENE20:
                this.scene = new Scene20();
                break;
            case SCENE.SCENE25:
                this.scene = new Scene25();
                break;
        }
        this.scene.startScene();
        this.root.addChildAt(this.scene, 0);
    }
}
SceneManager._instance = null;

//# sourceMappingURL=SceneManager.js.map
;// CONCATENATED MODULE: ./output/app.js




//import { WebfontLoaderPlugin } from "pixi-webfont-loader";
external_PIXI_namespaceObject.Loader.registerPlugin(external_PIXI_namespaceObject.WebfontLoaderPlugin);
//PIXI.Loader.registerPlugin(WebfontLoaderPlugin);
const app = new external_PIXI_namespaceObject.Application({ backgroundColor: 0xF9FAE8,
    width: Config.SCREEN_WIDTH,
    height: Config.SCREEN_HEIGHT,
    antialias: true
    //resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);
//DataManager.instance().loader.add("images/spritesheet.json").add("MaplestoryBold","images/MaplestoryBold.ttf").load(setup);
DataManager.instance().loader
    .add({ name: "MaplestoryBold", url: "./images/MaplestoryBold.ttf" })
    .add({ name: "MaplestoryLight", url: "./images/MaplestoryLight.ttf" })
    .add("images/spritesheet.json").load(setup);
function setup() {
    DataManager.instance().Init();
    app.stage.addChild(SceneManager.instance().root);
    app.ticker.add((delta) => {
        // rotate the container!
        // use delta to create frame-independent transform
        //SceneManager.instance().update(delta);
        SceneManager.instance().update(performance.now());
        //background.rotation -= 0.01 * delta;
    });
    SceneManager.instance().Init();
}
// npm run pack
//# sourceMappingURL=app.js.map
/******/ })()
;