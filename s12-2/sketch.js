/*

Con LINE_LOOP

*/

let bt;
let loop;

function setup() {

  createCanvas(400, 400);

  bt = createButton('iniciar');

  bt.position(width/2 - bt.width/2,
              height/2 - bt.height/2);

  bt.mousePressed(aInit);

  loop = new Tone.Loop((time) => {
    // triggered every eighth note.
    console.log("evento");
  }, "1");

}

function draw() {
  background(220);
}

function aInit(){
    loop.start();
    Tone.Transport.start();
    bt.hide(); 
}
