// api.js
import data from '../data/ProductDetail.json';

export const getProductInfo = (productId) => {
  return new Promise((resolve, reject) => {
    const product = data.products.find(item => item.id === productId);
    if (product) {
      resolve(product);
    } else {
      reject(new Error("Product not found"));
    }
  });
};
