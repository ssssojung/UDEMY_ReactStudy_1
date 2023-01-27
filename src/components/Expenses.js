import React, {useState} from 'react';
import Item from './Item';
import Card from './UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map(items => <Item
                    title = {items.title}
                    amount = {items.amount}
                    date = {items.date}
                />)}
            </Card>
        </div>
       
    );
}

export default Expenses;