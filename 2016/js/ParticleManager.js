var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ParticleManager = (function (_super) {
    __extends(ParticleManager, _super);
    function ParticleManager() {
        _super.call(this);
    }
    ParticleManager.initPool = function () {
        for (var i = 0; i < 100; i++) {
            ParticleManager.objectPool.push(new Particle(ParticleManager.getTex("particle")));
        }
    };
    ParticleManager.newObject = function () {
        if (ParticleManager.objectPool.length > 0) {
            ParticleManager.objectPool[ParticleManager.objectPool.length - 1].init();
            return ParticleManager.objectPool.pop();
        }
        ParticleManager.initPool();
        return ParticleManager.newObject();
    };
    ParticleManager.deleteObject = function (e) {
        ParticleManager.objectPool.push(e);
    };
    ParticleManager.getTex = function (name) {
        return SceneManager.instance().queue.getResult(name);
    };
    ParticleManager.prototype.createParticle = function () {
        var particle = ParticleManager.newObject();
        switch (this.numChildren % 3) {
            case 0:
                particle.setImage(ParticleManager.getTex("particle1"));
                break;
            case 1:
                particle.setImage(ParticleManager.getTex("particle2"));
                break;
            case 2:
                particle.setImage(ParticleManager.getTex("particle3"));
                break;
        }
        particle.x = 960 + 400 * Math.random() - 200;
        particle.y = 540 + 400 * Math.random() - 200;
        particle.dx = (Math.random() - 0.5) * 5;
        particle.dy = (Math.random() - 0.5) * 5;
        this.addChild(particle);
    };
    ParticleManager.prototype.createXY = function (mx, my) {
        var particle = ParticleManager.newObject();
        switch (this.numChildren % 3) {
            case 0:
                particle.setImage(ParticleManager.getTex("particle1"));
                break;
            case 1:
                particle.setImage(ParticleManager.getTex("particle2"));
                break;
            case 2:
                particle.setImage(ParticleManager.getTex("particle3"));
                break;
        }
        particle.x = mx;
        particle.y = my;
        if ((mx - 960) < 0) {
            particle.dx = -2 * Math.random() - 3;
            particle.dy = 4 * Math.random();
        }
        else {
            particle.dx = 2 * Math.random() + 3;
            particle.dy = 4 * Math.random();
        }
        this.addChild(particle);
    };
    ParticleManager.prototype.clear = function () {
        for (var i = 0; i < this.numChildren; i++) {
            ParticleManager.deleteObject(this.getChildAt(i));
        }
        this.removeAllChildren();
    };
    ParticleManager.prototype.update = function () {
        for (var i = 0; i < this.numChildren; i++) {
            this.getChildAt(i).update();
        }
        for (var i = this.numChildren - 1; i >= 0; i--) {
            if (this.getChildAt(i).isActive() == false) {
                ParticleManager.deleteObject(this.getChildAt(i));
                this.removeChildAt(i);
            }
        }
    };
    ParticleManager.prototype.playToRight = function (tx, time) {
        for (var i = 0; i < 10; i++) {
            var particle = ParticleManager.newObject();
            switch (this.numChildren % 3) {
                case 0:
                    particle.setImage(ParticleManager.getTex("particle1"));
                    break;
                case 1:
                    particle.setImage(ParticleManager.getTex("particle2"));
                    break;
                case 2:
                    particle.setImage(ParticleManager.getTex("particle3"));
                    break;
            }
            particle.max_count = 30 * time;
            particle.alpha = Math.random() * 0.7 + 0.3;
            particle.x = 0 - Math.random() * 1500;
            particle.y = 540;
            particle.dx = Math.random() * 4 + 8;
            particle.dy = 2 * Math.random() - 1;
            this.addChild(particle);
        }
    };
    ParticleManager.prototype.playToLeft = function (tx, time) {
        for (var i = 0; i < 10; i++) {
            var particle = ParticleManager.newObject();
            switch (this.numChildren % 3) {
                case 0:
                    particle.setImage(ParticleManager.getTex("particle1"));
                    break;
                case 1:
                    particle.setImage(ParticleManager.getTex("particle2"));
                    break;
                case 2:
                    particle.setImage(ParticleManager.getTex("particle3"));
                    break;
            }
            particle.max_count = 30 * time;
            particle.alpha = Math.random() * 0.7 + 0.3;
            particle.x = tx + Math.random() * 1500;
            particle.y = 540;
            particle.dx = -Math.random() * 4 - 8;
            particle.dy = 2 * Math.random() - 1;
            this.addChild(particle);
        }
    };
    ParticleManager.objectPool = new Array();
    return ParticleManager;
})(createjs.Container);
//# sourceMappingURL=ParticleManager.js.map