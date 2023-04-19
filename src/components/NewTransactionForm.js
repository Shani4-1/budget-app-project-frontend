import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

const NewTransactionForm = () => {
  const [transaction, setTransaction] = useState({
    date: "",
    transactionDescription: "",
    amount: "",
    deposit: false,
    from: "",
  });

  let navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id, value, type } = event.target;
    setTransaction((transaction) => ({
      ...transaction,
      [id]: type === 'number' ? parseFloat(value) : value,
    }));
  };
  
  
  
  
  
  const handleCheckboxChange = (event) => {
    setTransaction({ ...transaction, deposit: !transaction.deposit });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/transactions`, transaction)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  console.log(date);

  return (
    <div>
      <form onSubmit={handleSubmit}>
  <label htmlFor="date">Date:</label>
  <input
    id="date"
    value={transaction.date}
    type="text"
    onChange={handleTextChange}
    placeholder={date}
    required
  />
  <label htmlFor="transactionDescription">Transaction Description</label>
  <input
    id="transactionDescription"
    type="text"
    value={transaction.transactionDescription}
    onChange={handleTextChange}
    placeholder="Transaction Description"
    required
  />
  <label htmlFor="amount">Amount</label>
  <input
    id="amount"
    value={transaction.amount}
    type="number"
    onChange={handleTextChange}
    placeholder="Amount"
    required
  />
  <label htmlFor="deposit">Deposit</label>
  <input
    id="deposit"
    type="checkbox"
    onChange={handleCheckboxChange}
    checked={transaction.deposit}
  />
  <label htmlFor="from">From</label>
  <input
    id="from"
    value={transaction.from}
    type="text"
    onChange={handleTextChange}
    placeholder="From/To"
  />
</form>

      <button>
        <a href="/transactions">Cancel</a>
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NewTransactionForm;
