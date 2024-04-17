function add(name) {
  this.name = name;
  this.greet = function() {
    console.log("hi " + this.name)
  }
}

const person = new add("길동");
person.greet();