// import { Scene } from "./Scene";
// import { Config } from "./Config";
// import { SceneManager, SCENE } from "./SceneManager";
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
// import { Debug } from "./Debug";
// // 모바일 2k 동양상 4k 이미지    최신폰 4k 동영상
// // pc 4k 8k 동영상 4k 8k 이미지
// class SceneGame extends Scene {
//     constructor() {
//         super();
//         this.init();
//     }
//     private mouseMoved = false;
//     mouseCoords = new THREE.Vector2();
//     private meshRay: any;
//     /////////////////////////////////////////////////////////////////////
//     // scene size
//     // camera
//     private camera: any;
//     private scene: any;
//     private cameraControls: any;
//     private bgmesh: any;
//     private material3: any;
//     private video: any;
//     private speed: number = 0;
//     public init(): void {
//         // scene
//         this.scene = new THREE.Scene();
//         const geometry = new THREE.SphereGeometry(500, 60, 40);
//         geometry.scale(-1, 1, 1);
//         this.video =  Config.VIDEO_URL('video_sample');
//         this.video.playbackRate = 0.0;
//         this.video.play();
//         const texture = new THREE.VideoTexture(this.video);
//         const material = new THREE.MeshBasicMaterial({ map: texture });
//         this.bgmesh = new THREE.Mesh(geometry, material);
//         this.bgmesh.scale.x = 2;
//         this.bgmesh.scale.y = 2;
//         this.bgmesh.scale.z = 2;
//         this.scene.add(this.bgmesh);
//         const texture2 = new THREE.TextureLoader().load('data/Test01.png');
//         const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true });
//         const mesh2 = new THREE.Mesh(geometry, material2);
//         this.scene.add(mesh2);
//         const texture3 = new THREE.TextureLoader().load('data/Light_Test01.png');
//         this.material3 = new THREE.MeshBasicMaterial({ map: texture3, transparent: true });
//         const mesh3 = new THREE.Mesh(geometry, this.material3);
//         this.scene.add(mesh3);
//         // camera
//         this.camera = new THREE.PerspectiveCamera(Config.VIEW_ANGLE, Config.ASPECT, Config.NEAR, Config.FAR);
//         //x/y/x
//         this.camera.position.set(0, 0, 0);
//         this.cameraControls = new OrbitControls(this.camera, SceneManager.instance().renderer.domElement);
//         this.cameraControls.target.set(-1, 0, 0);
//         this.cameraControls.maxDistance = 1;
//         this.cameraControls.minDistance = 1;
//         // 상하
//         //this.cameraControls.minPolarAngle =3.14 / 2;
//         //this.cameraControls.maxPolarAngle =3.14 / 2;
//         //this.cameraControls.minAzimuthAngle =0;  // 좌우
//         //this.cameraControls.maxAzimuthAngle =3.14/10;
//         // rhwjd
//         this.cameraControls.minPolarAngle = 3.14 / 2;
//         this.cameraControls.maxPolarAngle = 3.14 / 2;
//         this.cameraControls.minAzimuthAngle = 3.14 / 2;
//         this.cameraControls.maxAzimuthAngle = 3.14 / 2;
//         this.cameraControls.update();
//         // const container: HTMLElement | null = document.getElementById('container');
//         // ////////////////////////////////////////////////////////////////////
//         // if (container != null) {
//         //     Debug.Log("container");
//         //     container.appendChild(this.renderer.domElement);
//         //     container.style.touchAction = 'none';
//         //     container.addEventListener('pointermove', (event) => { this.onPointerMove(event); }, false);
//         // }
//         // window.addEventListener('resize', () => { this.onWindowResize() }, false);
//     }
//     public onWindowResize(): void {
//         this.camera.aspect = window.innerWidth / window.innerHeight;
//         this.camera.updateProjectionMatrix();
//     }
//     public setMouseCoords(x: any, y: any) {
//         this.mouseCoords.set((x / this.renderer.domElement.clientWidth) * 2 - 1, - (y / this.renderer.domElement.clientHeight) * 2 + 1);
//         this.mouseMoved = true;
//     }
//     public onPointerMove(event: any) {
//         if (event.isPrimary === false) return;
//         this.setMouseCoords(event.clientX, event.clientY);
//     }
//     public render(timer: number) {
//         this.cameraControls.update();
//         this.material3.opacity = Math.sin(timer * Math.PI) * 0.5 + 0.5;
//         SceneManager.instance().renderer.render(this.scene, this.camera);
//         if (this.leftKey == true && this.speed > 0.5) {
//             this.bgmesh.position.z -= 10;
//             if (this.bgmesh.position.z < -200) {
//                 this.bgmesh.position.z = -200;
//             } else {
//                 this.bgmesh.rotateY(-Math.PI / 180 * 0.5);
//             }
//         }
//         if (this.rightKey == true && this.speed > 0.5) {
//             this.bgmesh.position.z += 10;
//             if (this.bgmesh.position.z > 200) {
//                 this.bgmesh.position.z = 200;
//             } else {
//                 this.bgmesh.rotateY(Math.PI / 180 * 0.5);
//             }
//         }
//         if (this.leftKey == false && this.rightKey == false) {
//             this.bgmesh.rotation.y = this.bgmesh.rotation.y * 0.95;
//         }
//         if (this.speedKey == true) {
//             //const video: any = document.getElementById('video_sample_h');
//             this.speed = Math.min(5.0, this.speed + 0.01);
//         } else {
//             ///const video: any = document.getElementById('video_sample_h');
//             this.speed = Math.max(this.speed - 0.005, 0);
//         }
//         if (this.speedDownKey == true) {
//             //const video: any = document.getElementById('video_sample_h');
//             this.speed = Math.max(this.speed - 0.02, 0);
//         } 
//         //const video2: any = document.querySelector<HTMLVideoElement>('#video_sample_h');
//         //video2.playbackRate =  this.speed;
//         this.video.playbackRate = this.speed;
//     }
//     // x 화면안으로 x+
//     // y 화면위로 y+
//     // z 화면옆로 y+
//     public onKeyDown(event: any): void {
//         //Debug.Log(event.key);
//         switch (event.key) {
//             case 'A':
//             case 'a':
//                 this.leftKey = true;
//                 break;
//             case 'D':
//             case 'd':
//                 this.rightKey = true;
//                 break;
//             case 'W':
//             case 'w':
//                 this.speedKey = true;
//                 break;
//             case 'S':
//             case 's':
//                 this.speedDownKey = true;
//                 break;
//         }
//     }
//     leftKey: boolean = false;
//     rightKey: boolean = false;
//     speedKey: boolean = false;
//     speedDownKey: boolean = false;
//     public onKeyUp(event: any): void {
//         //Debug.Log(event.key);
//         switch (event.key) {
//             case 'A':
//             case 'a':
//                 this.leftKey = false;
//                 break;
//             case 'D':
//             case 'd':
//                 this.rightKey = false;
//                 break;
//             case 'W':
//             case 'w':
//                 this.speedKey = false;
//                 break;
//             case 'S':
//             case 's':
//                 this.speedDownKey = false;
//                 break;
//         }
//         //Debug.Log(this.bgmesh.position.z);
//     }
// }
// export { SceneGame }
import * as THREE from 'three';
import { Scene } from "./Scene";
import { Config } from "./Config";
import { SceneManager } from "./SceneManager";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 모바일 2k 동양상 4k 이미지    최신폰 4k 동영상
// pc 4k 8k 동영상 4k 8k 이미지
class SceneGame extends Scene {
    constructor() {
        super();
        this.speed = 0;
        this.leftKey = false;
        this.rightKey = false;
        this.speedKey = false;
        this.speedDownKey = false;
        this.init();
    }
    init() {
        // scene
        this.scene = new THREE.Scene();
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);
        this.video = Config.VIDEO_URL('video_sample');
        this.video.playbackRate = 0.0;
        this.video.play();
        const texture = new THREE.VideoTexture(this.video);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        this.bgmesh = new THREE.Mesh(geometry, material);
        this.bgmesh.scale.x = 2;
        this.bgmesh.scale.y = 2;
        this.bgmesh.scale.z = 2;
        this.scene.add(this.bgmesh);
        const texture2 = new THREE.TextureLoader().load('data/Test01.png');
        const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true });
        const mesh2 = new THREE.Mesh(geometry, material2);
        this.scene.add(mesh2);
        const texture3 = new THREE.TextureLoader().load('data/Light_Test01.png');
        this.material3 = new THREE.MeshBasicMaterial({ map: texture3, transparent: true });
        const mesh3 = new THREE.Mesh(geometry, this.material3);
        this.scene.add(mesh3);
        // camera
        this.camera = new THREE.PerspectiveCamera(Config.VIEW_ANGLE, Config.ASPECT, Config.NEAR, Config.FAR);
        //x/y/x
        this.camera.position.set(0, 0, 0);
        this.cameraControls = new OrbitControls(this.camera, SceneManager.instance().renderer.domElement);
        this.cameraControls.target.set(-1, 0, 0);
        this.cameraControls.maxDistance = 1;
        this.cameraControls.minDistance = 1;
        this.cameraControls.minPolarAngle = 3.14 / 2;
        this.cameraControls.maxPolarAngle = 3.14 / 2;
        this.cameraControls.minAzimuthAngle = 3.14 / 2;
        this.cameraControls.maxAzimuthAngle = 3.14 / 2;
        this.cameraControls.update();
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
    render(timer) {
        this.cameraControls.update();
        this.material3.opacity = Math.sin(timer * Math.PI) * 0.5 + 0.5;
        SceneManager.instance().renderer.render(this.scene, this.camera);
        if (this.leftKey == true && this.speed > 0.5) {
            this.bgmesh.position.z -= 10;
            if (this.bgmesh.position.z < -200) {
                this.bgmesh.position.z = -200;
            }
            else {
                this.bgmesh.rotateY(-Math.PI / 180 * 0.5);
            }
        }
        if (this.rightKey == true && this.speed > 0.5) {
            this.bgmesh.position.z += 10;
            if (this.bgmesh.position.z > 200) {
                this.bgmesh.position.z = 200;
            }
            else {
                this.bgmesh.rotateY(Math.PI / 180 * 0.5);
            }
        }
        if (this.leftKey == false && this.rightKey == false) {
            this.bgmesh.rotation.y = this.bgmesh.rotation.y * 0.95;
        }
        if (this.speedKey == true) {
            //const video: any = document.getElementById('video_sample_h');
            this.speed = Math.min(5.0, this.speed + 0.01);
        }
        else {
            ///const video: any = document.getElementById('video_sample_h');
            this.speed = Math.max(this.speed - 0.005, 0);
        }
        if (this.speedDownKey == true) {
            //const video: any = document.getElementById('video_sample_h');
            this.speed = Math.max(this.speed - 0.02, 0);
        }
        //const video2: any = document.querySelector<HTMLVideoElement>('#video_sample_h');
        //video2.playbackRate =  this.speed;
        this.video.playbackRate = this.speed;
    }
    // x 화면안으로 x+
    // y 화면위로 y+
    // z 화면옆로 y+
    onKeyDown(event) {
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
    onKeyUp(event) {
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
export { SceneGame };
