const inquirer = require('inquirer');

const promise = () => new Promise(async (resolve, reject)  => {
  const { a, b, c } = await inquirer.prompt([
    { type: 'number', name: 'a', message: 'a: '},
    { type: 'number', name: 'b', message: 'b: '},
    { type: 'number', name: 'c', message: 'c: '},
  ]);

  if (typeof a !== 'number' || Number.isNaN(a)) return reject("Digite apenas números");
  if (typeof b !== 'number' || Number.isNaN(b)) return reject("Digite apenas números");
  if (typeof c !== 'number' || Number.isNaN(c)) return reject("Digite apenas números");

  const value = (a + b) * c;

  if (value < 50) return reject("Valor muito baixo");
  resolve(`Seu valor é ${value}`);
});

const execPromise = async () => {
  try {
    const value = await promise(); 
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}

execPromise();
