import * as THREE from './three.module.js';
import { OrbitControls} from './OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );
controls.update();


firstLayer(500,1,500);
roadBuild();
fenceBuild();
treeBuild();
wallBuild();
electricPoleBuild();
house();
bigHouse();
terrainBuild();




function firstLayer(height,width,depth){
const lowerLayerGeometry = new THREE.BoxGeometry(height,width,depth);
const lowerLayerMaterial = new THREE.MeshBasicMaterial({color: 'green'});
const lowerLayer = new THREE.Mesh(lowerLayerGeometry,lowerLayerMaterial);
scene.add(lowerLayer);
lowerLayer.position.z = 5;
return lowerLayer;
}

function secondLayerTerrain(height,width,depth){
const SecondLayerGeometry = new THREE.BoxGeometry(height,width,depth);
const SecondLayerMaterial = new THREE.MeshBasicMaterial({color: 'rgb(137,145,131)'});
const secondLayer = new THREE.Mesh(SecondLayerGeometry,SecondLayerMaterial);
scene.add(secondLayer);
secondLayer.position.y = 8;
return secondLayer;
}
//terrain
function terrainBuild(){
  const terrainGroup = new THREE.Group();
  const terrainRight = secondLayerTerrain(55,20,40);
  terrainRight.position.x = -4;
  terrainRight.position.z = 6.2;
  terrainRight.rotation.y = 2.45;
  const terrainRightBack = secondLayerTerrain(55,20,60);
  terrainRightBack.position.x = 2;
  terrainRightBack.position.z = -22;
  const terrainLeft = secondLayerTerrain(65,20,60);
  terrainLeft.position.x = -50;
  terrainLeft.position.z = -23.8;
  terrainLeft.rotation.y = 1.45;
  const grassRight = grass(55,1,40);
  grassRight.position.x = -4;
  grassRight.position.z = 6.2;
  grassRight.rotation.y = 2.45;
  const grassRightBack = grass(55,1,60);
  grassRightBack.position.x = 2;
  grassRightBack.position.z = -22;
  const grassLeft = grass(65,1,60);
  grassLeft.position.x = -50;
  grassLeft.position.z = -23.8;
  grassLeft.rotation.y = 1.45;
  terrainGroup.add(grassLeft);
  terrainGroup.add(grassRightBack);
  terrainGroup.add(grassRight);
  terrainGroup.add(terrainRightBack);
  terrainGroup.add(terrainLeft);
  terrainGroup.add(terrainRight);
  scene.add(terrainGroup);

}
function grass(height,width,depth){
  const greenGrassTexture = new THREE.TextureLoader().load("./assets/textures/greengrass.jpg");
  const grassGeometry = new THREE.BoxGeometry(height,width,depth);
  const grassMaterial = new THREE.MeshStandardMaterial({map: greenGrassTexture});
  const grass = new THREE.Mesh(grassGeometry,grassMaterial);
  scene.add(grass);
  grass.position.y = 18.5;
  grass.position.x = -35;
  return grass;
}

