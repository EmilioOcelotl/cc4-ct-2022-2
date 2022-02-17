// audio, imagen y video ( texto )

// variables

let audio;
let img;
let texto = 'Un bucle que no se detiene';
let video;

function preload(){
  audio = loadSound('audios/rv140-5.wav');
  img = loadImage('img/antiNuevo.png');
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
  image(img, 0, 0, width, height);
  image(video, 100, 100, width-200, height-200);
  fill(255);
  text(texto, width/2, height-50);

  // if( detonar algo cada cierto tiempo )
  // switch ()
}

function keyPressed(){
  if(key == 'p'){
       audio.loop();
       video.loop();
     }
}

function keyReleased(){
  if(key == 's'){
    audio.stop();
    video.stop();
  }

}
