//https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom.html

//https://github.com/mrdoob/three.js/blob/master/examples/webgl_mirror.html

//https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html

//https://threejs.org/editor/

// 구믈
//https://github.com/mrdoob/three.js/blob/master/examples/webgl_refraction.html    


import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Reflector } from 'three/examples/jsm/objects/Reflector';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';


import { EffectComposer } from 'three/examples/jsm//postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm//postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm//postprocessing/UnrealBloomPass.js';

import { WaterRefractionShader } from 'three/examples/jsm/shaders/WaterRefractionShader.js';
import { Debug } from "./Debug";

//import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder';


const MAP_NAMES = [
	'map',
	'aoMap',
	'emissiveMap',
	'glossinessMap',
	'metalnessMap',
	'normalMap',
	'roughnessMap',
	'specularMap',
  ];

  Debug.Log("2022");
let composer:any;
/////////////////////////////////////////////////////////////////////
const WIDTH = 512;
//const BOUNDS = 512;
const BOUNDS = 100;
const BOUNDS_HALF = BOUNDS * 0.5;
let StartTime = Date.now();
let mouseMoved = false;
const mouseCoords = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

let waterMesh;
let meshRay:any;
let gpuCompute:any;
//let heightmapVariable:any;
let waterUniforms:any;
let smoothShader:any;
let readWaterLevelShader;
let readWaterLevelRenderTarget;
let readWaterLevelImage;
const waterNormal = new THREE.Vector3();

const simplex = new SimplexNoise();



/////////////////////////////////////////////////////////////////////
// scene size
const SCRREN_WIDTH = window.innerWidth;
const SCRREN_HEIGHT = window.innerHeight;

// camera
const VIEW_ANGLE = 45;
const ASPECT = SCRREN_WIDTH / SCRREN_HEIGHT;
const NEAR = 1;
const FAR = 100;

const decalNormal = new THREE.TextureLoader().load( 'textures/decal/floor.jpg' );

const decalDiffuse = new THREE.TextureLoader().load( 'textures/decal/floor.jpg' );
decalDiffuse.wrapS = decalDiffuse.wrapT = THREE.RepeatWrapping;

let camera:any;
let  scene:any;
let renderer:any;
const clock = new THREE.Clock();

let cameraControls:any;

let sphereGroup:any;
let smallSphere:any;
let groundMirrorMaterial:any;

