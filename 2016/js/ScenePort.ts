/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class ScenePort extends Scene {


    
    public shape: TriangleShape;
    public group: createjs.Container;


    // 작품 버튼
    public buttonList: PortButton[] = [];

    // 오른쪽 list
    public listText: string[] = null;

    // 오른쪽 list
    public textButtonList: Label[] = [];

    public _listButton: ToggleButton;
    public _listTextGroup: createjs.Container = null;
    public _listGroup: createjs.Container = null;

    public makeList(): void {

        this._listGroup = new createjs.Container();
        this.addChild(this._listGroup);
        this._listGroup.x = 1833;
        this._listGroup.y = 111;
        
        this._listTextGroup = new createjs.Container();
        this._listTextGroup.visible = false;
        this._listGroup.addChild(this._listTextGroup);

        this._listButton = new ToggleButton(this.getTex("list_btn"), this.getTex("list_btn"), null, 92, 31);

        this._listButton.on("mouseover", function (event: createjs.MouseEvent) {
            SceneManager.instance().soundplay();
            
            
        });

        this._listButton.on("click", function (e: createjs.MouseEvent) {
            (<ToggleButton>e.currentTarget).toggle();

            if ((<ToggleButton>e.currentTarget)._check == true) {
                // 나오기
                createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1688 }, 500, createjs.Ease.circIn);

                (<ToggleButton>e.currentTarget).parent.getChildAt(0).visible = true;


            } else {
                createjs.Tween.get((<ToggleButton>e.currentTarget).parent, { loop: false }).to({ x: 1833 }, 500, createjs.Ease.circIn);

                (<ToggleButton>e.currentTarget).parent.getChildAt(0).visible = false;

            }
        });

        this._listGroup.addChild(this._listButton);
        this.makeListTextButton();
    }

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
            button.index = i;

            button.x = 0;
            button.y = startY;
            startY += dy;

            this._listTextGroup.addChild(button);

            this.textButtonList.push(button);
        }
    }

    public getStopSceneTime(): number {
        return 1;
    }


    //public mouseOver(index: number): void {
    //    if (index > 1) {
    //        createjs.Tween.get(this.buttonList[index - 2], { loop: false }).to({ scaleX: 1.6, scaleY: 1.6 }, 500, createjs.Ease.linear);
    //    }

    //    if (index < this.buttonList.length) {
    //        createjs.Tween.get(this.buttonList[index], { loop: false }).to({ scaleX: 1.6, scaleY: 1.6 }, 500, createjs.Ease.linear);
    //    }
    //}

    //public mouseOut(index: number): void {
    //    if (index > 1) {
    //        createjs.Tween.get(this.buttonList[index - 2], { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.linear);
    //    }

    //    if (index < this.buttonList.length) {
    //        createjs.Tween.get(this.buttonList[index], { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.linear);
    //    }
    //}

} 