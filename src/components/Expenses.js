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

    const filtereditems = props.items.filter(items => {
        return items.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if(filtereditems.length > 0){
        expensesContent = filtereditems.map((items) => (<Item
            key = {items.id}
            title = {items.title}
            amount = {items.amount}
            date = {items.date}
        />));
    }

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            {expensesContent}
            </Card>
        </div>
       
    );
}

export default Expenses;