import * as THREE from "three";

import { CSS2DRenderer, CSS2DObject } from '../three-js/jsm/renderers/CSS2DRenderer.js';

let step = 0;

let camera,
  scene,
  renderer,
  textures = [],
  htmlElementRenderer, autoRotate = false;

let dragged = false,
  onPointerDownMouseX = 0,
  onPointerDownMouseY = 0,
  lon = 180,
  onPointerDownLon = 0,
  lat = 0,
  onPointerDownLat = 0,
  phi = 0,
  theta = 0;
const soundtrack = document.querySelector("#bgSoundTrack")

const clickTargetPositions = {
  1: {
    rightFrontBox: {
      lat: -18,
      lon: 205
    },
    centerFrontDividerBox: {
      lat: -55,
      lon: 180 
    },
    backSeatBottom: {
      lat: -80,
      lon: -5
    }
  },
  2: {
    center: {
      lat: -28,
      lon: 180
    },
    centerBackDividerBox: {
      lat: -82.3,
      lon: -172.7
    },
    backSeatBottom: {
      lat: -74,
      lon: -3.5
    }
  },
  3: {
    laptop: {
      points: [
        {
          lat: -24.6,
          lon: 167,
          texture: './assets/img/step-3-360/laptop_1.webp'
        },
        {
          lat: -24.6,
          lon: 200.7,
          texture: './assets/img/step-3-360/laptop_2.webp'
        },
        {
          lat: -34.9,
          lon: 332.7,
          texture: './assets/img/step-3-360/laptop_3.webp'
        }
      ]
    },
    headphone: {
      points: [
        {
          lat: -47.1,
          lon: 410.6,
          texture: './assets/img/step-3-360/headphone_1.webp'
        },
        {
          lat: -44.3,
          lon: -48.00,
          texture: './assets/img/step-3-360/headphone_3.webp'
        },
        {
          lat: -47,
          lon: 213.4,
          texture: './assets/img/step-3-360/headphone_2.webp'
        },
      ]
    },
    tablet: {
      points: [
        {
          lat: -37.2,
          lon: 392.0,
          texture: './assets/img/step-3-360/tablet_1.webp' 
        },
        {
          lat: -35.2,
          lon: 211.7,
          texture: './assets/img/step-3-360/tablet_2.webp' 
        },
        {
          lat: -27.3,
          lon: 140.39,
          texture: './assets/img/step-3-360/tablet_3.webp' 
        },
      ]
    },
    airCleaner: {
      points: [
        {
          lat: -24.6,
          lon: 167,
          texture: './assets/img/step-3-360/air_cleaner_1.webp'
        },
        {
          lat: -24.6,
          lon: 200.7,
          texture: './assets/img/step-3-360/air_cleaner_2.webp'
        },
        {
          lat: -34.9,
          lon: 332.7,
          texture: './assets/img/step-3-360/air_cleaner_3.webp'
        }
      ]
    },
    tumbler: {
      points: [
        {
          lat: -37.2,
          lon: 392.0,
          texture: './assets/img/step-3-360/tumbler_2.webp'
        },
        {
          lat: -35.2,
          lon: 211.7,
          texture: './assets/img/step-3-360/tumbler_3.webp'
        },
        {
          lat: -27.3,
          lon: 140.39,
          texture: './assets/img/step-3-360/tumbler_4.webp'
        },
        {
          lat: -55.2,
          lon: -10.8,
          texture: './assets/img/step-3-360/tumbler_1.webp'
        },
      ]
    },
    note: {
      points: [
        {
          lat: -37.2,
          lon: 392.0,
          texture: './assets/img/step-3-360/note_3.webp' 
        },
        {
          lat: -35.2,
          lon: 211.7,
          texture: './assets/img/step-3-360/note_1.webp'
        },
        {
          lat: -27.3,
          lon: 140.39,
          texture: './assets/img/step-3-360/note_2.webp'
        },
      ]
    },
    coffeePot: {
      points: [

        {
          lat: -24.6,
          lon: 167,
          texture: './assets/img/step-3-360/coffee_pot_1.webp'
        },
        {
          lat: -24.6,
          lon: 200.7,
          texture: './assets/img/step-3-360/coffee_pot_2.webp'
        },
        {
          lat: -34.9,
          lon: 332.7,
          texture: './assets/img/step-3-360/coffee_pot_3.webp'
        }
      ]
    },
    camera: {
      points: [
        {
          lat: -47.1,
          lon: 410.6,
          texture: './assets/img/step-3-360/camera_2.webp'
        },
        {
          lat: -44.3,
          lon: -48.00,
          texture: './assets/img/step-3-360/camera_3.webp'
        },
        {
          lat: -47,
          lon: 213.4,
          texture: './assets/img/step-3-360/camera_1.webp'
        },
        {
          lat: -70.6,
          lon: 304.3,
          texture: './assets/img/step-3-360/camera_4.webp'
        }
      ]
    },
    cushion: {
      points: [
        {
          lat: -47.1,
          lon: 410.6,
          texture: './assets/img/step-3-360/cushion_2.webp'
        },
        {
          lat: -44.3,
          lon: -48.00,
          texture: './assets/img/step-3-360/cushion_3.webp'
        },
        {
          lat: -47,
          lon: 213.4,
          texture: './assets/img/step-3-360/cushion_1.webp'
        }
      ]
    }
  }
};

