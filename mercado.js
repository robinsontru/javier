var cajita =[];
var listado= document.getElementById("listado");
var producto= document.getElementById("producto");
var contador= document.getElementById("contador");
if(cajita.length==0){
    listado.innerHTML="no hay nd"
}
function agregar(){
    cajita.push(producto.value)
    listado.innerHTML=cajita;
    contador.innerHTML=cajita.length;
}
function eliminar(){
    cajita.pop();
    listado.innerHTML=cajita;
    contador.innerHTML=cajita.length;
}
function eliminarprimero(){
    cajita.shift();
    listado.innerHTML=cajita;
    contador.innerHTML=cajita.length;
}