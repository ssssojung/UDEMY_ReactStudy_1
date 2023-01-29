import React, {useState} from 'react';
import Card from './UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    const filtereditems = props.items.filter(items => {
        return items.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <li>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filtereditems}/>
            </Card>
        </li>
       
    );
}

export default Expenses;