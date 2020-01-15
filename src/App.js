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
    setData([...data, {todoItem, finish : false}]);
  }

  const todoRemove = (todoIndex) => {
    let resultData = data.filter((data, index) => {
      return index !== todoIndex
    });
    setData(resultData);
  }

  const todoFinish = (todoIndex) => {
    let resultData = [...data];
    const currentFinish = resultData[todoIndex].finish;
    resultData[todoIndex].finish = !currentFinish;
    setData(resultData);
  }


  return (
    <>
      <TodoLength data={data}/>
      <TodoList data={data} todoRemove={todoRemove} todoFinish={todoFinish}/>
      <TodoInput todoAdd={todoAdd}/>
    </>
  );
})

export default App;
