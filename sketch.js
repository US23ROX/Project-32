const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg1 = "sunrise1.png";
var bg2 = "sunrise2.png";
var bg3 = "sunrise3.png";
var bg4 = "sunrise4.png";
var bg5 = "sunrise5.png";
var bg6 = "sunrise6.png";
var bg7 = "sunrise7.png";
var bg8 = "sunrise8.png";
var bg9 = "sunrise9.png";
var bg10 = "sunrise10.png";
var bg11 = "sunrise11.png";
var bg12 = "sunrise12.png";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}


async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    
    if(hour>=06 && hour<=07){
        bg = "sunrise1.png";
       
    }
    else if(hour>=07 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=09){
        bg = "sunrise3.png";
    }
    else if(hour>=09 && hour<=10){
        bg = "sunrise4.png";
    }
    else if(hour>=10 && hour<=11){
        bg = "sunrise5.png";
    }
    else if(hour>=11 && hour<=14){
        bg = "sunrise6.png";
    }
    else if(hour>=15 && hour<=16){
        bg = "sunrise7.png";
    }
    else if(hour>=16 && hour<=17){
        bg = "sunrise8.png";
    }
    else if(hour>=17 && hour<=18){
        bg = "sunrise9.png";
    }
    else if(hour>=19 && hour<=20){
        bg = "sunrise10.png";
    }
    else if(hour>=20 && hour<=21){
        bg = "sunrise11.png";
    }
    else{
        bg = "sunrise12.png";
    }

    backgroundImg = loadImage(bg1);
    console.log(backgroundImg);
}


    

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


