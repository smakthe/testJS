class Quadrilateral{
    constructor(lenx, leny){
        this.lenx = lenx
        this.leny = leny
        this.isValid = () => {
            if(this.lenx === 0 || this.leny === 0){
                return false
            }else{
                return true
            }
        }
    }
    
    getPerimeter(){
        return 2*(this.lenx+this.leny)
    }
    getArea(){
        return this.lenx*this.leny
    }
}

class Rectangle extends Quadrilateral{}

var q1 = new Rectangle(50,200)
console.log(q1.getArea())
console.log(q1.getPerimeter())

class Square extends Quadrilateral{
    constructor(lenx,leny){
        super(lenx,leny)
    }
    
    isSquare(){
        if(this.isValid()){
            if(this.lenx === this.leny){
                return true
            }
        }
        return false
    }
}
var s1 = new Square(12,12)
console.log(s1.isSquare())
console.log(s1.getArea())
console.log(s1.getPerimeter())