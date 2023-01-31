import * as THREE from './three.module.js';
import { OrbitControls} from './OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
const controls = new OrbitControls( camera, renderer.domElement );
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

firstLayer(500,1,500);
house();
//secondLayer(240,50,240);
function firstLayer(height,weight,depth){
const waterTexture = new THREE.TextureLoader().load("./assets/textures/water.jpg")
const lowerLayerGeometry = new THREE.BoxGeometry(height,weight,depth);
const lowerLayerMaterial = new THREE.MeshBasicMaterial({color: 'green'});
const lowerLayer = new THREE.Mesh(lowerLayerGeometry,lowerLayerMaterial);
scene.add(lowerLayer);
lowerLayer.position.z = 5;
return lowerLayer;
}
/*function secondLayer(height,weight,depth){
const SecondLayerGeometry = new THREE.BoxGeometry(height,weight,depth);
const SecondLayerMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
const secondLayer = new THREE.Mesh(SecondLayerGeometry,SecondLayerMaterial);
scene.add(secondLayer);
secondLayer.position.y = 8;
return secondLayer;
}*/
function houseFoundation(){
  const stoneTexture = new THREE.TextureLoader().load("./assets/textures/foundation-stone.jpg")
  const foundationGeometry = new THREE.CapsuleGeometry(1,7,1,4);
  const foundationMaterial = new THREE.MeshBasicMaterial({color: 'white'});
  const foundation = new THREE.Mesh(foundationGeometry,foundationMaterial);
  return foundation;
}
function houseRoofUpper(){
  const upperRoofGeometry = new THREE.CylinderGeometry(7,7,12,3,1);
  const upperRoofMaterial = new THREE.MeshBasicMaterial({color:'rgb(146,156,93)'});
  const upperRoof = new THREE.Mesh(upperRoofGeometry,upperRoofMaterial);
  return upperRoof;
}

