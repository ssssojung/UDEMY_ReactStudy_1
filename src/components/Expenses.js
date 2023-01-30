import React, {useState} from 'react';
import Card from './UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    };

    const filtereditems = props.items.filter(items => {
        return items.date.getFullYear().toString() === filteredYear;
    });

    

    return (
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses = {filtereditems}/>
                <ExpensesList items={filtereditems}/>
            </Card>
    );
}

export default Expenses;