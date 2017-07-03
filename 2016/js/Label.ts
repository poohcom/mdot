/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class Label extends createjs.Container
{
    constructor() {
        super();
    }

    public index: number = 0;

    public setText(text: string): void {

        var list: string[] = text.split("\n");
        
        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 169, list.length * 18);
        this.hitArea = hit;
        
        for (var i: number = 0; i < list.length; i++)
        {
            var button: createjs.Text = new createjs.Text(list[i], "normal 16px yoon", "#ffffff");
            button.x = 200 - button.getMeasuredWidth();

            button.y = i*18;
            this.addChild(button);
        }
    }

    public setText2(text: string): void {

        var list: string[] = text.split("\n");

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 39, list.length * 18);
        
        for (var i: number = 0; i < list.length; i++) {
            var button: createjs.Text = new createjs.Text(list[i], "normal 16px yoon", "#ffffff");
            button.x = - button.getMeasuredWidth();
            hit.x = - button.getMeasuredWidth();
            button.y = i * 18;
            this.addChild(button);
        }

        this.hitArea = hit;

    }

}  

