import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import SelectBarebone from '../components/SelectParts/SelectBarebone.js';
import SelectSwitch from '../components/SelectParts/SelectSwitch.js';
import SelectKeycap from '../components/SelectParts/SelectKeycap.js';

const MainPage = () => {
    return (
        <>
        <div className="App">

          
          <main>
            <aside>
              <header>헤더입니다.</header>

              <div className="selectOption">
                <SelectBarebone/>
              </div>
              <div className="selectOption">
                <SelectSwitch/>
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