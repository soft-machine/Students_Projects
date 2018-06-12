
var vid1, vid2, vid3, vid4, vid5;
var  html;
var rouge_flag = false, noir_flag = false;

function preload() {
  vid1 = createVideo('assets/maison.mp4');
  vid2 = createVideo('assets/prison.mp4');
  vid3 = createVideo('assets/oiseaux.mp4');
  vid4 = createVideo('assets/cailloux.mp4');
  vid5 = createVideo('assets/yeux.mp4');
}


function setup() {
  createCanvas(windowWidth, windowHeight);


  accueil();

  vid1.size(windowWidth,vid1.height * windowWidth / vid1.width);
  vid2.size(windowWidth,vid2.height * windowWidth / vid2.width);
  vid3.size(windowWidth,vid3.height * windowWidth / vid3.width);
  vid4.size(windowWidth,vid4.height * windowWidth / vid4.width);
  vid5.size(windowWidth,vid5.height * windowWidth / vid5.width);

  html = select('html');

  }

function draw() {
  if (rouge_flag==true) {
    background(255,0,0);
  }else   if (noir_flag==true) {
    background(0);
  }

}

function accueil(){
  rouge_flag = true;
  noir_flag=false;

  vid1.pause();
  vid1.hide();

  vid2.pause();
  vid2.hide();

  vid3.pause();
  vid3.hide();

  vid4.pause();
  vid4.hide();

  vid5.pause();
  vid5.hide();
}

//------------------------------------- vidéo1
function vid1lecture(){
  rouge_flag = true;
  noir_flag = false;

  html.style('background', 'black');

  vid2.stop();
  vid3.stop();
  vid4.stop();
  vid5.stop();

  vid2.hide();
  vid3.hide();
  vid4.hide();
  vid5.hide();

  vid1.size(windowWidth,vid1.height * windowWidth / vid1.width);
  vid1.position((windowWidth-vid1.width)/2,(windowHeight-vid1.height)/2);

  vid1.show();
  vid1.play();

  vid1.onended(accueil);
}
//------------------------------------- vidéo2
function vid2lecture(){
  rouge_flag = false;
  noir_flag = true;

  html.style('background', 'black');

  vid1.stop();
  vid3.stop();
  vid4.stop();
  vid5.stop();

  vid1.hide();
  vid3.hide();
  vid4.hide();
  vid5.hide();

  vid2.show();
  vid2.size(windowWidth,vid2.height * windowWidth / vid2.width);
  vid2.position((windowWidth-vid2.width)/2,(windowHeight-vid2.height)/2);
  vid2.play();

  vid2.onended(accueil);
}
//------------------------------------- vidéo3
function vid3lecture(){
  rouge_flag = false;
  noir_flag = true;

  html.style('background', 'black');

  vid1.stop();
  vid2.stop();
  vid4.stop();
  vid5.stop();

  vid1.hide();
  vid2.hide();
  vid4.hide();
  vid5.hide();

  vid3.show();
  vid3.size(windowWidth,vid3.height * windowWidth / vid3.width);
  vid3.position((windowWidth-vid3.width)/2,(windowHeight-vid3.height)/2);
  vid3.play();

  vid3.onended(accueil);
}
//------------------------------------- vidéo4
function vid4lecture(){
  rouge_flag = false;
  noir_flag = true;

  html.style('background', 'black');

  vid1.stop();
  vid2.stop();
  vid3.stop();
  vid5.stop();

  vid1.hide();
  vid2.hide();
  vid3.hide();
  vid5.hide();

  vid4.show();
  vid4.size(windowWidth,vid4.height * windowWidth / vid4.width);
  vid4.position((windowWidth-vid4.width)/2,(windowHeight-vid4.height)/2);
  vid4.play();

  vid4.onended(accueil);
}
//------------------------------------- vidéo5
function vid5lecture(){
  rouge_flag = false;
  noir_flag = true;

  html.style('background', 'black');

  vid1.stop();
  vid2.stop();
  vid3.stop();
  vid4.stop();


  vid1.hide();
  vid2.hide();
  vid3.hide();
  vid4.hide();

  vid5.show();
  vid5.size(windowWidth,vid5.height * windowWidth / vid5.width);
  vid5.position((windowWidth-vid5.width)/2,(windowHeight-vid5.height)/2);
  vid5.play();
  vid5.onended(accueil);
}

//----------------------------------------------- Interactions avec le clavier
function keyPressed() {
  if(keyCode == 65){ // touche a
    vid1lecture();
  }
  if(keyCode == 83){ // touche s
    vid2lecture();
  }
  if(keyCode == 70){ // touche f
    vid3lecture();
  }
  if(keyCode == 82){ // touche r
    vid4lecture();
  }
  if(keyCode == 84){ // touche t
    vid5lecture();
  }
}

//----------------------------------------------- Fonction clik de souris déclenche le plein écran
function mousePressed(){
  fullscreen(true);
  resizeCanvas(windowWidth,windowHeight);
}