function windows(height,weight,depth){
  const windowsGeometry = new THREE.BoxGeometry(height,weight,depth);
  const windowsMaterial = new THREE.MeshBasicMaterial({color: 'yellow'});
  const windows = new THREE.Mesh(windowsGeometry,windowsMaterial);

  return windows;

}
function windowsBorders(height,weight,depth){
  const windowBorderGeometry = new THREE.BoxGeometry(height,weight,depth);
  const windowBorderMaterials = new THREE.MeshBasicMaterial({color: 'brown'});
  const windowsBorder = new THREE.Mesh(windowBorderGeometry,windowBorderMaterials);
  return windowsBorder;
}
function windowsnoLights(height,weight,depth){
  const windowNoLightsGeometry = new THREE.BoxGeometry(height,weight,depth);
  const windowNoLightsMaterial = new THREE.MeshBasicMaterial({color: 'black'});
  const windowsnoLights = new THREE.Mesh(windowNoLightsGeometry,windowNoLightsMaterial);
  return windowsnoLights;
}
function house(){
  const houseGroup = new THREE.Group();

  const houseLowerGeometry = new THREE.BoxGeometry (15,10,15);
  const houseLowerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(146,156,93)'});
  const houseBody = new THREE.Mesh(houseLowerGeometry,houseLowerMaterial);
  houseBody.position.y = 3;
  houseBody.rotation.y = 11.9;
  const houseMiddleGeometry = new THREE.BoxGeometry(13,5,13);
  const houseMiddleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(146,156,93)'});
  const houseMiddle = new THREE.Mesh(houseMiddleGeometry,houseMiddleMaterial);
  houseMiddle.position.y = 14;
  houseMiddle.rotation.y = 11.9;

  const roofLowerGeometry = new THREE.CylinderGeometry(10,20,5,4);
  const roofLowerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(15,138,43)'});
  const roofLower = new THREE.Mesh(roofLowerGeometry,roofLowerMaterial);
  roofLower.position.y = 10;

  roofLower.rotation.y = 0.1;
  
  const roofMiddleGeoemetry = new THREE.CylinderGeometry(9,14,5,4)
  const roofMiddleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(15,138,43)'})
  const roofMiddle = new THREE.Mesh(roofMiddleGeoemetry,roofMiddleMaterial);
  roofMiddle.position.y = 19;
  roofMiddle.rotation.y = 0.1;
  
  const roofUpper = houseRoofUpper();
  roofUpper.position.y = 22.5;
  roofUpper.rotation.y = 3.1;
  roofUpper.rotation.x = 240.35;
  roofUpper.rotation.z = 0.9;
  //roofUpper.scale.set(1,1,1);

  const roofWallSenGeometry = new THREE.CylinderGeometry(8,8,11,3,1);
  const roofWallSenMaterial = new THREE.MeshBasicMaterial({color: 'white'});
  const roofWallSen = new THREE.Mesh(roofWallSenGeometry,roofWallSenMaterial);
  roofWallSen.position.y = 22.8;
  roofWallSen.rotation.y = 3.1;
  roofWallSen.rotation.x = 240.35;
  roofWallSen.rotation.z = 0.9;

  const windowWallGeometry = new THREE.BoxGeometry(1,3,3);
  const windowWallMaterial = new THREE.MeshBasicMaterial({color: 'rgb(15,138,43)'});
  const windowWall = new THREE.Mesh(windowWallGeometry,windowWallMaterial);
  windowWall.position.y = 24;
  windowWall.position.z = 4;
  windowWall.position.x = 6;
  windowWall.rotation.y = 2.5;
  windowWall.rotation.z = -1;

  const WindowSecondFloorGeometry = new THREE.BoxGeometry(1,3,3);
  const WindowSecondFloorMaterial = new THREE.MeshBasicMaterial({color: 'blue'});
  const windowSecondFloor = new THREE.Mesh(WindowSecondFloorGeometry,WindowSecondFloorMaterial);
  windowSecondFloor.position.y = 15;
  windowSecondFloor.position.z = 8.2;
  windowSecondFloor.position.x = -1;
  windowSecondFloor.rotation.y = -2.2;
  windowSecondFloor.rotation.z = 1;

  const trashBoxGeometry = new THREE.BoxGeometry(5,5,5);
  const trashBoxMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
  const trashBox = new THREE.Mesh(trashBoxGeometry,trashBoxMaterial);
  trashBox.position.y = 1;
  trashBox.position.x = -3;
  trashBox.position.z = 8.2;
  trashBox.rotation.y = -2.2;

  const trashBoxHeadGeometry = new THREE.BoxGeometry(5,1,5);
  const trashBoxHeadMaterial = new THREE.MeshBasicMaterial({color: 'green'});
  const trashBoxHead = new THREE.Mesh(trashBoxHeadGeometry,trashBoxHeadMaterial);
  trashBoxHead.position.y = 4;
  trashBoxHead.position.x = -3;
  trashBoxHead.position.z = 8.2;
  trashBoxHead.rotation.y = -2.2;

  const windowsLightOn = windows(1,3,3);
  const windowsLightOnBorder = windowsBorders(1,4,4);
  windowsLightOn.position.y = 4;
  windowsLightOn.position.x = -8;
  windowsLightOn.position.z = 3;
  windowsLightOn.rotation.y = -2.2;
  windowsLightOnBorder.position.y =4;
  windowsLightOnBorder.position.x = -7.9;
  windowsLightOnBorder.position.z = 3;
  windowsLightOnBorder.rotation.y = -2.2;

  const secondWindowsLightOn = windows(3,2,1);
  const secondWindowsLightOnBorder = windowsBorders(4,3,1);

  secondWindowsLightOn.position.y = 3;
  secondWindowsLightOn.position.x = 8;
  secondWindowsLightOn.position.z = 2.5;
  secondWindowsLightOn.rotation.y = -2.2;

  secondWindowsLightOnBorder.position.y =3;
  secondWindowsLightOnBorder.position.x =7.8;
  secondWindowsLightOnBorder.position.z =2;
  secondWindowsLightOnBorder.rotation.y = -2.2;

  const firstFloorWindowLightsOff = windowsnoLights(3,2,1);
  firstFloorWindowLightsOff.position.y = 3;
  firstFloorWindowLightsOff.position.x = -11;
  firstFloorWindowLightsOff.position.z = 1;
  firstFloorWindowLightsOff.rotation.y = -2.2;

  const foundationfirstFloorFrontRight = houseFoundation();
  foundationfirstFloorFrontRight.position.y = 3.6;
  foundationfirstFloorFrontRight.position.x = 18;
  foundationfirstFloorFrontRight.position.z = -2;
  const foundationfirstFloorFrontLeft = houseFoundation();
  foundationfirstFloorFrontLeft.position.y = 3.5;
  foundationfirstFloorFrontLeft.position.x = 2; // 3
  foundationfirstFloorFrontLeft.position.z = 16;
  const foundationfirstFloorBackLeft = houseFoundation();
  foundationfirstFloorBackLeft.position.y = 3.5;
  foundationfirstFloorBackLeft.position.x = -17; // -15
  foundationfirstFloorBackLeft.position.z = 1;
 const foundationfirstFloorBackRight = houseFoundation();
  foundationfirstFloorBackRight.position.y= 3.5;
  foundationfirstFloorBackRight.position.x= -2;
  foundationfirstFloorBackRight.position.z = -18.5;

  //second floor foundation
  const foundationSecondFloorFrontRight = houseFoundation();
  foundationSecondFloorFrontRight.position.y = 12.5;
  foundationSecondFloorFrontRight.position.x = 12;
  foundationSecondFloorFrontRight.position.z = -2;//
  const foundationSecondFloorFrontLeft = houseFoundation();
  foundationSecondFloorFrontLeft.position.y = 12.5;
  foundationSecondFloorFrontLeft.position.z = 12.2;
  foundationSecondFloorFrontLeft.position.x = 1.7;
  const foundationSecondFloorBackRight = houseFoundation();
  foundationSecondFloorBackRight.position.y = 12.5;
  foundationSecondFloorBackRight.position.x = -12;
  foundationSecondFloorBackRight.position.z = 2;
  const foundationSecondFloorBackLeft = houseFoundation();
  foundationSecondFloorBackLeft.position.y = 12.5;
  foundationSecondFloorBackLeft.position.x = -2;
  foundationSecondFloorBackLeft.position.z = -12;

  houseGroup.add(foundationSecondFloorBackLeft);
  houseGroup.add(foundationSecondFloorBackRight);
  houseGroup.add(foundationSecondFloorFrontLeft);
  houseGroup.add(foundationSecondFloorFrontRight);
  houseGroup.add(foundationfirstFloorBackRight);
  houseGroup.add(foundationfirstFloorBackLeft);
  houseGroup.add(foundationfirstFloorFrontLeft);
  houseGroup.add(foundationfirstFloorFrontRight);
  houseGroup.add(houseMiddle);
  houseGroup.add(houseBody);
  houseGroup.add(roofLower);
  houseGroup.add(roofUpper);
  houseGroup.add(roofMiddle);
  houseGroup.add(roofWallSen);
  houseGroup.add(windowWall);
  houseGroup.add(windowSecondFloor);
  houseGroup.add(trashBox);
  houseGroup.add(trashBoxHead);
  houseGroup.add(windowsLightOn)
  houseGroup.add(secondWindowsLightOn);
  houseGroup.add(windowsLightOnBorder);
  houseGroup.add(secondWindowsLightOnBorder);
  houseGroup.add(firstFloorWindowLightsOff);
  houseGroup.position.y = 15;
  houseGroup.rotation.y = 3;
  //houseGroup.scale.set(2,2,2);
  scene.add(houseGroup);


  return houseBody;

}



function animate() {
  requestAnimationFrame(animate);
 
  controls.update();
  renderer.render(scene, camera);
}

animate();
