/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class PortButton extends createjs.Container {

    public shape: TriangleShape;
    public group:createjs.Container;

    public isMouseOver: boolean = false;
    public title: createjs.Text;
    public studentName: createjs.Text;
    public index: number = -1;

    constructor(shape: TriangleShape, imageOrUrl: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string, hit: createjs.Shape, title: string, studentName: string, index: number) {
        super();
        this.shape = shape;

        this.index = index;
        this.hitArea = hit;

        this.group = new createjs.Container;
        this.group.x = 61;
        this.group.y = -173;
        this.group.visible = false;
        this.addChild(this.group);

        var img: createjs.Bitmap = new createjs.Bitmap(imageOrUrl);
        img.x = 5;
        img.y = 5;
        this.group.addChild(img);

        var bg: Rect = new Rect();
        bg.init(510, 110, "#FFF", true);
        bg.alpha = 0.18;
        this.group.addChild(bg);

        this.title = new createjs.Text(title, "normal 21px yoon", "#ffffff");
        var w: number = this.title.getMeasuredWidth();
        var h: number = this.title.getMeasuredHeight();

        this.title.x = 128;
        this.title.y = 17;

        this.group.addChild(this.title);

        this.studentName = new createjs.Text(studentName, "normal 17px yoon", "#ffffff");
        this.studentName.lineHeight = 25;

        var w1: number = this.studentName.getMeasuredWidth();
        var h1: number = this.studentName.getMeasuredHeight();
        
        this.studentName.x = 128;
        this.studentName.y = 58;

        this.group.addChild(this.studentName);

        this.on("mouseover", function (event: createjs.MouseEvent) {
            (<LabelStudent>event.currentTarget).setMouseover();
        });

        this.on("mouseout", function (event: createjs.MouseEvent) {
            (<LabelStudent>event.currentTarget).setMouseout();
        });
    }
    public setHitScale(scale:number):void
    {
        this.hitArea.scaleX = scale;
        this.hitArea.scaleX = scale;
    }

    public setMouseover(): void {
        SceneManager.instance().soundplay();
        this.isMouseOver = true;
        this.group.visible = true;
        this.shape.setSelectIndex(this.index);
    }


    public setMouseout(): void {
        this.group.visible = false;
        this.isMouseOver = false;
        this.shape.setSelectIndex(-1);
    }




}




