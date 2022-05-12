import { Scene } from "./Scene";
import { Config } from "./Config";
import { SceneManager } from "./SceneManager";
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom.html
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_mirror.html
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html
//https://threejs.org/editor/
// 구믈
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_refraction.html    
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Reflector } from 'three/examples/jsm/objects/Reflector';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm//postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm//postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm//postprocessing/UnrealBloomPass.js';
//import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder';
class SceneCar extends Scene {
    constructor() {
        super();
        this.MAP_NAMES = [
            'map',
            'aoMap',
            'emissiveMap',
            'glossinessMap',
            'metalnessMap',
            'normalMap',
            'roughnessMap',
            'specularMap',
        ];
        /////////////////////////////////////////////////////////////////////
        this.WIDTH = 512;
        //const BOUNDS = 512;
        this.BOUNDS = 100;
        this.BOUNDS_HALF = this.BOUNDS * 0.5;
        this.StartTime = Date.now();
        this.mouseMoved = false;
        this.mouseCoords = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.waterNormal = new THREE.Vector3();
        this.simplex = new SimplexNoise();
        /////////////////////////////////////////////////////////////////////
        // scene size
        this.SCRREN_WIDTH = window.innerWidth;
        this.SCRREN_HEIGHT = window.innerHeight;
        // camera
        this.VIEW_ANGLE = 45;
        this.ASPECT = Config.SCREEN_WIDTH / Config.SCREEN_HEIGHT;
        this.NEAR = 1;
        this.FAR = 100;
        this.clock = new THREE.Clock();
        const startButton = document.getElementById('startButton');
        startButton.addEventListener('click', () => {
            const overlay = document.getElementById('overlay');
            overlay.remove();
            this.init();
            this.update();
        });
    }
    init() {
        const decalNormal = new THREE.TextureLoader().load('textures/decal/floor.jpg');
        const decalDiffuse = new THREE.TextureLoader().load('textures/decal/floor.jpg');
        decalDiffuse.wrapS = decalDiffuse.wrapT = THREE.RepeatWrapping;
        // renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(Config.SCREEN_WIDTH, Config.SCREEN_HEIGHT);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        //renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMapping = THREE.ReinhardToneMapping;
        this.renderer.toneMappingExposure = 0.5;
        // scene
        this.scene = new THREE.Scene();
        // let dd = new RGBELoader();
        // //dd.load("data/moonless_golf_1k.hdr", ()=>{});
        // dd.load("data/moonless_golf_1k.hdr", function ( texture ) {
        // 	//texture.mapping = THREE.EquirectangularReflectionMapping;
        // 	//scene.background = texture;
        // 	//scene.environment = texture;
        // 	//scene.environment.mapping = THREE.EquirectangularReflectionMapping;
        // } );
        new RGBELoader()
            .setPath('data/')
            //.load( 'moonless_golf_1k.hdr', function ( texture ) {
            .load('Test02.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            this.scene.background = texture;
            this.scene.environment = texture;
        });
        //scene.environment = dd;
        //scene.environment.mapping = THREE.EquirectangularReflectionMapping;
        //scene.fog = new THREE.Fog( 0x333333, 1, 50 );
        // camera
        this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);
        //x/y/x
        this.camera.position.set(0, 2, 16);
        this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.cameraControls.target.set(0, 0, 0);
        this.cameraControls.maxDistance = 50;
        this.cameraControls.minDistance = 2;
        this.cameraControls.update();
        const container = document.getElementById('container');
        ////////////////////////////////////////////////////////////////////
        if (container != null) {
            container.appendChild(this.renderer.domElement);
            container.style.touchAction = 'none';
            container.addEventListener('pointermove', onPointerMove, false);
        }
        window.addEventListener('resize', onWindowResize, false);
        //const pointLight = new THREE.PointLight( 0xffffff, 0.1 );
        //camera.add( pointLight );
        ///////////////
        // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
        // hemiLight.position.set( 0, 20, 0 );
        // scene.add( hemiLight );
        // const dirLight = new THREE.DirectionalLight( 0xffffff );
        // dirLight.position.set( 0, 20, 10 );
        // scene.add( dirLight );
        //  const mainLight1 = new THREE.AmbientLight(0xffffff, 0.3);
        //  	mainLight1.position.y = 60;
        //  	scene.add( mainLight1 );
        //  const params = {
        // 	exposure: 1,
        // 	bloomStrength: 1.5,
        // 	bloomThreshold: 0,
        // 	bloomRadius: 0
        // };
        const params = {
            exposure: 0.1,
            bloomStrength: 0.5,
            bloomThreshold: 0,
            bloomRadius: 0
        };
        const renderScene = new RenderPass(this.scene, this.camera);
        //const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.1, 0.02, 0.04);
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderScene);
        this.composer.addPass(bloomPass);
        // 	RectAreaLightUniformsLib.init();
        // 	for(var i=0;i<1;i++)
        // 	{
        // 		for(var j=0;j<5;j++)
        // 		{
        // 			const rectLight2 = new THREE.RectAreaLight( 0xffd400, 0.5, 30, 0.5 );
        // 			rectLight2.rotation.y = 3.14159;
        // 			rectLight2.position.set( -5.7 + i / 100.0 * 30.0 , 3.0 + j  , -11 );
        // 			scene.add( rectLight2 );
        // 			scene.add( new RectAreaLightHelper( rectLight2 ) );
        // 		}
        // 	}
        //initWater();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/js/libs/draco/');
        const KTX2_LOADER = new KTX2Loader();
        KTX2_LOADER.setTranscoderPath('/js/libs/basis/');
        // const KTX2_LOADER = new KTX2Loader( MANAGER ).setTranscoderPath( `${THREE_PATH}/examples/js/libs/basis/` );
        // const MANAGER = new LoadingManager();
        // const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`
        // const DRACO_LOADER = new DRACOLoader( MANAGER ).setDecoderPath( `${THREE_PATH}/examples/js/libs/draco/gltf/` );
        // const KTX2_LOADER = new KTX2Loader( MANAGER ).setTranscoderPath( `${THREE_PATH}/examples/js/libs/basis/` );
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader)
            .setCrossOrigin('anonymous')
            .setDRACOLoader(dracoLoader)
            .setKTX2Loader(KTX2_LOADER.detectSupport(this.renderer));
        //.setMeshoptDecoder( MeshoptDecoder );
        let modelGroup;
        let modelDragBox;
        const bodyMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03, sheen: 0.5
        });
        const detailsMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff, metalness: 1.0, roughness: 0.5
        });
        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff, metalness: 0.25, roughness: 0, transmission: 1.0
        });
        let geometry, material;
        // reflector/mirror plane
        geometry = new THREE.PlaneBufferGeometry(50, 50);
        const groundMirror = new Reflector(geometry, { clipBias: 0.003, textureWidth: Config.SCREEN_WIDTH, textureHeight: Config.SCREEN_HEIGHT, color: 0x111111 });
        // let planeGeo = new THREE.PlaneBufferGeometry( 50, 50 );
        // const mirrorMesh = new THREE.Mesh( planeGeo, glassMaterial );
        // mirrorMesh.position.y=0.1;
        // mirrorMesh.rotateX( - Math.PI / 2 );
        // scene.add( mirrorMesh );
        // groundMirror.add( mirrorMesh );
        groundMirror.rotateX(-Math.PI / 2);
        groundMirror.position.y = 0.1;
        //scene.add( groundMirror );
        loader.setKTX2Loader(KTX2_LOADER);
        loader.load('data/car0/ferrari.glb', function (gltf) {
            const carModel = gltf.scene.children[0];
            carModel.getObjectByName('body').material = bodyMaterial;
            carModel.getObjectByName('rim_fl').material = detailsMaterial;
            carModel.getObjectByName('rim_fr').material = detailsMaterial;
            carModel.getObjectByName('rim_rr').material = detailsMaterial;
            carModel.getObjectByName('rim_rl').material = detailsMaterial;
            carModel.getObjectByName('trim').material = detailsMaterial;
            carModel.getObjectByName('glass').material = glassMaterial;
            carModel.position.y = 0.06;
            // // shadow
            // const mesh = new THREE.Mesh(
            // 	new THREE.PlaneGeometry( 0.655 * 4, 1.3 * 4 ),
            // 	new THREE.MeshBasicMaterial( {
            // 		map: shadow, blending: THREE.MultiplyBlending, toneMapped: false, transparent: true
            // 	} )
            // );
            // mesh.rotation.x = - Math.PI / 2;
            // mesh.renderOrder = 2;
            // carModel.add( mesh );
            //scene.add( carModel );
        }, undefined, function (e) {
            console.error(e);
        });
        ////
        loader.load('data/bg2/컨피규레이터.gltf', function (gltf) {
            //var model = gltf.scene;
            //scene.add( model );
            // gltf.scene.traverse(function (child) {
            // 				if (child instanceof THREE.Group) {
            // 					modelGroup = child
            // 				}
            // 				if ((child as THREE.Mesh).isMesh) {
            // 					child.castShadow = true;
            // 					child.frustumCulled = false;
            // 					(child as THREE.Mesh).material = glassMaterial
            // 					;(child as THREE.Mesh).geometry.computeVertexNormals()
            // 				}
            // 			})
            var model = gltf.scene;
            //scene.add( model );
        }, undefined, function (e) {
            console.error(e);
        });
        // 	loader.load( 'data/car1/다른소스차량.gltf', function ( gltf ) {
        // 			// // shadow
        // 		// var model = gltf.scene;
        // 		// // const mesh = new THREE.Mesh(
        // 		// // 	new THREE.PlaneGeometry( 0.655 * 4, 1.3 * 4 ),
        // 		// // 	new THREE.MeshBasicMaterial( {
        // 		// // 		map: shadow, blending: THREE.MultiplyBlending, toneMapped: false, transparent: true
        // 		// // 	} )
        // 		// // );
        // 		// // mesh.rotation.x = - Math.PI / 2;
        // 		// // mesh.renderOrder = 2;
        // 		// //model.add( mesh );
        // 		// scene.add( model );
        // 		gltf.scene.traverse(function (child) {
        // 			if (child instanceof THREE.Group) {
        // 				modelGroup = child
        // 			}
        // 			if ((child as THREE.Mesh).isMesh) {
        // 				child.castShadow = true
        // 				child.frustumCulled = false
        // 				;(child as THREE.Mesh).geometry.computeVertexNormals()
        // 			}
        // 		})
        // 		var model = gltf.scene;
        // 		scene.add( model );
        //    }, undefined, function ( e ) {
        // 	   console.error( e );
        //    } );
    }
    // function isSafari() {
    //     return !! navigator.userAgent.match( /Safari/i ) && ! navigator.userAgent.match( /Chrome/i );
    // }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    setMouseCoords(x, y) {
        this.mouseCoords.set((x / this.renderer.domElement.clientWidth) * 2 - 1, -(y / this.renderer.domElement.clientHeight) * 2 + 1);
        this.mouseMoved = true;
    }
    onPointerMove(event) {
        if (event.isPrimary === false)
            return;
        this.setMouseCoords(event.clientX, event.clientY);
    }
    render(timer) {
        this.renderer.render(this.scene, this.camera);
    }
    update() {
        requestAnimationFrame(updateAll);
        const delta = this.clock.getDelta();
        const timer = Date.now() * 0.01;
        this.cameraControls.update();
        // sphereGroup.rotation.y -= 0.002;
        // smallSphere.position.set(
        // 	Math.cos( timer * 0.1 ) * 30,
        // 	Math.abs( Math.cos( timer * 0.2 ) ) * 20 + 5,
        // 	Math.sin( timer * 0.1 ) * 30
        // );
        // smallSphere.rotation.y = ( Math.PI / 2 ) - timer * 0.1;
        // smallSphere.rotation.z = timer * 0.8;
        this.render((Date.now() - this.StartTime) * 0.001);
        this.composer.render();
    }
}
function updateAll() {
    SceneManager.instance().update();
}
function onWindowResize() {
    SceneManager.instance().onWindowResize();
}
function setMouseCoords(x, y) {
    SceneManager.instance().setMouseCoords(x, y);
}
function onPointerMove(event) {
    SceneManager.instance().onPointerMove(event);
}
export { SceneCar };
