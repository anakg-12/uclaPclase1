export default class CL_mCliente{
    constructor({cedula,cadProducto,cantidad}){
        this.cedula=cedula;
        this.codProducto=codProducto;
        this.cantidad=cantidad;
    }
    set cedula(c){
     this.cedula=c;
    }
    get cedula(){
        return this.cedula;
    }
    set codProducto(cP){
        this.codProducto=cP;
    }
    get codProducto(){
        return this.codProducto;
    }
    set cantidad(can){
    this.cantidad=can;
    }
    get cantidad(){
        return this.cantidad;
    }
    calcMontoPagar() {
        if (this.codProducto=="a")
            return 10*this.cantidad;
        else
        if(this.codProducto=="b")
            return 5*this.cantidad;
        else
        return 20*this.cantidad;
    }
    
}