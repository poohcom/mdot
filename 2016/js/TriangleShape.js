var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TriangleShape = (function (_super) {
    __extends(TriangleShape, _super);
    function TriangleShape() {
        _super.call(this);
        this.gradientType = 0;
        this.baseX = 0;
        this.effectType = 0;
        this.selectIndex = -1;
    }
    TriangleShape.prototype.initTri = function (pList, lList, tList) {
        _super.prototype.init.call(this, pList, lList);
        this.t = tList;
    };
    TriangleShape.prototype.updateMouseXY = function (mx, my) {
        var r = 0;
        for (var i = 0; i < this.p.length; i++) {
            r = (this.p[i][0] - mx) * (this.p[i][0] - mx) + (this.p[i][1] - my) * (this.p[i][1] - my);
            if (r < 10000) {
                this.dx[i] += -(mx - this.p[i][0]) / 50;
                this.dy[i] += -(my - this.p[i][1]) / 50;
            }
        }
    };
    TriangleShape.prototype.playToLeft = function (tx, time) {
        this.baseX = tx;
        createjs.Tween.get(this).to({ baseX: 0 }, (time) * 1000, createjs.Ease.quintOut).call(handleComplete);
        var THIS = this;
        function handleComplete() {
            THIS.effectType = 0;
        }
        this.effectType = 1;
    };
    TriangleShape.prototype.playToRight = function (tx, time) {
        this.baseX = 0;
        createjs.Tween.get(this).to({ baseX: tx }, (time) * 1000, createjs.Ease.quintOut).call(handleComplete);
        var THIS = this;
        function handleComplete() {
            THIS.effectType = 0;
        }
        this.effectType = 2;
    };
    TriangleShape.prototype.applyStroke = function () {
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
                ], [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1], 0, 0, 3840, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;
            case SceneManager.CONTENTS:
                this.graphics.beginLinearGradientStroke([
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2800, 0);
                break;
            default:
                this.graphics.beginStroke(this.color);
                break;
        }
    };
    TriangleShape.prototype.applyFill = function () {
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
                ], [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1], 0, 0, 3840, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
                break;
            case SceneManager.CONTENTS:
                this.graphics.beginLinearGradientFill([
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2500, 0);
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
                ], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0, 0, 2800, 0);
                break;
            default:
                this.graphics.beginFill(this.color);
                break;
        }
    };
    TriangleShape.prototype.getTriangleLength = function () {
        return this.t.length;
    };
    TriangleShape.prototype.setSelectIndex = function (index) {
        this.selectIndex = index;
    };
    TriangleShape.prototype.getTriangleCenter = function (i) {
        var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        x1 = this.p[this.t[i][0]][0];
        y1 = this.p[this.t[i][0]][1];
        x2 = this.p[this.t[i][1]][0];
        y2 = this.p[this.t[i][1]][1];
        x3 = this.p[this.t[i][2]][0];
        y3 = this.p[this.t[i][2]][1];
        return [(x1 + x2 + x3) / 3, (y1 + y2 + y3) / 3];
    };
    TriangleShape.prototype.getTriangle = function (i) {
        var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        x1 = this.p[this.t[i][0]][0];
        y1 = this.p[this.t[i][0]][1];
        x2 = this.p[this.t[i][1]][0];
        y2 = this.p[this.t[i][1]][1];
        x3 = this.p[this.t[i][2]][0];
        y3 = this.p[this.t[i][2]][1];
        return [[x1, y1], [x2, y2], [x3, y3]];
    };
    TriangleShape.prototype.getHitArea = function (i) {
        var center = this.getTriangleCenter(i);
        var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        x1 = this.p[this.t[i][0]][0] - center[0];
        y1 = this.p[this.t[i][0]][1] - center[1];
        x2 = this.p[this.t[i][1]][0] - center[0];
        y2 = this.p[this.t[i][1]][1] - center[1];
        x3 = this.p[this.t[i][2]][0] - center[0];
        y3 = this.p[this.t[i][2]][1] - center[1];
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000");
        hit.graphics.moveTo(x1, y1);
        hit.graphics.lineTo(x2, y2);
        hit.graphics.lineTo(x3, y3);
        hit.graphics.lineTo(x1, y1);
        hit.graphics.endFill();
        return hit;
    };
    TriangleShape.prototype.drawUpdate = function () {
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
    };
    TriangleShape.prototype.drawUpdateNormal = function () {
        for (var i = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }
        this.graphics.clear();
        this.applyStroke();
        this.graphics.beginFill(this.color);
        this.graphics.setStrokeStyle(this.lineSize);
        for (var k = 0; k < this.p.length; k++) {
            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }
        this.graphics.endFill();
        var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        for (var i = 0; i < this.l.length; i++) {
            x1 = this.rx[this.l[i][0]];
            y1 = this.ry[this.l[i][0]];
            x2 = this.rx[this.l[i][1]];
            y2 = this.ry[this.l[i][1]];
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
        }
        for (var i = 0; i < this.t.length; i++) {
            x1 = this.rx[this.t[i][0]];
            y1 = this.ry[this.t[i][0]];
            x2 = this.rx[this.t[i][1]];
            y2 = this.ry[this.t[i][1]];
            x3 = this.rx[this.t[i][2]];
            y3 = this.ry[this.t[i][2]];
            if (this.selectIndex == i) {
                this.graphics.beginFill("#6547a4");
            }
            else {
                this.applyFill();
            }
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
            this.graphics.lineTo(x3, y3);
            this.graphics.lineTo(x1, y1);
            this.graphics.endFill();
        }
    };
    TriangleShape.prototype.drawUpdateLeft = function () {
        for (var i = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }
        this.graphics.clear();
        this.applyStroke();
        this.graphics.beginFill(this.color);
        this.graphics.setStrokeStyle(this.lineSize);
        for (var k = 0; k < this.p.length; k++) {
            if (this.rx[k] < this.baseX)
                continue;
            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }
        this.graphics.endFill();
        var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        for (var i = 0; i < this.l.length; i++) {
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
        for (var i = 0; i < this.t.length; i++) {
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
            }
            else {
                this.applyFill();
            }
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
            this.graphics.lineTo(x3, y3);
            this.graphics.lineTo(x1, y1);
            this.graphics.endFill();
        }
    };
    TriangleShape.prototype.drawUpdateRight = function () {
        for (var i = 0; i < this.p.length; i = i + 1) {
            this.dx[i] *= 0.9;
            this.dy[i] *= 0.9;
            this.rx[i] = this.p[i][0] + this.dx[i];
            this.ry[i] = this.p[i][1] + this.dy[i];
        }
        this.graphics.clear();
        this.applyStroke();
        this.graphics.beginFill(this.color);
        this.graphics.setStrokeStyle(this.lineSize);
        for (var k = 0; k < this.p.length; k++) {
            if (this.rx[k] > this.baseX)
                continue;
            this.graphics.moveTo(this.rx[k], this.ry[k]);
            this.graphics.drawCircle(this.rx[k], this.ry[k], this.p[k][3]);
        }
        this.graphics.endFill();
        var x1 = 0;
        var x2 = 0;
        var x3 = 0;
        var y1 = 0;
        var y2 = 0;
        var y3 = 0;
        for (var i = 0; i < this.l.length; i++) {
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
        for (var i = 0; i < this.t.length; i++) {
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
            }
            else {
                this.applyFill();
            }
            this.graphics.moveTo(x1, y1);
            this.graphics.lineTo(x2, y2);
            this.graphics.lineTo(x3, y3);
            this.graphics.lineTo(x1, y1);
            this.graphics.endFill();
        }
    };
    return TriangleShape;
})(SineShape);
//# sourceMappingURL=TriangleShape.js.map