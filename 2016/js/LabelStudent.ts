/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class LabelStudent extends createjs.Container {

    public isMouseOver: boolean = false;
    public studentName: createjs.Text;
    public email: createjs.Text;
    public bg: createjs.Shape;
    public index: number = -1;
    constructor(hit: createjs.Shape, studentName: string, email:string ,index:number) {
        super();
        this.index = index;
        this.hitArea = hit;

        this.studentName = new createjs.Text(studentName, "normal 14px yoon", "#ffffff");
        var w: number = this.studentName.getMeasuredWidth();
        var h: number = this.studentName.getMeasuredHeight();

        this.studentName.x = -w/2;
        this.studentName.y = -h/2;

        this.addChild(this.studentName);

        this.email = new createjs.Text(email, "normal 14px yoon", "#ffffff");
      
        var w1: number = this.email.getMeasuredWidth();
        var h1: number = this.email.getMeasuredHeight();


        this.bg = new createjs.Shape();
        this.bg.graphics.beginFill("#000").drawRect(0, 0, w1 + 10, 25);
        this.bg.x = -w1 / 2 - 5;
        this.bg.y = -25 / 2 + 30;
        this.bg.alpha = 0.6;
        this.bg.visible = false;
        this.addChild(this.bg);

        this.email.x = -w1 / 2;
        this.email.y = -h1 / 2 + 30;
        this.email.visible = false;

        this.addChild(this.email);

        this.on("mouseover", function (event: createjs.MouseEvent) {
            (<LabelStudent>event.currentTarget).setMouseover();
            SceneAboutStudents.instance().updateOver((<LabelStudent>event.currentTarget).index);
        });

        this.on("mouseout", function (event: createjs.MouseEvent) {
            (<LabelStudent>event.currentTarget).setMouseout();
            SceneAboutStudents.instance().updateOver(-1);
        });
    }

    public setMouseover(): void {
        this.isMouseOver = true;
        this.email.visible = true;
        this.bg.visible = true;
        
    }         


    public setMouseout(): void {
        this.email.visible = false;
        this.bg.visible = false;
        this.isMouseOver = false;
    }




}




