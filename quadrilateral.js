class Quadrilateral{
    constructor(len1, len2, len3, len4){
        this.len1 = len1
        this.len2 = len2
        this.len3 = len3
        this.len4 = len4
        this.isValid = () => {
            if(this.len1 === 0 || this.len2 === 0 || this.len3 === 0 || this.len4 === 0 ){
                return false
            }else{
                return true
            }
        }
    }
}

export default Quadrilateral