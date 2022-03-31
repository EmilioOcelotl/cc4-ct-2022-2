// 1. Variables

let num = 512;

const analyser = new Tone.Analyser("fft", num);
const filter = new Tone.Filter(200, "hightpass").toMaster();
const distortion = new Tone.Distortion(0.5).connect(filter);
const player = new Tone.Player("audio/pattern.mp3").connect(distortion);

let pX = [],
  pY = [],
  pZ = [];

// 2. Inicialización

function setup() {

  createCanvas(600, 600, WEBGL);

  var posX, posY, posZ;

  for (let i = 0; i < num; i++) {

    var theta1 = Math.random() * (Math.PI * 2);
    var theta2 = Math.random() * (Math.PI * 2);

    posX = Math.cos(theta1) * Math.cos(theta2);
    posY = Math.sin(theta1);
    posZ = Math.cos(theta1) * Math.sin(theta2);

    let radio = 150;

    pX[i] = posX * radio;
    pY[i] = posY * radio;
    pZ[i] = posZ * radio;
  }

  Tone.loaded().then(() => {
    player.loop = true;
    player.connect(analyser);
    player.start();
  });

}

// 3. Transformación

function draw() {

  background(0);

  rotateX(frameCount * 0.001);
  rotateZ(frameCount * 0.001);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  pointLight(250, 250, 250, locX, locY, 150);

  noStroke();

  for (let i = 0; i < num; i++) {
    let pos = analyser.getValue();

    push();
    translate(
      pX[i] * pos[i % 512] * 0.015,
      pY[i] * pos[i % 512] * 0.015,
      pZ[i] * pos[i % 512] * 0.015
    );
    box(20);
    pop();

  }

  console.log(analyser.getValue()[0] * 0.015);

  let vel = map(mouseX, 0, width, 0.1, 2);
  player.playbackRate = vel;

  //let vol = map(mouseY, 0, height, -48, -3);
  //player.volume.value = vol;

  let freq = map(mouseY, 0, height, 10000, 10);
  filter.frequency.value = freq;

}
