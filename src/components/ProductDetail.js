import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import { getProductInfo } from '../apis/api'; // API 파일 import

const ProductDetail = ({ productId }) => {
    // 부품 정보 상태 변수 선언
    const [partInfo, setPartInfo] = useState({
        name: "",
        description: [],
        description2: [],
        price: "",
        image: "" // 이미지 경로 추가
    });

    // 데이터 가져오기
    useEffect(() => {
        // id가 유효한지 확인하고 데이터 가져오기
        if (productId) {
            getProductInfo(productId)
                .then(product => {
                    setPartInfo(product);
                })
                .catch(error => {
                    console.error("Error fetching product info:", error);
                });
        }
    }, [productId]);

    // X 버튼 클릭 시 메인 화면으로 이동
    const handleClose = () => {
        window.location.href = "/"; // 메인 화면으로 이동
    };

    return (
        <div className="product-detail">
            <button className="close-button" onClick={handleClose}>X</button>
            <h1 className="Dheader">{partInfo.name} 부품 설명</h1>
            <div className='Ddivline'>
                <img src={partInfo.image} alt={partInfo.name} /> {/* 이미지 표시 */}
                <h4>{partInfo.name}이란?</h4>
                {partInfo.description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
                <br/><br/>
                <b>고려 사항</b><hr></hr> 
                {partInfo.description2.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
                
            </div>
        </div>
    );
};

export default ProductDetail;
