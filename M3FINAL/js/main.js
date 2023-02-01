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
//camera.lookAt(1,20,1);
firstLayer(500,1,500);
house();
secondLayerLeft();
secondLayer(60,20,100);
grass(128,1,100);
roadBuild();
fenceBuild();
treeBuild();
//wallBuild();
electricPoleBuild();
bigHouse();

/*

@Goal When all Object is Added
Change All MeshBasicMaterial to MeshStandardMaterial
Add Pink Wood Texture On walls
Add Dark Green Wood Textutre on roofs.
First House
Add Lights on windows();
Create A box cloud
Add Snow Particle. Use White color

*/

//Update Second Laters once all object is finish
function firstLayer(height,width,depth){
const waterTexture = new THREE.TextureLoader().load("./assets/textures/water.jpg")
const lowerLayerGeometry = new THREE.BoxGeometry(height,width,depth);
const lowerLayerMaterial = new THREE.MeshBasicMaterial({color: 'green'});
const lowerLayer = new THREE.Mesh(lowerLayerGeometry,lowerLayerMaterial);
scene.add(lowerLayer);
lowerLayer.position.z = 5;
return lowerLayer;
}

function secondLayer(height,width,depth){
const SecondLayerGeometry = new THREE.BoxGeometry(height,width,depth);
const SecondLayerMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
const secondLayer = new THREE.Mesh(SecondLayerGeometry,SecondLayerMaterial);
scene.add(secondLayer);
secondLayer.position.y = 8;
return secondLayer;
}

function secondLayerLeft(){
  const secondLayerLeftPart = secondLayer(60,20,100);
  secondLayerLeftPart.position.x = -60;
  return secondLayerLeftPart;
}

function grass(height,width,depth){
  //add grass texture
  //Use Road Bump on Road.
  const grassGeometry = new THREE.BoxGeometry(height,width,depth);
  const grassMaterial = new THREE.MeshBasicMaterial({color: 'green'});
  const grass = new THREE.Mesh(grassGeometry,grassMaterial);
  scene.add(grass);
  grass.position.y = 18;
  grass.position.x = -35;
  return grass;
}

function electricPole(radi,length){
  //change to standard
  const poleGeometry = new THREE.CapsuleGeometry(radi,length,8,8);
  const poleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(245,200,79)'});
  const pole = new THREE.Mesh(poleGeometry,poleMaterial);
  return pole; 
}
function electricLightsPole(radi,length){
  const lightsPoleGeometry = new THREE.CapsuleGeometry(radi,length,8,8);
  const lightsPoleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(159,131,52)'});
  const lightsPole = new THREE.Mesh(lightsPoleGeometry,lightsPoleMaterial);
  return lightsPole; 
}
function PoleLight(radiTop,radiBottom,height){
  const PoleLightBulbGeometry = new THREE.CylinderGeometry(radiTop,radiBottom,height,8,1);
  const PoleLightBulbMaterial = new THREE.MeshBasicMaterial({color: 'rgb(159,131,52)'});
  const PoleLightBulb = new THREE.Mesh(PoleLightBulbGeometry,PoleLightBulbMaterial);
  return PoleLightBulb;
}
function boardSignBorder(height,width,depth){
  const signBoardBorderGeometry = new THREE.BoxGeometry(height,width,depth);
  const signBoardBorderMaterial = new THREE.MeshBasicMaterial({color: 'rgb(161,118,0)'});
  const signBoardBorder = new THREE.Mesh(signBoardBorderGeometry,signBoardBorderMaterial);
  return signBoardBorder;
}
function boardLink(height,width,depth){
  const boardLinkWoodGeometry = new THREE.BoxGeometry(height,width,depth);
  const boardLinkWoodMaterial = new THREE.MeshBasicMaterial({color: 'rgb(161,118,0)'});
  const boardLinkWood = new THREE.Mesh(boardLinkWoodGeometry,boardLinkWoodMaterial);
  return boardLinkWood;
}
function cityWall(height,width,depth){
  //add reddish wood texture
  const cityWallGeometry = new THREE.BoxGeometry(height,width,depth);
  const cityWallMaterial = new THREE.MeshBasicMaterial({color: 'brown'});
  const cityWall = new THREE.Mesh(cityWallGeometry,cityWallMaterial);
  return cityWall;
}
function cityWallRoof(height,width,depth){
  //light brownish texture
  const cityWallRoofGeometry = new THREE.BoxGeometry(height,width,depth);
  const cityWallRoofMaterial = new THREE.MeshBasicMaterial({color: 'rgb(255,178,102)'});
  const cityWallRoof = new THREE.Mesh(cityWallRoofGeometry,cityWallRoofMaterial);
  return cityWallRoof
}
function wallTubes(radi,length,capSegment){
  //grayish metal texture
  const wallTubesGeometry = new THREE.CapsuleGeometry(radi,length,capSegment);
  const wallTubesMaterial = new THREE.MeshBasicMaterial({color: 'white'});
  const wallTubes = new THREE.Mesh(wallTubesGeometry,wallTubesMaterial);
  return wallTubes;
}
function road(height,width,depth){
  //add light texture brick
  const roadGeometry = new THREE.BoxGeometry(height,width,depth);
  const roadMaterial = new THREE.MeshBasicMaterial({color: 'white'});
  const road = new THREE.Mesh(roadGeometry,roadMaterial);
  return road;
}
function roadBump(height,width,depth){
  //add light brown stone brick color
  const roadBumpGeometry = new THREE.BoxGeometry(height,width,depth);
  const roadBumpMaterial = new THREE.MeshBasicMaterial({color: 'gray'})
  const roadBump = new THREE.Mesh(roadBumpGeometry,roadBumpMaterial);
  return roadBump;
}
function fence(height,width,depth){
  //add light wood texture
  const fenceGeometry = new THREE.BoxGeometry(height,width,depth);
  const fenceMaterial = new THREE.MeshBasicMaterial({color: 'brown'});
  const fence = new THREE.Mesh(fenceGeometry,fenceMaterial);
  return fence;
}
function treeWood(height,width,depth){
  //change color to RGB brownish
  const treeWoodGeometry = new THREE.BoxGeometry(height,width,depth);
  const treeWoodMaterial = new THREE.MeshBasicMaterial({color: 'rgb(101,80,24)'});
  const treeWood = new THREE.Mesh(treeWoodGeometry,treeWoodMaterial);
  return treeWood;
}
function treeWoodLeaf(height,width,depth){
  //find green colored Leaf texture
  const treeWoodLeafGeometry = new THREE.BoxGeometry(height,width,depth);
  const treeWoodLeafMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
  const treeWoodLeaf = new THREE.Mesh(treeWoodLeafGeometry,treeWoodLeafMaterial);
  return treeWoodLeaf;
}
function treeWoodLeafSnow(height,width,depth){
  //snow colored leaf texture
  const treeWoodLeafSnowGeometry = new THREE.BoxGeometry(height,width,depth);
  const treeWoodLeafSnowMaterial = new THREE.MeshBasicMaterial({color:'white'});
  const treeWoodLeafSnow = new THREE.Mesh(treeWoodLeafSnowGeometry,treeWoodLeafSnowMaterial);
  return treeWoodLeafSnow;
}
function houseFoundation(){
  const stoneTexture = new THREE.TextureLoader().load("./assets/textures/foundation-stone.jpg")
  const foundationGeometry = new THREE.CapsuleGeometry(1,7,1,4);
  const foundationMaterial = new THREE.MeshBasicMaterial({color: 'white'});
  const foundation = new THREE.Mesh(foundationGeometry,foundationMaterial);
  return foundation;
}
function houseRoofUpper(){
  //brownish wooden texture
  const upperRoofGeometry = new THREE.CylinderGeometry(7,7,12,3,1);
  const upperRoofMaterial = new THREE.MeshBasicMaterial({color:'rgb(146,156,93)'});
  const upperRoof = new THREE.Mesh(upperRoofGeometry,upperRoofMaterial);
  return upperRoof;
}

