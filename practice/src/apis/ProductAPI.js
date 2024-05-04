import pd from '../data/products.json';

export function getProduct() {
    return pd;
}

export function getProductPopup(productName) {
    return pd.filter(p => p.name === productName);
   
}