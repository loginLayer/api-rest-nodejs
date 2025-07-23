const products = [
  {
    id: 1,
    name: "Smartphone X",
    price: 699.99,
    categories: ["Electronics", "Phones"]
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 1200.00,
    categories: ["Electronics", "Computers"]
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 149.95,
    categories: ["Electronics", "Audio"]
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 85.50,
    categories: ["Electronics", "Peripherals"]
  },
  {
    id: 5,
    name: "Smartwatch Lite",
    price: 199.00,
    categories: ["Electronics", "Wearables"]
  },
  {
    id: 6,
    name: "4K UHD TV",
    price: 899.00,
    categories: ["Electronics", "Televisions"]
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 55.00,
    categories: ["Electronics", "Peripherals"]
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    price: 75.00,
    categories: ["Electronics", "Audio"]
  },
  {
    id: 9,
    name: "External SSD 1TB",
    price: 120.00,
    categories: ["Electronics", "Storage"]
  },
  {
    id: 10,
    name: "Webcam HD",
    price: 35.00,
    categories: ["Electronics", "Peripherals"]
  }
]; 

export const getAllProducts = () => {
    return products; 
};

export const getProductById = (id) => {
    return products.find((item) => item.id == id); 
};