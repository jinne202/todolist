import React, {useState, memo} from 'react';
import {TodoLength, TodoList, TodoInput} from './Component';


const dummy = [
  {
    todoItem : '장보기',
    finish : false
  },
  {
    todoItem : '일기쓰기',
    finish : false
  }
]

const App = memo(() => {
  const [data, setData] = useState(dummy);
  const todoAdd = (todoItem) => {

    let resetData = data;
    resetData.push({todoItem, finish : false});
    setData(resetData);
    console.log(resetData);
    //위의 세 줄과 처리 과정이 같다 setData([...data, todoItem, finish : false])
  }

  const todoRemove = (todoIndex) => {
    let resultData = data.filter((data, index) => {
      return index !== todoIndex
    });
    setData(resultData);
  }


  return (
    <>
      <TodoLength/>
      <TodoList data={data} todoRemove={todoRemove}/>
      <TodoInput todoAdd={todoAdd}/>
    </>
  );
})

export default App;
