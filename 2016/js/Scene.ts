/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class Scene extends createjs.Container implements IScene {

    constructor() {
        super();
    }
    // 생성
    public init(): void {
        this.startScene();
    }

    private dispose(): void {
        ///this.assets.removeAll();
    }


    public getStopSceneTime(): number {
        return 1;
    }

    // 연출 시작
    public startScene(): void {
    }

    // 종료 연출
    public stopScene(): void {
    }

    // 마무리
    public clearScene(): void {
        this.dispose();
    }

    public playScene(): void {
    }

    public getTex(name: string): HTMLImageElement {
        return <HTMLImageElement> SceneManager.instance().queue.getResult(name);
        //return <HTMLImageElement>SceneManager.instance().queue.getResult("X");
        
    }

    //public getLabel(name: string): createjs.DOMElement {
    //    var dom: createjs.DOMElement = new createjs.DOMElement(document.getElementById(name));
    //    dom.htmlElement.hidden = false;
    //    return new createjs.DOMElement(document.getElementById(name));
    //}

    public getLabel(name: string): createjs.DOMElement {
        var dom: createjs.DOMElement = new createjs.DOMElement(document.getElementById(name));
        dom.htmlElement.hidden = false;
        return dom;
    }


    public showLabel(dom: createjs.DOMElement): void {
        dom.htmlElement.hidden = false;
    }

    public removeLabel(dom: createjs.DOMElement): void {
        dom.htmlElement.hidden = true;
    }

    public updateMouseXY(mx: number, my: number): void {
    }

    public count: number = 0;


    public scrollXY(x1: number, y1: number, x2: number, y2: number, time: number) {
        
        this.x = x1;
        this.y = y1;
        createjs.Tween.get(this).to({ x: x2, y: y2 }, (time) * 1000, createjs.Ease.quadInOut);
        //createjs.Tween.get(this).to({ x: x1, y: y2 }, (time) * 1000, createjs.Ease.linear );
    }

    public createText(type:number, text:string, px:number, py:number): void
    {
        var label: createjs.Text;
        switch (type) {
            case Config.FONT_TYPE_BOLD:
                label = new createjs.Text(text, "bold 15px yoon", "#ffffff");
                break;
            case Config.FONT_TYPE_NORMAL:
                label = new createjs.Text(text, "normal 15px yoon", "#b9b9b9");
                break;
        }
        label.x = px;
        label.y = py;
        this.addChild(label);
    }

} 