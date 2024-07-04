import Rectangle from "./rectangle.js"

class Square extends Rectangle{
    constructor(len){
        super(len,len)
        this.len = len
    }
    getPerimeter(){
        return 4*this.len
    }
    getArea(){
        return this.len**2
    }
}

export default Square