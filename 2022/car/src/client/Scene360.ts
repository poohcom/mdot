import { Scene } from "./Scene";
import { Config } from "./Config";
import { SceneManager, SCENE } from "./SceneManager";
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { Debug } from "./Debug";
// 모바일 2k 동양상 4k 이미지    최신폰 4k 동영상
// pc 4k 8k 동영상 4k 8k 이미지
class Scene360 extends Scene {
    constructor() {
        super();
        this.init();

    }
    
    private mouseMoved = false;
    mouseCoords = new THREE.Vector2();

    private camera: any;
    private scene: any;

    //private cameraControls: any;

    private material3: any;



    isUserInteracting:boolean = false;
    lon :number= 0;
    lat :number= 0;
    phi :number= 0;
    theta:number = 0;
    onPointerDownPointerX:number = 0;
    onPointerDownPointerY :number= 0;
    onPointerDownLon:number = 0;
    onPointerDownLat:number = 0;

    distance:number = 50;


    public init(): void {

        // scene
        this.scene = new THREE.Scene();
        
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);


        //var filter = "win16|win32|win64|mac|macintel"; 
       

        //const video: any = document.getElementById('video1'+a);
        //video.play();

        //const texture = new THREE.VideoTexture(video);
        //const material = new THREE.MeshBasicMaterial({ map: texture });

        //const mesh = new THREE.Mesh(geometry, material);
        //this.scene.add(mesh);

        /// const texture2 = new THREE.TextureLoader().load('data/Test01.png');
        // const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true });
        const texture2 = new THREE.TextureLoader().load('data/Test01.jpg');
        const material2 = new THREE.MeshBasicMaterial({ map: texture2});

        const mesh2 = new THREE.Mesh(geometry, material2);
        this.scene.add(mesh2);


        const texture3 = new THREE.TextureLoader().load('data/Light_Test01.png');
        this.material3 = new THREE.MeshBasicMaterial({ map: texture3, transparent: true });

        const mesh3 = new THREE.Mesh(geometry, this.material3);
        this.scene.add(mesh3);


        // camera
        this.camera = new THREE.PerspectiveCamera(Config.VIEW_ANGLE, Config.ASPECT, 300, 600);
        //x/y/x
        this.camera.position.set(0, 0, 0);

        //this.cameraControls = new OrbitControls(this.camera, SceneManager.instance().renderer.domElement);

        // this.cameraControls = new FirstPersonControls(this.camera, SceneManager.instance().renderer.domElement);
        // this.cameraControls.movementSpeed = 10;
        // this.cameraControls.lookSpeed = 0.1;


        // this.cameraControls.target.set(-100, 0, 0);
        // this.cameraControls.maxDistance = 1;
        // this.cameraControls.minDistance = 1;
        // this.cameraControls.noRoll=false;
        // this.cameraControls.staticMoving=false;
        // this.cameraControls.noRotate=false;
        // this.cameraControls.noPan=false;

        // 상하
        //this.cameraControls.minPolarAngle =3.14 / 2;
        //this.cameraControls.maxPolarAngle =3.14 / 2;

        //this.cameraControls.minAzimuthAngle =0;  // 좌우
        //this.cameraControls.maxAzimuthAngle =3.14/10;


        //this.cameraControls.update();
     
    }

    public onWindowResize(): void {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        //this.cameraControls.handleResize();

    }

    // public setMouseCoords(x: any, y: any) {

    //     this.mouseCoords.set((x / SceneManager.instance().renderer.domElement.clientWidth) * 2 - 1, - (y / SceneManager.instance().renderer.domElement.clientHeight) * 2 + 1);
    //     this.mouseMoved = true;
    // }

     public onPointerMove(event: any) {

        if ( this.isUserInteracting === true ) {

            this.lon = ( this.onPointerDownPointerX - event.clientX ) * 0.1 + this.onPointerDownLon;
            this.lat = ( this.onPointerDownPointerY - event.clientY ) * 0.1 + this.onPointerDownLat;
        }
    }


    public onPointerUp( event:any ) {
        this.isUserInteracting = false;
    }

    public onPointerDown( event:any ) {
                this.isUserInteracting = true;

				this.onPointerDownPointerX = event.clientX;
				this.onPointerDownPointerY = event.clientY;

				this.onPointerDownLon = this.lon;
				this.onPointerDownLat = this.lat;
    }


    public render(timer: number) {


        // const position = geometry.attributes.position;

        // for ( let i = 0; i < position.count; i ++ ) {

        //     const y = 35 * Math.sin( i / 5 + ( time + i ) / 7 );
        //     position.setY( i, y );

        // }

        // position.needsUpdate = true;

        this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
        this.phi = THREE.MathUtils.degToRad( 90 - this.lat );
        this.theta = THREE.MathUtils.degToRad( this.lon );

        this.camera.position.x = -this.distance * Math.sin( this.phi ) * Math.cos( this.theta );
        this.camera.position.y = this.distance * Math.cos( this.phi );
        this.camera.position.z = -this.distance * Math.sin( this.phi ) * Math.sin( this.theta );

        this.camera.lookAt( 0, 0, 0 );
				

        
        this.material3.opacity = Math.sin(timer * Math.PI) * 0.5 + 0.5;
        SceneManager.instance().renderer.render(this.scene, this.camera);

        
    }

    
}

export { Scene360 }


