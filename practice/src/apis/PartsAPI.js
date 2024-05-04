import parts from '../data/keyboard-parts.json';

export function getPartsList(){
    return parts;
}

export function selectPartsType(partsType){
    return parts.filter(parts=>parts.partsType===partsType);
}
