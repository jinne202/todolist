import React, {useRef, useState, memo} from 'react';

const TodoInput = memo((props) => {
    const {todoAdd} = props;
    const todoInput = useRef(null);

    const [value, setValue] = useState('');
;
    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const onClickButton = (e) => {
        todoAdd(value);
        todoInput.current.value = ''
    }

    return (
        <div>
            <input type="text" ref={todoInput} placeholder="할 일 입력" onChange={handleValue}/>
            <input type="button" value="+" onClick = {onClickButton}/>
        </div>
    )
})

export default TodoInput;