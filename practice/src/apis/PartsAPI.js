import parts from '../data/keyboard-parts.json';

export function getPartsList(){
    return parts;
}

export function selectPartsType(partsType){
    return parts.filter(parts=>parts.partsType===partsType);
}

export function getItemInfo(itemValue){
    return new Promise((resolve, reject) => {
        const item = parts.find(item => item.value === itemValue);
      if (item) {
        resolve(item);
      } else {
        reject(new Error("Product not found"));
      }
    });
  };