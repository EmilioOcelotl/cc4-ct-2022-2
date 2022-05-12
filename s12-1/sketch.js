
let bt1, bt2, bt3, bt4, bt5, bt6, bt7;

let colores;
let data;
let numero = 0;

let sonidos;
let video = []; // arreglo [video1, video2, video3, video4]

function preload(){

  data = loadJSON('data.json'); //

  video[0] = createVideo( data.videos.p1 ); // string
  video[1] = createVideo( data.videos.p2 );
  video[2] = createVideo( data.videos.p3 );
  video[3] = createVideo( data.videos.p4 );
  video[4] = createVideo( data.videos.p5 );
  video[5] = createVideo( data.videos.p6 );
  video[6] = createVideo( data.videos.p7 );

}

function setup() {

  createCanvas(400, 400);

  // inicializar el audio

  bt1 = createButton('iniciar');
  bt2 = createButton('camino 1');
  bt3 = createButton('camino 2');
  bt4 = createButton('camino 1-1');
  bt5 = createButton('camino 1-2');
  bt6 = createButton('camino 2-1');
  bt7 = createButton('camino 2-2');

  bt1.mousePressed(funcbt1);
  bt2.mousePressed(funcbt2);
  bt3.mousePressed(funcbt3);
  bt4.mousePressed(funcbt4);
  bt5.mousePressed(funcbt5);
  bt6.mousePressed(funcbt6);
  bt7.mousePressed(funcbt7);

  bt2.hide();
  bt3.hide();
  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  colores = [
    color(data.colores.p1),
    color(data.colores.p2),
    color(data.colores.p3),
    color(data.colores.p4),
    color(data.colores.p5),
    color(data.colores.p6),
    color(data.colores.p7)
  ];

  // colores[6]miOtroArchivo

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].hide();
  }

  sonidos = new Tone.Players(data.audios).toDestination(); //

}

function draw() {

  image(video[numero], 0, 0);
  // image(video[aleatoria], 0, 0);

}

function funcbt1(){

  bt1.hide();
  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt2.show();
  bt3.show();

  bt2.position(random(0+bt2.width, width-bt2.width ),
               random(0+bt2.height, width-bt2.height ));

  bt3.position(random(0+bt3.width, width-bt3.width ),
               random(0+bt3.height, width-bt3.height ));

  //-------------------

  background(colores[0]); //
  numero = 1;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();

  // detener la reproducción de todos los audios

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();

  //-------------------
  console.log(colores[0])

}

function funcbt2(){

  bt2.hide();
  bt3.hide();

  bt4.show();
  bt5.show();
  bt1.show();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  bt4.position(random(0+bt4.width, width-bt4.width ),
               random(0+bt4.height, width-bt4.height ));

  bt5.position(random(0+bt5.width, width-bt5.width ),
               random(0+bt5.height, width-bt5.height ));
  //-------------------

  background(colores[1]);
  numero = 2;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


  //-------------------

}

function funcbt3(){

  bt2.hide();
  bt3.hide();

  bt6.show();
  bt7.show();
  bt1.show();

  bt6.position(random(0+bt6.width, width-bt6.width ),
               random(0+bt6.height, width-bt6.height ));

  bt7.position(random(0+bt7.width, width-bt7.width ),
               random(0+bt7.height, width-bt7.height ));

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  //-------------------

  background(colores[2]);
  numero = 3;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();
  //-------------------

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


}miOtroArchivo

function funcbt4(){

  bt4.hide();
  bt5.hide();miOtroArchivo
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  //-------------------

  background(colores[3]);
  numero = 4;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();

  //-------------------

}

function funcbt5(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  //-------------------

  background(colores[4]);
  numero = 5;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();
  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();

  //-------------------

}

function funcbt6(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  //-------------------

  background(colores[5]);
  numero = 6;

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


  //-------------------

}

function funcbt7(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  //-------------------

  background(colores[6]);
  numero = 7; // audio o video

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
     video[i].stop();
  }

  video[numero].loop();

  for(let i = 0; i < 7; i++ ){ // 0, 1, 2, 3, 4, 5, 6
    sonidos.player(("p"+i).toString()).stop();
  }

  sonidos.player(("p"+numero).toString()).start();


  //-------------------

}
