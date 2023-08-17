//Interface


//heredan propiedades y metodos
 interface Person {
    id: number,
    name: string,
 }



interface Customer extends Person {

}

interface Employe extends Person {
}
/*****************************************/
//Ejemplo de interface
interface Book {
id: number,
tittle: string,
author: string,
couAuthor?:string;

}

const books: Book[] = [];
 
function getBooks():Book{
    return {id:2, tittle: 'The Great Gatsby', author: 'F. Scott Fitzgerald'};
}

const myBook = getBooks();
console.log(myBook.tittle);
/*****************************************/
interface Animal {
    getDogs: () => void;
    getCats: () => void;
}

//Clases
class Zoo implements Animal{
    getDogs(): void {
    }

    getCats(): void {

    }

}
/*****************************************/
