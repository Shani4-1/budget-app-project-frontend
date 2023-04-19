import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

const EditTransaction = () => {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    date: "",
    transactionDescription: "",
    amount: "",
    deposit: false,
    from: "",
  });

  let navigate = useNavigate();
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setTransaction({ ...transaction, deposit: !transaction.deposit });
  };

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((error) => console.log(error));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.log(error));
  };
  
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

export default EditTransaction;
