class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    if (this.products.find(p => p.code === product.code)) {
      console.error("El código del producto ya existe");
      return;
    }

    product.id = this.nextId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return product;
    } else {
      console.error("Not found");
    }
  }
}


const productManager = new ProductManager();


console.log(productManager.getProducts()); 


productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25
});


console.log(productManager.getProducts()); 


productManager.addProduct({
  title: "producto repetido",
  description: "Este es un producto repetido",
  price: 150,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 30
});


console.log(productManager.getProductById(2)); 


console.log(productManager.getProductById(1)); 
//seguir sobre el codigo practicando 