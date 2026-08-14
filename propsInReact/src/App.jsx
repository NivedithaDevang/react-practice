import './App.css';
import Expense from './Expense';

function App() {
  const expenses = [
    {
      title: 'Groceries',
      amount: 1000,
      date: new Date(2026, 10, 12),
    },
    {
      title: 'Dining out',
      amount: 14000,
      date: new Date(2026, 9, 12),
    },
    {
      title: 'Subscriptions',
      amount: 1000,
      date: new Date(2026, 1, 10),
    },
    {
      title: 'Rent',
      amount: 23000,
      date: new Date(2026, 1, 1),
    },
  ];

  return (
    <div className="app">
      <h2>Welcome to Finances</h2>

      <div className="expense-list">
        {expenses.map((expense) => (
          <Expense
            key={expense.title}
            expDate={expense.date}
            expTitle={expense.title}
            expAmount={expense.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;