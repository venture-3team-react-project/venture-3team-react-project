import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import SelectPart from '../components/SelectPart';


const MainPage = () => {
    return (
        <>
        <div className="App">
          
          <main>
            <aside>
            <header>헤더입니다.</header>

            <div className="selectOption">
              <SelectPart/>
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