import React from 'react';
import ItemsDate from './ItemsDate';

import Card from './Card';
import './ExpenseItem.css';

function Item(props) {
    let title = props.title;
    const clickHandler = () => {
        title = 'updated!';
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