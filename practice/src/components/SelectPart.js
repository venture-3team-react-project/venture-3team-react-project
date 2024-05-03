import React, { useState } from 'react';

function SelectPart(){

    const housing=[
        {id:1, value:"알루미늄"},
        {id:2, value:"플라스틱"},
        {id:3, value:"도자기"}
    ];
    

    const [partType,setPartType]=useState(housing); //eslint-disable-line no-unused-vars

    const [resultPartType, setResultPartType]=useState(
        {id:'', value:''}
    );

    const onChangeHandler1=(e)=>{
        setResultPartType({
            id:e.target.id,
            value:e.target.value
        });
    }

    const [part1, setPart1]=useState([ //eslint-disable-line no-unused-vars
        {key:1, value:"monsgeek M1W"},
        {key:2, value:'sugar65'},
        {key:3, value:'a66'}
    ]);

    const [part2, setPart2]=useState([//eslint-disable-line no-unused-vars
        {key:1, value:"gmk67"},
        {key:2, value:'tiger80 '},
        {key:3, value:'mk870'}
    ]);

    const [part3, setPart3]=useState([//eslint-disable-line no-unused-vars
        {key:1, value:"그런게"},
        {key:2, value:'어디에'},
        {key:3, value:'있어요'}
    ]);

    const [resultPart, setResultPart]=useState();
    
    const onChangeHandler2=(e)=>{
        setResultPart(e.target.value);
    }

    const selectPartType=()=>{
       if(resultPartType.id===1){
        return part1;
       }else if(resultPartType.id===2){
        return part2;
       }else if(resultPartType.id===3){
        return part3;
        }   
        return [];
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
                    { selectPartType().map((option)=>(
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