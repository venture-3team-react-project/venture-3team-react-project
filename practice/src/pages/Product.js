import React, { useState } from 'react';
import "./Product.css";

const Popup = (props) => {

  const { onClose } = props;

      return (
        <div id="box">

            <div className="wrapper">
              <header className='pdname'>
                <h3>부품명</h3>
              </header>

              <main>
                <div className="container">

                  <div className="image">
                    <img src="img/mango.jpg" alt="망고얌" />
                  </div>

                  <div className="product">
                    <h4>[ 제품명 ]</h4>
                    <h6>간단하게 특징</h6>
                    <p>
                      모시기 모시기 모시기 모시기
                      모시기 모시기 모시기 모시기
                      모시기 모시기 모시기 모시기
                    </p>
                  </div>
                </div>
              </main>

              <div className="btnWrap">
                <div className="btn" onClick={() => props.handlePopup() }>
                  <h6>닫기</h6>
                </div>
              </div>

            </div>
        </div>
  );
};

export default Popup;