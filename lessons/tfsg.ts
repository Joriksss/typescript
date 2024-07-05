// class Temp{
//     private x: number
//     constructor(val?: number){
//         val ? this.x = val : this.x = 0
//     }

//     private get getX(){
//         return this.x
//     }

//     public set setX(val:number){
//         this.x =val
//     }
// }
// let temp1: Temp = new Temp()
// let temp2: Temp = new Temp(20)

// temp1.setX = 50
// console.log(temp2.getX)
// console.log(temp1.getX)


// class Share {
//     protected id: number;
//     public width: number;
//     public color: string;

//     draw(): void{
//         console.log("Рисование линии1")
//     }

//     constructor(){
//         console.log("Конструктор Share")
//     }
// }

// class Line extends Share{
//     public x1: number;
//     public x2: number;
//     public y1: number;
//     public y2: number;

//     draw(): void{
//         console.log("Рисование линии")
//     }

//     constructor(){
//         super();
//         console.log("Конструктор Line", this.id);
//     }
// }

// class Triangle extends Share{
    
//     constructor(){
//         super();
//         console.log("Треугольник крута")
//     }
// }

// let pop: Line = new Line()
// let pip: Triangle = new Triangle()

// // pip.draw()
// // pop.draw()

// const shapes: Share[] = []; 
// shapes[0] = new Line(); shapes[1] = new Triangle();

// for(let i = 0; i < shapes.length; ++i){
// shapes[i].draw();
// }


// class Car {
//     protected model: number;
//     public nummodel: number;

//     // drive(): void{
//     //     console.log("Plate")
//     // }

//     constructor(){
        
//     }
// }

// class BMW extends Car{
//     public years: number;
//     public knows: number;

//     drive(): void{
//         console.log("Plate")
//     }

//     constructor(){
//         super()
//     }
// }

// class Toyota extends Car{
//     public years: number;
//     public knows: number;

//     constructor(){
//         super()
//     }
// }


// let kok1: BMW = new BMW();
// let kok2: Toyota = new Toyota()

// kok1.drive()
// kok2.drive()