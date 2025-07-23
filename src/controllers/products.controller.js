import * as Model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
    const { category } = req.query;
    const products = await Model.getAllProducts();
    if (category){
        const productsByCategory = products.filter((item) =>
            item.categories.includes(category)
        );
        res.json(productsByCategory);
        return;
    }
    res.json(products);
};

export const searchProducts = (req, res) => {
    const { name } = req.query;
    const products = Model.getAllProducts();
    if (!name) {
        return res.status(400).json({ error: "El nombre es requerido"});
    }

    const productsFiltered = products.filter((item) => 
        item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (productsFiltered == 0) {
        return res.status(404).json({ error: "No se encontraron productos"});
    }
    res.json(productsFiltered);
};

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const products = Model.getAllProducts();
    const product = await Model.getProductById(id);
    if (!product) {
        res.status(404).json({ error: "No existe el producto"});
    }
    res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  const product = await Model.createProduct({ name, price, categories });

  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleted = await Model.deleteProduct(id);

  if (!deleted) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};
