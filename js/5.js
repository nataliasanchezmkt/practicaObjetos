/*Generaciones
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdgit s: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, genero, peso, altura, fecha){
        this.name=nombre
        this.age=edad
        this.id=0
        this.gender=genero
        this.w=peso
        this.h=altura
        this.dateOfB=fecha

    }

    mostrarDatos(){
        document.write(`Nombre: ${this.name}
       <br> Edad: ${this.age}
       <br> Dni: ${this.id}
       <br>Genero: ${this.gender}
       <br>Peso: ${this.w}
       <br>Altura: ${this.h}
       <br> Fecha de nacimiento: ${this.dateOfB}`)
    }

    esMayodeEdad(){
        if(this.age>= 18){
            document.write('<br>Mayor de edad')

        }else{
            document.write('<br>Menor de edad')
        }

    }
    
    generador(){
        this.id=(Math.floor((Math.random() * 99999999) + 1))
       
    }

    mostrarGeneracion(){ 
        if (this.dateOfB >= 1994){
            document.write('<br> Usted pertence a la generacion Z. Rasgo distintivo: Irreverencia')
        }
        if(this.dateOfB >= 1981 && this.dateOfB <= 1993){
            document.write('<br> Usted pertence a la generacion Y. Rasgo distintivo: Frustracion')
        }
        if(this.dateOfB >= 1969 && this.dateOfB <= 1980){
            document.write('<br> Usted pertence a la generacion X. Rasgo distintivo: Obsesion por el dinero')
        }
        if(this.dateOfB >= 1949 && this.dateOfB <= 1968){
            document.write('<br> Usted pertence a la generacion Baby Boom. Rasgo distintivo: Ambicion')
        }
        if(this.dateOfB >= 1930 && this.dateOfB <= 1948){
            document.write('<br> Usted pertence a la generacion Silent Generation. Rasgo distintivo: Austeridad')
        }

    }



}


let luciana = new Persona ('Luciana', 25 , 'M', 54, 1.60, 1996)
luciana.generador();
luciana.mostrarDatos();
luciana.esMayodeEdad();
luciana.mostrarGeneracion();
