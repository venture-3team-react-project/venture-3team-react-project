import React from 'react';
import { useState } from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import Popup from './Product';
import { getProduct } from '../apis/ProductAPI';


const MainPage = () => {

    /* 제품 설명 페이지 팝업*/
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = getProduct();

  const handlePopup = (productName) => {
    const product = products.find((p) => p.name === productName);
    setSelectedProduct(product);
  };

    return (
        <>
        <div className="App">
          <header>헤더입니다.</header>
          <main>
            <aside>
              <div className="sel">베어본<br />
                <form action="">
                  <input type="radio" value="알루" />알루
                  <input type="radio" value="플라" />플라
                  <br/>
                  {/* 제품 설명 페이지 팝업창 버튼 */}
                  <button className='open' type="button" onClick={() => handlePopup("monsgeek M1W")}>알루 설명</button>
                  <button className='open' type="button" onClick={() => handlePopup("gmk67")}>플라 설명</button>
                  {selectedProduct && <Popup product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
                </form>

              </div>
              <div className="sel">스위치<br />
                <select name="" id="">
                  <option value="">선택</option>
                  <option value="">청축</option>
                  <option value="">적축</option>
                </select>
              </div>
              <div className="sel">키캡<br />
                <select name="" id="">
                  <option value="">선택</option>
                  <option value="">pbt</option>
                  <option value="">alt</option>
                </select>
              </div>
              <div className="sel">
                <button>조합하기</button>
              </div>
            </aside>
            <section>
              <div className="img">
              
              
              <ModelViewer modelPath ="img/keyboard/scene.gltf"/>
                </div>
              <div className="info">정보<br />
                <label htmlFor="barebone">베어본 : </label> <br />
                <label htmlFor="switch">스위치 : </label> <br />
                <label htmlFor="keycap">키캡 : </label> <br />
              </div>
            </section>
          </main>
          <footer>푸터입니다.</footer>
        </div>
        </>
      );
};

export default MainPage;