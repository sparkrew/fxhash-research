class Cell
{
    constructor(){
        this.xoff = random(1000);
        this.yoff = random(1000);
        this.location = createVector(random(width), random(height));
        this.gene = random(1);           // setting the type
        this.radius = map(this.gene, 0, 1, 3, 20);  
        this.maxSpeed = map(this.gene, 0, 1, 10, 1);
        this.cureRate = map(this.gene, 0, 1, 3, 1);
        this.health = 255;
        this.isAlive = true;
        this.velocity = createVector(0,0);
        this.deathRate = map(this.gene, 0, 1, 0.01, 0.001);
    }

    draw(){
        fill(0, 180);
        circle(this.location.x, this.location.y, this.radius+1);
        fill(this.health, 180);
        if(this.health == 255)
          this.radius = max(this.radius+0.2, 20)
        circle(this.location.x, this.location.y, this.radius);
        fill(0, 180);
        circle(this.location.x, this.location.y, 2);
    }

    move(){
        this.velocity.x = map(noise(this.xoff),0,1, -this.maxSpeed, this.maxSpeed);
        this.velocity.y = map(noise(this.yoff),0,1, -this.maxSpeed, this.maxSpeed);
        this.xoff += 0.01;
        this.yoff += 0.01;
        this.location.add(this.velocity);
    }

    //if the agent exists from one side of the screen it enters from the other
    borders() {
        if (this.location.x < -this.radius) this.location.x = width + this.radius;
        if (this.location.y < -this.radius) this.location.y = height + this.radius;
        if (this.location.x > width+this.radius) this.location.x = -this.radius;
        if (this.location.y > height+this.radius) this.location.y = -this.radius;
    }

    //checks if a point is inside an agent. We use that to check if an agent
    //is clicked on so that we can infect it (done in another function)
    isInside(x, y)
    {
        if (dist(x, y, this.location.x, this.location.y) < this.radius) {
            return true;
        }
        else return false;
    }

    cure()
    {
        if (this.isAlive)
        {
            this.health = this.health + this.cureRate; //as time passes agents get better
            this.health = constrain(this.health, 0, 255);
            if (this.health<255 && random(1) < this.deathRate) this.isAlive=false; // once in a while they die
        }
    }
}