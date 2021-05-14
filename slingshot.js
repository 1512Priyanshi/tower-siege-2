class SlingShot{
    constructor(bodyA, pointB){
        var options = {

            // give stiffness and length to the slingshot
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.SlingShot= Constraint.create(options);
        World.add(world, this.SlingShot);
    }


// create Display function
      display(){

        // createpoint a and point b
            var pointA = this.SlingShot.bodyA.positon;
            var pointB = this.pointB;

            //give the strokeweight
            strokeWeight(4);
            // create a line
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}