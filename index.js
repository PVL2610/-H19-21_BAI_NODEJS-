const user = {
    name: "Linh",
    age: 22,
    email: "linh@example.com"
  };
  
const address = {
    city: "Quang Nam",
    country: "Vietnam"
  };
  
  const result = {
    ...user,
    address: {
      ...address
    }
  };
  
//   console.log(result);

  
  const cleanObject = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => value !== null && value !== undefined)
    );
  };
  
  const data = {
    name: "Linh",
    age: null,
    city: undefined,
    country: "Vietnam"
  };
  
// console.log(cleanObject(data));

  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age);
      this.job = job;
    }
  
    get jobTitle() {
      return this.job;
    }
  
    set jobTitle(newJob) {
      this.job = newJob;
    }
  }
  
  const employee = new Employee("Linh", 21, "Intern Developer");
  console.log(employee.jobTitle);
  employee.jobTitle = "Fresher Developer";
  console.log(employee.jobTitle);

  
