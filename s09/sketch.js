// 1. Variables

/*

Tone

- 1 Generar audio > muestra, sintesis
- 2 Efectos
  - filtro > 200 >
  - distorsión
- 3 Análisis

- Imagen > 60 cuadros por segundo
- Sonido > 44100 p/s
- 20 - 20k hz > 20 mil frecuencias
- 4 8 16 32, 64, 128
- 1024

- ganancia > posición
- sonido > posiciones de objetos

- cambios trannsformar magnitudes
  - sonido en posiciones dde objetos 
  - datos

- Texturas 3d
  - hydra > live coding programación al vuelo
  - asignemos a un objeto

*/

let num = 512;

const analyser = new Tone.Analyser("fft", num);
const filter = new Tone.Filter(200, "hightpass").toMaster();
const distortion = new Tone.Distortion(0.5).connect(filter);
const player = new Tone.Player("audio/german.mp3").connect(distortion);

let pX = [],
  pY = [],
  pZ = [];

let boton;

  // preload()

// 2. Inicialización

function setup() {

  createCanvas(600, 600, WEBGL);

  // Motor gráfico webgl > 3d > x, y, z
  // luces y sombras
  // cámara x, y, z

  // processing > librería > peasycam
  // 0, 0, 0 en el centro del canvas


  var posX, posY, posZ;

  for (let i = 0; i < num; i++) { // 512

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

  boton = createButton('iniciar');
  boton.position(width/2-(boton.width/2), height/2 - (boton.height/2));
  boton.mousePressed(miBoton);

// Promesas



}

// 3. Transformación

function draw() { //

  background(0);

  rotateX(frameCount * 0.001);
  rotateZ(frameCount * 0.001);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  pointLight(250, 250, 250, locX, locY, 150);

  noStroke();

  for (let i = 0; i < num; i++) {
    let pos = analyser.getValue(); // 0 512 513 - 0

    push();
    translate(
      // posición en setup * valor del análisis * reductor
      pX[i] * pos[i % 512] * 0.015,
      pY[i] * pos[i % 512] * 0.015,
      pZ[i] * pos[i % 512] * 0.015
    );
    box(20); // 512 cubos
    pop();

  }

  // console.log(analyser.getValue()[0] * 0.015);

  let vel = map(mouseX, 0, width, 0.1, 2);
  player.playbackRate = vel;

  //let vol = map(mouseY, 0, height, -48, -3);
  //player.volume.value = vol;

  let freq = map(mouseY, 0, height, 10000, 10);
  filter.frequency.value = freq;

}

function miBoton(){
  Tone.loaded().then(() => {
    player.loop = true;
    player.connect(analyser);
    player.start();
  });
  boton.hide();

}
