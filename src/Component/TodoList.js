import React, {memo} from 'react';

const TodoList = memo((props) => {
    const {data, todoRemove, todoFinish} = props;
    return(
        <div className="todo-list">
            {
                data.map((item, index) => {
                const {todoItem} = item;
                const remove = () => {
                    todoRemove(index)
                }
                const finish = () => {
                    todoFinish(index)
                }
                const todoItemClassName = `todo-item ${item.finish ? 'finish' : ''}`
                return(
                    <div style={{border : '1px solid black'}} className={todoItemClassName} key={index+todoItem}>
                        <input type="checkbox" onClick={finish}/>
                        <p>{todoItem}</p>
                        <button onClick={remove}>삭제</button>
                    </div>
                );
                })
            }
        </div>
    )
}
)

export default TodoList;