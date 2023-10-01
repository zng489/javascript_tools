/*
function get_country_info() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
get_country_info();
*/



//Normal Function

/*function func(variable) {
    //return variable +"Hello World!";
    console.log(variable +"Hello World!")

  };

  func('variable')
*/




//Anonymous Function

/*
(function() {
    console.log('This function is invoked immediately after it is defined!');
  })();
*/

// Promise 
// Just remember the "fetch function" is a "Promise"
// https://www.youtube.com/shorts/vjf40F8O1AM
/*
function getTodosOsUsuarios () {
  return Promise((resolve, reject) => {
    resolve([ 1, 2, 3 ])
  })
}

function getUsuarioById (id) {
  return Promise((resolve, reject) => {
    resolve({ id, nome: 'João da Silva' })
  })
}

getTodosOsUsuarios()
  .then(ids => getUsuarioById(ids[0]))
  .then(usuario => console.log(usuario)) // { id: 1, nome: 'João da Silva' }
*/

let examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task completed!');
  }, 200);
});

examplePromise
  .then((result) => {
    console.log(result);
})
