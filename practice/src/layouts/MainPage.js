import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import { useState } from 'react';
import SelectPart from '../components/SelectParts/SelectBarebone';
import SelectPart from '../components/SelectParts/SelectSwitch';
import SelectPart from '../components/SelectParts/SelectKeycap';

const MainPage = () => {

  const [k_body, setK_keybody] = useState(false);
  const [k_switch, setK_switch] = useState(false);
  const [k_keycap, setK_keycap] = useState(false);
  const [imgSel,setImgSel] = useState(false)




 
  const [barebone, setBarebone] = useState(''); // 베어본
  const handleBareboneSelect = (value) => {
      setBarebone(value);
  };

  const [keySwitch, setKeySwitch] = useState(''); // 베어본
  const handlekeySwitchSelect = (value) => {
      setKeySwitch(value);
  };

  const [keycap, setKeycap] = useState(''); // 베어본
  const handlekeycapSelect = (value) => {
      setKeycap(value);
  };





    return (
        <>
        <div className="App">

          
          <main>
            <aside>
              <header>헤더입니다.</header>

              <div className="selectOption">
                <SelectBarebone onBareboneSelect={handleBareboneSelect}/>
              <header>헤더입니다.</header>

              <div className="selectOption">
                <SelectBarebone/>
              </div>
              <div className="selectOption">
                <SelectSwitch onKeySwitchSelect={handlekeySwitchSelect}/>
              <div className="selectOption">
                <SelectSwitch/>
              </div>
              <div className="selectOption">
                <SelectKeycap onKeycapSelect={handlekeycapSelect}/>
              </div>
              <div className="selectOption">
                <SelectKeycap/>
              </div>



             
              
            </aside>
            <section>
              <div className="img">
                <ModelViewer modelPath ="img/keyboard/scene.gltf"/>
              </div>
              <div className="info">선택하신 부품<br />
                <label htmlFor="result-parts-label">베어본 : {barebone}</label> <br />
                <label htmlFor="result-parts-label">스위치 : {keySwitch}</label> <br />
                <label htmlFor="result-parts-label">키캡 :  {keycap}</label> <br />
                <ModelViewer modelPath ="img/keyboard/scene.gltf"/>
              </div>
              <div className="info">선택하신 부품<br />
                <label htmlFor="result-parts-label">베어본 : </label> <br />
                <label htmlFor="result-parts-label">스위치 : </label> <br />
                <label htmlFor="result-parts-label">키캡 : </label> <br />
              </div>
            </section>
          </main>
          <footer>푸터입니다.</footer>
        </div>
        </>
      );
};

export default MainPage;