var gardenImg, garden;
var patch, patchImg, patchesGroup;
var fan, fanImg, fansGroup, gfan, gfanImg, gfansGroup;
var sasara, sasaraImg ;
var invisibleBlockGroup, invisibleBlock;
var gamoverImg;
var PLAY = 1, END =0;
var gameState = PLAY  

function preload()  {
      sasaraImg = loadImage("playerS.png");
      jsasaraImg = loadImage("playerJ.png");
      fanImg = loadImage("nFan.png");
      gfanImg = loadImage("gFan.png");
      patchImg = loadImage("patch.png");
    }

function setup() {
 createCanvas(600,600)

 fansGroup = new Group();
 gfansGroup = new Group();
 patchesGroup = new Group();

 sasara = createSprite(300,300);
 sasara.addImage(sasaraImg)
}

function draw() {
 background(0);
}