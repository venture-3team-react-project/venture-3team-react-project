import React from 'react';
import ModelViewer from '../components/3d';
import './MainPage.css';
import { useState } from 'react';

const MainPage = () => {

  const [k_body, setK_keybody] = useState(false);
  const [k_switch, setK_switch] = useState(false);
  const [k_keycap, setK_keycap] = useState(false);
  const [imgSel,setImgSel] = useState(false)




 
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
                </form>
                <select name="" id="k_body" onChange={()=> {
                 setK_keybody(document.getElementById('k_body').value)
                 console.log(k_body)
                 setImgSel(1);
                                  
                 
                                  }}>
                  <option value="">선택</option>
                  <option value="alu">알루</option>
                  <option value="pla">플라</option>
                </select>
              </div>
              <div className="sel">스위치<br />
                <select name="" id="switch" onChange={()=> {

                 setK_switch(document.getElementById('switch').value)
                 console.log(k_switch)
                 setImgSel(2);
                                  
                                  
                                  }}>
                  <option value="">선택</option>
                  <option value="blue">청축</option>
                  <option value="red">적축</option>
                </select>
              </div>



              <div className="sel">키캡<br />
                <select name="" id="keycap" onChange={()=> {
                 setK_keycap(document.getElementById('keycap').value)
                 console.log(k_keycap)
                 setImgSel(3)
                                  
                                  
                                  }}>
                  <option value="">선택</option>
                  <option value="pbt">pbt</option>
                  <option value="alt">alt</option>
                </select>
              </div>



              <div className="sel">
                <button onClick={() => {
                  console.log("asd");
                  console.log(k_body)
                  console.log(imgSel)


                  setImgSel(5);
                  
               
                
                
                }}>조합하기</button>
              </div>
            </aside>
            <section>
              <div className="img">
                
              
              {imgSel && <ModelViewer modelPath="img/keyboard/scene.gltf" imgSel={imgSel} />}
              

                </div>
              <div className="info">정보<br />
                <label htmlFor="barebone">베어본 : {k_body} </label> <br />
                <label htmlFor="switch">스위치 : {k_switch}</label> <br />
                <label htmlFor="keycap">키캡 : {k_keycap}</label> <br />
              </div>
            </section>
          </main>
          <footer>푸터입니다.</footer>
        </div>
        </>
      );
};

export default MainPage;