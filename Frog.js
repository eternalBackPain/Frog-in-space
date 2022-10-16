class Frog {
    constructor(posx, posy, velx, vely, accx, accy) {
        this.pos = createVector(posx, posy);
        this.vel = createVector(velx, vely)
        this.acc = createVector(accx, accy)
        this.r = 15
        this.red = 0
        this.green = 200
        this.blue = 0
    }

    applyForce(force) {
        // let f = p5.Vector.div(force, this.mass)
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc).limit(5)
        this.pos.add(this.vel);
    }

    show() {
        fill(this.red, this.green, this.blue);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }

    bounce() {
        if (this.pos.x <= 0 + this.r) {
            this.pos.x = 0 + this.r
            this.vel.x *= -1;
        } else if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        } else if (this.pos.y <= 0 + this.r) {
            this.pos.y = 0 + this.r
            this.vel.y *= -1;
        } else if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r
            this.vel.y *= -1;
        } else false;
    }

    leap() {
        this.acc.y = 0
        const jumpVel = createVector(0, -1)
        jumpVel.setMag(10)
        this.vel.add(jumpVel);
        const jumpAcc = createVector(0, 1).limit(0.1)
        this.acc.add(jumpAcc)
    }

    move(direction) {
        if (direction == 'left') {
            const moveLeft = createVector(-1, 0).setMag(5)
            this.vel.add(moveLeft);
        }
        if (direction == 'right') {
            const moveRight = createVector(1, 0).setMag(5)
            this.vel.add(moveRight);
        }
    }

    hits(enemy) {
        let distance = dist(this.pos.x, this.pos.y, enemy.pos.x, enemy.pos.y);
        if (distance < this.r + enemy.r) {
            console.log("KILLED")
            return true
        } else return false
    }

    die() {
        this.red = 255
        this.green = 0
        this.blue = 0
    }
    
}