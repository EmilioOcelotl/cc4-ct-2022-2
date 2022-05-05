/*

Múltiples caminos con botones
Ejercicio en clase: ¿Cómo agregar videos?

Para loop: solamente el número mide en segundos 

*/


let bt1, bt2, bt3, bt4, bt5, bt6, bt7;

let colores;
let data;
let numero = 0;

function preload(){

  data = loadJSON('data.json');

}

function setup() {

  createCanvas(400, 400);

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

}

function draw() {

  // image();

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

  background(colores[0]);

  //-------------------

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

  //-------------------

}

function funcbt4(){

  bt4.hide();
  bt5.hide();
  bt6.hide();
  bt7.hide();

  bt1.show();

  bt1.position(random(0+bt1.width, width-bt1.width ),
               random(0+bt1.height, width-bt1.height ));

  //-------------------

  background(colores[3]);

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

  //-------------------

}
