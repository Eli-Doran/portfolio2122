let x;
let y;
let z;
let u;
let d;
let song;
let hColor = true;
let counter = 0;
let message = 'Feel the Music'



function setup() {
    createCanvas(500, 500);

}

function draw() {
    frameRate(25);
    background(x, y, z);
    sound();
    headphones();
    theWords();
    touch();
    warning();
    touchCounter();
    messageResponse();
    headphoneColor();
}

function headphoneColor() {
    if (((mouseX >= 0) && (mouseX <= 500)) && ((mouseY >= 0) && (mouseY <= 500))) {
        hColor = false;
    }
    else {
        hColor = true;
    }
}

function warning() {
    textFont('Montserrat');
    textSize(20);
    fill(0);
    text("Flash Warning", 10, 30);
}

function touch() {
    if (mouseIsPressed) {
        x = random(130, 250);
        y = random(150, 250);
        z = random(130, 250);
    }
}

function messageResponse() {
    if (counter < 100) {
        textSize(20);
        fill(0);
        text("Not Very Good", 365, 480);
    }
    else if (counter <= 250) {
        textSize(20);
        fill(0);
        text("Ehh", 395, 480);
    }
    else if (counter <= 500) {
        textSize(20);
        fill(0);
        text("Fine", 390, 480);
    }
    else if (counter <= 750) {
        textSize(20);
        fill(0);
        text("Great", 380, 480);
    }
    else if (counter <= 1000) {
        textSize(20);
        fill(0);
        text("Woah", 390, 480);
    }
    else if (counter > 1000) {
        textSize(20);
        fill(0);
        text("Incredible", 370, 480);
    }
}

function touchCounter() {
    if (mouseIsPressed) {
        counter++;
    }
    textFont('Montserrat');
    textSize(15);
    fill(0);
    text("Color Change Counter: " + counter, 10, 480);
}

function theWords() {
    words();
    function words() {
        textFont('Montserrat');
        textSize(42);
        fill(0);
        text(message, 125 + u, 425 + d);
        text(message, 125 + u, 425 + d);
    }
    if (mouseIsPressed) {
        u = random(-5, 5);
        d = random(-5, 5);
    }

}

function headphones() {
    headphoneBand();
    headphoneCup1();
    headphoneCup2();
    function headphoneBand() {
        if (hColor == false) {
            fill(250, 0, 0);
            noStroke();
            arc(250, 190, 360, 310, PI, TWO_PI);
            fill(x, y, z);
            arc(250, 190, 290, 260, PI, TWO_PI);
            fill(250, 0, 0);
            rect(70, 190, 35, 90);
            fill(250, 0, 0);
            rect(395, 190, 35, 90);
        }
        else {
            fill(0);
            noStroke();
            arc(250, 190, 360, 310, PI, TWO_PI);
            fill(x, y, z);
            arc(250, 190, 290, 260, PI, TWO_PI);
            fill(0);
            rect(70, 190, 35, 90);
            fill(0);
            rect(395, 190, 35, 90);
        }

    }

    function headphoneCup1() {
        if (hColor == false) {
            fill(250, 0, 0);
            arc(107, 270, 130, 140, 164.999, 92.7);
        }
        else {
            fill(0);
            arc(107, 270, 130, 140, 164.999, 92.7);
        }
    }

    function headphoneCup2() {
        if (hColor == false) {
            fill(250, 0, 0);
            arc(389.9, 270, 130, 140, 92.7, 164.899);
        }
        else {
            fill(0);
            arc(389.9, 270, 130, 140, 92.7, 164.899);
        }
    }
}

function sound() {
    mainSound();
    mainSound();

    sideSoundLeft();
    sideSoundLeft();

    sideSoundRight();
    sideSoundRight();

    function mainSound() {
        for (let x = 175; x < 325; x++) {
            let y = randomGaussian(250, 17);
            color(90);
            stroke(random(150), random(150), random(150));
            line(x, 250, x, y);
            line(x, 250, x, y);
            line(x, 250, x, y);
        }
    }

    function sideSoundLeft() {
        for (let x = 125; x < 175; x++) {
            let y = randomGaussian(250, 10);
            color(90);
            line(x, 250, x, y);
            line(x, 250, x, y);
            line(x, 250, x, y);
        }
    }

    function sideSoundRight() {
        for (let x = 325; x < 375; x++) {
            let y = randomGaussian(250, 10);
            color(90);
            line(x, 250, x, y);
            line(x, 250, x, y);
            line(x, 250, x, y);
        }
    }

}