// Toda clase tiene un constructor por defecto
class Employee{
    //Atributos
    id?: number;
    name?: string;
    dept?: string;

    //Metodos
    constructor(id:number,name: string, dept: string){
        //Para acceder a los atributos de la clase se usa this
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }

    showInfo(): void{
        console.log(`Id: ${this.id} Name: ${this.name} Dept: ${this.dept}`);
    }

}

const emp= new Employee(1,'John','Sales');