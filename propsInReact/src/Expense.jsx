import './expense.css';

const Expense = ({ expDate, expTitle, expAmount }) => {
  const month = expDate.toLocaleString('en-US', { month: 'short' });
  const day = expDate.toLocaleString('en-US', { day: '2-digit' });
  const year = expDate.getFullYear();

  return (
    <div className="expense">
      <div className="expense-date">
        <span>{month}</span>
        <strong>{day}</strong>
        <span>{year}</span>
      </div>

      <div className="expense-description">
        <h3>{expTitle}</h3>
        <p className="expense-price">Rs. {expAmount}</p>
      </div>
    </div>
  );
};

export default Expense;