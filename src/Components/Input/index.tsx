import React from 'react';
import Styled  from 'styled-components';

interface Props{
    readonly placeholder?:string;
    //입력 데이터 받아야하니께 이벤트 함수 // 문자열 이벤트 받아서 
    readonly value?:string;
    readonly onChange?:(text:string)=>void;
}

const InputBox=Styled.input`
fonst-size:16px;
padding:10px 10px;
border-radius:8px;
border :1px solid #BDBDBD;
outline:none;
flex:1;
`;


export const Input=({placeholder,value,onChange}:Props)=>{
    return(
        <InputBox value={value} placeholder={placeholder}
        onChange={(event)=>{if(typeof onChange==='function'){
            onChange(event.target.value);
        }}
    }
        />
    );
}