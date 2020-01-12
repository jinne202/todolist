import React, {memo} from 'react';

const TodoList = memo((props) => {
    const {data, todoRemove} = props;

    return(
        <div className="todo-list">
            {
                data.map((item, index) => {
                const {todoItem} = item;
                const remove = () => {
                    todoRemove(index)
                }
                return(
                    <div style={{border : '1px solid black'}} className="todo-item" key={index+todoItem}>
                        <input type="checkbox"/>
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