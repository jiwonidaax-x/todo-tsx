import React,{useState} from 'react';
import Styled  from 'styled-components';
import {Button,Input,ToDoItem} from './Components';

//Props=? 파라미터?
//States 유동적 데이터? 다룰때  
// 첫번재 파라미터 state 두번재  state 데이터 다루느 ㄴ함수?(set state function)

const InputContainer=Styled.div`
display:flex;
`;

const Container=Styled.div`
  min-height:100vh;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
`;

const Contents=Styled.div`
  display:flex;
  background-color:#FFFFFF;
  flex-direction:column;
  padding:20px;
  border-radius:8px;
  box-shadow:5px 5px 10px rgba(0,0,0,0.2);
`;

const ToDoListContainer =Styled.div`
min-width:350px;
height:400px;
overflow-y:scroll;
border: 1px solid #BDBDBD;
margin-bottom:20px;
`

function App() {
const [toDo,setToDo]=useState(''); // 동적으로 변경할 데이터 두개  
//const[변수명,set함수명]= useState<datatype>(데이터 초기값);
//목록이니께 빈배열로 해주는겨
const [toDoList, setToDoList]=useState<string[]>([]);
const addToDO=():void=>{
  if(toDo){
    setToDoList([...toDoList,toDo]);
    setToDo('');
  }
}

const deleteToDo=(index:number):void=>{
  let list=[...toDoList];
  list.splice(index,1);
  setToDoList(list)
}


  return (
    <Container>
      <Contents>
        <ToDoListContainer>
          {toDoList.map((item,index)=><ToDoItem key={item} label={item} onDelete={()=>
            deleteToDo(index)} />
          )}
        </ToDoListContainer>
        <InputContainer>
        <Input value={toDo} placeholder="할 일을 입력해 주세요" onChange={(text)=>setToDo(text)} />
        <Button label="추가" onClick={addToDO} />
        
        </InputContainer>
     </Contents>  
    </Container>
  );
}

export default App;
