//FROGGER SURVIVAL GAME

//TODO:
// ADD A TIMER 

let frog;
let enemies = [];
let pause = 1

//Pause button
let pauseButton = document.querySelector(".pause")
pauseButton.addEventListener("click", () => {
  pause *= -1;
  console.log("button clicked");
}, false)

//Reload button
let reloadButton = document.querySelector(".reload")
reloadButton.addEventListener("click", () => {
  document.location.reload();
})

//Timer
// let timePassed = time
// let timer = createElement("h3", "Timer: " + timePassed)

//Gravity
function gravity(x) {
  const grav = createVector(0, x);
  grav.limit(x);
  return grav;
}

//Moving the frog
function keyPressed() {
  if (keyCode === UP_ARROW && keyIsPressed) {
    // console.log("up arrow is pressed")
    frog.leap();
  } else if (keyCode === LEFT_ARROW && keyIsPressed) {
    // console.log("left arrow")
    frog.move('left');
  } else if (keyCode === RIGHT_ARROW && keyIsPressed) {
    // console.log("right arrow")
    frog.move('right');
  } else false;
}


function setup() {
  createCanvas(600, 600);
  frog = new Frog(width / 2, height / 2, 0, 0, 0, 0)
  for (i = 0; i < 50; i++) {
    enemies[i] = new Enemy( //20, 20, random(-1, 1), random(-1, 1))
      random([random(-20, 0), random(width, width + 20)]),
      random([random(-20, 0), random(height, height + 20)]),
      random(-1, 1),
      random(-1, 1)
    )
  }
}

function draw() {
  if (pause == 1) {
  background(0);

  //the Frog
  frog.applyForce(gravity(0.01));
  frog.update();
  frog.show();
  frog.bounce();

  //creating new enemies
  if (frameCount % 120 == 0) {
    for (i = 0; i < 50; i++) {
      enemies.push(new Enemy( //20, 20, random(-1, 1), random(-1, 1))
        random([random(-20, 0), random(width, width + 20)]),
        random([random(-20, 0), random(height, height + 20)]),
        random(-1, 1),
        random(-1, 1)
      ))
      // console.log("created");
    }
  }

  //showing, moving and deleting enemies
  for (i = enemies.length - 1; i >= 0; i--) {
    enemies[i].update();
    enemies[i].show();
    if (enemies[i].offscreen()) {
      enemies.splice(i, 1)
    }
    //Kill mechanic (HAVE NO IDEA WHY IT DOESNT WORK NOW)
    // if (frog.hits(enemies[i])) {
    //   frog.die();
    // }

  }
  } else false
}