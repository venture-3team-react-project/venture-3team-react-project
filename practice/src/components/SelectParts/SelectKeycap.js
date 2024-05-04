import { useState,useEffect } from 'react';
import { selectPartsType } from '../../apis/PartsAPI';

function SelectPart({onKeycapSelect}){

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
    }

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