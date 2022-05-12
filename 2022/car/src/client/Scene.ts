//import { IScene } from "./IScene.ts";

//class Scene extends PIXI.Container implements IScene
import { Debug } from "./Debug";
class Scene
{

    // public loading:boolean =true;
    // public loader:PIXI.Loader= new PIXI.Loader();  

    // constructor() {
    //     super();
    // }

    public close():void
    {

    }

    public render(timer: number):void
    {
    }

    public onWindowResize():void {

    }

    public setMouseCoords( x:any, y:any ) {
    }

    public onPointerMove( event:any ) {
    }

    public onPointerUp( event:any ) {
    }

    public onPointerDown( event:any ) {
    }
    

    public onKeyDown(event:any):void
    {
        Debug.Log("onKeyDown");
    }

    public onKeyUp(event:any):void
    {
        Debug.Log("onKeyUp");
    }

    public onClick(event:string):void
    {
        Debug.Log("onClick:"+event);
    }

} 


export {Scene}