import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import { useState } from 'react';
import SelectBarebone from '../components/SelectParts/SelectBarebone';
import SelectSwitch from '../components/SelectParts/SelectSwitch';
import SelectKeycap from '../components/SelectParts/SelectKeycap';


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


  

    return (
        <>

        <div className="App">

          
          <main>
            <aside>
              <header>헤더입니다.</header>

              <div className="selectOption">
                <SelectBarebone onBareboneSelect={handleBareboneSelect} setBareboneColor={selectBareboneColor} setBareboneImg={selectBareboneImg} />

   
                <SelectSwitch onKeySwitchSelect={handlekeySwitchSelect} setKeySwtichColor={selectKeySwitchColor} setBareboneImg={selectBareboneImg}/>
 
                <SelectKeycap onKeycapSelect={handlekeycapSelect} setKeycapColor={selectkeyCapColor} setBareboneImg={selectBareboneImg}/>

                <button onClick={
                 () =>{ setBareboneImg(5) }

                }>조합하기</button>
       
              </div>



             
              
            </aside>
            <section>
              <div className="img">
                <ModelViewer modelPath ="img/keyboard/scene.gltf" bareBone={bareboneColor} imgSel={bareboneImg} keyCap={keyCapColor} keySwitch={keySwitchColor}/>
              </div>

              <div className="info">선택하신 부품<br />
                <label htmlFor="result-parts-label">베어본 : {barebone}</label> <br />
                <label htmlFor="result-parts-label">스위치 : {keySwitch}</label> <br />
                <label htmlFor="result-parts-label">키캡 :  {keycap}</label> <br />
               

                
              </div>
          
            </section>
          </main>
          <footer>푸터입니다.</footer>
        </div>
        
        </>
      );
};

export default MainPage;