/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class PortCircleButton extends createjs.Container {

    public _base: createjs.Bitmap=null;
    public _imageOrUrl: createjs.Bitmap;
    public _center1: number;
    public _center2: number;
    public index: number;
    public isMouseOver: boolean = false;

    public _text1: string = null;
    public _text2: string = null;

    public labelGroup: createjs.Container = null;
    public label1: createjs.Text = null;
    public label2: createjs.Text = null;
    
    public dy: number = 0;

    public _base_string: string = null;

    constructor(imageOrUrl: HTMLImageElement, base: string, center1: number, center2: number, text1: string, text2: string) {
        super();

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 36 * 2, 36 * 2);
        hit.x = -36;
        hit.y = -36;
        this.hitArea = hit;

        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = center1;
        this._imageOrUrl.regY = center1;
        this._imageOrUrl.scaleX = this._imageOrUrl.scaleY = 0.1 * (Math.floor(Math.random() * 10000) % 4) + 1;
        this.addChild(this._imageOrUrl);

        this._base_string = base;

        //this._base = new createjs.Bitmap(base);
        //this._base.visible = false;
        //this._base.regX = center2;
        //this._base.regY = center2;

        //this.addChild(this._base);
        this.index = 0;

        //this.regX = center1;
        //this.regY = center1;
        this._center1 = center1;
        this._center2 = center2;

        this._text1 = text1;
        this._text2 = text2;

        this.labelGroup = new createjs.Container();
        this.labelGroup.x = center2 + 10;
        this.labelGroup.y = -center2/2;
        this.labelGroup.visible = false;
        this.addChild(this.labelGroup);

        var h: number = 26;

        if (text1 === null){
        } else {
            
            var line: number = text1.indexOf("\n");
            if (line > -1) {
                h = 50;

                this.label1 = new createjs.Text(text1.substr(0, line), "bold 16px yoon", "#ffffff");
                this.label1.y = 0;
                this.labelGroup.addChild(this.label1);

                var label4: createjs.Text = new createjs.Text(text1.substr(line + 1), "bold 16px yoon", "#ffffff");
                label4.y = 24;
                this.labelGroup.addChild(label4);
            } else {

                this.label1 = new createjs.Text(text1, "bold 16px yoon", "#ffffff");
                this.labelGroup.addChild(this.label1);
            }
        }


        if (text2 === null) {
            this.labelGroup.y = 0;
        } else {
            var line2: number = text2.indexOf("\n");

            if (line2> -1)
            {
                this.label2 = new createjs.Text(text2.substr(0,line2) , "normal 13px yoon", "#ffffff");
                this.label2.y = h;
                this.labelGroup.addChild(this.label2);

                var label3: createjs.Text = new createjs.Text(text2.substr(line2 + 1), "normal 13px yoon", "#ffffff");
                label3.y = h + 20;
                this.labelGroup.addChild(label3);
            }else{

                this.label2 = new createjs.Text(text2, "normal 13px yoon", "#ffffff");
                this.label2.y = h;
                this.labelGroup.addChild(this.label2);

                
            }
        }


        this.on("mouseover", function (event: createjs.MouseEvent) {
            (<PortCircleButton>event.currentTarget)._imageOrUrl.visible = false;
            (<PortCircleButton>event.currentTarget).createBase();
            (<PortCircleButton>event.currentTarget)._base.visible = true;

            (<PortCircleButton>event.currentTarget)._base.scaleX = 0;
            (<PortCircleButton>event.currentTarget)._base.scaleY = 0;

            createjs.Tween.get((<PortCircleButton>event.currentTarget)._base, { loop: false }).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.linear);

            //(<PortCircleButton>event.currentTarget).regX = (<PortCircleButton>event.currentTarget)._center2;
            //(<PortCircleButton>event.currentTarget).regY = (<PortCircleButton>event.currentTarget)._center2;
            (<PortCircleButton>event.currentTarget).isMouseOver = true;

            (<PortCircleButton>event.currentTarget).labelGroup.visible = true;
            SceneManager.instance().soundplay();
        });

        this.on("mouseout", function (event: createjs.MouseEvent) {
            (<PortCircleButton>event.currentTarget)._imageOrUrl.visible = true;
            if ((<PortCircleButton>event.currentTarget)._base === null) {
            } else {
                (<PortCircleButton>event.currentTarget)._base.visible = false;
            }
            //(<PortCircleButton>event.currentTarget).regX = (<PortCircleButton>event.currentTarget)._center1;
            //(<PortCircleButton>event.currentTarget).regY = (<PortCircleButton>event.currentTarget)._center1;
            (<PortCircleButton>event.currentTarget).isMouseOver = false;
            (<PortCircleButton>event.currentTarget).labelGroup.visible = false;
        });
    }

    public createBase(): void {
        if (this._base === null) {

            this._base = new createjs.Bitmap(this._base_string);
            this._base.visible = false;
            this._base.regX = this._center2;
            this._base.regY = this._center2;

            this.addChild(this._base);

        } else {
        }
    }

    public updateY(): void {
        this.dy = Math.min(2, this.dy + 0.5);
        this.y = this.y + this.dy;
    }



}  

