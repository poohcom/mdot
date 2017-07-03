var Scene3DManager = (function () {
    function Scene3DManager() {
        this.line = 10;
        this.dotCount = 2000;
        this.oriDot = [];
        this.dot = [];
        this.isStop = true;
        this.time = -1;
        if (Scene3DManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        Scene3DManager._instance = this;
    }
    Scene3DManager.instance = function () {
        if (Scene3DManager._instance === null) {
            Scene3DManager._instance = new Scene3DManager();
        }
        return Scene3DManager._instance;
    };
    Scene3DManager.prototype.init = function () {
        var WIDTH = 1920;
        var HEIGHT = 1080;
        var VIEW_ANGLE = 25;
        var ASPECT = WIDTH / HEIGHT;
        var NEAR = 0.1;
        var FAR = 1000;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.camera =
            new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene = new THREE.Scene();
        this.scene.add(this.camera);
        this.camera.position.y = 100;
        this.camera.position.z = 300;
        this.renderer.setSize(WIDTH, HEIGHT);
        var container = document.getElementById('render3d');
        container.appendChild(this.renderer.domElement);
        var sprite = new THREE.TextureLoader().load("assets/circle.png");
        for (var i = 1; i < this.line + 1; i++) {
            var lineDotCount = this.dotCount - (this.line - i) * 200;
            for (var j = 0; j < lineDotCount; j++) {
                this.dot.push(new THREE.Vector3(15 * i * Math.sin(j / lineDotCount * 2 * Math.PI), Math.sin(j / lineDotCount * 2 * Math.PI * 20) * 0.2, 15 * i * Math.cos(j / lineDotCount * 2 * Math.PI)));
            }
        }
        var particleCount = this.dot.length;
        this.particles = new THREE.Geometry();
        this.pMaterial = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: 2,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            map: sprite,
            transparent: true
        });
        var pX = -250;
        var pY = 0;
        var pZ = -250;
        var particle = new THREE.Vector3(pX, pY, pZ);
        this.oriDot.push(particle);
        this.particles.vertices.push(particle);
        for (var p = 1; p < particleCount; p++) {
            var pX = Math.random() * 500 - 250;
            var pY = Math.random() * 200;
            var pZ = Math.random() * 500 - 250;
            var particle = new THREE.Vector3(pX, pY, pZ);
            this.oriDot.push(particle);
            this.particles.vertices.push(particle);
        }
        this.particleSystem = new THREE.Points(this.particles, this.pMaterial);
        this.particleSystem.position.y = -50;
        this.scene.add(this.particleSystem);
        this.initRender();
    };
    Scene3DManager.prototype.goCamera = function (cx, cy, time) {
        createjs.Tween.get(this.camera.position, { loop: false }).to({ x: cx, y: cy }, time * 1000, createjs.Ease.quadInOut);
    };
    Scene3DManager.prototype.initRender = function () {
        function updateRender() {
            Scene3DManager.instance().update();
            requestAnimationFrame(updateRender);
        }
        updateRender();
    };
    Scene3DManager.prototype.update = function () {
        if (this.isStop == true)
            return;
        var r = 0;
        if (this.time < 0) {
            r = 0;
        }
        else {
            r = this.time;
        }
        for (var i = 0; i < this.particles.vertices.length; i++) {
            this.particles.vertices[i].x = (1 - r) * this.oriDot[i].x + r * this.dot[i].x;
            this.particles.vertices[i].y = (1 - r) * this.oriDot[i].y + r * this.dot[i].y;
            this.particles.vertices[i].z = (1 - r) * this.oriDot[i].z + r * this.dot[i].z;
        }
        this.particles.verticesNeedUpdate = true;
        this.particleSystem.geometry = this.particles;
        this.particleSystem.rotation.y -= 0.001;
        this.renderer.render(this.scene, this.camera);
    };
    Scene3DManager.prototype.startScene = function () {
        this.time = 0;
        createjs.Tween.get(this).to({ time: 1 }, (43 / 12) * 3 * 1000, createjs.Ease.quadInOut);
    };
    Scene3DManager.prototype.setSize = function (w, h) {
        if (this.camera == null)
            return;
        if (this.renderer == null)
            return;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
    };
    Scene3DManager._instance = null;
    return Scene3DManager;
})();
//# sourceMappingURL=Scene3DManager.js.map