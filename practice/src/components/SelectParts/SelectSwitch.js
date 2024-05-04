import { useState,useEffect } from 'react';
import { selectPartsType } from '../../apis/PartsAPI';

function SelectPart(){

    const [partType,setPartType]=useState(selectPartsType("스위치")); //eslint-disable-line no-unused-vars

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
        if (resultPartType.id == "클릭") {
            setPart(selectPartsType("클릭스위치"));
        } else if (resultPartType.id == "넌클릭") {
            setPart(selectPartsType("넌클릭스위치"));
        } else if (resultPartType.id == "리니어") {
            setPart(selectPartsType("리니어스위치"));
        } else {
            setPart([]); 
        }
    }, [resultPartType.id]);
    
    const onChangeHandler2=(e)=>{
        setResultPart(e.target.value);
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
                    선택하신 베어본 <br/>{resultPartType.value} : {resultPart}
                </div>
            </div>
        </>
    );

}
export default SelectPart;