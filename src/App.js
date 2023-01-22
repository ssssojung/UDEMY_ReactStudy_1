
import Item from './components/Item';

function App() {
  const items = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
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
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
        <h2>Let's get started!</h2>
      왜 안되냐고 짱나게 진짜
      <Item
        title = {items[0].title}
        amount = {items[0].amount}
        // date = {items[0].date}
      />
      <Item
         title = {items[1].title}
         amount = {items[1].amount}
        //  date = {items[0].date}

      />
      <Item
        title = {items[2].title}
        amount = {items[2].amount}
        // date = {items[0].date}
      />
      <Item
        title = {items[3].title}
        amount = {items[3].amount}
        // date = {items[0].date}
      />
      

    </div>
  );
}

export default App;

 