init();
animate();

function init() {
  const container = document.getElementById("container");

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1100
  );

  textures = [];
  textures.push(new THREE.TextureLoader().load("assets/room-3-car-interior.webp", textureLoaded));


  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  htmlElementRenderer = new CSS2DRenderer();
  htmlElementRenderer.setSize( window.innerWidth, window.innerHeight );
  htmlElementRenderer.domElement.style.position = 'absolute';
  htmlElementRenderer.domElement.className = 'html-element-renderer';
  htmlElementRenderer.domElement.style.top = '0px';
  container.appendChild( htmlElementRenderer.domElement );

  updateScene();

  container.style.touchAction = "none";
  container.addEventListener("pointerdown", onPointerDown);

  document.addEventListener("wheel", onDocumentMouseWheel);
  document.addEventListener("dragstart", onDragStart);
  document.addEventListener("dragover", onDragOver);
  document.addEventListener("drop", onDrop);

  window.addEventListener("resize", onWindowResize);


  document.querySelectorAll(".itemWrap__img").forEach(work_item => {
    work_item.addEventListener("click", e => {

      if(document.querySelector(".itemWrap__item.active")){
        document.querySelector(".itemWrap__item.active").classList.remove("active")
      }
      work_item.closest(".itemWrap__item").classList.add('active')

      let itemName = e.target.getAttribute("data-item")


      if(itemName && clickTargetPositions[3][itemName]){
        // remove existing target points
        for (var i = scene.children.length - 1; i >= 0; i--) {
          if(scene.children[i].name.indexOf('target-point') > -1){
            scene.remove(scene.children[i])
          } 
        }

        // add new target points
        clickTargetPositions[3][itemName]['points'].forEach((point, i) => {
          
          const buttonElement = document.createElement( 'button' );
          buttonElement.className = 'target-point blink '+itemName;
          buttonElement.setAttribute('data-item-index', i)

          let labelPosition = getXYZByLatLon(point.lat, point.lon);
          const labelElement = new CSS2DObject( buttonElement );
          labelElement.name = 'target-point-'+itemName
          labelElement.position.set(labelPosition.x, labelPosition.y, labelPosition.z);
          scene.add( labelElement );
          labelElement.layers.set( 0 );

        });
      }

      
    })
  })

  const autoRotateDom = document.querySelector("#autoRotate")
  if(autoRotateDom){
    autoRotateDom.addEventListener("click", (e) => {
      autoRotate = !autoRotate
      if(autoRotate){
        e.target.innerText = "Auto Move Stop"
      } else {
        e.target.innerText = "Auto Move Start"
      }
    })
  }

  window.onload = function(){ 
    if(document.querySelector(".loading-wrap")){
      document.querySelector(".loading-wrap").style.display = "none" 
    }
    console.log(".")
    
    changeStep(0)
  }

  if(document.querySelector('#getLatLon')){
    document.querySelector('#getLatLon').addEventListener('click', () => {
      console.log(lat, lon)
    })
  }

  if(document.querySelector('#step_3_work_item .toggler')){
    document.querySelector('#step_3_work_item .toggler').addEventListener('click', () => {
      if(document.querySelector('#step_3_work_item').classList.contains('active')){
        document.querySelector('#step_3_work_item').classList.remove('active')
      } else {
        document.querySelector('#step_3_work_item').classList.add('active')
      }
    })
  }

  if(document.querySelector('#toggleVolume')){
    document.querySelector('#toggleVolume').addEventListener('click',(e)=>{

      let isPause = e.target.classList.contains("pause");
      if(soundtrack){
        soundtrack.volume = .2

        if(isPause){
          soundtrack.play()
          e.target.classList.remove("pause")
        } else {
          soundtrack.pause()
          e.target.classList.add("pause")
        }
      }

    })

  }
}