function windows(height,width,depth){
  const windowsGeometry = new THREE.BoxGeometry(height,width,depth);
  const windowsMaterial = new THREE.MeshBasicMaterial({color: 'yellow'});
  const windows = new THREE.Mesh(windowsGeometry,windowsMaterial);
  return windows;

}

function windowsBorders(height,width,depth){
  const windowBorderGeometry = new THREE.BoxGeometry(height,width,depth);
  const windowBorderMaterials = new THREE.MeshBasicMaterial({color: 'gray'});
  const windowsBorder = new THREE.Mesh(windowBorderGeometry,windowBorderMaterials);
  return windowsBorder;
}
function windowsBordersBigHouse(height,width,depth){
  const windowBorderBigHouseGeometry = new THREE.BoxGeometry(height,width,depth);
  const windowBorderBigHouseMaterials = new THREE.MeshBasicMaterial({color: 'brown'});
  const windowsBigHouseBorder = new THREE.Mesh(windowBorderBigHouseGeometry,windowBorderBigHouseMaterials);
  return windowsBigHouseBorder;
}
function windowsnoLights(height,width,depth){
  const windowNoLightsGeometry = new THREE.BoxGeometry(height,width,depth);
  const windowNoLightsMaterial = new THREE.MeshBasicMaterial({color: 'black'});
  const windowsnoLights = new THREE.Mesh(windowNoLightsGeometry,windowNoLightsMaterial);
  return windowsnoLights;
}
function bigHouseBlocks(height,width,depth){
  //add light wooden texture
  const bigHouseBlockGeometry = new THREE.BoxGeometry(height,width,depth);
  const bigHouseBlockMaterial = new THREE.MeshBasicMaterial({color: 'rgb(107,105,44)'})
  const bigHouseBlock = new THREE.Mesh(bigHouseBlockGeometry,bigHouseBlockMaterial);
  return bigHouseBlock;
}
function treeBuild(){
  const treeBuilding = new THREE.Group();

  const treeBehindSmallHouse = treeWood(5,80,8);
  treeBehindSmallHouse.position.x = -10;
  treeBehindSmallHouse.position.z = -30;
  treeBehindSmallHouse.rotation.y = 2;

  const treeBehindSmallHousePart = treeWood(5,30,10)
  treeBehindSmallHousePart.position.x = -10;
  treeBehindSmallHousePart.position.z = -30;
  treeBehindSmallHousePart.position.y = 10;

  const treeBehindSmallHouseLeaf = treeWoodLeaf(25,10,25);
  treeBehindSmallHouseLeaf.position.x = -10;
  treeBehindSmallHouseLeaf.position.z = -30;
  treeBehindSmallHouseLeaf.position.y = 40;

  const treeBehindSmallHouseLeafSnowSecond = treeWoodLeafSnow(25,10,25);
  treeBehindSmallHouseLeafSnowSecond.position.x = -20;
  treeBehindSmallHouseLeafSnowSecond.position.z = -30;
  treeBehindSmallHouseLeafSnowSecond.position.y = 42;
  treeBehindSmallHouseLeafSnowSecond.rotation.y = 2;
  const treeBehindSmallHouseLeafThird = treeWoodLeaf(25,10,30);
  treeBehindSmallHouseLeafThird.position.x = 2;
  treeBehindSmallHouseLeafThird.position.z = -30;
  treeBehindSmallHouseLeafThird.position.y = 43;
  treeBehindSmallHouseLeafThird.rotation.y = 1;


  const treeBehindBigHouse = treeWood(5,100,8);
  treeBehindBigHouse.position.x = -50;
  treeBehindBigHouse.position.z = -32;
  treeBehindBigHouse.rotation.y = 1;
  const treeBehindBigHousePart = treeWood(5,50,10);
  treeBehindBigHousePart.position.x = -50;
  treeBehindBigHousePart.position.z = -32;
  treeBehindBigHousePart.rotation.y = 1;
  const treeBehindBigHousePartLeaf = treeWoodLeaf(25,10,25);
  treeBehindBigHousePartLeaf.position.x = -47;
  treeBehindBigHousePartLeaf.position.z = -30;
  treeBehindBigHousePartLeaf.position.y = 50;
  treeBehindBigHousePartLeaf.rotation.y =1;
  const treeBehindBigHousePartLeafSecond = treeWoodLeaf(25,10,25);
  treeBehindBigHousePartLeafSecond.position.x = -51;
  treeBehindBigHousePartLeafSecond.position.z = -40;
  treeBehindBigHousePartLeafSecond.position.y = 50;
  treeBehindBigHousePartLeafSecond.rotation.y = 1;
  const treeBehindBigHousePartLeafSnow = treeWoodLeafSnow(25,10,25); 
  treeBehindBigHousePartLeafSnow.position.x = -60;
  treeBehindBigHousePartLeafSnow.position.z = -35;
  treeBehindBigHousePartLeafSnow.position.y = 52;
  treeBehindBigHousePartLeafSnow.rotation.y = 1;

  const treeRightSideSmallHouse = treeWood(5,40,5);
  treeRightSideSmallHouse.position.x = 20;
  treeRightSideSmallHouse.position.y = 20;
  treeRightSideSmallHouse.position.z = 15;
  const treeRightSideSmallHousePart = new treeWood(5,30,5);
  treeRightSideSmallHousePart.position.x = 20;
  treeRightSideSmallHousePart.position.y = 15;
  treeRightSideSmallHousePart.position.z = 15;
  treeRightSideSmallHousePart.rotation.y = 1;
  const treeRightSideSmallHouseLeaf = new treeWoodLeaf(25,10,25);
  treeRightSideSmallHouseLeaf.position.x = 20;
  treeRightSideSmallHouseLeaf.position.y = 40;
  treeRightSideSmallHouseLeaf.position.z = 15;
  treeRightSideSmallHouseLeaf.rotation.y = 2;
  const treeRightSideSmallHouseLeafSecond = new treeWoodLeaf(25,10,25);
  treeRightSideSmallHouseLeafSecond.position.x = 15;
  treeRightSideSmallHouseLeafSecond.position.y = 45;
  treeRightSideSmallHouseLeafSecond.position.z = 19;
  treeRightSideSmallHouseLeafSecond.rotation.y = 2;
  const treeRightSideSmallHouseLeafThird = new treeWoodLeafSnow(25,10,25);
  treeRightSideSmallHouseLeafThird.position.x = 25;
  treeRightSideSmallHouseLeafThird.position.y = 44;
  treeRightSideSmallHouseLeafThird.position.z = 9;
  treeRightSideSmallHouseLeafThird.rotation.y = 2;
  treeBuilding.add(treeRightSideSmallHouseLeafThird);
  treeBuilding.add(treeRightSideSmallHouseLeafSecond);
  treeBuilding.add(treeRightSideSmallHouseLeaf);
  treeBuilding.add(treeRightSideSmallHousePart);
  treeBuilding.add(treeBehindSmallHouseLeafThird);
  treeBuilding.add(treeBehindBigHouse);
  treeBuilding.add(treeBehindSmallHousePart);
  treeBuilding.add(treeBehindSmallHouse);
  treeBuilding.add(treeBehindSmallHouseLeaf);
  treeBuilding.add(treeBehindSmallHouseLeafSnowSecond);
  treeBuilding.add(treeBehindBigHousePart);
  treeBuilding.add(treeBehindBigHousePartLeaf);
  treeBuilding.add(treeBehindBigHousePartLeafSecond);
  treeBuilding.add(treeBehindBigHousePartLeafSnow);
  treeBuilding.add(treeRightSideSmallHouse);
  scene.add(treeBuilding);
  treeBuilding.position.y = 19;
  
}
function roadBuild(){
  const roads = new THREE.Group();
  //h w d
  const roadLeftY = road(15,1,50);
  roadLeftY.position.x = -22;
  roadLeftY.position.z = 12;
  roadLeftY.rotation.y = 0.9;
  const roadRightY = road(15,1,50);
  roadRightY.position.x = -55;
  roadRightY.position.z = -2;
  roadRightY.rotation.y = 4.6;
  const roadMiddle = road(15,1,22);
  roadMiddle.position.x = -37;
  roadMiddle.position.z = -15;
  roadMiddle.rotation.y = 3.2;

  const roadLast = road(15,1,23);
  roadLast.position.x = -37;
  roadLast.position.z = -36;
  roadLast.rotation.y = 3.1;

  //@add gray grass texture
  const grayGrassGeometry = new THREE.BoxGeometry(5,5,5);
  const grayGrassMaterial = new THREE.MeshBasicMaterial({color:'gray'});
  const grayGrass = new THREE.Mesh(grayGrassGeometry,grayGrassMaterial);
  grayGrass.position.x = -47;
  grayGrass.position.z = 6.5;
  grayGrass.position.y = -1.5;
  grayGrass.rotation.y = 1.4;
  const roadBumpMiddleY = roadBump(5,5,10);

  roadBumpMiddleY.position.x = -35;
  roadBumpMiddleY.position.z = 3;
  roadBumpMiddleY.position.y = -1.4;
  roadBumpMiddleY.rotation.y = 1.5;
  
  const roadBumpMiddleYSecond = roadBump(5,5,10);
  roadBumpMiddleYSecond.position.x = -31;
  roadBumpMiddleYSecond.position.z = 7;
  roadBumpMiddleYSecond.position.y = -1.4;
  roadBumpMiddleYSecond.rotation.y = 3.8;
  const roadBumpBetweenHouse = roadBump(5,5,10);
  roadBumpBetweenHouse.position.x = -35;
  roadBumpBetweenHouse.position.z = -22;
  roadBumpBetweenHouse.position.y = -1.4;
  roadBumpBetweenHouse.rotation.y = 0.2;
  const roadBumpBetweenHouseSecond = roadBump(5,5,10);
  roadBumpBetweenHouseSecond.position.x = -35;
  roadBumpBetweenHouseSecond.position.z = -15;
  roadBumpBetweenHouseSecond.position.y = -1.4;
  roadBumpBetweenHouseSecond.rotation.y = 3;
  roads.add(roadBumpBetweenHouseSecond);
  roads.add(roadBumpBetweenHouse);
  roads.add(roadBumpMiddleYSecond);
  roads.add(roadLast);
  roads.add(roadMiddle);
  roads.add(roadRightY);
  roads.add(roadLeftY);
  roads.add(grayGrass);
  roads.add(roadBumpMiddleY);
  roads.position.y = 19;
  roads.position.x = 8;
  roads.position.z = 2;
  scene.add(roads);
}
function fenceBuild(){
  const fenceGroup = new THREE.Group();
  const fenceNearHouse = fence(30,8,1);
  fenceNearHouse.position.x =-55;
  fenceNearHouse.position.z =7;
  fenceNearHouse.rotation.y = 3.04;

  const fenceNearSmallHouse = fence(9,8,1);
  fenceNearSmallHouse.position.x = -14;
  fenceNearSmallHouse.position.z = 5;
  fenceNearSmallHouse.rotation.y = 2.5;

  const fenceNearSmallHouseSecond = fence(9,8,1);
  fenceNearSmallHouseSecond.position.x = -1;
  fenceNearSmallHouseSecond.position.z = 16;
  fenceNearSmallHouseSecond.rotation.y = 2.47;


  const fenceSmallDistanceHouse = fence(15,8,1);
  fenceSmallDistanceHouse.position.x = -23;
  fenceSmallDistanceHouse.position.z = 17;
  fenceSmallDistanceHouse.rotation.y = 2.5;

  const fenceNearBigHouse = fence(20,8,1);
  fenceNearBigHouse.position.x = -37;
  fenceNearBigHouse.position.z = -36;
  fenceNearBigHouse.rotation.y = -1.6;
  const fenceNearBigTree = fence(20,8,1);
  fenceNearBigTree.position.x = -21;
  fenceNearBigTree.position.z = -35;
  fenceNearBigTree.rotation.y = -1.6;
  fenceGroup.add(fenceNearHouse);
  fenceGroup.add(fenceNearSmallHouse);
  fenceGroup.add(fenceNearSmallHouseSecond);
  fenceGroup.add(fenceSmallDistanceHouse);
  fenceGroup.add(fenceNearBigHouse);
  fenceGroup.add(fenceNearBigTree);
  scene.add(fenceGroup);
  fenceGroup.position.y = 19;
}
function electricPoleBuild(){
const electricPoleGroup = new THREE.Group();
const electricPoleNearSmallHouse = electricPole(0.5,22);
electricPoleNearSmallHouse.position.x = -18;
electricPoleNearSmallHouse.position.y = 3;
electricPoleNearSmallHouse.position.z = -8;

const electricPoleNearSmallHouseTop = electricPole (0.5,3);
electricPoleNearSmallHouseTop.position.x = -20;
electricPoleNearSmallHouseTop.position.y = 10;
electricPoleNearSmallHouseTop.position.z = -8;
electricPoleNearSmallHouseTop.rotation.z = 7.9;

const electricPoleNearSmallHouseMostTop = electricPole(0.5,5);
electricPoleNearSmallHouseMostTop.position.x = -18;
electricPoleNearSmallHouseMostTop.position.y = 13;
electricPoleNearSmallHouseMostTop.position.z = -8;
electricPoleNearSmallHouseMostTop.rotation.z = 7.9;

const electricLightsPoleTopMiddle = electricLightsPole(0.5,5);
electricLightsPoleTopMiddle.position.x = -21;
electricLightsPoleTopMiddle.position.y =  12;
electricLightsPoleTopMiddle.position.z = -8;
electricLightsPoleTopMiddle.rotation.z = 7.9;

const electricLightbulb = PoleLight(3,5,10);
electricLightbulb.position.x = -23.2;
electricLightbulb.position.y = 12;
electricLightbulb.position.z = -8;
electricLightbulb.scale.set(0.2,0.2,0.2);
electricPoleGroup.add(electricLightbulb);
electricPoleGroup.add(electricLightsPoleTopMiddle);
electricPoleGroup.add(electricPoleNearSmallHouseMostTop);
electricPoleGroup.add(electricPoleNearSmallHouseTop);
electricPoleGroup.add(electricPoleNearSmallHouse);
scene.add(electricPoleGroup);

electricPoleGroup.position.y = 19;
}
function wallBuild(){
  const wallBuilding = new THREE.Group();
  const gateWall = cityWall(14,50,3);
  gateWall.position.x = -44;
  gateWall.position.y = 17;
  gateWall.position.z = -48;
  const gateSideWall = cityWall(30,50,3);
  gateSideWall.position.x = -55;
  gateSideWall.position.y = 13;
  gateSideWall.position.z = -48;
  const gateWallRight = cityWall(14,50,3);
  gateWallRight.position.x = -14;
  gateWallRight.position.y = 17;
  gateWallRight.position.z = -47;
  const gateSideWallRight = cityWall(24,50,3);
  gateSideWallRight.position.x = 2;
  gateSideWallRight.position.y = 13;
  gateSideWallRight.position.z = -45;
  gateSideWallRight.rotation.y = 3;
  const gateSideWallRightFar = cityWall(26,50,3);
  gateSideWallRightFar.position.x = 17;
  gateSideWallRightFar.position.y = 13;
  gateSideWallRightFar.position.z = -38;
  gateSideWallRightFar.rotation.y = 2.5;
  const gateWallTop = cityWall(17,7,3);
  gateWallTop.position.x = -29;
  gateWallTop.position.y = 38;
  gateWallTop.position.z = -47;
  const wallTubeLeft = wallTubes(2,5,4);
  wallTubeLeft.position.x = -37;
  wallTubeLeft.position.y = 15;
  wallTubeLeft.position.z = -47;
  wallTubeLeft.scale.set(1,5.5,2);
  const wallTubeRight = wallTubes(2,5,4);
  wallTubeRight.position.x = -21;
  wallTubeRight.position.y = 15;
  wallTubeRight.position.z = -47;
  wallTubeRight.scale.set(1,5.5,2);
  const wallTubeTop = wallTubes(2,5,5);
  wallTubeTop.position.x = -29;
  wallTubeTop.position.y = 34;
  wallTubeTop.position.z = -47;
  wallTubeTop.rotation.z = 4.7;
  wallTubeTop.scale.set(1,2,2);
  const wallTubeTopMiddle = wallTubes(3,3,3);
  wallTubeTopMiddle.position.x = -29;
  wallTubeTopMiddle.position.y = 38;
  wallTubeTopMiddle.position.z = -49;
  wallTubeTopMiddle.scale.set(1,1,2);


  const wallRoofCityMiddle = cityWallRoof(1,5,44);
  wallRoofCityMiddle.position.x = -29;
  wallRoofCityMiddle.position.y = 41.2;
  wallRoofCityMiddle.position.z = -44;
  wallRoofCityMiddle.rotation.z = 4;
  wallRoofCityMiddle.rotation.y = 4.7;

  const wallRoofCityLeft = cityWallRoof(1,5,20);
  wallRoofCityLeft.position.x = -60;
  wallRoofCityLeft.position.y = 38;
  wallRoofCityLeft.position.z = -44;
  wallRoofCityLeft.rotation.z = 4;
  wallRoofCityLeft.rotation.y = 4.7;

  const wallRoofCityRight = cityWallRoof(1,5,18);
  wallRoofCityRight.position.x = 2;
  wallRoofCityRight.position.y = 38;
  wallRoofCityRight.position.z = -42;
  wallRoofCityRight.rotation.z = 4;
  wallRoofCityRight.rotation.y = 4.4;
  const wallRoofCityRightFar = cityWallRoof(1,5,20);
  wallRoofCityRightFar.position.x = 17;
  wallRoofCityRightFar.position.y = 38;
  wallRoofCityRightFar.position.z = -35;
  wallRoofCityRightFar.rotation.z = 4;
  wallRoofCityRightFar.rotation.y = 4.1;
  wallBuilding.add(wallRoofCityRightFar);
  wallBuilding.add(wallRoofCityRight);
  wallBuilding.add(wallRoofCityLeft);
  wallBuilding.add(wallRoofCityMiddle);
  wallBuilding.add(gateWallTop);
  wallBuilding.add(wallTubeTopMiddle);
  wallBuilding.add(wallTubeTop);
  wallBuilding.add(wallTubeRight);
  wallBuilding.add(wallTubeLeft);
  wallBuilding.add(gateSideWallRightFar);
  wallBuilding.add(gateSideWallRight);
  wallBuilding.add(gateSideWall);
  wallBuilding.add(gateWallRight);
  wallBuilding.add(gateWall);
  scene.add(wallBuilding);
  wallBuilding.position.y = 19;

}
function RoofbigHouse(){
  const bigHouseRoofGeometry = new THREE.CylinderGeometry(3,4,2,4);
  const bighouseRoofMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
  const bigHouseRoof = new THREE.Mesh(bigHouseRoofGeometry,bighouseRoofMaterial);
  return bigHouseRoof;
}
function house(){
  const houseGroup = new THREE.Group();
  //add light brownish texture
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
  //add dark green wooden texture
  const roofLowerGeometry = new THREE.CylinderGeometry(10,20,5,4);
  const roofLowerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(15,138,43)'});
  const roofLower = new THREE.Mesh(roofLowerGeometry,roofLowerMaterial);
  roofLower.position.y = 10;
  roofLower.rotation.y = 0.1;
  //add  dark green wooden texture.
  const roofMiddleGeometry = new THREE.CylinderGeometry(9,14,5,4)
  const roofMiddleMaterial = new THREE.MeshBasicMaterial({color: 'rgb(15,138,43)'})
  const roofMiddle = new THREE.Mesh(roofMiddleGeometry,roofMiddleMaterial);
  roofMiddle.position.y = 19;
  roofMiddle.rotation.y = 0.1;
  
  const roofUpper = houseRoofUpper();
  roofUpper.position.y = 22.5;
  roofUpper.rotation.y = 3.1;
  roofUpper.rotation.x = 240.35;
  roofUpper.rotation.z = 0.9;

  //add dark green wooden texture
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

  //dark green texture
  const WindowSecondFloorGeometry = new THREE.BoxGeometry(1,3,3);
  const WindowSecondFloorMaterial = new THREE.MeshBasicMaterial({color: 'blue'});
  const windowSecondFloor = new THREE.Mesh(WindowSecondFloorGeometry,WindowSecondFloorMaterial);
  windowSecondFloor.position.y = 15;
  windowSecondFloor.position.z = 8.2;
  windowSecondFloor.position.x = -1;
  windowSecondFloor.rotation.y = -2.2;
  windowSecondFloor.rotation.z = 1;

  //light brown texture
  const doorBoxGeometry = new THREE.BoxGeometry(5,5,5);
  const doorBoxMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
  const doorBox = new THREE.Mesh(doorBoxGeometry,doorBoxMaterial);
  doorBox.position.y = 1;
  doorBox.position.x = -3;
  doorBox.position.z = 8.2;
  doorBox.rotation.y = -2.2;
  //dark green texture
  const doorBoxHeadGeometry = new THREE.BoxGeometry(5,1,5);
  const doorBoxHeadMaterial = new THREE.MeshBasicMaterial({color: 'green'});
  const doorBoxHead = new THREE.Mesh(doorBoxHeadGeometry,doorBoxHeadMaterial);
  doorBoxHead.position.y = 4;
  doorBoxHead.position.x = -3;
  doorBoxHead.position.z = 8.2;
  doorBoxHead.rotation.y = -2.2;


  //add  light here

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

  //add LIGHT HERE

  secondWindowsLightOn.position.y = 3;
  secondWindowsLightOn.position.x = 8;
  secondWindowsLightOn.position.z = 2.5;
  secondWindowsLightOn.rotation.y = -2.2;

  secondWindowsLightOnBorder.position.y =3;
  secondWindowsLightOnBorder.position.x =7.8;
  secondWindowsLightOnBorder.position.z =2;
  secondWindowsLightOnBorder.rotation.y = -2.2;

  const firstFloorWindowLightsOff = windowsnoLights(3,2,1);
  firstFloorWindowLightsOff.position.y = 2;
  firstFloorWindowLightsOff.position.x = -6.5; // -6.5;
  firstFloorWindowLightsOff.position.z = -4;
  firstFloorWindowLightsOff.rotation.y = -2.2;

  //add dark greenish texture
  const windowFirstFloorLightsOffGeometry = new THREE.BoxGeometry(3,1,8);
  const windowFirstFloorLightsOffMaterial = new THREE.MeshBasicMaterial({color: 'blue'});
  const windowFirstFloorLightsOff = new THREE.Mesh(windowFirstFloorLightsOffGeometry,windowFirstFloorLightsOffMaterial);
  windowFirstFloorLightsOff.position.y = 4;
  windowFirstFloorLightsOff.position.x = -7;
  windowFirstFloorLightsOff.position.z = -5;
  windowFirstFloorLightsOff.rotation.y = -3.8;
  windowFirstFloorLightsOff.rotation.z = 2.2;
  //add dark greenish texture
  const windowSecondFloorNoLightSideGeometry = new THREE.BoxGeometry(3,1,8);
  const windowSecondFloorNoLightSideMaterial = new THREE.MeshBasicMaterial({color: 'blue'});
  const windowSecondFloorNoLightSide = new THREE.Mesh(windowSecondFloorNoLightSideGeometry,windowSecondFloorNoLightSideMaterial);
  windowSecondFloorNoLightSide.position.y = 15;
  windowSecondFloorNoLightSide.position.x = -6;
  windowSecondFloorNoLightSide.position.z = -4;
  windowSecondFloorNoLightSide.rotation.y = -3.8;
  windowSecondFloorNoLightSide.rotation.z = 2.2;

  //NOT WORKING NEED FIX
  const secondFloorWindowFrontLightsOff = windowsnoLights(3,2,1);
  secondFloorWindowFrontLightsOff.y = 4;
  secondFloorWindowFrontLightsOff.z = -4;
  secondFloorWindowFrontLightsOff.x = -6;
  //code not working ^ wrong coordinates

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

  
  const doorGeometry = new THREE.BoxGeometry(2.5,5,2);
  const doorMaterial = new THREE.MeshBasicMaterial({color: 'brown'});
  const door = new THREE.Mesh(doorGeometry,doorMaterial);
  door.position.y = 1;
  door.position.x = -4.9;
  door.position.z = 7.5;
  door.rotation.y = -2.2;


  //sign board
  const boardWood = boardLink(1,1,3);
  boardWood.position.x = -12;
  boardWood.position.y = 13;
  boardWood.position.z = -1;
  boardWood.scale.set(1,1,5);
  boardWood.rotation.y = 4.7;
  const boardWoodSignBorder = boardSignBorder(1,10,5);
  boardWoodSignBorder.position.x = -20;
  boardWoodSignBorder.position.y = 13;
  boardWoodSignBorder.position.z = -2;
  boardWoodSignBorder.rotation.y = 1.5;
  //add texture here.. for image

  houseGroup.add(boardWoodSignBorder);
  houseGroup.add(boardWood);
  houseGroup.add(windowFirstFloorLightsOff);
  houseGroup.add(foundationSecondFloorBackLeft);
  houseGroup.add(foundationSecondFloorBackRight);
  houseGroup.add(foundationSecondFloorFrontLeft);
  houseGroup.add(foundationSecondFloorFrontRight);
  houseGroup.add(foundationfirstFloorBackRight);
  houseGroup.add(houseMiddle);
  houseGroup.add(houseBody);
  houseGroup.add(roofLower);
  houseGroup.add(roofUpper);
  houseGroup.add(roofMiddle);
  houseGroup.add(foundationfirstFloorFrontLeft);
  houseGroup.add(foundationfirstFloorFrontRight);
  houseGroup.add(foundationfirstFloorBackLeft);
  houseGroup.add(roofWallSen);
  houseGroup.add(windowWall);
  houseGroup.add(door);
  houseGroup.add(windowSecondFloor);
  houseGroup.add(doorBox);
  houseGroup.add(doorBoxHead);
  houseGroup.add(windowsLightOn)
  houseGroup.add(secondWindowsLightOn);
  houseGroup.add(windowsLightOnBorder);
  houseGroup.add(secondWindowsLightOnBorder);
  houseGroup.add(firstFloorWindowLightsOff);
  houseGroup.add(windowSecondFloorNoLightSide)
  houseGroup.add(secondFloorWindowFrontLightsOff);
  houseGroup.position.y = 20;
  //houseGroup.rotation.y = 3;
  //houseGroup.scale.set(2,2,2);
  scene.add(houseGroup);
}


