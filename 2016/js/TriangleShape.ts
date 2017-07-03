/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class TriangleShape extends SineShape {

    constructor() {
        super();
    }
    
    private t: any;
    
    public initTri(pList: any, lList: any, tList: any): void {
        super.init(pList, lList);
        this.t = tList;
    }

    public updateMouseXY(mx: number, my: number): void {

        var r: number = 0;
        for (var i: number = 0; i < this.p.length; i++) {
            r = (this.p[i][0] - mx) * (this.p[i][0] - mx) + (this.p[i][1] - my) * (this.p[i][1] - my);
            //if (r < 3600 && r > 400) {
            if (r < 10000) {
                this.dx[i] += -(mx - this.p[i][0]) / 50 ;
                this.dy[i] += -(my - this.p[i][1]) / 50 ;
            }
        }
    }

    public gradientType: number = 0; 

    private baseX: number = 0;
    public effectType: number = 0;

    public playToLeft(tx: number, time: number): void {
        this.baseX = tx;
        createjs.Tween.get(this).to({ baseX: 0 }, (time) * 1000, createjs.Ease.quintOut).call(handleComplete);


        var THIS: TriangleShape = this;
        function handleComplete() {
            //Tween complete
            THIS.effectType = 0;
        }


        this.effectType = 1;
    }


    public playToRight(tx: number, time: number): void {
        this.baseX = 0;

        createjs.Tween.get(this).to({ baseX: tx }, (time) * 1000, createjs.Ease.quintOut).call(handleComplete);

        var THIS: TriangleShape = this;
        function handleComplete() {
            //Tween complete
            THIS.effectType = 0;
        }

        this.effectType = 2;
    }

    
    //private applyStroke():void
    //{
    //    switch (this.gradientType)
    //    {
    //        case SceneManager.INTERACTIVE:
    //            this.graphics.beginLinearGradientStroke(["#43bbd3", "#44abd1", "#4790cd", "#4a6bc9", "#4b64c8", "#4c53c6", "#4d49c5", "#4f3dc2", "#503ec0", "#5a43b2", "#6045aa", "#6748a0", "#6c4b99", "#ac99c2"],
    //                [0, 1 / 13, 2 / 13, 3 / 13, 4 / 13, 5 / 13, 6 / 13, 7 / 13, 8 / 13, 9 / 13, 10 / 13, 11 / 13 , 12/13, 1], 0, 0, 2361, 981);
    //            break;

    //        case SceneManager.VIDEOGRAPHY:
    //            this.graphics.beginLinearGradientStroke(["#cb98fd", "#d2a3e6", "#d8abd4", "#ddb2c5", "#e0b8bb", "#e3bdad", "#e8c3a3", "#ecc995", "#f2d185", "#f5d47d", "#f9db6f", "#fff4c7"],
    //                [0, 1 / 11, 2 / 11, 3 / 11, 4 / 11, 5 / 11, 6 / 11, 7 / 11, 8 / 11, 9 / 11, 10 / 11, 1], 0, 1276, 2356, 0);
    //            break;

    //        case SceneManager.ANIMATION:
    //            this.graphics.beginLinearGradientStroke(["#54afd7", "#42a7d3", "#45abd2", "#47aed1", "#4ab2cf", "#4db5ce", "#50bacd", "#54becb", "#5dc4c8", "#7cccba", "#92d3b1", "#b2dca3", "#e2e98f"],
    //                [0, 1 / 12, 2 / 12, 3 / 12, 4 / 12, 5 / 12, 6 / 12, 7 / 12, 8 / 12, 9 / 12, 10 / 12, 11 / 12, 1], 0, 1280, 2384, 0);
    //            break;

    //        case SceneManager.CONTENTS:
    //            this.graphics.beginLinearGradientStroke(["#cce2d9", "#b6decf", "#85c8b0", "#6ebda0", "#57b391", "#52b190", "#4eaf92", "#49ad94", "#44ab98", "#3ca89c", "#37a69f", "#2ea2a4", "#279fa8", "#1e9cad", "#42a7d3"],
    //                [0, 1 / 14, 2 / 14, 3 / 14, 4 / 14, 5 / 14, 6 / 14, 7 / 14, 8 / 14, 9 / 14, 10 / 14, 11 / 14, 12 / 14, 12 / 14, 13/14, 1], 0, 0, 2613, 1148);
    //            break;

    //        case SceneManager.POSTER: 
    //            this.graphics.beginLinearGradientStroke([
    //                "#e5fffe", "#dcfffd", "#cbfffd", "#2bffff", "#8ce6eb",
    //                "#5bcedb", "#20b2c9", "#16a4bf", "#45a8c0", "#68abc1",
    //                "#8eaec2", "#a9b1c2", "#d2b4c3", "#e0b5c4", "#e6b5c3",
    //                "#e6b5c3", "#e6b0bf", "#e6adbd", "#e7a9ba", "#e7a6b7",
    //                "#e7a4b5", "#e7a2b4"],
    //                [0, 1 / 21, 2 / 21, 3 / 21, 4 / 21, 5 / 21, 6 / 21, 7 / 21, 8 / 21, 9 / 21, 10 / 21, 11 / 21, 12 / 21,   13/21,14/21,15/21,16/21,17/21,18/21,19/21,20/21, 1], 0, 0, 3883, 0 ); // 723
    //            break;

    //        default:
    //            this.graphics.beginStroke(this.color);
    //            break;
    //    }
        
    //}


//    interactive, animation, videography, contents - x: 2500px y: 1080px
    //poster - x: 2800px y:1080px 


    //private applyStroke(): void {
    //    switch (this.gradientType) {
    //        case SceneManager.INTERACTIVE:
    //            this.graphics.beginLinearGradientStroke([
    //                "#43b9d3",
    //                "#478bcd",
    //                "#4c59c7",
    //                "#4d49c5",
    //                "#503ec0",
    //                "#5440bb",
    //                "#5e44ad",
    //                "#6d4b98",
    //                "#937ab1",
    //                "#bfafce",
    //                "#f6f4f3"
    //                ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.VIDEOGRAPHY:
    //            this.graphics.beginLinearGradientStroke([
    //                "#4951d2",
    //                "#6663c7", 
    //                "#7e73bd",
    //                "#9682b4",
    //                "#9682b4",
    //                "#c49ea2",
    //                "#ebbe93",
    //                "#f3cb90",
    //                "#f8d48f",
    //                "#f8d48f",
    //                "#fff4f2"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.ANIMATION:
    //            this.graphics.beginLinearGradientStroke([
    //                "#ffffff",
    //                "#ccf5ff",
    //                "#aff0ff",
    //                "#84e7ff",
    //                "#4bdcff",
    //                "#29d6ff",
    //                "#4fc0d5",
    //                "#39acca",
    //                "#2066a9",
    //                "#051386", 
    //                "#0000f7"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.CONTENTS:
    //            this.graphics.beginLinearGradientStroke(
    //                [
    //                "#ffffff",
    //                "#ffffff",
    //                "#a6d7c5",
    //                "#75c0a5",
    //                "#59b492",
    //                "#49ad94",
    //                "#42aa98",
    //                "#3ca89c",
    //                "#2ea2a4",
    //                "#259fa9",
    //                "#1a9aaf"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.POSTER:
    //            this.graphics.beginLinearGradientStroke([
    //                "#ffffff",
    //                "#f2cdd6",
    //                "#e9aaba",
    //                "#e7a5b7",
    //                "#e6b6c4",
    //                "#a6b0c2",
    //                "#82adc1",
    //                "#4c7fbf",
    //                "#639fd5",
    //                "#8fdbed",
    //                "#9deef5"
    //                ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2800, 0); // 723
    //            break;

    //        default:
    //            this.graphics.beginStroke(this.color);
    //            break;
    //    }

    //}

    //private applyFill(): void {
    //    switch (this.gradientType) {
    //        case SceneManager.INTERACTIVE:
    //            this.graphics.beginLinearGradientFill([
    //                "#43b9d3",
    //                "#478bcd",
    //                "#4c59c7",
    //                "#4d49c5",
    //                "#503ec0",
    //                "#5440bb",
    //                "#5e44ad",
    //                "#6d4b98",
    //                "#937ab1",
    //                "#bfafce",
    //                "#f6f4f3"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.VIDEOGRAPHY:
    //            this.graphics.beginLinearGradientFill([
    //                "#4951d2",
    //                "#6663c7",
    //                "#7e73bd",
    //                "#9682b4",
    //                "#9682b4",
    //                "#c49ea2",
    //                "#ebbe93",
    //                "#f3cb90",
    //                "#f8d48f",
    //                "#f8d48f",
    //                "#fff4f2"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.ANIMATION:
    //            this.graphics.beginLinearGradientFill([
    //                "#ffffff",
    //                "#ccf5ff",
    //                "#aff0ff",
    //                "#84e7ff",
    //                "#4bdcff",
    //                "#29d6ff",
    //                "#4fc0d5",
    //                "#39acca",
    //                "#2066a9",
    //                "#051386",
    //                "#0000f7"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.CONTENTS:
    //            this.graphics.beginLinearGradientFill(
    //                [
    //                    "#ffffff",
    //                    "#ffffff",
    //                    "#a6d7c5",
    //                    "#75c0a5",
    //                    "#59b492",
    //                    "#49ad94",
    //                    "#42aa98",
    //                    "#3ca89c",
    //                    "#2ea2a4",
    //                    "#259fa9",
    //                    "#1a9aaf"
    //                ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
    //            break;

    //        case SceneManager.POSTER:
    //            this.graphics.beginLinearGradientFill([
    //                "#ffffff",
    //                "#f2cdd6",
    //                "#e9aaba",
    //                "#e7a5b7",
    //                "#e6b6c4",
    //                "#a6b0c2",
    //                "#82adc1",
    //                "#4c7fbf",
    //                "#639fd5",
    //                "#8fdbed",
    //                "#9deef5"
    //            ],
    //                [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2800, 0); // 723
    //            break;

    //        default:
    //            this.graphics.beginFill(this.color);
    //            break;
    //    }

    //}

    private applyStroke(): void {
        switch (this.gradientType) {
            case SceneManager.STUDENTS:
                this.graphics.beginLinearGradientStroke([

                    "#5c404d",
                    "#50384e",
                    "#48334f",
                    "#3f2d4f",
                    "#3b2b50",
                    "#2f2351",
                    "#2b2051",
                    "#241c51",
                    "#1f2051",
                    "#192651",
                    "#0f3251",
                    "#093a51",
                    "#004551",
                    "#2b5f5a",
                    "#3a6357",
                    "#4e5e47",
                    "#565437",
                    "#655733",
                    "#93723a",
                    "#7e5e2d"

                ],
                    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1], 0, 0, 3840, 0);
                break;


            case SceneManager.INTERACTIVE:
                this.graphics.beginLinearGradientStroke([

                    "#598bdc",
                    "#6852c4",
                    "#6d55c7",
                    "#7459cc",
                    "#8864da",
                    "#996de6",
                    "#a775f0",
                    "#b97ffc",
                    "#c89cff",
                    "#d7c2ff",
                    "#e6e9ff"
                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.VIDEOGRAPHY:
                this.graphics.beginLinearGradientStroke([

                    "#4d7eba", 
                    "#857aad",
                    "#998ba2",
                    "#c4b189",
                    "#c4b189",
                    "#ddc67b",
                    "#ddc67b",
                    "#dfc87a",
                    "#dfc87a",
                    "#e1cb87",
                    "#e1cb9f"
                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.ANIMATION:
                this.graphics.beginLinearGradientStroke([
                    "#ffffff",
                    "#ccf5ff",
                    "#aff0ff",
                    "#84e7ff",
                    "#4bdcff",
                    "#29d6ff",
                    "#4fc0d5",
                    "#39acca",
                    "#2066a9",
                    "#051386",
                    "#0000f7"
                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.CONTENTS:
                this.graphics.beginLinearGradientStroke(
                    [

                        "#ffffff",
                        "#fdfdff",
                        "#bce1d4",
                        "#74bfa4",
                        "#55b290",
                        "#50b081",
                        "#4eaf78",
                        "#45b173",
                        "#2eba85",
                        "#1bc295",
                        "#00c3ab"
                    ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.POSTER:
                this.graphics.beginLinearGradientStroke([


                    "#faffff",
                    "#c9fffc",
                    "#9ab1c4",
                    "#b1b1c3",
                    "#dab4c2",
                    "#e0b4c2",
                    "#e6b3c1",
                    "#e7abbb",
                    "#e7a5b6",
                    "#e7a1b3",
                    "#e29fb2"

                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2800, 0); // 723
                break;

            default:
                this.graphics.beginStroke(this.color);
                break;
        }
    }

    private applyFill(): void {
        switch (this.gradientType) {
            case SceneManager.STUDENTS:
                this.graphics.beginLinearGradientFill([

                    "#5c404d",
                    "#50384e",
                    "#48334f",
                    "#3f2d4f",
                    "#3b2b50",
                    "#2f2351",
                    "#2b2051",
                    "#241c51",
                    "#1f2051",
                    "#192651",
                    "#0f3251",
                    "#093a51",
                    "#004551",
                    "#2b5f5a",
                    "#3a6357",
                    "#4e5e47",
                    "#565437",
                    "#655733",
                    "#93723a",
                    "#7e5e2d"

                ],
                    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1], 0, 0, 3840, 0);
                break;

            case SceneManager.INTERACTIVE:
                this.graphics.beginLinearGradientFill([

                    "#598bdc",
                    "#6852c4",
                    "#6d55c7",
                    "#7459cc",
                    "#8864da",
                    "#996de6",
                    "#a775f0",
                    "#b97ffc",
                    "#c89cff",
                    "#d7c2ff",
                    "#e6e9ff"
                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.VIDEOGRAPHY:
                this.graphics.beginLinearGradientFill([

                    "#4d7eba",
                    "#857aad",
                    "#998ba2",
                    "#c4b189",
                    "#c4b189",
                    "#ddc67b",
                    "#ddc67b",
                    "#dfc87a",
                    "#dfc87a",
                    "#e1cb87",
                    "#e1cb9f"
                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.ANIMATION:
                this.graphics.beginLinearGradientFill([
                    "#ffffff",
                    "#ccf5ff",
                    "#aff0ff",
                    "#84e7ff",
                    "#4bdcff",
                    "#29d6ff",
                    "#4fc0d5",
                    "#39acca",
                    "#2066a9",
                    "#051386",
                    "#0000f7"
                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.CONTENTS:
                this.graphics.beginLinearGradientFill(
                    [

                        "#ffffff",
                        "#fdfdff",
                        "#bce1d4",
                        "#74bfa4",
                        "#55b290",
                        "#50b081",
                        "#4eaf78",
                        "#45b173",
                        "#2eba85",
                        "#1bc295",
                        "#00c3ab"
                    ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;

            case SceneManager.POSTER:
                this.graphics.beginLinearGradientFill([


                    "#faffff",
                    "#c9fffc",
                    "#9ab1c4",
                    "#b1b1c3",
                    "#dab4c2",
                    "#e0b4c2",
                    "#e6b3c1",
                    "#e7abbb",
                    "#e7a5b6",
                    "#e7a1b3",
                    "#e29fb2"

                ],
                    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2800, 0); // 723
                break;


            default:
                this.graphics.beginFill(this.color);
                break;
        }
    }


    public getTriangleLength(): number {
        return this.t.length;
    }
    private  selectIndex: number = -1;
    public setSelectIndex(index: number): void {
        this.selectIndex = index;
    }

    public getTriangleCenter(i: number): number[] {
        var x1: number = 0;
        var x2: number = 0;
        var x3: number = 0;
        var y1: number = 0;
        var y2: number = 0;
        var y3: number = 0;

        x1 = this.p[this.t[i][0]][0];
        y1 = this.p[this.t[i][0]][1];

        x2 = this.p[this.t[i][1]][0];
        y2 = this.p[this.t[i][1]][1];

        x3 = this.p[this.t[i][2]][0];
        y3 = this.p[this.t[i][2]][1];

        return [(x1+x2+x3)/3,(y1+y2+y3)/3 ];
    }

    public getTriangle(i: number): number[][] {
        var x1: number = 0;
        var x2: number = 0;
        var x3: number = 0;
        var y1: number = 0;
        var y2: number = 0;
        var y3: number = 0;

        x1 = this.p[this.t[i][0]][0];
        y1 = this.p[this.t[i][0]][1];

        x2 = this.p[this.t[i][1]][0];
        y2 = this.p[this.t[i][1]][1];

        x3 = this.p[this.t[i][2]][0];
        y3 = this.p[this.t[i][2]][1];

        return [[x1,y1],[x2,y2],[x3,y3]];
    }

    public getHitArea(i: number): createjs.Shape {

        var center: number[] = this.getTriangleCenter(i);

        var x1: number = 0;
        var x2: number = 0;
        var x3: number = 0;
        var y1: number = 0;
        var y2: number = 0;
        var y3: number = 0;

        x1 = this.p[this.t[i][0]][0]-center[0];
        y1 = this.p[this.t[i][0]][1] - center[1];

        x2 = this.p[this.t[i][1]][0] - center[0];
        y2 = this.p[this.t[i][1]][1] - center[1];

        x3 = this.p[this.t[i][2]][0] - center[0];
        y3 = this.p[this.t[i][2]][1] - center[1];

        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#000");
        hit.graphics.moveTo(x1, y1);
        hit.graphics.lineTo(x2, y2);
        hit.graphics.lineTo(x3, y3);
        hit.graphics.lineTo(x1, y1);
        hit.graphics.endFill();

        return hit;

    }


    public drawUpdate(): void {
        switch (this.effectType) {
            case 0:
                this.drawUpdateNormal();
                break;
            case 1:
                this.drawUpdateLeft();
                break;
            case 2:
                this.drawUpdateRight();
                break;
        }
    }

    public drawUpdateNormal(): void {
        //for (var i: number = 0; i < this.p.length; i = i + 1) {
        //    if (this.p[i][4] == -1) {
        //        this.rx[i] = this.p[i][0];
        //        this.ry[i] = this.p[i][1];
        //    } else {
        //        this.dx[i] *= 0.9;
        //        this.dy[i] *= 0.9;
        //        this.rx[i] = this.p[i][0] + this.dx[i];
        //        this.ry[i] = this.p[i][1] + this.dy[i];
        //    }
        //}

        for (var i: number = 0; i < this.p.length; i = i + 1) {
                this.dx[i] *= 0.9;
                this.dy[i] *= 0.9;
                this.rx[i] = this.p[i][0] + this.dx[i];
                this.ry[i] = this.p[i][1] + this.dy[i];
        }

        this.graphics.clear();
        this.applyStroke();
        this.graphics.beginFill(this.color);
        this.graphics.setStrokeStyle(this.lineSize);

        for (var k: number = 0; k < this.p.length; k++) {
            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }

        this.graphics.endFill();

        var x1: number = 0;
        var x2: number = 0;
        var x3: number = 0;
        var y1: number = 0;
        var y2: number = 0;
        var y3: number = 0;

        for (var i: number = 0; i < this.l.length; i++) {

            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];

            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];

            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }

        for (var i: number = 0; i < this.t.length; i++) {
            x1 = this.rx[this.t[i][0]];
            y1 = this.ry[this.t[i][0]];

            x2 = this.rx[this.t[i][1]];
            y2 = this.ry[this.t[i][1]];

            x3 = this.rx[this.t[i][2]];
            y3 = this.ry[this.t[i][2]];
            if (this.selectIndex == i) {

                
                this.graphics.beginFill("#6547a4");
                //if (i % 2 == 0) {
                //    this.graphics.beginFill("#85dfff");
                //} else {
                //    this.graphics.beginFill("#d373ff");
                //}
                    
                
            } else {
                //this.graphics.beginFill(this.color);
                this.applyFill();
            }
            
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
            this.graphics.lineTo(x3, y3);
            this.graphics.lineTo(x1, y1);
            this.graphics.endFill();
        }
    }


    public drawUpdateLeft(): void {

        for (var i: number = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }

        this.graphics.clear();
        this.applyStroke();
        this.graphics.beginFill(this.color);
        this.graphics.setStrokeStyle(this.lineSize);

        for (var k: number = 0; k < this.p.length; k++) {
            if (this.rx[k] < this.baseX)
                continue;

            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }

        this.graphics.endFill();

        var x1: number = 0;
        var x2: number = 0;
        var x3: number = 0;
        var y1: number = 0;
        var y2: number = 0;
        var y3: number = 0;

        for (var i: number = 0; i < this.l.length; i++) {
            
            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];

            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];

            if (x1 < this.baseX)
                continue;

            if (x2 < this.baseX)
                continue;

            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }

        for (var i: number = 0; i < this.t.length; i++) {
            x1 = this.rx[this.t[i][0]];
            y1 = this.ry[this.t[i][0]];

            x2 = this.rx[this.t[i][1]];
            y2 = this.ry[this.t[i][1]];

            x3 = this.rx[this.t[i][2]];
            y3 = this.ry[this.t[i][2]];

            if (x1 < this.baseX)
                continue;

            if (x2 < this.baseX)
                continue;


            if (x3 < this.baseX)
                continue;




            if (this.selectIndex == i) {

                this.graphics.beginFill("#6547a4");

                //if (i % 2 == 0) {
                //    this.graphics.beginFill("#85dfff");
                //} else {
                //    this.graphics.beginFill("#d373ff");
                //}


            } else {
                //this.graphics.beginFill(this.color);
                this.applyFill();
            }

            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
            this.graphics.lineTo(x3, y3);
            this.graphics.lineTo(x1, y1);
            this.graphics.endFill();
        }
    }

    public drawUpdateRight(): void {

        for (var i: number = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }

        this.graphics.clear();
        this.applyStroke();
        this.graphics.beginFill(this.color);
        this.graphics.setStrokeStyle(this.lineSize);

        for (var k: number = 0; k < this.p.length; k++) {
            if (this.rx[k] > this.baseX)
                continue;

            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }

        this.graphics.endFill();

        var x1: number = 0;
        var x2: number = 0;
        var x3: number = 0;
        var y1: number = 0;
        var y2: number = 0;
        var y3: number = 0;

        for (var i: number = 0; i < this.l.length; i++) {

            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];

            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];

            if (x1 > this.baseX)
                continue;

            if (x2 > this.baseX)
                continue;

            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }

        for (var i: number = 0; i < this.t.length; i++) {
            x1 = this.rx[this.t[i][0]];
            y1 = this.ry[this.t[i][0]];

            x2 = this.rx[this.t[i][1]];
            y2 = this.ry[this.t[i][1]];

            x3 = this.rx[this.t[i][2]];
            y3 = this.ry[this.t[i][2]];

            if (x1 > this.baseX)
                continue;

            if (x2 > this.baseX)
                continue;

            if (x3 > this.baseX)
                continue;

            if (this.selectIndex == i) {

                this.graphics.beginFill("#6547a4");
                //if (i % 2 == 0) {
                //    this.graphics.beginFill("#85dfff");
                //} else {
                //    this.graphics.beginFill("#d373ff");
                //}

            } else {
                //this.graphics.beginFill(this.color);
                this.applyFill();
            }

            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
            this.graphics.lineTo(x3, y3);
            this.graphics.lineTo(x1, y1);
            this.graphics.endFill();
        }
    }










}

