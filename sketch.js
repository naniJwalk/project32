
var box1,box2,box3,box4,box5,box6,box7,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var Slingshot;
var ground,stand;
var engine,world;
var score=0;

function preload(){
  time();
    bgImage=loadImage(bg);
}
function setup() {
  createCanvas(800,400);
  box1 = new box(300,275,30,40);
  box2 = new box(330,275,30,40);
  box3 = new box(360,275,30,40);
  box4 = new box(390,275,30,40);
  box5 = new box(420,275,30,40);
  box6 = new box(450,275,30,40);
  box7 = new box(480,275,30,40);

  box8=new box(330,235,30,40);
  box9=new box(360,235,30,40);
  box10=new box(390,235,30,40);
  box11=new box(420,235,30,40);
  box12=new box(450,235,30,40);

  box13=new box(360,195,30,40);
  box14=new box(390,195,30,40);
  box15=new box(420,195,30,40);

  box16=new box(390,155,30,40);

  ground=new ground(800,0,400,30);
  stand=new ground(50,150,100,30);

  polygon = Bodies.circle(50,200,50);
  World.add(world,polygon);
  
  Slingshot=new slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255); 
  textSize(20);
  text("score: "+score,750,40)
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  ground.display();
  stand.display();
  polygon.display();
  
  
  drawSprites();
}
function mouseDragged () {
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased (){
  slingshot.fly();
}
function keyPressed() {
  if(keyCode===32){
  slingshot.attach(this.polygon);
  }
  
  async function time(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "IDK";
    }
    else{
        bg = "IDK";
    }

    hello = loadImage(bg);
    console.log(hello);
}
}