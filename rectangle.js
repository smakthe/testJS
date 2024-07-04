import Quadrilateral from './quadrilateral.js'

class Rectangle extends Quadrilateral{
    constructor(lenx,leny){
        super(lenx,lenx,leny,leny)
        this.lenx = lenx
        this.leny = leny
    }
    getPerimeter(){
        return 2*(this.lenx+this.leny)
    }
    getArea(){
        return this.lenx*this.leny
    }
}

export default Rectangle