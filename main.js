function preload(){
clownnose=loadImage('https://i.postimg.cc/J0JjCMNC/moustache.jpg')
}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses)
}
function modelLoaded(){
console.log("ModelsLoaded")
}
function draw(){
image(video,0,0,300,300)
image(clownnose,noseX,noseY,30,30)
}
function takesnapsLhot(){
save("clown.png")
}
noseX=0
noseY=0
function gotPoses(results){
if (results.length>0) {
  console.log(results)
  noseX=results[0].pose.nose.x
  noseY=results[0].pose.nose.y+5
}
}
