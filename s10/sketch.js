var hc;
var pg;

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") });

/////////////////////////

noise(10).color(1,0,9).out();

/////////////////////////

function setup() {
  createCanvas(1000,1000,WEBGL);
  console.log("hola mundo");
  hc = select("#myCanvas");
  hc.hide();
  pg = createGraphics(width, height);
}

function draw() {

   background(0);
   push();
   texture(hc);
   rotateX(frameCount*0.001);
   rotateY(frameCount*0.001);
   srotateZ(frameCount*0.001);
   box(500);
   pop();

}
