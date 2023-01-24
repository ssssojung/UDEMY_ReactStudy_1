import React, {useState} from 'react';
import './Expenseform.css';

function Expenseform(props) {
    const [enteredTitle,setEnterTitle] = useState('');
    const [enteredAmount,setEnterAmount] = useState('');
    const [enteredDate,setEnterDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    // console.log(...userInput);
    // document.getElementById('').addEventListener('click',(event)=>{})
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle : event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnterAmount : event.target.value,
        // })
    };
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnterdate : event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        console.log(expenseData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
    
};

export default Expenseform;