const inquirer = require('inquirer');

const promise = () => new Promise( async (resolve, reject)  => {
  const { a, b, c } = await inquirer.prompt([
    { type: 'number', name: 'a', message: 'a: '},
    { type: 'number', name: 'b', message: 'b: '},
    { type: 'number', name: 'c', message: 'c: '},
  ]);

  if (typeof a !== 'number') return reject("Digite apenas números");
  if (typeof b !== 'number') return reject("Digite apenas números");
  if (typeof c !== 'number') return reject("Digite apenas números");

  const value = (a + b) * c;
  
  if (value < 50) return reject("Valor muito baixo");
  resolve(value);
});

promise()
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
