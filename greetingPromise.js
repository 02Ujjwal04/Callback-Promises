function greetPerson(name) {
    return new Promise(function(resolve, reject) {
      var greeting = "Hello, " + name + "!";
      resolve(greeting);
    });
  }
  
  // Example usage:
  var name = "Mithun";
  greetPerson(name)
    .then(function(message) {
      console.log(message); // Logs "Hello, Mithun!"
    })
    .catch(function(error) {
      console.error(error);
    });
  