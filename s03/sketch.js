// audio, imagen y video ( texto )

/*

- Processing - Java
- P5 - Javascript

*/
// variables

let audio;
let img;
let texto = 'Un bucle que no se detiene';
let video;
let contador = 0;

let audios = [];
let imgs = [];

// audios = [audio1, 2, 3, 4]
// audio[0]
// listas, colecciones, contenedores, cajonera

// arreglos › archivo como partitura

function preload(){
  audios[0] = loadSound('audios/rv140-5.wav');
  // audios[1] = loadSound('audios/otroAudio.wav')

  imgs[0] = loadImage('img/antiNuevo.png');
  imgs[1] = loadImage('img/of4.png');

  video = createVideo('videos/fingers.mov');
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  video.hide();
}

function draw() {

  background(220);

  // eventos 0-100 evento1 100-200 evento2 201 - reinicia

  /*

  evento 1 y evento 2

  si evento 1 - e3 y e4
  si e2 - e5 y e6

  */

  // [[0, 100], [100, 200], 201]
  // [img1    , img2      , img3]

  if(contador > 0 && contador < 100){ // inicio 0 final 100

    // evento

    image(imgs[0], 0, 0, width, height);
    // un VIDEO
    // varios sonidos

  }

  if(contador > 100 && contador < 200){
    image(imgs[1], 0, 0, width, height);
  }

  if(contador == 201){
    contador= 0;
  }


  image(video, 100, 100, width-200, height-200);
  fill(255);
  text(texto, width/2, height-50);

  contador++; // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  // if( detonar algo cada cierto tiempo )
  // switch ()
}

function keyPressed(){
  if(key == 'p'){
       audios[0].loop();
       video.loop();
     }
}

function keyReleased(){
  if(key == 's'){
    audios[0].stop();
    video.stop();
  }

}
