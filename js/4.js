/*Producto
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/


class Producto {
    constructor(codigo, nombre, precio){
        this.code=codigo
        this.name=nombre
        this.price=precio
    }

    mostrarDatos(){
        document.write(
        `Codigo: ${this.code}
        <br> Nombre: ${this.name}
        <br> Precio:$${this.price}`)
    }

}

let combo=[];

let p1= new Producto('P7755', 'Mouse Logitech', 2000)
 let p2= new Producto('P7756', 'Teclado Logitech', 3000)
 let p3= new Producto('P7757', 'Camara Logitech', 2500)
 
combo.push(p1);
combo.push(p2);
combo.push(p3);

console.log(combo);

for (let i=0; i<combo.length; i++){
  combo[i].mostrarDatos();
}



 

