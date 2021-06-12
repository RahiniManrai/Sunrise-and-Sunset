const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
 getBackgroundImg() }

function setup(){
    
    getBackgroundImg(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    }
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var responseJSON = await response.json()
    console.log(response.JSON())

   hour=datetime.slice(11, 13)
    var datetime= responseJSON.datetime

    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }else if(hour>=06&&hour<=08){
        bg="sunrise2.png"
    }else if(hour>=23&&hour<=00){
        bg="sunset10.png"
    }else if(hour>=00&&hour<=03){
        bg="sunrise11.png"
    }else{
        bg="sunset12.png"
    }


    backgroundImg=loadImage(bg)
}