let model:any;
function init() {


	// renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( SCRREN_WIDTH, SCRREN_HEIGHT );
	renderer.outputEncoding = THREE.sRGBEncoding;
	//renderer.toneMapping = THREE.ACESFilmicToneMapping;

	renderer.toneMapping = THREE.ReinhardToneMapping;
	renderer.toneMappingExposure = 0.5;
	// scene
	scene = new THREE.Scene();

	// let dd = new RGBELoader();
	// //dd.load("data/moonless_golf_1k.hdr", ()=>{});
	// dd.load("data/moonless_golf_1k.hdr", function ( texture ) {

	// 	//texture.mapping = THREE.EquirectangularReflectionMapping;

	// 	//scene.background = texture;
	// 	//scene.environment = texture;

	// 	//scene.environment.mapping = THREE.EquirectangularReflectionMapping;
	

	// } );

	new RGBELoader()
	.setPath( 'data/' )
	//.load( 'moonless_golf_1k.hdr', function ( texture ) {
		.load( 'Test02.hdr', function ( texture ) {

		texture.mapping = THREE.EquirectangularReflectionMapping;

		scene.background = texture;
		scene.environment = texture;
	});

	// 	//render();

	// 	// model

		

	// } );


	

	//scene.environment = dd;

	//scene.environment.mapping = THREE.EquirectangularReflectionMapping;


	//scene.fog = new THREE.Fog( 0x333333, 1, 50 );

	// camera
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
	//x/y/x
	camera.position.set( 0, 2, 16 );

	cameraControls = new OrbitControls( camera, renderer.domElement );
	cameraControls.target.set( 0, 0, 0 );
	cameraControls.maxDistance = 50;
	cameraControls.minDistance = 2;
	cameraControls.update();

	const container:HTMLElement|null = document.getElementById( 'container' );
	

	////////////////////////////////////////////////////////////////////
	if (container!=null)
	{
		container.appendChild( renderer.domElement );
		container.style.touchAction = 'none';
		container.addEventListener( 'pointermove', onPointerMove, false );
	}
	window.addEventListener( 'resize', onWindowResize, false );


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

	 const renderScene = new RenderPass( scene, camera );

	 //const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
	 const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 0.1, 0.02, 0.04 );
	 bloomPass.threshold = params.bloomThreshold;
	 bloomPass.strength = params.bloomStrength;
	 bloomPass.radius = params.bloomRadius;

	 composer = new EffectComposer( renderer );
	 composer.addPass( renderScene );
	 composer.addPass( bloomPass );


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
	const dracoLoader = new DRACOLoader()
	dracoLoader.setDecoderPath('/js/libs/draco/')

	const KTX2_LOADER = new KTX2Loader()
	KTX2_LOADER.setTranscoderPath('/js/libs/basis/')

	// const KTX2_LOADER = new KTX2Loader( MANAGER ).setTranscoderPath( `${THREE_PATH}/examples/js/libs/basis/` );

	// const MANAGER = new LoadingManager();
	// const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`
	// const DRACO_LOADER = new DRACOLoader( MANAGER ).setDecoderPath( `${THREE_PATH}/examples/js/libs/draco/gltf/` );
	// const KTX2_LOADER = new KTX2Loader( MANAGER ).setTranscoderPath( `${THREE_PATH}/examples/js/libs/basis/` );


	const loader = new GLTFLoader();
	loader.setDRACOLoader(dracoLoader)
	.setCrossOrigin('anonymous')
	.setDRACOLoader( dracoLoader )
	.setKTX2Loader( KTX2_LOADER.detectSupport( renderer ) );
	//.setMeshoptDecoder( MeshoptDecoder );

	let modelGroup: THREE.Group
let modelDragBox: THREE.Mesh





const bodyMaterial = new THREE.MeshPhysicalMaterial( {
	color: 0xff0000, metalness: 1.0, roughness: 0.5, clearcoat: 1.0, clearcoatRoughness: 0.03, sheen: 0.5
} );

const detailsMaterial = new THREE.MeshStandardMaterial( {
	color: 0xffffff, metalness: 1.0, roughness: 0.5
} );

const glassMaterial = new THREE.MeshPhysicalMaterial( {
	color: 0xffffff, metalness: 0.25, roughness: 0, transmission: 1.0
} );


let geometry, material;

// reflector/mirror plane
geometry = new THREE.PlaneBufferGeometry( 50, 50 );
const groundMirror = new Reflector( geometry, { clipBias: 0.003, textureWidth: SCRREN_WIDTH, textureHeight: SCRREN_HEIGHT,color: 0x111111 } );


// let planeGeo = new THREE.PlaneBufferGeometry( 50, 50 );
// const mirrorMesh = new THREE.Mesh( planeGeo, glassMaterial );
// mirrorMesh.position.y=0.1;
// mirrorMesh.rotateX( - Math.PI / 2 );
// scene.add( mirrorMesh );

// groundMirror.add( mirrorMesh );
 groundMirror.rotateX( - Math.PI / 2 );

 groundMirror.position.y=0.1;

 //scene.add( groundMirror );


	loader.setKTX2Loader(KTX2_LOADER);

	
			loader.load( 'data/car0/ferrari.glb', function ( gltf ) {

					const carModel:any = gltf.scene.children[ 0 ];

					carModel.getObjectByName( 'body' ).material = bodyMaterial;

					carModel.getObjectByName( 'rim_fl' ).material = detailsMaterial;
					carModel.getObjectByName( 'rim_fr' ).material = detailsMaterial;
					carModel.getObjectByName( 'rim_rr' ).material = detailsMaterial;
					carModel.getObjectByName( 'rim_rl' ).material = detailsMaterial;
					carModel.getObjectByName( 'trim' ).material = detailsMaterial;

					carModel.getObjectByName( 'glass' ).material = glassMaterial;
					carModel.position.y=0.06;
				
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


				}, undefined, function ( e ) {

					console.error( e );

				} );



