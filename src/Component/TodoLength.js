import React from 'react';

const TodoLength = (props) => {
    const {data} = props;
    console.log(data);
    const dataLength = data.filter((item) => !item.finish).length;
    return (
        <div>할 일 {dataLength} 남음</div>
    )
}

export default TodoLength;