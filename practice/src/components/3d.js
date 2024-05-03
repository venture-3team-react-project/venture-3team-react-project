import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';

function ModelViewer({ modelPath }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer 설정
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(700, 500);
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
    const ambientLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambientLight);

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

    // GLTF 모델 로딩
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {

      gltf.scene.traverse(function(child) {
        if (child.isMesh) {
          // 모든 메쉬의 머티리얼 색상을 회색으로 변경합니다.
          child.material.color.set(0x404040);
          
         

          // 머터리얼 요소의 속성을 확인하거나 수정할 수 있습니다.
          // 예를 들면, 머터리얼의 이름이나 색상 등을 확인할 수 있습니다.
          console.log(child.material.color); // 머터리얼의 색상을 출력
          console.log(child.material.name); // 머터리얼의 이름을 출력
          
        }
      });
      scene.add(gltf.scene);
      changeMaterialColor(scene, 'switch_bottom.008', 0xFB6CFB);
      changeMaterialColor(scene, 'switch.010', 0xFFFFFF);
      changeMaterialColor(scene, 'keycaps.011', 0xFB6CFB);
      changeMaterialColor(scene, 'plate', 0x000000);

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
  }, [modelPath]);

  return <div ref={mountRef} />;
}

export default ModelViewer;
