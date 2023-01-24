import React, { useState } from 'react';
import ItemsDate from './ItemsDate';

import Card from './UI/Card';
import './ExpenseItem.css';

function Item(props) {
    const [title, setTitle] = useState(props.title);//[초기값, 업데이트값]
    
    const clickHandler = () => {
        setTitle('updated!!');
        
    } 
    return (
        <Card className='expense-item'>
            <ItemsDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default Item;