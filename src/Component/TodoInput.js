import React, {useRef, useState,useEffect} from 'react';

const TodoInput = (props) => {
    const {todoAdd} = props;
    const todoInput = useRef(null);

    const [value, setValue] = useState('');
;
    const handleValue = e => {
        setValue(e.target.value)
    }

    useEffect(() => {
        console.log(value)
    },[value])

    return (
        <div>
            <input type="text" ref={todoInput} onChange={handleValue}/>
            <input type="button" value="+" onClick = {() => {todoAdd(value)}}/>
        </div>
    )
}

export default TodoInput;