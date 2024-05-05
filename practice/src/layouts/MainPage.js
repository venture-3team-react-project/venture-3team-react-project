import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import { useState } from 'react';
import SelectBarebone from '../components/SelectParts/SelectBarebone';
import SelectSwitch from '../components/SelectParts/SelectSwitch';
import SelectKeycap from '../components/SelectParts/SelectKeycap';
import ProductDetail from '../components/ProductDetail'; // ProductDetail 컴포넌트 import
import Modal from '../components/modal';
import Header from './Header';
import Footer from './Footer';


const MainPage = () => {


  const [barebone, setBarebone] = useState(''); // 베어본
  const handleBareboneSelect = (value) => {
      setBarebone(value);
  };

  const [keySwitch, setKeySwitch] = useState(''); // 스위치
  const handlekeySwitchSelect = (value) => {
      setKeySwitch(value);
  };

  const [keycap, setKeycap] = useState(''); // 키캡
  const handlekeycapSelect = (value) => {
      setKeycap(value);
  };

  const [bareboneColor, setBareboneColor] = useState(''); // 베어본 색
  const selectBareboneColor = (value) => {
      setBareboneColor(value);
  };

  const [bareboneImg, setBareboneImg] = useState(''); // 베어본 이미지
  const selectBareboneImg = (value) => {
      setBareboneImg(value);
  };


  const [keySwitchColor, setKeySwitchColor] = useState(''); // 스위치 색
  const selectKeySwitchColor = (value) => {
      setKeySwitchColor(value);
  };

  const [keySwitchImg, setKeySwitchImg] = useState(''); // 스위치 이미지
  const selectKeySwitchImg = (value) => {
      setKeySwitchImg(value);
  };

  const [keyCapColor, setkeyCapColor] = useState(''); // 스위치 색
  const selectkeyCapColor = (value) => {
      setkeyCapColor(value);
  };

  const [keyCapImg, setkeyCapImg] = useState(''); // 스위치 이미지
  const selectkeyCapImg = (value) => {
      setkeyCapImg(value);
  };

  const [selectedProduct, setSelectedProduct] = useState(null); // 선택된 제품 상태 변수
  const handleProductClick = (productId) => {
      setSelectedProduct(productId);
      toggleModal(); // 모달을 열기
  };

  const [isModalShowing, setIsModalShowing] = useState(false);

  const toggleModal = () => {
    setIsModalShowing(!isModalShowing);
  };

  
  

    return (
        <>

        <div className="App">
        
          <Header/>
          <main>
            <aside>
          

              <div className="selectOption">
           

              <div className="sel">
              <label>베어본 고르기</label><button className='mainbutton' onClick={() => handleProductClick(1)}>i</button>
              </div>
              <div className="Select">
                <SelectBarebone onBareboneSelect={handleBareboneSelect} setBareboneColor={selectBareboneColor} setBareboneImg={selectBareboneImg} />
              </div>
                <div className="sel">
                <label>스위치 종류</label><button className='mainbutton' onClick={() => handleProductClick(2)}>i</button>
              </div>
              <div className="Select">
                <SelectSwitch onKeySwitchSelect={handlekeySwitchSelect} setKeySwtichColor={selectKeySwitchColor} setBareboneImg={selectBareboneImg}/>
              </div>
                <div className="sel">
                <label>&nbsp;&nbsp;&nbsp;키캡 종류</label><button className='mainbutton' onClick={() => handleProductClick(3)}>i</button>
              </div>
              <div className="Select">
                <SelectKeycap onKeycapSelect={handlekeycapSelect} setKeycapColor={selectkeyCapColor} setBareboneImg={selectBareboneImg}/>
              </div>
                <span className='combine'>키보드를 누를시 조합됩니다.</span>
                <br/>
                <button className='sumbutton' onClick={
                 () =>{ setBareboneImg(5) }

                }>⌨️</button>
       
              </div>



             
              
            </aside>
            <section>
              <div className="img">
                {bareboneImg && <ModelViewer modelPath ="img/keyboard/scene.gltf" bareBone={bareboneColor} imgSel={bareboneImg} keyCap={keyCapColor} keySwitch={keySwitchColor}/>}
              </div>

              <div className="info" style= {{fontSize:'20px'}}>
                  <div className="result-parts-label">베어본 :</div> <label style={{marginRight:"10px"}}>{barebone}</label> <button className='mainbutton2'>i</button><br />
                  <div className="result-parts-label">스위치 :</div><label>{keySwitch}</label> <button className='mainbutton2'>i</button><br />
                  <div className="result-parts-label">키캡 :</div> <label>{keycap}</label> <button className='mainbutton2'>i</button><br />
              </div>
              
              
            </section>
          </main>
          <Footer/>
        </div>
        <Modal isShowing={isModalShowing} hide={toggleModal}>
        {selectedProduct && <ProductDetail productId={selectedProduct} />}
      </Modal>


        </>
      );
};

export default MainPage;