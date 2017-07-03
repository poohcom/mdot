/// <reference path="../tsd/threejs/three.d.ts" />


class Scene3DManager {

    private static _instance: Scene3DManager = null;
    
    public static instance(): Scene3DManager {
        if (Scene3DManager._instance === null) {
            Scene3DManager._instance = new Scene3DManager();
        }
        return Scene3DManager._instance;
    }

    constructor() {
        if (Scene3DManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        Scene3DManager._instance = this;
    }

    public particleSystem: THREE.Points;

    public scene: THREE.Scene;

    public renderer: THREE.WebGLRenderer;
    //public renderer: THREE.CanvasRenderer;

    
    public camera: THREE.PerspectiveCamera;
    
    

    public particles: THREE.Geometry;
    public pMaterial: THREE.PointsMaterial;


    public line: number = 10;
    public dotCount: number = 2000;

    public oriDot: THREE.Vector3[] = [];
    public dot:THREE.Vector3[] = [];

    public init(): void {
        
        var WIDTH: number = 1920;

        var HEIGHT:number  = 1080;

        var VIEW_ANGLE: number = 25;

        var ASPECT: number = WIDTH / HEIGHT;
        var NEAR: number = 0.1;
        var FAR: number = 1000;

        // get the DOM element to attach to
        // - assume we've got jQuery to hand
        //var $container = $('#container');

        // create a WebGL renderer, camera
        // and a scene
        this.renderer = new THREE.WebGLRenderer();

        //this.renderer = new THREE.CanvasRenderer();



        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.camera =
            new THREE.PerspectiveCamera(
                VIEW_ANGLE,
                ASPECT,
                NEAR,
                FAR);

        this.scene = new THREE.Scene();

        // add the camera to the scene
        this.scene.add(this.camera);
        //this.scene.fog = new THREE.FogExp2(0x000000, 0.001);
        // the camera starts at 0,0,0
        // so pull it back
        this.camera.position.y = 100;
        this.camera.position.z = 300;

        // start the renderer
        this.renderer.setSize(WIDTH, HEIGHT);
        //(<HTMLElement>document.getElementById('bg3d')).appendChild(this.renderer.domElement);
        //(<HTMLDocument>document.getElementById('bgcanvas')).append(renderer.domElement);
        
        //document.getElementById('bgcanvas').appendChild(this.renderer.domElement);

        //var container = document.getElementById('container');

        var container = document.getElementById('render3d');
        container.appendChild(this.renderer.domElement);


        //document.body.appendChild(this.renderer.domElement);

        /////////////////
        var sprite: THREE.Texture = new THREE.TextureLoader().load("assets/circle.png");

        for (var i: number = 1; i < this.line + 1; i++) {
            var lineDotCount: number = this.dotCount - (this.line - i) * 200;
            for (var j: number = 0; j < lineDotCount; j++) {
                this.dot.push(new THREE.Vector3(15 * i * Math.sin(j / lineDotCount * 2 * Math.PI), Math.sin(j / lineDotCount * 2 * Math.PI * 20) * 0.2, 15 * i * Math.cos(j / lineDotCount * 2 * Math.PI)));
              //  this.dot.push(new THREE.Vector3(20 * i * Math.sin(j / lineDotCount * 2 * Math.PI), 0, 20 * i * Math.cos(j / lineDotCount * 2 * Math.PI)));
            }
        }
        
        var particleCount: number = this.dot.length;//  this.line * this.dotCount;

        this.particles  = new THREE.Geometry();
        this.pMaterial  = new THREE.PointsMaterial({
                color: 0xFFFFFF,
                size: 2,
                blending: THREE.AdditiveBlending,
                depthTest: false, 
                map: sprite,
                transparent: true
            });


        var pX: number = - 250;
           var pY: number = 0;
           var pZ: number = - 250;
           var     particle:THREE.Vector3 = new THREE.Vector3(
                   pX, pY, pZ
               );

           this.oriDot.push(particle);
           this.particles.vertices.push(particle);

        // now create the individual particles
        for (var p = 1; p < particleCount; p++) {

            // create a particle with random
            // position values, -250 -> 250
            var pX: number = Math.random() * 500 - 250;
            var pY: number = Math.random() * 200;
            var pZ: number = Math.random() * 500 - 250;
            var     particle:THREE.Vector3 = new THREE.Vector3(
                    pX, pY, pZ
                );

            //var pX: number = Math.random() * 15 - 7;
            //var pY: number = Math.random() * 7 + 355;
            
            //var pZ: number = Math.random() * 15-7;
            //var     particle:THREE.Vector3 = new THREE.Vector3(
            //        pX, pY, pZ
            //    );

            // add it to the geometry
            this.oriDot.push(particle);
            this.particles.vertices.push(particle);
        }

        // create the particle system
        this.particleSystem = new THREE.Points(
            this.particles,
            this.pMaterial);

        this.particleSystem.position.y = -50;

        

        this.scene.add(this.particleSystem);

        this.initRender();
        
    }

    public goCamera(cx:number, cy:number, time:number): void {
        createjs.Tween.get(this.camera.position, { loop: false }).to({ x: cx, y: cy }, time * 1000, createjs.Ease.quadInOut);
    }

    public initRender(): void {
        function updateRender() {
            Scene3DManager.instance().update();
            requestAnimationFrame(updateRender);
        }
        updateRender();
    }
    public isStop: Boolean = true;
    public time: number = -1;
    public update(): void {

        if (this.isStop == true)
            return;

        var r: number = 0;

        if (this.time < 0) {
            r = 0;
        } else {
            //this.time++;
            //r = Math.min(1, this.time / (7200));

            r = this.time;
        }

        for (var i: number = 0; i < this.particles.vertices.length; i++) {
            this.particles.vertices[i].x = (1 - r) * this.oriDot[i].x + r * this.dot[i].x;
            this.particles.vertices[i].y = (1 - r) * this.oriDot[i].y + r * this.dot[i].y;
            this.particles.vertices[i].z = (1 - r) * this.oriDot[i].z + r * this.dot[i].z;
        }

        //for (var i: number = 0; i < this.particles.vertices.length; i++) {
        //    this.particles.vertices[i].x = this.dot[i].x;
        //    this.particles.vertices[i].y = this.dot[i].y;
        //    this.particles.vertices[i].z = this.dot[i].z;
        //}
        
        
        this.particles.verticesNeedUpdate = true;
        this.particleSystem.geometry = this.particles;

        this.particleSystem.rotation.y -= 0.001;

        
        this.renderer.render(this.scene, this.camera);
    }

    public startScene(): void {
        //this.time = -1;
        //createjs.Tween.get(this).to({time:0}, 1.08 * 1000, createjs.Ease.linear);
        this.time = 0;

        createjs.Tween.get(this).to({ time: 1 }, (43 / 12)*3 * 1000, createjs.Ease.quadInOut);

        //createjs.Tween.get(this).to({ time: 1 }, (43/12)*6 * 1000, createjs.Ease.quadInOut);
        //createjs.Tween.get(this).to({ time: 1 }, (43 * 6 * 1000 / 12)  , createjs.Ease.linear);
    } 

    // 
    public setSize(w: number, h: number): void
    {
        if (this.camera == null)
            return;

        if (this.renderer == null)
            return;


            this.camera.aspect = w / h;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(w, h);
        


        //if (1920 / 1080 > w / h)
        //{
        //    this.camera.aspect = 1;
        //    this.camera.updateProjectionMatrix();

        //    //this.renderer.setSize(w, w * 1080 / 1920);    
        //    //this.renderer.setViewport(0, 1080 - w * 1080 / 1920  -(h - 1080 * w / 1920) / 2  , w, w * 1080 / 1920);


        //    this.renderer.setViewport(0, (h - 1080 * w / 1920) / 2, w, w * 1080 / 1920);


            
        //    //this.renderer.setViewport(0, 0, w, w * 1080 / 1920);
            
        //} else {

        //    //this.renderer.setSize(1920 * h / 1080, h);
        //    this.camera.aspect = 1;
        //    this.camera.updateProjectionMatrix();

        //    //this.renderer.setSize(1920 * h / 1080, h);
        //    this.renderer.setViewport((w - 1920 * h / 1080) / 2,  0 , 1920 * h / 1080, h);

        //}






        //if (1920 / 1080 > w / h)
        //{
        //    this.renderer.setViewport(0, (h - 1920 * h / 1080)/2 , w, 1920 * h / 1080);

        //    //this.renderer.setSize(w, 1920 * h / 1080);    
            

        ////    this.particleSystem.scale.x = w / 1920 * w / 1920;
        //    //this.particleSystem.scale.y = w / 1920 * w / 1920;
        ////    this.particleSystem.scale.z = w / 1920 * w / 1920;
        //} else {

        //    this.renderer.setViewport((w - 1080 * w / 1920)/2 , 0, 1080 * w / 1920, h);
        //    //this.renderer.setSize(1080 * w / 1920, h);
            
        ////    this.particleSystem.scale.x = h / 1080 ;
        ////    this.particleSystem.scale.y = h / 1080 ;
        ////    this.particleSystem.scale.z = h / 1080 ;
        //}

        

    }
    
} 
