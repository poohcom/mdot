/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class Scene extends createjs.Container implements IScene {

    //public assets: createjs.LoadQueue;
    //private loadProgressLabel: createjs.Text = null;

    constructor() {
        super();
        //this.loadProgressLabel = new createjs.Text("", "bold 100px yoon", "#ffffff");
        //this.loadProgressLabel.x = 860;
        //this.loadProgressLabel.y = 440;
        //this.addChild(this.loadProgressLabel);

        //this.assets = new createjs.LoadQueue();
        //this.assets.on("complete", handleComplete, this);
        //this.assets.on("progress", handleProgress, this);
        //function handleComplete() {
        //    this.init();

        //    this.removeChild(this.loadProgressLabel);
        //}

        //function handleProgress() {

        //    var progresPrecentage: number = Math.round(this.assets.progress * 100);

        //    this.loadProgressLabel.text = progresPrecentage + "%";
        //    //this.stage.update();
        //}        

    }
    // 생성
    public init(): void {
        this.startScene();
    }

    private dispose(): void {
        ///this.assets.removeAll();
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
        //return <HTMLImageElement> this.assets.getResult(name);

        return <HTMLImageElement> SceneManager.instance().queue.getResult(name);


    }

    public getLabel(name: string): createjs.DOMElement {
        var dom: createjs.DOMElement = new createjs.DOMElement(document.getElementById(name));
        dom.htmlElement.hidden = false;
        return new createjs.DOMElement(document.getElementById(name));
    }

    public showLabel(dom: createjs.DOMElement): void {
        dom.htmlElement.hidden = false;

        //dom.htmlElement.parentNode.removeChild(dom.htmlElement);
    }

    public removeLabel(dom: createjs.DOMElement): void {
        dom.htmlElement.hidden = true;

        //dom.htmlElement.parentNode.removeChild(dom.htmlElement);
    }

    public circleList: Circle[] = [];
    public count: number = 0;
    public initBubble(color:string): void {

        for (var i: number = 0; i < 30; i++) {
            var circle: Circle = new Circle();
            circle.initColor(2 + 3 * Math.random(), 0.2 + 0.2 * Math.random(), color);
            circle.x = 1520 * Math.random() + 200;
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }
    }

    public updateBubble(): void {
        for (var i: number = 0; i < this.circleList.length ; i++) {

            this.circleList[i].x = this.circleList[i].x + Math.sin(this.count / 90 * i / 3);

            this.circleList[i].y = this.circleList[i].y - 1;
            if (this.circleList[i].y < 0) this.circleList[i].y = 1080;

        }

    }
} 