////
    loader.load( 'data/bg2/컨피규레이터.gltf', function ( gltf ) {

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



	}, undefined, function ( e ) {

		console.error( e );

	} );


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



function isSafari() {

	return !! navigator.userAgent.match( /Safari/i ) && ! navigator.userAgent.match( /Chrome/i );

}

function fillTexture( texture:any ) {

	const waterMaxHeight = 10;

	function noise( x:any, y:any ) {

		let multR = waterMaxHeight;
		let mult = 0.025;
		let r = 0;
		for ( let i = 0; i < 15; i ++ ) {

			r += multR * simplex.noise( x * mult, y * mult );
			multR *= 0.53 + 0.025 * i;
			mult *= 1.25;

		}
		return r;
	}

	const pixels = texture.image.data;

	let p = 0;
	for ( let j = 0; j < WIDTH; j ++ ) {

		for ( let i = 0; i < WIDTH; i ++ ) {

			const x = i * 128 / WIDTH;
			const y = j * 128 / WIDTH;

			pixels[ p + 0 ] = noise( x, y );
			pixels[ p + 1 ] = pixels[ p + 0 ];
			pixels[ p + 2 ] = 0;
			pixels[ p + 3 ] = 1;

			p += 4;

		}

	}

}

// function smoothWater() {

// 	const currentRenderTarget = gpuCompute.getCurrentRenderTarget( heightmapVariable );
// 	const alternateRenderTarget = gpuCompute.getAlternateRenderTarget( heightmapVariable );

// 	for ( let i = 0; i < 10; i ++ ) {

// 		smoothShader.uniforms[ "smoothTexture" ].value = currentRenderTarget.texture;
// 		gpuCompute.doRenderTarget( smoothShader, alternateRenderTarget );

// 		smoothShader.uniforms[ "smoothTexture" ].value = alternateRenderTarget.texture;
// 		gpuCompute.doRenderTarget( smoothShader, currentRenderTarget );

// 	}

//}
function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function setMouseCoords( x:any, y:any ) {

	mouseCoords.set( ( x / renderer.domElement.clientWidth ) * 2 - 1, - ( y / renderer.domElement.clientHeight ) * 2 + 1 );
	mouseMoved = true;

}

