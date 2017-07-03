/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class Label extends createjs.Container
{

    //public _imageOrUrl: HTMLImageElement;
    

    constructor() {
        super();
    }

    public setText(text: string): void {

        var list: string[] = text.split("\n");
        
        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 169, list.length * 18);
        this.hitArea = hit;
        
        for (var i: number = 0; i < list.length; i++)
        {
            var button: createjs.Text = new createjs.Text(list[i], "normal 13px yoon", "#ffffff");
            button.y = i*18;
            this.addChild(button);
        }
    }

    public setText2(text: string): void {

        var list: string[] = text.split("\n");

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 39, list.length * 18);
        this.hitArea = hit;

        for (var i: number = 0; i < list.length; i++) {
            var button: createjs.Text = new createjs.Text(list[i], "normal 13px yoon", "#ffffff");
            button.y = i * 18;
            this.addChild(button);
        }
    }

}  

