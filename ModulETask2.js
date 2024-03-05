function finder(str, obj){
  for(let key in obj){
    if (str === key){
      return true;
    }
  }
  return false;
};

const find ="type"

const person = {
  type : "human"
};

const student = Object.create(person);
student.name = "Bill";
student.age = 21;
student.city = "New York";

console.log(finder(find, student))