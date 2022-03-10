let boton;
let miBooleano = false;

let filas = 20;
let columnas = 20;

let cuadroH;
let cuadroW;

let cantidad = filas*columnas;

let actual = 0;
let intX = 0;
let intY = 0;

let video;

 function preload(){
   video = createVideo('videos/1out.mov');
   video.hide();
 }

function setup() {
  createCanvas(800, 800);
  background(0);

  boton = createButton('iniciar');
  boton.position(width/2-(boton.width/2), height/2 - ((boton.height/2)));
  boton.mousePressed(miBoton);

  cuadroW = width / filas;
  cuadroH = height / columnas;

}

function draw(){
    if(video.elt.readyState == 4 && miBooleano == true){

      let posX = cuadroW * intX; // intX = 0
      let posY = cuadroH * intY; // intY = 1

      image(video, posX, posY, cuadroW, cuadroH); // vid,posX,posY,w,h
      actual++;

      var tiempo = map(actual, 0, cantidad, 0, video.duration() );
      video.time(tiempo);

      intX++;

      if(intX >= columnas){
        intX = 0;
        intY++;
      }


  }
}

// cuando el botón está prersionado

function miBoton(){
  background(255);
  boton.hide();
  miBooleano = true;
  video.loop();

}
