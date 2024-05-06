import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import { useState } from 'react';
import SelectBarebone from '../components/SelectParts/SelectBarebone';
import SelectSwitch from '../components/SelectParts/SelectSwitch';
import SelectKeycap from '../components/SelectParts/SelectKeycap';
import ProductDetail from '../components/ProductDetail'; // ProductDetail 컴포넌트 import
import Modal from '../components/modal';
import Product from '../components/Product';
import Header from './Header';
import Footer from './Footer';
import { getItemInfo } from '../apis/PartsAPI';


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

  const [selectedBarebone, setSelectedBarebone] = useState(null); // 선택된 베어본
  const handleBareboneSelect2 = (itemValue) => {
    setSelectedBarebone(itemValue);
    toggleBareboneModal();
  }

  const [selectedKeySwitch, setSelectedKeySwitch] = useState(null); // 선택된 스위치
  const handleKeySwitchSelect2 = (itemValue) => {
    setSelectedKeySwitch(itemValue);
    togglekeySwitchModal();
  }

  const [selectedKeycap, setSelectedKeycap] = useState(null); // 선택된 키캡
  const handleKeycapSelect2 = (itemValue) => {
    setSelectedKeycap(itemValue);
    toggleKeycapModal();
  }

  const [isBareboneModalShowing, setIsBareboneModalShowing] = useState(false); //베어본 모달
  const toggleBareboneModal = () => {
    setIsBareboneModalShowing(!isBareboneModalShowing);
  };

  const [isKeySwitchModalShowing, setIsKeySwitchModalShowing] = useState(false);  //스위치 모달
  const togglekeySwitchModal = () => {
    setIsKeySwitchModalShowing(!isKeySwitchModalShowing);
  };


  const [isKeycapModalShowing, setIsKeycapModalShowing] = useState(false);  //키캡 모달
  const toggleKeycapModal = () => {
    setIsKeycapModalShowing(!isKeycapModalShowing);
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
                  <div className="result-parts-label">베어본 :</div> <label style={{marginRight:"10px"}}>{barebone}</label> <button className='mainbutton2' type="button" onClick={() => handleBareboneSelect2(barebone)}>i</button><br />

                  <div className="result-parts-label">스위치 :</div><label>{keySwitch}</label> <button className='mainbutton2' type="button" onClick={() => handleKeySwitchSelect2(keySwitch)}>i</button><br />
                 
                  <div className="result-parts-label">키캡 :</div> <label>{keycap}</label> <button className='mainbutton2'  type="button" onClick={() => handleKeycapSelect2(keycap)}>i</button><br />           

              </div>
              
              
            </section>
          </main>
          <Footer/>
          </div>

        <Modal isShowing={isModalShowing} hide={toggleModal}>
          {selectedProduct && <ProductDetail productId={selectedProduct} />}
        </Modal>

        <Modal isShowing={isBareboneModalShowing} hide={toggleBareboneModal}>
          {selectedBarebone && <Product itemValue={selectedBarebone} />}
       </Modal>


       <Modal isShowing={isKeySwitchModalShowing} hide={togglekeySwitchModal}>
          {selectedKeySwitch && <Product itemValue={selectedKeySwitch} />}
       </Modal>

       <Modal isShowing={isKeycapModalShowing} hide={toggleKeycapModal}>
          {selectedKeycap && <Product itemValue={selectedKeycap} />}
       </Modal>

        </>
      );
};

export default MainPage;