import React, { useState } from 'react';
import "./Product.css";
import { getProduct } from '../apis/ProductAPI';

const Popup = ({ product, onNext, onPrev, onClose }) => {

    return (
        <div id="box">

            <div className="wrapper">
              <header className='pdName'>
                <h3>{product.partsType}</h3>
              </header>

              <main>
                <div className="container">

                  <div className="pdImage">
                    <img src={ product.image } alt={ product.name}  />
                  </div>

                  <div className="product">
                    <h4>[ { product.name } ]</h4>
                    <p> { product.description } </p>
                  </div>
                </div>
              </main>

              <div className="btnWrap">
            <button className="btn" type="button" onClick={onPrev}>
                <h6>이전</h6>
            </button>
            <button className="btn" type="button" onClick={onNext}>
                <h6>다음</h6>
            </button>
            <button className="btn" type="button" onClick={onClose}>
                <h6>닫기</h6>
            </button> 
            </div>
              
        

            </div>
        </div>
  );
};

export default Popup;