function textureLoaded(texture) {
    // onLoad callback
    let loading_item = document.createElement('span')
    loading_item.classList.add('loading-wrap__item')

    if(document.querySelector(".loading-wrap__progress")){
      document.querySelector(".loading-wrap__progress")
              .appendChild(loading_item)
    }
}

function changeStep(stepNumber = 0){
  step = stepNumber;

  lat = 0
  lon = 180

  if(step == 0){
    document.querySelector("#start_activity").style.display = "flex"

    document.querySelector("#start_activity .btn-start").addEventListener('click', (e) => {
      document.querySelector("#start_activity").style.display = "none"
      if(document.querySelector('#iq6_header .nav_area')){
        document.querySelector('#iq6_header .nav_area').style.display = "none"
      }
      if(document.querySelector('#iq6_header')){
        document.querySelector('#iq6_header').style.width = "200px"
      }

      document.querySelector("#optionBtn").style.display = "flex"
      document.querySelector("#optionBtn #toggleVolume").click()

      document.querySelector("#info1").style.display = "flex"

     
      document.querySelector("#info1").addEventListener('click', startStep1)
      function startStep1(e){
        if(!e.target.classList.contains('pop-layer__t1')){        
          document.querySelector("#info1").style.display = "none"
          changeStep(1)
        }
      }
    })
  } else if(step == 1){
    
  } else if(step == 2){
    document.querySelector("#popStart").style.display = "flex"
    document.querySelector("#popStart .btn-start").addEventListener('click', (e) => {
      document.querySelector("#popStart").style.display = "none"
      document.querySelector("#step1Box").style.display = "flex"
      document.querySelector("#step1Box .btn-ok").addEventListener('click', (e) => {
        document.querySelector("#step1Box").style.display = "none"
      })
    })
  } else if(step == 3){
    textures.push(new THREE.TextureLoader().load("assets/step-3-layer-2.webp"))
    document.querySelector("#step2Box").style.display = "flex"
    document.querySelector("#step2Box .btn-ok").addEventListener('click', (e) => {
      document.querySelector("#step2Box").style.display = "none"
      document.querySelector(".itemWrap").style.display = "flex"
    })

  
    document.querySelector('#itemWrap__btn').addEventListener('click', (e) => {
      document.querySelector(".itemWrap").style.display = "none"
      changeStep(4)
    })
    
  } else if(step == 4){

    autoRotate = true

    setTimeout(() => {
      autoRotate = false
      document.querySelector("#layerFinish").style.display = "flex"
      document.querySelector("#layerFinish #btnFinish").addEventListener('click', (e) => {
        document.querySelector("#layerFinish").style.display = "none"
        
        
        document.querySelector("#layerPop1").style.display = "flex"
        document.querySelector("#layerPop1 #badge").addEventListener('click', (e) => {
          setTimeout(()=>{
            document.querySelector("#layerPop1").style.display = "none"
            document.querySelector("#layerPop2").style.display = "flex"
          }, 2000)
        })
      })
    }, 20000)
  }

  updateScene()
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  htmlElementRenderer.setSize( window.innerWidth, window.innerHeight );
}

