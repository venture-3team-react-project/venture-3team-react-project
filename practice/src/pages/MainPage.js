import React from 'react';
import { useState } from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import Popup from './Product';
import { getProduct } from '../apis/ProductAPI';


const MainPage = () => {

    /* 제품 설명 페이지 팝업*/
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const products = getProduct();

  const handlePopup = (productType) => {
    setSelectedProductType(productType);
    const index = products.findIndex((p) => p.partsType === productType);
    setSelectedProductIndex(index);
  };

  const handleNext = () => {
    setSelectedProductIndex((prevIndex) => {
      let nextIndex = (prevIndex + 1) % products.length;
      while (products[nextIndex].partsType !== selectedProductType) {
        nextIndex = (nextIndex + 1) % products.length;
      }
      return nextIndex;
    });
  };
  
  const handlePrev = () => {
    setSelectedProductIndex((prevIndex) => {
      let previousIndex = (prevIndex - 1 + products.length) % products.length;
      while (products[previousIndex].partsType !== selectedProductType) {
        previousIndex = (previousIndex - 1 + products.length) % products.length;
      }
      return previousIndex;
    });
  };

  const selectedProduct = selectedProductIndex !== null ? products[selectedProductIndex] : null;


    return (
        <>
        <div className="App">
          <header>헤더입니다.</header>
          <main>
            <aside>
              <div className="sel">베어본<br />
                <form action="">
                 <input type="radio" value="알루미늄베어본" onChange={() => handlePopup("알루미늄베어본")} />알루미늄
                <input type="radio" value="플라스틱베어본" onChange={() => handlePopup("플라스틱베어본")} />플라스틱
                  <br/>
                  {/* 제품 설명 페이지 팝업창 버튼 */}
                  <button className='open' type="button" onClick={() => handlePopup("알루미늄베어본")}>알루미늄</button>
                  <button className='open' type="button" onClick={() => handlePopup("플라스틱베어본")}>플라스틱</button>
                  {selectedProduct && (<Popup
                  product={selectedProduct}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  onClose={() => setSelectedProductIndex(null)}/>)}
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