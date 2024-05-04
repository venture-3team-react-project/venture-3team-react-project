import React, { useState } from 'react';
import "./Product.css";
import { getProduct } from '../apis/ProductAPI';

const Popup = ({ product, onClose }) => {

    return (
        <div id="box">

            <div className="wrapper">
              <header className='pdName'>
                <h3>부품명</h3>
              </header>

              <main>
                <div className="container">

                  <div className="pdImage">
                    <img src={ product.image } alt={ product.name}  />
                  </div>

                  <div className="product">
                    <h4>[ { product.name } ]</h4>
                    <h6>간단하게 특징</h6>
                    <p> { product.description } </p>
                  </div>
                </div>
              </main>

              <div className="btnWrap">
                <div className="btn" onClick={ onClose }>
                  <h6>닫기</h6>
                </div>
              </div>

            </div>
        </div>
  );
};

export default Popup;