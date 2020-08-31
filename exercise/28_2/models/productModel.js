const fs = require('fs');
const connect = require('./connect');

class Product {
  constructor(name, brand) {
    this.id = null;
    this.name = name;
    this.brand = brand;
  }

  async getAll() {
    // const rawData = fs.readFileSync('./products.json');
    // const products = JSON.parse(rawData);
    const products = await connect()
      .then((db) => db.collection('products')
      .find()
      .toArray());

    return products;
  }
  /**
   * 
   * @param {number} id not the ObjectId of mongo
   */
  async getById(id) {
    // const rawData = fs.readFileSync('./products.json');
    // const product = JSON.parse(rawData)
                        // .find((product) => product.id === parseInt(id));
    const db = await connect();
    const product = await db.collection('products').find({ id: parseInt(id) }).toArray();

    return product;
  }

  async add() {
    // const rawData = fs.readFileSync('./products.json');
    // const products = JSON.parse(rawData);

    // this.id = products[products.length - 1].id + 1;
    const products = await connect().then((db) => db.collection('products'));
    this.id = await products.find().count() + 1;

    const { name, brand, id } = this;
    await products.insertOne({ id, name, brand });
    // products.push(this);

    // fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
      // if (err) throw err;
      // console.log('write file ok');
    // });

    return this;
  }

  async delete(id) {
    // const rawData = fs.readFileSync('./products.json');
    // const products = JSON.parse(rawData).filter((product) => product.id !== parseInt(id));

    await connect().then((db) => db.collection('products').deleteOne({ id: parseInt(id) }));
    const products = connect().then((db) => db.collection('products').find().toArray());
    // fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
      // if (err) throw err;
      // console.log('write file ok');
    // });

    return products;
  }

  async addOrUpdate(id) {
    // const rawData = fs.readFileSync('./products.json');
    // const products = JSON.parse(rawData);

    // const product = products.find(product => product.id === parseInt(id));
    const productsCollection = await connect().then((db) => db.collection('products'));
    const product = await productsCollection.findOne({ id: parseInt(id) });
    console.log(product)
    const { name, brand } = this;
    let haveBeenAdded = false;

    if (product) {
      // product.name = this.name;
      // product.brand = this.brand;
      await productsCollection.updateOne({ id: parseInt(id) }, { $set: { name, brand } });
    } else {
      // this.id = products[products.length - 1].id + 1;
      // products.push(this);
      productsCollection.insertOne({ id: parseInt(id), name, brand });
      haveBeenAdded = true;
    }

    // fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
      // if (err) throw err;
      // console.log('write file ok');
    // });
    const products = await productsCollection.find().toArray();
    return { products, added: haveBeenAdded };
  }
}

module.exports = Product;
