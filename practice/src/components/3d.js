import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

function ModelViewer({ modelPath,imgSel,bareBone,keySwitch,keyCap}) {
  const mountRef = useRef(null);


 

  useEffect(() => {
    // 기본설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFF2CC); //배경화면 색
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000); //카메라 위치
    const renderer = new THREE.WebGLRenderer(); //렌더링 정보
    renderer.setSize(898, 640); //이미지 크기
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls 설정
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // 카메라 줌 기능 활성화
    controls.enableZoom = true; // 줌 기능 활성화
    controls.zoomSpeed = 1.0; // 줌 속도 조절

    // 빛 및 모델 설정
    const ambientLight = new THREE.AmbientLight(0xFFFFFF);//대상을 비추는 조명 설정
    scene.add(ambientLight);//빛 키기
    //위에서 설정한 빛 비출 대상 선택
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 2);
    scene.add(directionalLight);

    // 카메라 위치 설정
    camera.position.z = 0.2;


    //매터리얼 색조정
    function changeMaterialColor(scene, materialName, newColor) {
      scene.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          // Mesh가 여러 개의 매터리얼을 가지고 있는 경우 배열 확인
          if (Array.isArray(material)) {
            material.forEach((mat) => {
              if (mat.name === materialName) {
                mat.color.set(newColor);
              }
            });
          } else {
            if (material.name === materialName) {
              material.color.set(newColor);
            }
          }
        }
      });
    }



    function hexToDecimal(hexString) {
      // 16진수 문자열에서 '#' 기호가 있다면 제거합니다.
      hexString = hexString.replace(/^#/, '');
    
      // parseInt 함수를 사용하여 16진수 문자열을 10진수로 변환합니다.
      const decimalValue = parseInt(hexString, 16);
    
      return decimalValue;
    }



    //투명도 조정
    function changeMaterialColorAndOpacity(scene, materialName, newColor, newOpacity) {
      scene.traverse(function (child) {
        if (child.isMesh) {
          const material = child.material;
          // Mesh가 여러 개의 매터리얼을 가지고 있는 경우 배열 확인
          if (Array.isArray(material)) {
            material.forEach((mat) => {
              if (mat.name === materialName) {
                mat.color.set(newColor);
                mat.opacity = newOpacity;
                mat.transparent = true; // 투명도를 적용하기 위해 필수
              }
            });
          } else {
            if (material.name === materialName) {
              material.color.set(newColor);
              material.opacity = newOpacity;
              material.transparent = true; // 투명도를 적용하기 위해 필수
            }
          }
        }
      });
    }

    // GLTF 모델 로딩
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          // 모든 메쉬의 머티리얼 색상을 회색으로 변경합니다.
          
          
            

          // 머터리얼 요소의 속성을 확인용
          //console.log(child.material.color); // 콘솔에 색상찍기
          //console.log(child.material.name); // 콘솔에 이름 찍기
          
        }
      });
      scene.add(gltf.scene);


      if(imgSel == 1){
        
        
        changeMaterialColorAndOpacity(scene, 'plate', hexToDecimal(bareBone),1);  //베어본
        changeMaterialColorAndOpacity(scene, 'keycaps.011', 0xFFFFFF,0);  //키캡
        changeMaterialColorAndOpacity(scene, 'switch_bottom.008', 0xFFFFFF,0);  //중앙키캡
        changeMaterialColorAndOpacity(scene, 'switch.010', 0xFF1111,0); //스위치 */
        console.log(imgSel)
        }
  
        else if (imgSel == 2) {

          console.log(keySwitch)
  
        changeMaterialColorAndOpacity(scene, 'plate', 0xFFFFFF,0);  //베어본
        changeMaterialColorAndOpacity(scene, 'keycaps.011', 0xFFFFFF,0);  //키캡
        changeMaterialColorAndOpacity(scene, 'switch_bottom.008', 0xFFFFFF,0);  //중앙키캡
        changeMaterialColorAndOpacity(scene, 'switch.010', hexToDecimal(keySwitch),1); //스위치 */
        console.log(imgSel)
          
        } 
        else if (imgSel == 3){

          console.log(keyCap)
  
        changeMaterialColorAndOpacity(scene, 'plate', 0xFFFFFF,0);  //베어본
        changeMaterialColorAndOpacity(scene, 'keycaps.011', hexToDecimal(keyCap),1);  //키캡
        changeMaterialColorAndOpacity(scene, 'switch_bottom.008', hexToDecimal(keyCap),1);  //중앙키캡
        changeMaterialColorAndOpacity(scene, 'switch.010', 0xFF1111,0); //스위치 */
        console.log(imgSel)  
        }

        else if(imgSel == 5){
          changeMaterialColorAndOpacity(scene, 'plate', hexToDecimal(bareBone),1);  //베어본
        changeMaterialColorAndOpacity(scene, 'keycaps.011', hexToDecimal(keyCap),1);  //키캡
        changeMaterialColorAndOpacity(scene, 'switch_bottom.008', hexToDecimal(keyCap),1);  //중앙키캡
        changeMaterialColorAndOpacity(scene, 'switch.010', hexToDecimal(keySwitch),1); //스위치 */

        }


/*    
      머터리얼 설명
      changeMaterialColor(scene, 'switch_bottom.008', 0xFB6CFB);
      changeMaterialColor(scene, 'switch.010', 0xFFFFFF);
      changeMaterialColor(scene, 'keycaps.011', 0xFB6CFB); */
/*       changeMaterialColorAndOpacity(scene, 'plate', 0xFFFFFF,1);  //베어본
      changeMaterialColorAndOpacity(scene, 'keycaps.011', 0xFFFFFF,1);  //키캡
      changeMaterialColorAndOpacity(scene, 'switch_bottom.008', 0xFFFFFF,1);  //중앙키캡
      changeMaterialColorAndOpacity(scene, 'switch.010', 0xFF1111,1); //스위치 */
      
     

      animate();
    });



    // 렌더링 루프
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // 카메라 상태 갱신
      renderer.render(scene, camera);
    };

    // 컴포넌트 언마운트 시 리소스 정리
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, [modelPath,imgSel,bareBone,keySwitch,keyCap]);

  return <div ref={mountRef} />;
}

export default ModelViewer;
