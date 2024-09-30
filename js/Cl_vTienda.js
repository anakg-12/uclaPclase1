export default class CL_vTienda {
    constructor(controlador) {
    this.vista = document.getElementById("main");
    this.tabla = document.getElementById("tabla");
    this.btAgregarCliente = document.getElementById("btAgregarCliente");
    this.lblProductoMayorVenta = document.getElementById("lblProductoMayorVenta");this.lblMontoTotal = document.getElementById("lblMontoTotal");

    this.btAgregarCliente.onclick = () => controlador.mostrarVistaTienda();
    }
    mostrar() {
    this.vista.hidden = false;
    }
    ocultar() {
    this.vista.hidden = true;
    }
    reportarCliente({cedula, codProducto, cantidad, montoPagar,devolverMontoTotal, productoMayorVenta}) {
        this.tabla.innerHTML += `
        <tr>
        <td>${cedula}</td>
        <td>${codProducto}</td>
        <td>${cantidad}</td>
        <td>${montoPagar}</td>
        </tr>`;
        
        this.lblProductoMayorVenta.innerHTML = productoMayorVenta;
        this.lblMontoTotal.innerHTML = devolverMontoTotal;
        }
        }
