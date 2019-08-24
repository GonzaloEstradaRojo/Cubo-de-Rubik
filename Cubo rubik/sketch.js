let dim = 3;
let cube
const width = 600;
const height = 600;


function make3DArray(x, y,z) {
  let arr = new Array(x);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(y);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(z);
    }
  }
  return arr;
}

let camX =0;
let camY = -100;
let camZ = 300;

function setup() {
  createCanvas(width, height, WEBGL);
  cube = make3DArray(dim,dim,dim)
  camera(100,-100,300,0,0,0,1,0,0);


  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        let len = 30;
        let offset = (dim-1)*len*0.5
        let x = len * i - offset;
        let y = len * j - offset;
        let z = len * k - offset;
        cube[i][j][k] = new cubo(x,y,z,len);
      }
    }
  }
}
let w = 0;
let h = 0;
let mx = 0;
let my = 0;
let oX = 0;
let oY = 0;

function mousePressed(){
  oX = camX;
  oY = camY;
  w = mouseX;
  h = mouseY;
}

function mouseDragged(){
//width height
  mx = mouseX-w;
  my = mouseY - h;
  camX = oX + mx;
  camY = oY + my;
}


function draw() {
  background(51)


  rotateX(camX*0.01);
  rotateY(camY*0.01);
    for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        let len = 10;
        let x = len * i
        let y = len * j
        let z = len * k
        cube[i][j][k].show();
        }
      }
    }
}