//second
function bigHouse(){
  const bigHouseBuilding = new THREE.Group();
  const lowerBigHouse = bigHouseBlocks(30,10,10);
  lowerBigHouse.position.x = -53;
  lowerBigHouse.position.y = 3;
  lowerBigHouse.position.z = -14;
  lowerBigHouse.rotation.y = 3.05;
  const MiddleBigHouse = bigHouseBlocks(28,8.3,5);
  MiddleBigHouse.position.x = -53.5;
  MiddleBigHouse.position.y = 10;
  MiddleBigHouse.position.z = -14;
  MiddleBigHouse.rotation.y = 3.05;

  const UpperBigHouse = bigHouseBlocks(10,4,4);
  UpperBigHouse.position.x = -62.5;
  UpperBigHouse.position.y = 15;
  UpperBigHouse.position.z = -14.5;
  UpperBigHouse.rotation.y = 3.05;


  const topMostRoof = RoofbigHouse();
  topMostRoof.position.x = -62.5;
  topMostRoof.position.y = 18;
  topMostRoof.position.z = -14.5;
  topMostRoof.scale.set(2,1,2)
  topMostRoof.rotation.y = 5.4;
  const middleRoofPartFirst = RoofbigHouse();
  middleRoofPartFirst.position.x = -63.2;
  middleRoofPartFirst.position.y = 13;
  middleRoofPartFirst.position.z = -14.8;
  middleRoofPartFirst.scale.set(2,1,2);
  middleRoofPartFirst.rotation.y = 5.4;
  const middleRoofPartSecond = RoofbigHouse();
  middleRoofPartSecond.position.x = -55;
  middleRoofPartSecond.position.y = 13;
  middleRoofPartSecond.position.z = -13.9;
  middleRoofPartSecond.scale.set(2,1,2);
  middleRoofPartSecond.rotation.y = 5.4;
  const middleRoofPartThird = RoofbigHouse();
  middleRoofPartThird.position.x = -46.5;
  middleRoofPartThird.position.y = 13;
  middleRoofPartThird.position.z = -13;
  middleRoofPartThird.scale.set(2,1,2);
  middleRoofPartThird.rotation.y = 5.4;
  const middleRoofPartFourth = RoofbigHouse();
  middleRoofPartFourth.position.x = -43.8;
  middleRoofPartFourth.position.y = 13;
  middleRoofPartFourth.position.z = -12.8;
  middleRoofPartFourth.scale.set(2,1,2);
  middleRoofPartFourth.rotation.y = 5.4;

  const bottomRoofPartFirst = RoofbigHouse();
  bottomRoofPartFirst.position.x = -63.5;
  bottomRoofPartFirst.position.y = 8;
  bottomRoofPartFirst.position.z = -15;
  bottomRoofPartFirst.scale.set(2,1,2.2);
  bottomRoofPartFirst.rotation.y = 5.4;
  const bottomRoofPartSecond = RoofbigHouse();
  bottomRoofPartSecond.position.x = -55;
  bottomRoofPartSecond.position.y = 8;
  bottomRoofPartSecond.position.z = -14.3;
  bottomRoofPartSecond.scale.set(2,1,2.2);
  bottomRoofPartSecond.rotation.y = 5.4;
  const bottomRoofPartThird = RoofbigHouse();
  bottomRoofPartThird.position.x = -47.4;
  bottomRoofPartThird.position.y = 8;
  bottomRoofPartThird.position.z = -13.5;
  bottomRoofPartThird.scale.set(2,1,2.2);
  bottomRoofPartThird.rotation.y = 5.4;
  const bottomRoofPartFourth = RoofbigHouse();
  bottomRoofPartFourth.position.x = -42;
  bottomRoofPartFourth.position.y = 8;
  bottomRoofPartFourth.position.z = -13;
  bottomRoofPartFourth.scale.set(2,1,2.2);
  bottomRoofPartFourth.rotation.y = 5.4;

  const windowsBigHouseFirst = windowsBordersBigHouse(7,3,1);
  windowsBigHouseFirst.position.x = -45;
  windowsBigHouseFirst.position.y = 3.5;
  windowsBigHouseFirst.position.z = -8.5;
  windowsBigHouseFirst.rotation.y = 3.05;
  const windowsBigHouseFirstSecond = windowsBordersBigHouse(7,3,1);
  windowsBigHouseFirstSecond.position.x = -55;
  windowsBigHouseFirstSecond.position.y = 3.5;
  windowsBigHouseFirstSecond.position.z = -9.5;
  windowsBigHouseFirstSecond.rotation.y = 3.05;
  const windowsBigHouseFirstThird = windowsBordersBigHouse(7,3,1);
  windowsBigHouseFirstThird.position.x = -38.4;
  windowsBigHouseFirstThird.position.y =  3.5;
  windowsBigHouseFirstThird.position.z = -12.5;
  windowsBigHouseFirstThird.rotation.y =  1.5;
  const windowBigHouseSecondFirst = windowsBordersBigHouse(4,2,1);
  windowBigHouseSecondFirst.position.x = -40;
  windowBigHouseSecondFirst.position.y = 10.5;
  windowBigHouseSecondFirst.position.z = -12.5;
  windowBigHouseSecondFirst.rotation.y = 1.5;
  bigHouseBuilding.add(windowBigHouseSecondFirst);
  bigHouseBuilding.add(windowsBigHouseFirstThird);
  bigHouseBuilding.add(windowsBigHouseFirstSecond);
  bigHouseBuilding.add(windowsBigHouseFirst);
  bigHouseBuilding.add(bottomRoofPartFourth)
  bigHouseBuilding.add(bottomRoofPartThird);
  bigHouseBuilding.add(bottomRoofPartSecond);
  bigHouseBuilding.add(bottomRoofPartFirst);
  bigHouseBuilding.add(middleRoofPartFourth);
  bigHouseBuilding.add(middleRoofPartThird);
  bigHouseBuilding.add(middleRoofPartSecond);
  bigHouseBuilding.add(middleRoofPartFirst);
  bigHouseBuilding.add(topMostRoof);
  bigHouseBuilding.add(UpperBigHouse);
  bigHouseBuilding.add(MiddleBigHouse);
  bigHouseBuilding.add(lowerBigHouse);
  scene.add(bigHouseBuilding);
  bigHouseBuilding.position.y = 19;
}
function animate() {
  requestAnimationFrame(animate);
 
  controls.update();
  renderer.render(scene, camera);
}

animate();
