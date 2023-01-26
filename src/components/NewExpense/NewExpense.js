import React from 'react';

import Expenseform from './Expenseform';
import './NewExpense.css';

function NewExpense(props) {
    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id : Math.random().toString()
        };
        props.onAddItem(expenseData)
    };

    return (
        <div className='new-expense'>
            <Expenseform onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;