function onPointerMove( event:any ) {

	if ( event.isPrimary === false ) return;

	setMouseCoords( event.clientX, event.clientY );

}
/////////////////////////////////////
function fillScene() {

	const planeGeo = new THREE.PlaneBufferGeometry( 100.1, 100.1 );

	let geometry, material;

	// reflector/mirror plane
	geometry = new THREE.PlaneBufferGeometry( 100, 100 );
	const groundMirror = new Reflector( geometry, { clipBias: 0.003, textureWidth: SCRREN_WIDTH, textureHeight: SCRREN_HEIGHT } );

	const mirrorMesh = new THREE.Mesh( planeGeo, groundMirrorMaterial );

	groundMirror.add( mirrorMesh );
	groundMirror.rotateX( - Math.PI / 2 );
	scene.add( groundMirror );

	sphereGroup = new THREE.Object3D();
	scene.add( sphereGroup );

	geometry = new THREE.CylinderBufferGeometry( 0.1, 15 * Math.cos( Math.PI / 180 * 30 ), 0.1, 24, 1 );
	material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x444444 } );
	const sphereCap = new THREE.Mesh( geometry, material );
	sphereCap.position.y = - 15 * Math.sin( Math.PI / 180 * 30 ) - 0.05;
	sphereCap.rotateX( - Math.PI );

	geometry = new THREE.SphereBufferGeometry( 15, 24, 24, Math.PI / 2, Math.PI * 2, 0, Math.PI / 180 * 120 );
	const halfSphere = new THREE.Mesh( geometry, material );
	halfSphere.add( sphereCap );
	halfSphere.rotateX( - Math.PI / 180 * 135 );
	halfSphere.rotateZ( - Math.PI / 180 * 20 );
	halfSphere.position.y = 7.5 + 15 * Math.sin( Math.PI / 180 * 30 );

	sphereGroup.add( halfSphere );

	geometry = new THREE.IcosahedronBufferGeometry( 5, 0 );
	material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x333333, flatShading: true } );
	smallSphere = new THREE.Mesh( geometry, material );
	scene.add( smallSphere );

	// walls
	// 천장
	const planeTop = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0xffffff } ) );
	planeTop.position.y = 100;
	planeTop.rotateX( Math.PI / 2 );
	scene.add( planeTop );

	// 앞에 보이는 벽
	const planeBack = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0xffffff } ) );
	planeBack.position.z = - 50;
	planeBack.position.y = 50;
	scene.add( planeBack );


	// 뒤벽
	const planeFront = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0x7f7fff } ) );
	planeFront.position.z = 50;
	planeFront.position.y = 50;
	planeFront.rotateY( Math.PI );
	scene.add( planeFront );

	// 옆
	const planeRight = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0x00ff00 } ) );
	planeRight.position.x = 50;
	planeRight.position.y = 50;
	planeRight.rotateY( - Math.PI / 2 );
	scene.add( planeRight );

	// 옆
	const planeLeft = new THREE.Mesh( planeGeo, new THREE.MeshPhongMaterial( { color: 0xff0000 } ) );
	planeLeft.position.x = - 50;
	planeLeft.position.y = 50;
	planeLeft.rotateY( Math.PI / 2 );
	scene.add( planeLeft );


	const mainLight1 = new THREE.AmbientLight(0xffffff, 1.3);
	mainLight1.position.y = 60;
	scene.add( mainLight1 );
	
	// lights
	const mainLight = new THREE.PointLight( 0xffffff, 0.5, 1000 );
	mainLight.position.y = 60;
	scene.add( mainLight );

	 const greenLight = new THREE.PointLight( 0xffffff, 0.5, 1000 );
	 greenLight.position.set( 550, 50, 0 );
	 scene.add( greenLight );

	 const redLight = new THREE.PointLight( 0xffffff, 0.5, 1000 );
	 redLight.position.set( - 550, 50, 0 );
	 scene.add( redLight );

	 const blueLight = new THREE.PointLight( 0xffffff, 0.5, 1000 );
	 blueLight.position.set( 0, 50, 550 );
	 scene.add( blueLight );

	// // lights
	// const mainLight1 = new THREE.AmbientLight(0xffffff, 0.4);
	// mainLight1.position.y = 60;
	// scene.add( mainLight1 );
	
	// // lights
	// const mainLight = new THREE.PointLight( 0xcccccc, 1.5, 250 );
	// mainLight.position.y = 60;
	// scene.add( mainLight );

	//  const greenLight = new THREE.PointLight( 0x00ff00, 0.25, 1000 );
	//  greenLight.position.set( 550, 50, 0 );
	//  scene.add( greenLight );

	//  const redLight = new THREE.PointLight( 0xff0000, 0.25, 1000 );
	//  redLight.position.set( - 550, 50, 0 );
	//  scene.add( redLight );

	//  const blueLight = new THREE.PointLight( 0x7f7fff, 0.25, 1000 );
	//  blueLight.position.set( 0, 50, 550 );
	//  scene.add( blueLight );

}

function render(timer:number) {
	renderer.render( scene, camera );

}

function update() {

	requestAnimationFrame( update );

	const delta = clock.getDelta();
	const timer = Date.now() * 0.01;

	cameraControls.update();

	// sphereGroup.rotation.y -= 0.002;

	// smallSphere.position.set(
	// 	Math.cos( timer * 0.1 ) * 30,
	// 	Math.abs( Math.cos( timer * 0.2 ) ) * 20 + 5,
	// 	Math.sin( timer * 0.1 ) * 30
	// );
	// smallSphere.rotation.y = ( Math.PI / 2 ) - timer * 0.1;
	// smallSphere.rotation.z = timer * 0.8;

	render( (Date.now() - StartTime)*0.001 );

	composer.render();

}

init();
//fillScene();
update();