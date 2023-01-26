import React from 'react';
import './ItemsDate.css';

function ItemsDate(props) {
    const month = props.date.toLocaleString('en-US',{month : 'long'});
    const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div class='expense-date__month'>{month}</div>
                <div class='expense-date__year'>{year}</div>
                <div class='expense-date__day'>{day}</div>

            {/* <div class='expense-date__month'>Month</div>
            <div class='expense-date__year'>Year</div>
            <div class='expense-date__day'>Day</div> */}
        </div>
    );
}

export default ItemsDate;