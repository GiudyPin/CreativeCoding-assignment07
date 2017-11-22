 var mic;

function setup() {
  createCanvas(500, 500);
    frameRate(10)
    
  // Create an Audio input
  mic = new p5.AudioIn(); 
  // AudioIn is an object that is part of the library, va usata solo nella funzione setup
    
  // start the Audio Input.
  mic.start();
}

function draw() {
  background(200, 250,220);
    
  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  noStroke();  
  fill(random(vol*500+300), random(vol*400+300), random(vol*700+300));
    
    for(i=0; i<500; i+=50) {
  ellipse(random(i), random(i+50), vol*500+20);}
    
    for(j=0; j<500; j+=50) {
  ellipse(random(j+500), random(j), vol*500+20);}
    
    ellipse (250, 500, vol*1000+200)
 
} 