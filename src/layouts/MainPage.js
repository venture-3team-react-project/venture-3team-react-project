import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetail'; // ProductDetail 컴포넌트 import
import ModelViewer from '../components/3d'; // ModelViewer 컴포넌트 import
import './MainPage.css';

const MainPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null); // 선택된 제품 상태 변수

    // 버튼 클릭 시 해당 제품 선택
    const handleProductClick = (productId) => {
        setSelectedProduct(productId);
    };

    return (
        <div className="App">
            <header>헤더입니다.</header>
            <main>
                <aside>
                    <div className="sel">
                        베어본
                        <button className='mainbutton' onClick={() => handleProductClick(1)}>i</button>
                        <br />
                        <select name="" id="">
                            <option value="">선택</option>
                            <option value="">알루미늄베어본</option>
                            <option value="">플라스틱베어본</option>
                        </select>
                    </div>
                    <div className="sel">
                        스위치
                        <button className='mainbutton' onClick={() => handleProductClick(2)}>i</button>
                        <br />
                        <select name="" id="">
                            <option value="">선택</option>
                            <option value="">청축</option>
                            <option value="">적축</option>
                        </select>
                    </div>
                    <div className="sel">
                        키캡
                        <button className='mainbutton' onClick={() => handleProductClick(3)}>i</button>
                        <br />
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
                        <ModelViewer modelPath="img/keyboard/scene.gltf" />
                    </div>
                    <div className="info">정보<br />
                        <label htmlFor="barebone">베어본 : </label> <br />
                        <label htmlFor="switch">스위치 : </label> <br />
                        <label htmlFor="keycap">키캡 : </label> <br />
                    </div>
                    {/* 선택된 제품에 대한 정보 표시 */}
                    {selectedProduct && <ProductDetail productId={selectedProduct} />}
                </section>
            </main>
            <footer>푸터입니다.</footer>
        </div>
    );
};

export default MainPage;
