class User {
  constructor(name) {
    this.name = name;
  }

  //change to arrow function to keep this in context
  changeName = (newName) => {
    this.name = newName;
    return this.name;
  }
}

module.exports = User;