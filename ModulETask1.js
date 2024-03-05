function properties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

const person = {
  type : "human"
};

const student = Object.create(person);
student.name = "Bill";
student.age = 21;
student.city = "New York";

properties(student);