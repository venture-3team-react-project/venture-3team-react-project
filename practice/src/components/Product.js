import React, { useState, useEffect } from 'react';
import "./Product.css";
import { getItemInfo } from '../apis/PartsAPI';

function Product({ itemValue } )   {

  const [itemInfo, setItemInfo] = useState({
    value: "",
    description: "",
    partsType: "",
    imgsel: "" 
});

useEffect(() => {
  if (itemValue) {
    getItemInfo(itemValue)
          .then(item => {
            setItemInfo(item);
          })
          .catch(error => {
              console.error("Error fetching product info:", error);
          });
  }
}, [itemValue]);

    return (
        <div id="box">

            <div className="wrapper">
              <header className='pdName'>
                <h3>[ { itemInfo.value } ]</h3>
              </header>

              <main>
                <div className="container">

                

                  <div className="product">
                    <h5>| Type | { itemInfo.partsType } </h5>
                    <p> { itemInfo.description } </p>
                  </div>
                </div>
              </main>
            </div>

        </div>
            
  );
};

export default Product;