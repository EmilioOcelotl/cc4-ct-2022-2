// javascript
// hydra

var hc;
var pg;

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") });

/////////////////////////

// código de hydra

src(o0).modulate(noise(10),0.005).blend(shape(4),0.01).out(o0)

/////////////////////////

function setup() {
  createCanvas(1000,1000,WEBGL); // 3d
  console.log("hola mundo");
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {
   background(0);

  noStroke();
  push();
  texture(hc);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.001);
  rotateZ(frameCount*0.001);
  sphere(200);
  pop();

}