function onPointerDown(event) {
  if (event.isPrimary === false) return;

  onPointerDownMouseX = event.clientX;
  onPointerDownMouseY = event.clientY;

  onPointerDownLon = lon;
  onPointerDownLat = lat;

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
}

function onPointerMove(event) {
  if (event.isPrimary === false) return;

  lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
  lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
}

function onPointerUp(event) {
  if (event.isPrimary === false) return;

  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);
}

function onDocumentMouseWheel(event) {
  const fov = camera.fov + event.deltaY * 0.05;

  camera.fov = THREE.MathUtils.clamp(fov, 10, 75);

  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);

  if(autoRotate){
    lon += .2
  }

  update();
}

function createLayer(depth, texture) {
	texture.mapping = THREE.EquirectangularReflectionMapping;
    //texture.encoding = THREE.sRGBEncoding;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
		
  const geometry = new THREE.SphereGeometry(500 - depth, 300, 300);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });
  return new THREE.Mesh(geometry, material);
}

function updateScene() {
  scene = new THREE.Scene();
  
  document.querySelector(".html-element-renderer").innerHTML = ""

  if(clickTargetPositions[step]){
    Object.keys(clickTargetPositions[step]).forEach((ctp, index) => {
      let nextCtp = Object.keys(clickTargetPositions[step])[index+1]
      const buttonElement = document.createElement( 'button' );
      buttonElement.className = 'click-point '+ctp;
      buttonElement.setAttribute("data-ctp", ctp);

      let labelPosition = getXYZByLatLon(clickTargetPositions[step][ctp].lat, clickTargetPositions[step][ctp].lon);
      const labelElement = new CSS2DObject( buttonElement );
      labelElement.position.set(labelPosition.x, labelPosition.y, labelPosition.z);
      scene.add( labelElement );
      labelElement.layers.set( 0 );

      buttonElement.addEventListener('click', (e) => {
        if(step == 1){

          document.querySelector(`#pop${index+1}`).style.display = "flex"
          if(document.querySelector(`#pop${index+1} .btn-closed`)){          
            document.querySelector(`#pop${index+1} .btn-closed`).addEventListener('click', (e) => {
              buttonElement.setAttribute('disabled', true)
              document.querySelector(`#pop${index+1}`).style.display = "none"
              
              if(
                (typeof nextCtp == 'undefined' || document.querySelector(`.click-point.${nextCtp}:is([disabled])`)) && 
                document.querySelectorAll('.click-point:not([disabled])').length > 0
              ){
                nextCtp = document.querySelector('.click-point:not([disabled])').getAttribute("data-ctp")
              }

              if(nextCtp){
                lat = clickTargetPositions[step][nextCtp].lat
                lon = clickTargetPositions[step][nextCtp].lon
              }

              if(document.querySelectorAll('.click-point:not([disabled])').length == 0){
                changeStep(2)
              }
            })
          }
        } else if(step == 2){
          document.querySelector(`#setupPop${index+1}`).style.display = "flex"
          if(document.querySelector(`#setupPop${index+1} .btn-closed`)){
            document.querySelector(`#setupPop${index+1} .btn-closed`).addEventListener('click', closeStep2ClickTargetPopup)
          }
          if(document.querySelector(`#setupPop${index+1} .btn-setup`)){
            document.querySelector(`#setupPop${index+1} .btn-setup`).addEventListener('click', closeStep2ClickTargetPopup)
          }

          function closeStep2ClickTargetPopup(e) {
            buttonElement.setAttribute('disabled', true)
            document.querySelector(`#setupPop${index+1}`).style.display = "none"
            
            document.querySelector(`#setupPop${index+1}PlayWrap`).style.display = "flex"
            document.querySelector(`#setupPop${index+1}PlayWrap video`).play()

            if(document.querySelector(`#setupPop${index+1}PlayWrap .btn-closed`)){
              document.querySelector(`#setupPop${index+1}PlayWrap .btn-closed`).addEventListener('click', closePopPlayVideo)  
            }
            if(document.querySelector(`#setupPop${index+1}PlayWrap video`)){
              document.querySelector(`#setupPop${index+1}PlayWrap video`).addEventListener('ended', closePopPlayVideo)  
            }

            function closePopPlayVideo(e) {
              document.querySelector(`#setupPop${index+1}PlayWrap`).style.display = "none"
              document.querySelector(`#setupPop${index+1}PlayWrap video`).pause()
              
              if(
                (typeof nextCtp == 'undefined' || document.querySelector(`.click-point.${nextCtp}:is([disabled])`)) && 
                document.querySelectorAll('.click-point:not([disabled])').length > 0
              ){
                nextCtp = document.querySelector('.click-point:not([disabled])').getAttribute("data-ctp")
              }

              if(nextCtp){
                lat = clickTargetPositions[step][nextCtp].lat
                lon = clickTargetPositions[step][nextCtp].lon
              }

              if(document.querySelectorAll('.click-point:not([disabled])').length == 0){
                changeStep(3)
              }
            }
            
          }
        }
      })
    })
  }
  
  textures.forEach((texture, index) => {
    const layer = createLayer(index, texture);

    scene.add(layer)
  });
}

