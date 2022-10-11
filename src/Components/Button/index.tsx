import React from 'react';
import Styled  from 'styled-components';
interface Props{
    readonly label:string;
    readonly onClick?:()=>void;
}
const Container=Styled.div`
text-align:center;
background-color:#E57373;
padding:10px 20px;
border-radius:8px;
cursor:pointer;
&:hover{
  background-color:#FFCDD2;
}
&:active{
  box-shadow:inset 5px 5px 10px rgba(0,0,0,0.2);
}
`;

const Label=Styled.div`
color:#FFFFFF;
font-size:16px;
`;

export const Button=({label,onClick}:Props)=>{
    return(
        <Container
            onClick={onClick}>
            <Label>{label}</Label>
        </Container>
    );
}