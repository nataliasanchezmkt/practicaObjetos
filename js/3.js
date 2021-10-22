/*Rectángulos
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 
*/


class Rectangulo {
    constructor(nombre, alto, ancho){
        this.name=nombre
        this.h=alto;
        this.w=ancho;
    }

    mostrarDatos(){
        document.write(`Alto: ${this.h}
        <br>Ancho: ${this.w}<br>`)

    }

    perimetro(){
        let p= 2 *(this.h+this.w);
      console.log(p);
    }
       
    
    area()  { 
        let a= this.h * this.w
        console.log(a)
    }

}

// creo un primer objeto


let firstRec= new Rectangulo(4,5);
firstRec.mostrarDatos();
firstRec.perimetro();
firstRec.area();

// creo un segundo objeto


let secondRec= new Rectangulo (6,10);
secondRec.mostrarDatos();
secondRec.perimetro();
secondRec.area();