function electricPole(radi,length){

  const poleGeometry = new THREE.CapsuleGeometry(radi,length,8,8);
  const poleMaterial = new THREE.MeshStandardMaterial({color: 'rgb(245,200,79)'});
  const pole = new THREE.Mesh(poleGeometry,poleMaterial);
  return pole; 
}
function electricLightsPole(radi,length){
  const lightsPoleGeometry = new THREE.CapsuleGeometry(radi,length,8,8);
  const lightsPoleMaterial = new THREE.MeshStandardMaterial({color: 'rgb(159,131,52)'});
  const lightsPole = new THREE.Mesh(lightsPoleGeometry,lightsPoleMaterial);
  return lightsPole; 
}
function PoleLight(radiTop,radiBottom,height){
  const PoleLightBulbGeometry = new THREE.CylinderGeometry(radiTop,radiBottom,height,8,1);
  const PoleLightBulbMaterial = new THREE.MeshStandardMaterial({color: 'rgb(159,131,52)'});
  const PoleLightBulb = new THREE.Mesh(PoleLightBulbGeometry,PoleLightBulbMaterial);
  return PoleLightBulb;
}
function boardSignBorder(height,width,depth){
  const signBoardBorderGeometry = new THREE.BoxGeometry(height,width,depth);
  const signBoardBorderMaterial = new THREE.MeshStandardMaterial({color: 'rgb(161,118,0)'});
  const signBoardBorder = new THREE.Mesh(signBoardBorderGeometry,signBoardBorderMaterial);
  return signBoardBorder;
}
function boardLink(height,width,depth){
  const boardLinkWoodGeometry = new THREE.BoxGeometry(height,width,depth);
  const boardLinkWoodMaterial = new THREE.MeshStandardMaterial({color: 'rgb(161,118,0)'});
  const boardLinkWood = new THREE.Mesh(boardLinkWoodGeometry,boardLinkWoodMaterial);
  return boardLinkWood;
}
function cityWall(height,width,depth){
  const cityWallTexture = new THREE.TextureLoader().load("./assets/textures/lightbrownwall.jpeg");
  const cityWallGeometry = new THREE.BoxGeometry(height,width,depth);
  const cityWallMaterial = new THREE.MeshBasicMaterial({map: cityWallTexture});
  const cityWall = new THREE.Mesh(cityWallGeometry,cityWallMaterial);
  return cityWall;
}
function cityWallRoof(height,width,depth){
  //light brownish texture
  const cityWallRoofGeometry = new THREE.BoxGeometry(height,width,depth);
  const cityWallRoofMaterial = new THREE.MeshStandardMaterial({color: 'rgb(255,178,102)'});
  const cityWallRoof = new THREE.Mesh(cityWallRoofGeometry,cityWallRoofMaterial);
  return cityWallRoof
}
function wallTubes(radi,length,capSegment){
  const cityTubeTexture = new THREE.TextureLoader().load("./assets/textures/stone.jpg");
  const wallTubesGeometry = new THREE.CapsuleGeometry(radi,length,capSegment);
  const wallTubesMaterial = new THREE.MeshStandardMaterial({map: cityTubeTexture});
  const wallTubes = new THREE.Mesh(wallTubesGeometry,wallTubesMaterial);
  return wallTubes;
}
function road(height,width,depth){
  const roadTexture = new THREE.TextureLoader().load("./assets/textures/road.jpg");
  const roadGeometry = new THREE.BoxGeometry(height,width,depth);
  const roadMaterial = new THREE.MeshStandardMaterial({map: roadTexture});
  const road = new THREE.Mesh(roadGeometry,roadMaterial);
  return road;
}
function roadBump(height,width,depth){
  const roadBumpGeometry = new THREE.BoxGeometry(height,width,depth);
  const roadBumpMaterial = new THREE.MeshStandardMaterial({color: 'gray'})
  const roadBump = new THREE.Mesh(roadBumpGeometry,roadBumpMaterial);
  return roadBump;
}
function fence(height,width,depth){
  const fenceTexture = new THREE.TextureLoader().load("./assets/textures/fence.jpg");
  const fenceGeometry = new THREE.BoxGeometry(height,width,depth);
  const fenceMaterial = new THREE.MeshStandardMaterial({map: fenceTexture});
  const fence = new THREE.Mesh(fenceGeometry,fenceMaterial);
  return fence;
}
function treeWood(height,width,depth){
  const treeWoodGeometry = new THREE.BoxGeometry(height,width,depth);
  const treeWoodMaterial = new THREE.MeshStandardMaterial({color: 'rgb(101,80,24)'});
  const treeWood = new THREE.Mesh(treeWoodGeometry,treeWoodMaterial);
  return treeWood;
}
function treeWoodLeaf(height,width,depth){
  const treeWoodLeafTextures = new THREE.TextureLoader().load('./assets/textures/leaf.jpg');
  const treeWoodLeafGeometry = new THREE.BoxGeometry(height,width,depth);
  const treeWoodLeafMaterial = new THREE.MeshStandardMaterial({map: treeWoodLeafTextures});
  const treeWoodLeaf = new THREE.Mesh(treeWoodLeafGeometry,treeWoodLeafMaterial);
  return treeWoodLeaf;
}
function treeWoodLeafSnow(height,width,depth){
  const treeWoodLeafSnowGeometry = new THREE.BoxGeometry(height,width,depth);
  const treeWoodLeafSnowMaterial = new THREE.MeshBasicMaterial({color:'rgb(196,195,195)'});
  const treeWoodLeafSnow = new THREE.Mesh(treeWoodLeafSnowGeometry,treeWoodLeafSnowMaterial);
  return treeWoodLeafSnow;
}
function houseFoundation(){
  const stoneTexture = new THREE.TextureLoader().load("./assets/textures/foundation-stone.jpg")
  const foundationGeometry = new THREE.CapsuleGeometry(1,7,1,4);
  const foundationMaterial = new THREE.MeshStandardMaterial({map:stoneTexture});
  const foundation = new THREE.Mesh(foundationGeometry,foundationMaterial);
  return foundation;
}
function houseRoofUpper(){
  const roofTexture = new THREE.TextureLoader().load("./assets/textures/lightbrownwall.jpeg");
  const upperRoofGeometry = new THREE.CylinderGeometry(7,7,12,3,1);
  const upperRoofMaterial = new THREE.MeshBasicMaterial({map: roofTexture });
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
  const windowBorderMaterials = new THREE.MeshBasicMaterial({color: 'rgb(102,98,89)'});
  const windowsBorder = new THREE.Mesh(windowBorderGeometry,windowBorderMaterials);
  return windowsBorder;
}
function windowsBordersBigHouse(height,width,depth){
  const windowBorderBigHouseGeometry = new THREE.BoxGeometry(height,width,depth);
  const windowBorderBigHouseMaterials = new THREE.MeshBasicMaterial({color: 'rgb(74,59,24)'});
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
  const bigHouseBlockMaterial = new THREE.MeshBasicMaterial({color: 'rgb(239,226,195)'})
  const bigHouseBlock = new THREE.Mesh(bigHouseBlockGeometry,bigHouseBlockMaterial);
  return bigHouseBlock;
}
function bigHouseFlatBuffer(height,width,depth){
  const bigHouseBufferGeometry = new THREE.BoxGeometry(height,width,depth);
  const bigHouseBufferMaterial = new THREE.MeshBasicMaterial({color: 'rgb(26,84,36)'});
  const bigHouseBuffer = new THREE.Mesh(bigHouseBufferGeometry,bigHouseBufferMaterial);
  return bigHouseBuffer;
}
function wallBigHouseDoor(height,width,depth){
  const wallBigHouseDoorGeometry = new THREE.BoxGeometry(height,width,depth);
  const wallBigHouseDoorMaterial = new THREE.MeshBasicMaterial({color: 'brown'});
  const wallBigHouseDoors = new THREE.Mesh(wallBigHouseDoorGeometry,wallBigHouseDoorMaterial);
  return wallBigHouseDoors;
}
function logo(height,width,depth){
  const logoShindoGeometry = new THREE.BoxGeometry(height,width,depth);
  const logoShindoMaterial = new THREE.MeshBasicMaterial({color:'gray'});
  const logoShindo = new THREE.Mesh(logoShindoGeometry,logoShindoMaterial);
  return logoShindo;
}
function RoofbigHouse(){
  const bigHouseRoofGeometry = new THREE.CylinderGeometry(3,4,2,4);
  const bighouseRoofMaterial = new THREE.MeshBasicMaterial({color: 'gray'});
  const bigHouseRoof = new THREE.Mesh(bigHouseRoofGeometry,bighouseRoofMaterial);
  return bigHouseRoof;
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

  const grayGrassTexture = new THREE.TextureLoader().load("./assets/textures/graygrass.jpg");
  const grayGrassGeometry = new THREE.BoxGeometry(5,5,5);
  const grayGrassMaterial = new THREE.MeshBasicMaterial({map: grayGrassTexture});
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
  fenceSmallDistanceHouse.position.z = 16.2;
  fenceSmallDistanceHouse.rotation.y = 2.5;

  const fenceNearBigHouse = fence(20,8,1);
  fenceNearBigHouse.position.x = -37;
  fenceNearBigHouse.position.z = -36;
  fenceNearBigHouse.rotation.y = -1.6;

  const fenceNearBigTree = fence(20,8,1);
  fenceNearBigTree.position.x = -21;
  fenceNearBigTree.position.z = -35;
  fenceNearBigTree.rotation.y = -1.6;

  const fenceFrontBigHouse = fence(5,8,1);
  fenceFrontBigHouse.position.x = -68;
  fenceFrontBigHouse.position.z = -9.5;
  fenceFrontBigHouse.rotation.y =3.05;

  fenceGroup.add(fenceFrontBigHouse);
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

const poleLighting = new THREE.PointLight( 0xff0000, 2.5, 60 );
poleLighting.position.set( -23.2, 11, -8 );
const electricPoleNearBigHouse = electricPole(0.5,22);
electricPoleNearBigHouse.position.x = -43;
electricPoleNearBigHouse.position.z = 9.2;

const electricPoleNearBigHouseTop = electricPole(0.5,6);
electricPoleNearBigHouseTop.position.x = -42.87;
electricPoleNearBigHouseTop.position.y = 8;
electricPoleNearBigHouseTop.position.z = 6.5;
electricPoleNearBigHouseTop.rotation.x = 1.5;
electricPoleNearBigHouseTop.rotation.y = 3.5;

const electricPoleNearBigHouseMostTop = electricPole(0.5,5);
electricPoleNearBigHouseMostTop.position.x = -42.87;
electricPoleNearBigHouseMostTop.position.y = 10.5;
electricPoleNearBigHouseMostTop.position.z = 7;
electricPoleNearBigHouseMostTop.rotation.x = 1.5;
electricPoleNearBigHouseMostTop.rotation.y = 3.5;

const electricLightPoleNearBigHouse = electricLightsPole(0.5,9);
electricLightPoleNearBigHouse.position.x = -42.87;
electricLightPoleNearBigHouse.position.y = 9.2;
electricLightPoleNearBigHouse.position.z = 5.5;
electricLightPoleNearBigHouse.rotation.x = 1.5;
electricLightPoleNearBigHouse.rotation.y = 3.5;

const electricLightbulbPoleNearBigHouse = PoleLight(3,5,10);
electricLightbulbPoleNearBigHouse.position.x = -42.87;
electricLightbulbPoleNearBigHouse.position.y = 8.5;
electricLightbulbPoleNearBigHouse.position.z = 1.5;
electricLightbulbPoleNearBigHouse.scale.set(0.2,0.2,0.2);
const poleLightingNearBigHouse = new THREE.PointLight( 0xff0000, 2.5, 60 );
poleLightingNearBigHouse.position.set( -42.87, 8.5, 1.5 );

electricPoleGroup.add(electricLightbulbPoleNearBigHouse)
electricPoleGroup.add(electricLightPoleNearBigHouse);
electricPoleGroup.add(electricPoleNearBigHouseMostTop);
electricPoleGroup.add(electricPoleNearBigHouseTop);
electricPoleGroup.add(electricPoleNearBigHouse)
electricPoleGroup.add(electricLightbulb);
electricPoleGroup.add(electricLightsPoleTopMiddle);
electricPoleGroup.add(electricPoleNearSmallHouseMostTop);
electricPoleGroup.add(electricPoleNearSmallHouseTop);
electricPoleGroup.add(electricPoleNearSmallHouse);
scene.add(electricPoleGroup);
scene.add( poleLighting );
scene.add( poleLightingNearBigHouse );
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
  wallRoofCityMiddle.position.y = 41;
  wallRoofCityMiddle.position.z = -44.5;
  wallRoofCityMiddle.rotation.z = 4;
  wallRoofCityMiddle.rotation.y = 4.7;

  const wallRoofCityLeft = cityWallRoof(1,5,20);
  wallRoofCityLeft.position.x = -60;
  wallRoofCityLeft.position.y = 37.5;
  wallRoofCityLeft.position.z = -45.2;
  wallRoofCityLeft.rotation.z = 4;
  wallRoofCityLeft.rotation.y = 4.7;

  const wallRoofCityRight = cityWallRoof(1,5,18);
  wallRoofCityRight.position.x = 2;
  wallRoofCityRight.position.y = 38;
  wallRoofCityRight.position.z = -43;
  wallRoofCityRight.rotation.z = 4;
  wallRoofCityRight.rotation.y = 4.6;
  const wallRoofCityRightFar = cityWallRoof(1,5,20);
  wallRoofCityRightFar.position.x = 18;
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
//house Right Side
function house(){
  const houseGroup = new THREE.Group();

  const bodyHouseTexture = new THREE.TextureLoader().load("./assets/textures/lightbrownwall.jpeg")
  const houseLowerGeometry = new THREE.BoxGeometry (15,10,15);
  const houseLowerMaterial = new THREE.MeshStandardMaterial({map: bodyHouseTexture});
  const houseBody = new THREE.Mesh(houseLowerGeometry,houseLowerMaterial);
  houseBody.position.y = 3;
  houseBody.rotation.y = 11.9;
  const houseMiddleGeometry = new THREE.BoxGeometry(13,5,13);
  const houseMiddleMaterial = new THREE.MeshStandardMaterial({map: bodyHouseTexture});
  const houseMiddle = new THREE.Mesh(houseMiddleGeometry,houseMiddleMaterial);
  houseMiddle.position.y = 14;
  houseMiddle.rotation.y = 11.9;

  const darkGreenRoofTexture = new THREE.TextureLoader().load("./assets/textures/roofandwindow.jpg");
  const roofLowerGeometry = new THREE.CylinderGeometry(10,20,5,4);
  const roofLowerMaterial = new THREE.MeshStandardMaterial({map: darkGreenRoofTexture});
  const roofLower = new THREE.Mesh(roofLowerGeometry,roofLowerMaterial);
  roofLower.position.y = 10;
  roofLower.rotation.y = 0.1;

  const roofMiddleGeometry = new THREE.CylinderGeometry(9,14,5,4)
  const roofMiddleMaterial = new THREE.MeshStandardMaterial({map: darkGreenRoofTexture})
  const roofMiddle = new THREE.Mesh(roofMiddleGeometry,roofMiddleMaterial);
  roofMiddle.position.y = 19;
  roofMiddle.rotation.y = 0.1;
  
  const roofUpper = houseRoofUpper();
  roofUpper.position.y = 22.5;
  roofUpper.rotation.y = 3.1;
  roofUpper.rotation.x = 240.35;
  roofUpper.rotation.z = 0.9;


  const roofWallSenGeometry = new THREE.CylinderGeometry(8,8,11,3,1);
  const roofWallSenMaterial = new THREE.MeshStandardMaterial({map: darkGreenRoofTexture});
  const roofWallSen = new THREE.Mesh(roofWallSenGeometry,roofWallSenMaterial);
  roofWallSen.position.y = 22.8;
  roofWallSen.rotation.y = 3.1;
  roofWallSen.rotation.x = 240.35;
  roofWallSen.rotation.z = 0.9;

  const windowWallGeometry = new THREE.BoxGeometry(1,3,3);
  const windowWallMaterial = new THREE.MeshStandardMaterial({map: darkGreenRoofTexture});
  const windowWall = new THREE.Mesh(windowWallGeometry,windowWallMaterial);
  windowWall.position.y = 24;
  windowWall.position.z = 4;
  windowWall.position.x = 6;
  windowWall.rotation.y = 2.5;
  windowWall.rotation.z = -1;


  const WindowSecondFloorGeometry = new THREE.BoxGeometry(1,3,3);
  const WindowSecondFloorMaterial = new THREE.MeshBasicMaterial({map: darkGreenRoofTexture});
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

  const width = 10;
  const height = 10;
  const intensity = 0.3;
  const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
  rectLight.position.set( 4,-8, 3 );
  rectLight.lookAt( 5, 0, 0 );
  scene.add( rectLight )

  const windowsLightOn = windows(1,3,3);
  windowsLightOn.position.y = 4;
  windowsLightOn.position.x = -8;
  windowsLightOn.position.z = 3;
  windowsLightOn.rotation.y = -2.2;
  const windowsLightOnBorder = windowsBorders(1,4,4);

  windowsLightOnBorder.position.y =4;
  windowsLightOnBorder.position.x = -7.9;
  windowsLightOnBorder.position.z = 3;
  windowsLightOnBorder.rotation.y = -2.2;

  const secondWindowsLight = new THREE.PointLight( 0xff0000, 1, 140 );
  secondWindowsLight.position.set( 8, 3, 2.5 );
  scene.add( secondWindowsLight );
  const secondWindowsLightOn = windows(3,2,1);
  secondWindowsLightOn.position.y = 3;
  secondWindowsLightOn.position.x = 8;
  secondWindowsLightOn.position.z = 2.5;
  secondWindowsLightOn.rotation.y = -2.2;

  const secondWindowsLightOnBorder = windowsBorders(4,3,1);
  secondWindowsLightOnBorder.position.y =3;
  secondWindowsLightOnBorder.position.x =7.8;
  secondWindowsLightOnBorder.position.z =2;
  secondWindowsLightOnBorder.rotation.y = -2.2;

  const firstFloorWindowLightsOff = windowsnoLights(3,2,1);
  firstFloorWindowLightsOff.position.y = 2;
  firstFloorWindowLightsOff.position.x = -6.5; 
  firstFloorWindowLightsOff.position.z = -4;
  firstFloorWindowLightsOff.rotation.y = -2.2;

  
  const windowFirstFloorLightsOffGeometry = new THREE.BoxGeometry(3,1,8);
  const windowFirstFloorLightsOffMaterial = new THREE.MeshBasicMaterial({map: darkGreenRoofTexture});
  const windowFirstFloorLightsOff = new THREE.Mesh(windowFirstFloorLightsOffGeometry,windowFirstFloorLightsOffMaterial);
  windowFirstFloorLightsOff.position.y = 4;
  windowFirstFloorLightsOff.position.x = -7;
  windowFirstFloorLightsOff.position.z = -5;
  windowFirstFloorLightsOff.rotation.y = -3.8;
  windowFirstFloorLightsOff.rotation.z = 2.2;
 
  const windowSecondFloorNoLightSideGeometry = new THREE.BoxGeometry(3,1,8);
  const windowSecondFloorNoLightSideMaterial = new THREE.MeshBasicMaterial({map: darkGreenRoofTexture});
  const windowSecondFloorNoLightSide = new THREE.Mesh(windowSecondFloorNoLightSideGeometry,windowSecondFloorNoLightSideMaterial);
  windowSecondFloorNoLightSide.position.y = 15;
  windowSecondFloorNoLightSide.position.x = -6;
  windowSecondFloorNoLightSide.position.z = -4;
  windowSecondFloorNoLightSide.rotation.y = -3.8;
  windowSecondFloorNoLightSide.rotation.z = 2.2;


  const secondFloorWindowFrontLightsOff = windowsnoLights(3,2,1);
  secondFloorWindowFrontLightsOff.position.x = -6;
  secondFloorWindowFrontLightsOff.position.y = 14.8;
  secondFloorWindowFrontLightsOff.position.z = 3.5;
  secondFloorWindowFrontLightsOff.rotation.y = 2.4;

  const secondFloorWindowFrontBorder = windowsBorders(4,3,1);
  secondFloorWindowFrontBorder.position.x = -6;
  secondFloorWindowFrontBorder.position.y = 14.8;
  secondFloorWindowFrontBorder.position.z = 3.2;
  secondFloorWindowFrontBorder.rotation.y = 2.4;

  const thirdFloorWindowSideLightsOff = windowsnoLights(3,2,1);
  thirdFloorWindowSideLightsOff.position.x = -4.5;
  thirdFloorWindowSideLightsOff.position.y = 24;
  thirdFloorWindowSideLightsOff.position.z = -3.5;
  thirdFloorWindowSideLightsOff.rotation.y = 0.9;

  const thirdFloorWindowSideLightsOffBorder = windowsBorders(4,2.5,1);
  thirdFloorWindowSideLightsOffBorder.position.x = -4.5;
  thirdFloorWindowSideLightsOffBorder.position.y = 24;
  thirdFloorWindowSideLightsOffBorder.position.z = -3.3;
  thirdFloorWindowSideLightsOffBorder.rotation.y = 0.9;

  const firstFloorWindowSide = windowsnoLights(3,2,1);
  firstFloorWindowSide.position.x = 4.2;
  firstFloorWindowSide.position.y = 2.8;
  firstFloorWindowSide.position.z = 7.3;
  firstFloorWindowSide.rotation.y = 0.9;

  const secondFloorWindowSide = windowsnoLights(3,2,1);
  secondFloorWindowSide.position.x = 3.2;
  secondFloorWindowSide.position.y = 14.8;
  secondFloorWindowSide.position.z = 6;
  secondFloorWindowSide.rotation.y = 0.9;

  const secondFloorWindowSideBorder = windowsBorders(4,3,1);
  secondFloorWindowSideBorder.position.x = 3;
  secondFloorWindowSideBorder.position.y = 14.8;
  secondFloorWindowSideBorder.position.z = 6;
  secondFloorWindowSideBorder.rotation.y = 0.9;

  const firstFloorWindowSideBorder = windowsBorders(4,3,1);
  firstFloorWindowSideBorder.position.x = 4;
  firstFloorWindowSideBorder.position.y = 2.8;
  firstFloorWindowSideBorder.position.z = 7;
  firstFloorWindowSideBorder.rotation.y = 0.9;

  const foundationfirstFloorFrontRight = houseFoundation();
  foundationfirstFloorFrontRight.position.y = 3.6;
  foundationfirstFloorFrontRight.position.x = 18;
  foundationfirstFloorFrontRight.position.z = -2;

  const foundationfirstFloorFrontLeft = houseFoundation();
  foundationfirstFloorFrontLeft.position.y = 3.5;
  foundationfirstFloorFrontLeft.position.x = 2; 
  foundationfirstFloorFrontLeft.position.z = 16;

  const foundationfirstFloorBackLeft = houseFoundation();
  foundationfirstFloorBackLeft.position.y = 3.5;
  foundationfirstFloorBackLeft.position.x = -17;
  foundationfirstFloorBackLeft.position.z = 1;

 const foundationfirstFloorBackRight = houseFoundation();
  foundationfirstFloorBackRight.position.y= 3.5;
  foundationfirstFloorBackRight.position.x= -2;
  foundationfirstFloorBackRight.position.z = -18.5;

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



  const boardWoodLink = boardLink(1,1,3);
  boardWoodLink.position.x = -12;
  boardWoodLink.position.y = 13;
  boardWoodLink.position.z = -2.5;
  boardWoodLink.scale.set(1,1,5);
  boardWoodLink.rotation.y = 4.7;

  const boardWoodSignBorder = boardSignBorder(1,10,5);
  boardWoodSignBorder.position.x = -20;
  boardWoodSignBorder.position.y = 13;
  boardWoodSignBorder.position.z = -2;
  boardWoodSignBorder.rotation.y = 1.5;

  const logoShindoHouse = logo(1,8,4);
  logoShindoHouse.position.x = -20;
  logoShindoHouse.position.y = 13;
  logoShindoHouse.position.z = -1.5;
  logoShindoHouse.rotation.y = 1.5;

  houseGroup.add(logoShindoHouse);
  houseGroup.add(boardWoodSignBorder);
  houseGroup.add(boardWoodLink);
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
  houseGroup.add(secondFloorWindowFrontBorder);
  houseGroup.add(firstFloorWindowSide);
  houseGroup.add(firstFloorWindowSideBorder);
  houseGroup.add(thirdFloorWindowSideLightsOff);
  houseGroup.add(thirdFloorWindowSideLightsOffBorder);
  houseGroup.add(secondFloorWindowSide);
  houseGroup.add(secondFloorWindowSideBorder);
  houseGroup.position.y = 20;
  
  scene.add(houseGroup);
}
//house Left Side
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

  const doorBuildFirst = wallBigHouseDoor(1,5,5);
  doorBuildFirst.position.x = -60;
  doorBuildFirst.position.y = 3;
  doorBuildFirst.position.z = -9;

  const doorBuildFirstPartSecond = wallBigHouseDoor(1,5,5);
  doorBuildFirstPartSecond.position.x = -64;
  doorBuildFirstPartSecond.position.y = 3;
  doorBuildFirstPartSecond.position.z = -9;

  const doorBuildFirstPartTop = wallBigHouseDoor(6,1,5);
  doorBuildFirstPartTop.position.x = -62;
  doorBuildFirstPartTop.position.y = 6;
  doorBuildFirstPartTop.position.z = -9;

  const doorBuildThird = wallBigHouseDoor(1,3,3);
  doorBuildThird.position.x = -57;
  doorBuildThird.position.y = 15.5;
  doorBuildThird.position.z = -15.5;
  doorBuildThird.rotation.y = 1.5;

  const doorBuildThirdPartSecond = wallBigHouseDoor(1,3,3);
  doorBuildThirdPartSecond.position.x = -57;
  doorBuildThirdPartSecond.position.y = 15.5;
  doorBuildThirdPartSecond.position.z = -13;
  doorBuildThirdPartSecond.rotation.y  = 1.5;

  const doorBuildThirdPartTop = wallBigHouseDoor(3,1,3);
  doorBuildThirdPartTop.position.x = -56;
  doorBuildThirdPartTop.position.y = 16.5;
  doorBuildThirdPartTop.position.z = -14;

  const PoleBoardLinkSecond = boardLink(1,1,3);
  PoleBoardLinkSecond.position.x = -49;
  PoleBoardLinkSecond.position.y = 10;
  PoleBoardLinkSecond.position.z = -4;
  PoleBoardLinkSecond.rotation.y = 3.2;
  PoleBoardLinkSecond.scale.set(1,1,5);

  const PoleBillBoardSecond = boardSignBorder(1,5,5);
  PoleBillBoardSecond.position.x = -48;
  PoleBillBoardSecond.position.y = 10;
  PoleBillBoardSecond.position.z = 2;

  const logoShindoBigHouseBillBoard = logo(1,4,4);
  logoShindoBigHouseBillBoard.position.x = -47.8;
  logoShindoBigHouseBillBoard.position.y = 10;
  logoShindoBigHouseBillBoard.position.z = 2;
  
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
  windowBigHouseSecondFirst.position.y = 10.8;
  windowBigHouseSecondFirst.position.z = -12.8;
  windowBigHouseSecondFirst.rotation.y = 1.5;

  const windowBigHouseThirdFirst = windowsBordersBigHouse(6,2,1);
  windowBigHouseThirdFirst.position.x = -62.5;
  windowBigHouseThirdFirst.position.y = 15.5;
  windowBigHouseThirdFirst.position.z = -12.5;
  windowBigHouseThirdFirst.rotation.y = 3.05;

  const bigHouseWindowsLight = new THREE.PointLight( 0xff0000, 1, 140 );
  bigHouseWindowsLight.position.set( -38.2, 3.5, -12.5 );
  scene.add( bigHouseWindowsLight );
  const windowBigHouseLightsOn = windows(5,2,1);
  windowBigHouseLightsOn.position.x = -38.2;
  windowBigHouseLightsOn.position.y = 3.5;
  windowBigHouseLightsOn.position.z = -12.5;
  windowBigHouseLightsOn.rotation.y = 1.5;

  const windowBigHouseLightsOffOneFirst =  windowsnoLights(5,2,1);
  windowBigHouseLightsOffOneFirst.position.x =-45;
  windowBigHouseLightsOffOneFirst.position.y = 3.5;
  windowBigHouseLightsOffOneFirst.position.z = -8.2;
  windowBigHouseLightsOffOneFirst.rotation.y = 3.05;

  const windowBigHouseLightsOffOneSecond = windowsnoLights(5,2,1);
  windowBigHouseLightsOffOneSecond.position.x = -55;
  windowBigHouseLightsOffOneSecond.position.y = 3.5;
  windowBigHouseLightsOffOneSecond.position.z = -9.2;
  windowBigHouseLightsOffOneSecond.rotation.y = 3.05;

  const windowBigHouseLightsOffSecondFirst = windowsnoLights(3,1.5,1);
  windowBigHouseLightsOffSecondFirst.position.x = -39.7;
  windowBigHouseLightsOffSecondFirst.position.y = 10.8;
  windowBigHouseLightsOffSecondFirst.position.z = -12.8;
  windowBigHouseLightsOffSecondFirst.rotation.y = 1.5;

  const windowBigHouseLightsOffThirdFirst = windowsnoLights(4.5,1.5,1);
  windowBigHouseLightsOffThirdFirst.position.x = -62.5;
  windowBigHouseLightsOffThirdFirst.position.y = 15.5;
  windowBigHouseLightsOffThirdFirst.position.z = -12;
  windowBigHouseLightsOffThirdFirst.rotation.y = 3.05;


  const groundBufferBigHouse = bigHouseFlatBuffer(31.5,1,12);
  groundBufferBigHouse.position.x = -53;
  groundBufferBigHouse.position.z = -14;
  groundBufferBigHouse.rotation.y = 3.05;

  const groundBufferSecondBigHouse = bigHouseFlatBuffer(29,1,6);
  groundBufferSecondBigHouse.position.x = -53.5;
  groundBufferSecondBigHouse.position.y = 9;
  groundBufferSecondBigHouse.position.z = -14;
  groundBufferSecondBigHouse.rotation.y = 3.05;

  const groundBufferThirdBigHouse = bigHouseFlatBuffer(29,1,6);
  groundBufferThirdBigHouse.position.x = -53.5;
  groundBufferThirdBigHouse.position.y = 13.8;
  groundBufferThirdBigHouse.position.z = -14;
  groundBufferThirdBigHouse.rotation.y = 3.05;

  const brownGroundBuffThirdBigHouseGeometry = new THREE.BoxGeometry(18.6,1,6.2);
  const brownGroundBuffThirdBigHouseMaterial = new THREE.MeshBasicMaterial({color: 'rgb(88,77,45)'});
  const brownGroundBuffThirdBigHouse = new THREE.Mesh(brownGroundBuffThirdBigHouseGeometry,brownGroundBuffThirdBigHouseMaterial);
  brownGroundBuffThirdBigHouse.position.x = -48.3;
  brownGroundBuffThirdBigHouse.position.y = 13.9;
  brownGroundBuffThirdBigHouse.position.z = -13.4;
  brownGroundBuffThirdBigHouse.rotation.y = 3.05;

  bigHouseBuilding.add(brownGroundBuffThirdBigHouse);
  bigHouseBuilding.add(groundBufferThirdBigHouse);
  bigHouseBuilding.add(groundBufferSecondBigHouse);
  bigHouseBuilding.add(groundBufferBigHouse);
  bigHouseBuilding.add(windowBigHouseLightsOffThirdFirst);
  bigHouseBuilding.add(windowBigHouseLightsOffSecondFirst);
  bigHouseBuilding.add(windowBigHouseLightsOffOneSecond);
  bigHouseBuilding.add(windowBigHouseLightsOffOneFirst); 
  bigHouseBuilding.add(windowBigHouseLightsOn);
  bigHouseBuilding.add(doorBuildThirdPartTop);
  bigHouseBuilding.add(doorBuildThirdPartSecond);
  bigHouseBuilding.add(doorBuildThird);
  bigHouseBuilding.add(doorBuildFirstPartTop);
  bigHouseBuilding.add(doorBuildFirstPartSecond);
  bigHouseBuilding.add(doorBuildFirst);
  bigHouseBuilding.add(PoleBillBoardSecond);
  bigHouseBuilding.add(PoleBoardLinkSecond);
  bigHouseBuilding.add(windowBigHouseThirdFirst);
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
  bigHouseBuilding.add(logoShindoBigHouseBillBoard);
  scene.add(bigHouseBuilding);
  bigHouseBuilding.position.y = 19;
}

