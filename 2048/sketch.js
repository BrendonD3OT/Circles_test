let size = 200;
let range = 55;
let clicked = false;
function setup() {
	createCanvas(windowWidth, windowHeight);
	//noLoop();
}
function Rings(count){
	for (let i = (5*count); i >0; i -= 5) {
		fill(floor(Math.random()*size+range),floor(Math.random()*size+range),floor(Math.random()*size+range));
		ellipse(windowWidth/2,windowHeight/2,10*i,10*i);
}
}
function mousePressed(){
	if (clicked === true){
		clicked = false;
	}
	else{
		clicked = true;
	}
	let count = Math.random()*10;
	let tempX = mouseX;
	let tempY = mouseY;
	for (let i = (5*count); i >0; i -= 5) {
		fill(floor(Math.random()*size+range),floor(Math.random()*size+range),floor(Math.random()*size+range));
		ellipse(tempX,tempY,10*i,10*i);
}
return false;
}
function draw() {
	background(255);
	fill(255,0,0);
	if (clicked === true){
		Rings(50);
	}
}