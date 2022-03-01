objects=[]
img="";
status="";
function preload(){

}
function setup(){
canvas=createCanvas(600,400)
canvas.center()
video=createCapture(VIDEO)
video.size(600,400)
 video.hide()
objectd=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("cocossd is loaded")
    status=true
    
}
function gotResult(error,results){
    if (error) {
     console.log(error)
    } else {
       console.log(results) 
       objects=results
    }
}
function draw(){
    image(video,0,0,600,400)
    if (status!="") {
        objectd.detect(video,gotResult)
        for (i = 0; i < objects.length; i++) {
            document.getElementById("numberofobjects").innerHTML="number of objects detected="+objects.length;
            document.getElementById("status").innerHTML="status:objects detected";
            fill("black")
            strokeWeight(1)
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill()
            stroke("black");
            strokeWeight(5)
            rect(objects[i].x,objects[i].y-100,objects[i].width-700,objects[i].height-40)
            
        
        }   
        }
    
    
}