class Point{
    x?:number;
    y?:number;
    constructor(x1?:number, x2?:number){
        this.x = x1;
        this.y = x2;
    }
}

class Triangle{ 
    private x1: Point;
    private y1: Point;
    private z1: Point;
    constructor(x?:number,y?:number,z?:number,x2?:number,y2?:number,z2?:number){
        this.x1 = new Point(x,y);
        this.y1 = new Point(z,x2);
        this.z1 = new Point(y2, z2);
    }
}

let tr = new Triangle(1,2,3,4,5,6)

console.log(Triangle)
