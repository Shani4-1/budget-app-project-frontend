import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

const EditTransaction = () => {
  let { id } = useParams();
  
  const [transaction, setTransaction] = useState({
    date: "",
    transactionDescription: "",
    amount: 0, 
    deposit: false,
    from: "",
    id: ""
  });
  
  const [originalTransaction, setOriginalTransaction] = useState({});

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
    setTransaction((prevState) => ({
      ...prevState,
      deposit: !prevState.deposit,
    }));
  };
  

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${id}`)
      .then((req) => {
        
        setTransaction(req.data);
        setOriginalTransaction(req.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/transactions/${id}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${id}`);
      })
      .catch((error) => console.log(error));
  };
  
  const handleCancel = () => {
    setTransaction(originalTransaction);
    navigate(`/transactions/${id}`);
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

      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EditTransaction;
