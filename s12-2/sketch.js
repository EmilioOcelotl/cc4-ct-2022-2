/*

Con LINE_LOOP

*/

let bt;
let loop;
let color = 0;

function setup() {

  createCanvas(400, 400);

  bt = createButton('iniciar');

  bt.position(width/2 - bt.width/2,
              height/2 - bt.height/2);

  bt.mousePressed(aInit);

  loop = new Tone.Loop((time) => {
    console.log("evento");
    color = Math.random() * 255;

  }, "1");

}

function draw() { // 50 cuadros
  background(color);
}

function aInit(){
    loop.start();
    Tone.Transport.start(); // reloj
    bt.hide();
}
