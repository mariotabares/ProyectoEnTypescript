"use strict";
// Toda clase tiene un constructor por defecto
class Employee {
    //Metodos
    constructor(id, name, dept) {
        //Para acceder a los atributos de la clase se usa this
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`Id: ${this.id} Name: ${this.name} Dept: ${this.dept}`);
    }
}
const emp = new Employee(1, 'John', 'Sales');
