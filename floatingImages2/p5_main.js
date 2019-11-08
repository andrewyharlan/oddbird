
var sketch = function (p5){
  /*
  Seting up a local server: https://www.youtube.com/watch?v=UCHzlUiDD10
  1 Open teminal
  2 navigate to the folde with you index.html. Use cd XXXX to get into the folder XXXX. use ls to list what is the folder contents
  3 un this line of code: python -m SimpleHTTPServer
  4 Open your browser and getto localhost:8000
  https://github.com/processing/p5.js/wiki/Local-server
  */

  let nImages = 12; // the number of images in the folder

  let imageFolderPath = "images/mainPage/image";

  let images = [];

  let imageContainers = [];

  let thisCanvas;

	let myWall;

  p5.preload = function() {
    for (var i = 0; i < nImages; i++) {
      images[i] = p5.loadImage(imageFolderPath+(i+1)+".png");
    }
  }

  p5.setup = function() {

  //thisCanvas = p5.createCanvas(window.innerWidth, 800);
  thisCanvas = p5.createCanvas(window.innerWidth, window.innerHeight);

  myWall = new Wall(this,0,100,800, 500);

  for (var i = 0; i < images.length; i++) {

    imageContainers[i] = new imageContainer(this, images[i], i);
    imageContainers[i].setBox(100);
    myWall.addImage(imageContainers[i]);
  }

  // Place the images and adjust the size here
  imageContainers[1].setPosition(p5.createVector (-975,75));
  imageContainers[1].setBox(300);
  imageContainers[1].setDescription ("A day at my grandparents' village. Exciting because I remember the way it used to be, alive. Days spent chasing storks around town with my cousins, fishing with grandpa, and the daily trips to the coffee house for fresh-squeezed lemonade and ice cream. Now all the kids are gone, and the school is closed. Only the old and disabled roam the streets. Even in the face of loss, folk music still rings across town. A glimmer of pride.")
  imageContainers[1].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[0].setPosition(p5.createVector (-550,-150));
  imageContainers[0].setBox(400);
  imageContainers[0].setDescription("Cross the bridge. He's been measuring the water levels for years know. I'm not sure he even knows why. We got some branches from their apple orchard, for a good harvest to come. Donna's grandpa will show us how it's done. This town once boomed with bustling souls going to work, children playing, and the smell of fresh baked goods wafting through the air. Communism decimated all of it. The soul was taken. Sunflowers grow like corn in the midwest United States here. The happy flowers beam their face to the sky. Beacons for hope and sustenance. One day things will get better...I hope. ");
  imageContainers[0].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[11].setPosition(p5.createVector (-850,-325));
  imageContainers[11].setBox(350);
  imageContainers[11].setDescription("I felt like I was getting into the car of a couple old friends when Donna's grandparents picked us up in Sliven that day. We were off to have an adventure, and age didn't matter. It's a beautiful thing to learn from those who have lived long enough to find perspetive. Those who have lived through much differnt times. Times and circumstances really not too distant. As we drifted across the country in our packed coop, we discussed the history. Well Donna did, and translated it the best she could. We stopped for melon at a roadside vendor and carried on.")
  imageContainers[11].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[6].setPosition(p5.createVector (400,0));
  imageContainers[6].setBox(400);
  imageContainers[6].setDescription("The desolate white fountain. Not a soul, but the scavenging pigeons could be found. A symbol for the communist way. Unempathetic atttempts to give people what they need. Spray painted tags decorate the building surounding. Voices of the city making themselves heard. Taking back what was never theirs to begin with.");
  imageContainers[6].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[3].setPosition(p5.createVector (200, 300));
  imageContainers[3].setBox(500);
  imageContainers[3].setDescription("In this relic of the past, reflects a dim hope for a collective future here.");
  imageContainers[3].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[5].setPosition(p5.createVector (-220,-250));
  imageContainers[5].setBox(300);
  imageContainers[5].setDescription("A beautiful morning in Sofia. The old world city, alive in the modern times. Due to limited opportunities elsewhere in the country, the youth flock to this eastern european capital. In this beautiful country of lush fantasy-like geography, out the window you see the lonely obelisk to industry, seeming inadequate to fuel  the city, and imposing on the landscape. It hurts to see a country so behind develop in the ways of the west, the ways that now threaten our ability to survive on this planet. Nations such as Bulgaria have the power to tread a new path.")
  imageContainers[5].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[4].setPosition(p5.createVector (850,0));
  imageContainers[4].setBox(400);
  imageContainers[4].setDescription("A big hike up Mt.Vihren, the third highest peak in the Balkans, and second highest peak in Bulgaria. Today was a day of triumph and beauty. We felt powerless in the arms of nature, but it was beautiful, and it was humbling. We trekked with Bulgarians, Serbians, Romanians, and Russians. All there to get some fresh air just as we were.");
  imageContainers[4].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[7].setPosition(p5.createVector (600,-250));
  imageContainers[7].setBox(350);
  imageContainers[7].setDescription("High in the sky. Borders don't exist here. Not in the samwe way they do on land at least. Donald Trump's wall won't stop a thing. That's how humans are anyway, one species. Borders are only a construct. However within those boundaries of borders, immensely different cultures develop, responding to the problems of life in wholely different ways. Some cultures have been taken advantage of, some rise to the top. Often life feels less about maintaining peace, than navigating conflicts. Still, I sit above the clouds, and for a moment none of that matters. I only dream of the gastronmic pleasures that every culture has to offer. We all have to eat.");
  imageContainers[7].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[8].setPosition(p5.createVector (100,-150));
  imageContainers[8].setBox(300);
  imageContainers[8].setDescription("The feeding hand.");
  imageContainers[8].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[2].setPosition(p5.createVector (-200,170));
  imageContainers[2].setBox(300);
  imageContainers[2].setDescription("We outlawed the public display of communist monuments, but we still live in one.");
  imageContainers[2].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[10].setPosition(p5.createVector (90, -210));
  imageContainers[10].setBox(500);
  imageContainers[10].setDescription("")
  imageContainers[10].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");

  imageContainers[9].setPosition(p5.createVector (-1400, -175));
  imageContainers[9].setBox(500);
  imageContainers[9].setDescription("Far from the fast paced West. The sun sets over the fertile lands of the Bulgarain village, where the storks retun every spring to find nothing has chnaged. We feel an everlasting peace of mind.");
  imageContainers[9].setCurrentFont ("fonts/SourceSerifPro-Regular.ttf");


  myWall.setDisplacementMode ("relative");

  myWall.setWallFont("fonts/SourceSerifPro-Regular.ttf");

  //....

  //p5.imageMode(p5.CENTER);

  }

  p5.draw = function() {
    p5.background(255,255,255);

    p5.rect(0,0,p5.width-2,p5.height -2);

	  myWall.show();

    myWall.showWallBoudaries(false);

    p5.drawFrame();



  }

  p5.drawFrame = function(){
    let frameWidth = 50;

    p5.noStroke();

    p5.fill(0,0);
    //top
    p5.rect (0 , 0, p5.width , frameWidth);

    //bottom
    p5.rect (0, p5.height, p5.width , - frameWidth);

    //left
    p5.rect (0, 0 , frameWidth, p5.height);

    //right
    p5.rect (p5.width, 0 , - frameWidth, p5.height);

    //p5.stroke(0);

  }


  p5.mouseClicked = function(){
     myWall.myMouseClicked();
  }
}
var myp5 = new p5(sketch, 'p5sketch');
