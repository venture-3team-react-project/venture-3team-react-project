import React, { useState } from 'react'; // React와 useState를 import
import ModelViewer from '../components/3d';
import ProductDetail from '../components/ProductDetail'; // ProductDetail 컴포넌트를 import
import './MainPage.css';

const MainPage = () => {
    // 상세정보 표시 여부를 제어하기 위한 상태 변수
    const [showProductDetail, setShowProductDetail] = useState(false);
    
    return (
        <>
        <div className="App">
          <header>헤더입니다.</header>
          <main>
            <aside>
              <div className="sel">베어본<br />
               <i className="fas fa-info-circle" onClick={() => setShowProductDetail(true)}>i</i>
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
        {/* ProductDetail 컴포넌트를 조건부로 렌더링 */}
        {showProductDetail && <ProductDetail />}
        </>
      );
};

export default MainPage;
