import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';

const DUMMY_ITEMS = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2022, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const addItemHandler = items =>{
    setItems((previtems) => {
      return [items, ...previtems];
    });
  };

  return (
    <div>
        <h2 style={{color:"white"}}>비용 추적기</h2>
        왜 안되냐고 짱나게 진짜
        <NewExpense onAddItem={addItemHandler}/>
        <Expenses items={items}/>
    </div>
  );
}

export default App;

 