function update() {
  let position = getXYZByLatLon(lat, lon);

  const x = position.x;
  const y = position.y;
  const z = position.z;

  camera.lookAt(x, y, z);

  renderer.render(scene, camera);
  htmlElementRenderer.render( scene, camera );
}

function getXYZByLatLon(internalLat, internalLon){  
  // console.log(internalLat, internalLon)

  internalLat = Math.max(-85, Math.min(85, internalLat));
  phi = THREE.MathUtils.degToRad(90 - internalLat);
  theta = THREE.MathUtils.degToRad(internalLon);

  let position = {
    x: 500 * Math.sin(phi) * Math.cos(theta),
    y: 500 * Math.cos(phi),
    z: 500 * Math.sin(phi) * Math.sin(theta)
  }

  return position
}

function onDragStart(event) {
  dragged = event.target;
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  let dropzone = event.target;
  
  let itemName = dragged.getAttribute("data-item")
  let dropzoneIndex = dropzone.getAttribute("data-item-index")

  if (
    dragged.className === "itemWrap__img" && 
    dropzone.classList.contains('target-point') &&
    dropzone.classList.contains(itemName)
  ) {
    

    if(itemName && clickTargetPositions[3][itemName] && dropzoneIndex != null){
      textures.push(new THREE.TextureLoader().load(`${clickTargetPositions[3][itemName]['points'][dropzoneIndex].texture}?v=4`));
      
      /* hide other item's same point*/
      let currentPoint = clickTargetPositions[3][itemName]['points'][dropzoneIndex]
      Object.keys(clickTargetPositions[3]).map(item => {
        clickTargetPositions[3][item]['points'] = clickTargetPositions[3][item]['points'].filter(ip => {
          return (ip.lat == currentPoint.lat && ip.lon == currentPoint.lon)?false:true;
        })
      })
    }

    dragged.setAttribute("draggable", false)
    dragged.parentElement.classList.add('out')
    dragged.closest(".itemWrap__item").classList.remove('active')
    dragged.remove()


    updateScene();

    if(document.querySelectorAll('.itemWrap__item .thumb.out').length >= 3 && document.querySelector('#itemWrap__btn')){
      document.querySelector('#itemWrap__btn').removeAttribute('disabled')
    }
  }
}