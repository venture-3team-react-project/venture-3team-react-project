import { useState,useEffect } from 'react';
import { selectPartsType } from '../../apis/PartsAPI';

function SelectPart({onKeycapSelect,setKeycapColor,setBareboneImg}){

    const [selectedColor, setSelectedColor] = useState('');

    const [selectedImg, setSelectedImg] = useState('');

    

    const [partType,setPartType]=useState(selectPartsType("키캡")); //eslint-disable-line no-unused-vars

    const [resultPartType, setResultPartType]=useState(
        {id:'', value:''}
    );

    const onChangeHandler1=(e)=>{
        setResultPartType({
            id:e.target.id,
            value:e.target.value  
        });
        
    }

    const [part,setPart]=useState([]);
      
    const [resultPart, setResultPart]=useState();

    useEffect(() => {
        if (resultPartType.id == "ABS") {
            setPart(selectPartsType("ABS키캡"));
        } else if (resultPartType.id == "PBT") {
            setPart(selectPartsType("PBT키캡"));
        } else if (resultPartType.id == "") {
            setPart(selectPartsType(""));
        } else {
            setPart([]); 
        }
    }, [resultPartType.id]);
    
    const onChangeHandler2=(e)=>{
        setResultPart(e.target.value);
        onKeycapSelect(e.target.value);


        const selectedColortOption = part.find(option => option.value === e.target.value);
        if (selectedColortOption && selectedColortOption.color) {
            setSelectedColor(selectedColortOption.color); // color 상태 업데이트
        }
    

    const selectedImgOption = part.find(option => option.value === e.target.value);
    if (selectedImgOption && selectedImgOption.imgsel) {
        setSelectedImg(selectedImgOption.imgsel); // color 상태 업데이트
    }
    setKeycapColor(selectedColortOption.color)
    setBareboneImg(selectedImgOption.imgsel)


    }

    

    
    useEffect(() => {
       
    }, [selectedColor]);

    useEffect(() => {
       
    }, [selectedImg]);
    

    return(
        <>
            <div className="part">
                <div className="Radio">
                    {partType.map(option=>
                        <span key={option.id}>
                            <input 
                                id={option.id} 
                                type="radio" 
                                name="option" 
                                value={option.value} 
                                onChange={onChangeHandler1}
                            />

                            <label htmlFor={option.id}>
                                {option.value}
                            </label>
                        </span>
                    )}
                </div>

                <br/>
            
                <select className="DropBox" onChange={onChangeHandler2}>
                    { part.map((option)=>(
                        <option
                            key={option.key}
                            value={option.value}
                        >
                            {option.value}
                        </option>
                    ))}
                </select>

                <div className="SelectResult">
                    선택하신 키캡 <br/>{resultPartType.value} : {resultPart}
                </div>
            </div>
        </>
    );

}
export default SelectPart;