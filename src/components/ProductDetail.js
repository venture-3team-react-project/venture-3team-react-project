import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    // URL 파라미터에서 제품 ID와 옵션 추출
    useParams();

    // 부품 정보 상태 변수 선언
    const [partInfo, setPartInfo] = useState({
        title: "부품 설명",
        descriptions: [
            "설명1",
            "설명2",
            "설명3",
            "설명4",
            "설명5",
            "설명6",
            "설명7"
        ]
    });

    // ProductDetail의 표시 여부를 제어하는 상태 변수
    const [showDetail] = useState(true);

    // 페이지 초기화 함수
    const initializePage = () => {
        // React 상태를 업데이트하여 화면에 부품 정보를 표시
        setPartInfo({
            ...partInfo,
            title: "부품 설명",
            descriptions: [
                "설명1",
                "설명2",
                "설명3",
                "설명4",
                "설명5",
                "설명6",
                "설명7"
            ]
        });
    };

    // X 버튼 클릭 시 메인 화면으로 이동
    const handleClose = () => {
        window.location.href = "/"; // 메인 화면으로 이동
    };

    return (
        <div className={`product-detail ${showDetail ? 'visible' : 'hidden'}`}>
            <button className="close-button" onClick={handleClose}>X</button>
            <h2>{partInfo.title}</h2>
            <ul className="product-descriptions">
                {partInfo.descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
           
            <div className="product-info">
                {/* 선택된 제품 정보 표시 */}
                <h3>제품명</h3>
                <p>가격: 가격정보</p>
                <p>옵션: 옵션정보</p>
                <p>키캡: 키캡정보</p>
            </div>
            <div className="product-description">
                {/* 제품 상세 설명 */}
                <p>
                    여기에 제품 상세 설명을 표시합니다.
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
