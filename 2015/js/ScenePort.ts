/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class ScenePort extends Scene {

    public shape: createjs.Shape;
    public g: createjs.Graphics;
    
    public gheight: number = 0;
    public gheight2: number = 0;
    public startX: number = 340;
    public buttonCount: number = 13;
    public gap: number = 20 * 5;

    public buttonList: PortCircleButton[] = [];

    public listText: string[] = null;

    public _listButton: ToggleButton;
    public _listTextGroup: createjs.Container = null; 
    public _listGroup: createjs.Container=null; 

    public drawLines(): void {

        this.count++;
        for (var j: number = 0; j < this.buttonCount; j++) {

            if (this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].updateY();
                //this.buttonList[j].y = this.buttonList[j].y + 2;
            }
        }

        var r: number = this.count / 5;

        this.gheight = Math.sin(r / 29)/4 + 0.75 ;
        this.gheight2 = Math.cos(r / 37);
        this.g.clear();
        this.g.setStrokeStyle(1.5);
        this.g.beginStroke("#FFF");

        this.drawLine(3 + this.gheight2, 3 * this.gheight2, this.gheight, this.gheight * 20 + r / 180, 0);
        this.g.setStrokeStyle(0.5);
        this.drawLine(4 + this.gheight2, 3 * this.gheight2, 3, -this.gheight * 30 + r / 180, 1920);
        this.g.setStrokeStyle(2.0);
        this.drawLine(5 + this.gheight2, 2 + this.gheight2, this.gheight, this.gheight * 20 + r / 180, 1920 *2);
        this.g.setStrokeStyle(1.0);
        this.drawLine(6, 2.5 + this.gheight2, this.gheight2 * 20, this.gheight * 10 + r / 180, 1920 * 3);

    }

    public drawLine(a1: number, a2: number, b1: number, b2: number, delayIndex:number): void {
        this.g.moveTo(0, 540);
        var r: number = 0;
        var c: number = Math.PI / 960;

        for (var i: number = 20; i < 1920 &&  i < this.count * 20 -delayIndex ; i = i + 10) {
            r = c * i;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight);
        }
        if (1920 < this.count * 20 - delayIndex) {

            this.g.lineTo(1920, 540);

        }

        for (var j: number = 0; j < this.buttonCount; j++) {
            var bx: number = this.startX + this.gap * j;
            r = c * bx;

            var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight;

            if (this.buttonList[j].y > by && this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].y = by;
                this.buttonList[j].dy = -5;
            }
        }
    }

    public fx(r: number, a1: number, a2: number, b1: number, b2: number): number {
        return Math.sin(r * a1) * 100 + Math.sin(r * a2) * 50;
    }

    //public makeList(): void {

    //    this._listGroup = new createjs.Container();
    //    this.addChild(this._listGroup);
    //    this._listGroup.x = 1823;
    //    this._listGroup.y = 131;

    //    this._listButton = new ToggleButton(this.getTex("list_off"), this.getTex("list_on"), null, 92, 31);
    //    this._listGroup.addChild(this._listButton);


    //    this._listButton.on("mouseover", function (e: createjs.MouseEvent) {
    //        SceneManager.instance().soundplay();
    //        (<ToggleButton>e.currentTarget).toggle();
    //        (<ToggleButton>e.currentTarget).setHitArea2();
    //        createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1725 }, 500, createjs.Ease.circIn);
    //        (<ToggleButton>e.currentTarget).parent.getChildAt(1).visible = true;
    //    });


    //    this._listButton.on("mouseout", function (e: createjs.MouseEvent) {
    //        (<ToggleButton>e.currentTarget).toggle();
    //        (<ToggleButton>e.currentTarget).setHitArea(92, 31);

    //        createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1823 }, 500, createjs.Ease.circIn);
    //        (<ToggleButton>e.currentTarget).parent.getChildAt(1).visible = false;
    //    });

    //    this._listTextGroup = new createjs.Container();
    //    this._listTextGroup.visible = false;
    //    this._listGroup.addChild(this._listTextGroup);


    //    this.makeListTextButton();

    //}

    public makeList(): void {

        this._listGroup = new createjs.Container();
        this.addChild(this._listGroup);
        this._listGroup.x = 1823;
        this._listGroup.y = 131;


        this._listTextGroup = new createjs.Container();
        this._listTextGroup.visible = false;
        this._listGroup.addChild(this._listTextGroup);



        this._listButton = new ToggleButton(this.getTex("list_off"), this.getTex("list_on"), null, 92, 31);

        this._listButton.on("mouseover", function (event: createjs.MouseEvent) {
            SceneManager.instance().soundplay();


        });


        this._listButton.on("click", function (e: createjs.MouseEvent) {
            (<ToggleButton>e.currentTarget).toggle();

            if ((<ToggleButton>e.currentTarget)._check == true) {
                // 나오기
                createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1725 }, 500, createjs.Ease.circIn);

                (<ToggleButton>e.currentTarget).parent.getChildAt(0).visible = true;


            } else {
                createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1823 }, 500, createjs.Ease.circIn);

                (<ToggleButton>e.currentTarget).parent.getChildAt(0).visible = false;

            }
        });

        this._listGroup.addChild(this._listButton);
        this.makeListTextButton();

    }

    public textButtonList: Label[] = [];
    
    public makeListTextButton(): void {
     
        var startY: number = 44;
        for (var i: number = 0; i < this.listText.length; i++) {
            var dy: number = 25;
            var line: number = this.listText[i].indexOf("\n");
            if (line > -1) {
                dy = 43;
            }

            var button: Label = new Label();
            button.setText(this.listText[i]);

            button.x = 25;
            button.y = startY;
            startY += dy;
            
            this._listTextGroup.addChild(button);
            
            this.textButtonList.push(button);
        }
        // 1823
        //1725.131
        //this._listButton.hitW = 200;
        //this._listButton.hitH = startY;
    }


    public mouseOver(index: number): void {
        if (index > 1) {
            createjs.Tween.get(this.buttonList[index - 2], { loop: false }).to({ scaleX: 1.6, scaleY: 1.6 }, 500, createjs.Ease.linear);
        }

        if (index < this.buttonList.length ) {
            createjs.Tween.get(this.buttonList[index], { loop: false }).to({ scaleX: 1.6, scaleY: 1.6 }, 500, createjs.Ease.linear);
        }
    }

    public mouseOut(index: number): void {
        if (index > 1) {
            createjs.Tween.get(this.buttonList[index - 2], { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.linear);
        }

        if (index < this.buttonList.length) {
            createjs.Tween.get(this.buttonList[index], { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.linear);
        }
    }

} 