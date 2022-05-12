//import { IScene } from "./IScene.ts";
//class Scene extends PIXI.Container implements IScene
import { Debug } from "./Debug";
class Scene {
    // public loading:boolean =true;
    // public loader:PIXI.Loader= new PIXI.Loader();  
    // constructor() {
    //     super();
    // }
    close() {
    }
    render(timer) {
    }
    onWindowResize() {
    }
    setMouseCoords(x, y) {
    }
    onPointerMove(event) {
    }
    onPointerUp(event) {
    }
    onPointerDown(event) {
    }
    onKeyDown(event) {
        Debug.Log("onKeyDown");
    }
    onKeyUp(event) {
        Debug.Log("onKeyUp");
    }
    onClick(event) {
        Debug.Log("onClick:" + event);
    }
}
export { Scene };