//cloud animation and Cloud
const cloudGeometry = new THREE.BoxGeometry(30,10,20);
const cloudMaterial = new THREE.MeshBasicMaterial({color: 'white'});
const cloud = new THREE.Mesh(cloudGeometry,cloudMaterial);
cloud.position.y = 80;
cloud.position.x = -50;
scene.add(cloud);

const cloudSecond = new THREE.Mesh(cloudGeometry,cloudMaterial);
cloudSecond.position.y = 85;
cloudSecond.position.x = -60;
cloudSecond.position.z = -15;
scene.add(cloudSecond);

const allLightsAmbient = new THREE.AmbientLight( 0x000000 ); 
scene.add( allLightsAmbient );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 , 5);
directionalLight.position.set(-15,30,-20);
scene.add( directionalLight );
const aboveLight = new THREE.HemisphereLight( 0x000000, 0x6495ed, 0.7 );
scene.add( aboveLight );
function animate() {
  requestAnimationFrame(animate);
  cloud.position.x += 0.09;
  cloudSecond.position.x += 0.09;
  if(cloud.position.x > 100){
    cloud.position.x = -50;
  }
  if(cloudSecond.position.x > 60){
    cloudSecond.position.x = -60;
  }
  controls.update();
  renderer.render(scene, camera);
}

animate();
