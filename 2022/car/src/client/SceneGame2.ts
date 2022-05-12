import * as THREE from 'three';
import { Scene } from "./Scene";
import { Config } from "./Config";
import { SceneManager, SCENE } from "./SceneManager";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Debug } from "./Debug";

// 모바일 2k 동양상 4k 이미지    최신폰 4k 동영상
// pc 4k 8k 동영상 4k 8k 이미지
class SceneGame2 extends Scene {
    constructor() {
        super();
        this.init();
    }

    // camera
    private camera: any;
    private scene: any;

    private cameraControls: any;

    private bgmesh: any;

    private material3: any;

    private geometry: any;


    private speed: number = 0;

    private worldWidth: number = 128;
    private worldDepth: number = 128;

    material: any;



    public init(): void {
        // scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xaaccff);
        this.scene.fog = new THREE.FogExp2(0xaaccff, 0.0007);

        const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
        sphereGeometry.scale(-1, 1, 1);

        this.geometry = new THREE.PlaneGeometry(4000, 4000, this.worldWidth - 1, this.worldDepth - 1);
        this.geometry.rotateX(- Math.PI / 2);
        


        const position = this.geometry.attributes.position;
        position.usage = THREE.DynamicDrawUsage;

        for (let i = 0; i < position.count; i++) {

            const y = 35 * Math.sin(i / 2);
            position.setY(i, y);

        }


        const texture = new THREE.TextureLoader().load('data/Test01.png');
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(50, 50);

        this.material = new THREE.MeshBasicMaterial({ color: 0x0044ff, map: texture });

        this.bgmesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.bgmesh);
        this.bgmesh.position.x=-2500;
        this.bgmesh.position.y=-400;


        const texture2 = new THREE.TextureLoader().load('data/Test01.png');
        const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true });
        const mesh2 = new THREE.Mesh(sphereGeometry, material2);

        //mesh2.rotateZ(5);
        mesh2.rotateZ(Math.PI / 180 * 30);


        this.scene.add(mesh2);

        const texture3 = new THREE.TextureLoader().load('data/Light_Test01.png');
        this.material3 = new THREE.MeshBasicMaterial({ map: texture3, transparent: true });

        const mesh3 = new THREE.Mesh(sphereGeometry, this.material3);
        this.scene.add(mesh3);

        // camera
        this.camera = new THREE.PerspectiveCamera(Config.VIEW_ANGLE, Config.ASPECT, Config.NEAR, Config.FAR);
        //x/y/x
        this.camera.position.set(0, 0, 0);

        this.cameraControls = new OrbitControls(this.camera, SceneManager.instance().renderer.domElement);
        this.cameraControls.target.set(-1, 0, 0);
        this.cameraControls.maxDistance = 1;
        this.cameraControls.minDistance = 1;

        //this.cameraControls.minPolarAngle = 3.14 / 2;
        //this.cameraControls.maxPolarAngle = 3.14 / 2;

        //this.cameraControls.minAzimuthAngle = 3.14 / 2;
        //this.cameraControls.maxAzimuthAngle = 3.14 / 2;


        this.cameraControls.update();
    }
    // x 화면안으로 x+
    // y 화면위로 y+
    // z 화면옆로 y+

    public onWindowResize(): void {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }

    public render(timer: number) {

        let t:number=timer + this.speed*10;
        const position = this.geometry.attributes.position;

        for (let i = 0; i < position.count; i++) {
            const y = 35 * Math.sin(i / 5 + (t + i) / 7);
            position.setY(i, y);
        }

        position.needsUpdate = true;

        this.cameraControls.update();

        this.material3.opacity = Math.sin(timer * Math.PI) * 0.5 + 0.5;

        SceneManager.instance().renderer.render(this.scene, this.camera);

        if (this.leftKey == true && this.speed > 0.5) {

            this.bgmesh.position.z -= 10;
            if (this.bgmesh.position.z < -200) {
                this.bgmesh.position.z = -200;
            } else {
                this.bgmesh.rotateY(-Math.PI / 180 * 0.5);
            }
        }

        if (this.rightKey == true && this.speed > 0.5) {
            this.bgmesh.position.z += 10;

            if (this.bgmesh.position.z > 200) {
                this.bgmesh.position.z = 200;
            } else {
                this.bgmesh.rotateY(Math.PI / 180 * 0.5);
            }
        }

        if (this.leftKey == false && this.rightKey == false) {
            this.bgmesh.rotation.y = this.bgmesh.rotation.y * 0.95;
        }

        if (this.speedKey == true) {
            //const video: any = document.getElementById('video_sample_h');
            this.speed = Math.min(115.0, this.speed + 0.01);

        } else {
            ///const video: any = document.getElementById('video_sample_h');
            this.speed = Math.max(this.speed - 0.005, 0);
        }

        if (this.speedDownKey == true) {
            //const video: any = document.getElementById('video_sample_h');
            this.speed = Math.max(this.speed - 0.02, 0);
        }

        //this.video.playbackRate = this.speed;
    }


    // x 화면안으로 x+
    // y 화면위로 y+
    // z 화면옆로 y+



    public onKeyDown(event: any): void {
        //Debug.Log(event.key);
        switch (event.key) {
            case 'A':
            case 'a':
                this.leftKey = true;

                break;
            case 'D':
            case 'd':

                this.rightKey = true;

                break;
            case 'W':
            case 'w':
                this.speedKey = true;

                break;
            case 'S':
            case 's':
                this.speedDownKey = true;

                break;
        }



    }

    leftKey: boolean = false;
    rightKey: boolean = false;
    speedKey: boolean = false;
    speedDownKey: boolean = false;
    public onKeyUp(event: any): void {
        //Debug.Log(event.key);
        switch (event.key) {
            case 'A':
            case 'a':
                this.leftKey = false;

                break;
            case 'D':
            case 'd':
                this.rightKey = false;

                break;
            case 'W':
            case 'w':
                this.speedKey = false;

                break;
            case 'S':
            case 's':
                this.speedDownKey = false;

                break;

        }

    }

}

export { SceneGame2 }


