export default class CL_mTienda{
    constructor(){
        acMontoTotal=0.0;
        acCantA=0.0;
        acCantB=0.0;
        acCantC=0.0;
    }
    procesarCliente(c){
        acMontoTotal+=c.calcMontoPagar()
        if (c.codProducto=="a")
            acCantA+=c.cantidad;
        else
        if(this.codProducto=="b")
            acCantB+=c.cantidad;
        else
        acCantC+=c.cantidad;
    }
    productoMayorVenta(){
        if(acCantA=acCantB=acCantC)
            return "los productos a,b y c"
        else 
        if(acCantA>acCantC && acCantB>acCantC)
            return "los productos a y b"
        else
        if(acCantA>acCantB && acCantC>acCantB)
            return "los productos a y c"
        else 
        if(acCantB>acCantA && acCantC>acCantA)
            return "los productos b y c"
        else 
        if(acCantA>acCantB && acCantA>acCantC)
            return "el producto a"
        else
        if(acCantB>acCantA && acCantB>acCantC)
            return "el producto b"
        else 
        return "el producto c"

    }
    devolverMontoTotal(){
        return acMontoTotal;
    }
}