// класс Employee
class Employee {
  #salary;

  constructor(firstName = 'Nora', lastName = 'Black', profession = 'QA', salary = 15000) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!value || typeof value !== "string" || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) throw new Error("Invalid first name");
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!value || typeof value !== "string" || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) throw new Error("Invalid last name");
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!value || typeof value !== "string" || value.trim() === "" || !/^[A-Za-z\s]+$/.test(value)) {
      throw new Error("Invalid profession");
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== "number" || value <= 0 || value >= 10000) throw new Error("Invalid salary");
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// класс Company 
class Company {
  #employees = [];
  constructor(title = 'Company title', phone = 123456789, address = 'Company address') {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getEmployeeCount() {
    return this.#employees.length;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.getEmployeeCount()}`;
  }

// метод findEmployeeByName(firstName: string)
findEmployeeByName(firstName){
  if (typeof firstName !== 'string') throw new Error('Invalid first name');
  let foundedFirstName = this.#employees.find(object => object.firstName === firstName)
  if (!foundedFirstName) throw new Error('Employee not found');
  return foundedFirstName;
}
// приватный метод для поиска индекса сотрудника по имени
#getEmployeeIndex(firstName){
  if (!firstName || typeof firstName !== 'string' || firstName.length < 2 || firstName.length > 50 || !/^[A-Za-z]+$/.test(firstName)) {
    throw new Error('Invalid first name');
  }
  return this.#employees.findIndex((e) => e.firstName === firstName)
}
// метод removeEmployee(firstName: string)
removeEmployee(firstName) {
  const ind = this.#getEmployeeIndex(firstName)
  if (ind === -1){
    throw new Error(`First name is not found`);
    }
  else {
  this.#employees.splice(ind, 1)}
}
// метод getTotalSalary()
getTotalSalary(){
return this.#employees.reduce((acc, employee) => acc + employee.salary, 0);
}
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
