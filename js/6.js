/* 
6- Libros
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libros {
  constructor(ISBN, titulo, autor, paginas) {
    this.ISBN = ISBN;
    this.title = titulo;
    this.author = autor;
    this.pages = paginas;
  }

  mostrarLibro() {
    document.write(
      `El libro ${this.title} con ISBN ${this.ISBN}, creado por el autor ${this.author} , tiene ${this.pages}  paginas.<br></br>`
    );
  }
  //   get

  get showISBN() {
    return this.ISBN;
  }
  get showTitulo() {
    return this.title;
  }
  get showAutor() {
    return this.author;
  }
  get showPaginas() {
    return this.pages;
  }

  //   set

  set changeISBN(newISBN) {
    this.ISBN = newISBN;
  }

  set changeTitulo(newTitle) {
    this.titulo = newTitle;
  }

  set changeAutor(newAuthor) {
    this.autor = newAuthor;
  }
  set changePages(newPages) {
    this.pages = newPages;
  }


  paginasCantidad(){
      if (cronicas.pages > milnueve.pages){
          document.write('Cronicas marcianas tiene mas paginas que 1984 con ' + cronicas.pages + ' paginas')
      }else document.write('1984 tiene mas paginas que Cronicas marcianas con ' + milnueve.pages + ' paginas')
  }
}

let cronicas = new Libros(2334, "Cronicas marcianas", "Ray Bradbury", 250);
cronicas.mostrarLibro();

let milnueve = new Libros(3434, "1984", "George Orwell", 402);
milnueve.mostrarLibro();

cronicas.paginasCantidad();

