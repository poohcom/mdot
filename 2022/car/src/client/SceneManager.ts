import * as THREE from 'three';
import { Config } from "./Config";
import { Scene } from "./Scene";
import { SceneGame } from "./SceneGame";
import { SceneGame2 } from "./SceneGame2";
import { Scene360 } from "./Scene360";
import { SceneCar } from "./SceneCar";
import { Debug } from "./Debug";

enum SCENE {
    SceneGame, 
    SceneGame2,
    Scene360, 
    SceneCar, 
    SceneCar2,
}

class SceneManager {
    private static _instance: SceneManager;

    public scene: Scene = new Scene();

    private clock = new THREE.Clock();
    private StartTime : number =0;

    public renderer:THREE.WebGLRenderer;

    public static instance(): SceneManager {

        if (SceneManager._instance === null || SceneManager._instance == undefined) {
            SceneManager._instance = new SceneManager();
        }

        return SceneManager._instance;
    }

    constructor() {
        if (SceneManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneManager._instance = this;

        window.addEventListener('keydown', (e) => { this.onKeyDown(e); }, false);
        window.addEventListener('keyup', (e) => { this.onKeyUp(e); }, false);


        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(Config.SCREEN_WIDTH, Config.SCREEN_HEIGHT);

        
        const container: HTMLElement | null = document.getElementById('container');

        ////////////////////////////////////////////////////////////////////
        if (container != null) {
            container.appendChild(this.renderer.domElement);
            container.style.touchAction = 'none';
            container.addEventListener('pointerdown', (event) => { this.onPointerDown(event); }, false);
            container.addEventListener('pointermove', (event) => { this.onPointerMove(event); }, false);
            container.addEventListener('pointerup', (event) => { this.onPointerUp(event); }, false);
        }
        
        window.addEventListener('resize', () => { this.onWindowResize() }, false);

        this.update();
    }

    public SetScene(s: SCENE): void {
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

    public update(): void {

        requestAnimationFrame(() => { this.update(); });

        const delta = this.clock.getDelta();
        const timer = Date.now() * 0.01;
        
        this.scene.render((Date.now() - this.StartTime) * 0.001);

    }
    public onWindowResize(): void {

        this.scene.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    public setMouseCoords(x: any, y: any) {
        this.scene.setMouseCoords(x, y);
    }

    public onPointerDown(event: any) {
        this.scene.onPointerDown(event);
    }

    public onPointerMove(event: any) {
        this.scene.onPointerMove(event);
    }

    public onPointerUp(event: any) {
        this.scene.onPointerUp(event);
    }

    public onKeyDown(event: any): void {
        this.scene.onKeyDown(event);
    }
    public onKeyUp(event: any): void {
        this.scene.onKeyUp(event);
    }

    // 이벤트 받기
    public OnClick(event: string, func:any=null): void {
        
        const targetButton: any = document.getElementById(event);
        targetButton.addEventListener('click', () => {

            if (func==null)
            {
                this.scene.onClick(event);
            }else{
                func();
            }
        });
    }
}

export { SceneManager, SCENE }