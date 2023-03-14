// receives a function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      
    }
  }
  
  // returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      
    }
  }
  