import * as THREE from 'three';
import { Config } from "./Config";
import { Scene } from "./Scene";
import { SceneGame } from "./SceneGame";
import { SceneGame2 } from "./SceneGame2";
import { Scene360 } from "./Scene360";
import { SceneCar } from "./SceneCar";
import { Debug } from "./Debug";
var SCENE;
(function (SCENE) {
    SCENE[SCENE["SceneGame"] = 0] = "SceneGame";
    SCENE[SCENE["SceneGame2"] = 1] = "SceneGame2";
    SCENE[SCENE["Scene360"] = 2] = "Scene360";
    SCENE[SCENE["SceneCar"] = 3] = "SceneCar";
    SCENE[SCENE["SceneCar2"] = 4] = "SceneCar2";
})(SCENE || (SCENE = {}));
class SceneManager {
    constructor() {
        this.scene = new Scene();
        this.clock = new THREE.Clock();
        this.StartTime = 0;
        if (SceneManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneManager._instance = this;
        window.addEventListener('keydown', (e) => { this.onKeyDown(e); }, false);
        window.addEventListener('keyup', (e) => { this.onKeyUp(e); }, false);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(Config.SCREEN_WIDTH, Config.SCREEN_HEIGHT);
        const container = document.getElementById('container');
        ////////////////////////////////////////////////////////////////////
        if (container != null) {
            container.appendChild(this.renderer.domElement);
            container.style.touchAction = 'none';
            container.addEventListener('pointerdown', (event) => { this.onPointerDown(event); }, false);
            container.addEventListener('pointermove', (event) => { this.onPointerMove(event); }, false);
            container.addEventListener('pointerup', (event) => { this.onPointerUp(event); }, false);
        }
        window.addEventListener('resize', () => { this.onWindowResize(); }, false);
        this.update();
    }
    static instance() {
        if (SceneManager._instance === null || SceneManager._instance == undefined) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    }
    SetScene(s) {
        Debug.Log("scene:" + SCENE[s]);
        this.scene.close();
        switch (s) {
            case SCENE.SceneGame:
                this.scene = new SceneGame();
                break;
            case SCENE.SceneGame2:
                this.scene = new SceneGame2();
                break;
            case SCENE.Scene360:
                this.scene = new Scene360();
                break;
            case SCENE.SceneCar:
                this.scene = new SceneCar();
                break;
        }
    }
    update() {
        requestAnimationFrame(() => { this.update(); });
        const delta = this.clock.getDelta();
        const timer = Date.now() * 0.01;
        this.scene.render((Date.now() - this.StartTime) * 0.001);
    }
    onWindowResize() {
        this.scene.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    setMouseCoords(x, y) {
        this.scene.setMouseCoords(x, y);
    }
    onPointerDown(event) {
        this.scene.onPointerDown(event);
    }
    onPointerMove(event) {
        this.scene.onPointerMove(event);
    }
    onPointerUp(event) {
        this.scene.onPointerUp(event);
    }
    onKeyDown(event) {
        this.scene.onKeyDown(event);
    }
    onKeyUp(event) {
        this.scene.onKeyUp(event);
    }
    // 이벤트 받기
    OnClick(event, func = null) {
        const targetButton = document.getElementById(event);
        targetButton.addEventListener('click', () => {
            if (func == null) {
                this.scene.onClick(event);
            }
            else {
                func();
            }
        });
    }
}
export { SceneManager, SCENE };
