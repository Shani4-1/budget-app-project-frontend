import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState({});

  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index, navigate]);

  return (
    <article className="Details">
      <h3>{transaction.transactionDescription}</h3>
      <p>Date: <span>{transaction.date}</span> </p>
      <p>Amount: <span>${transaction.amount}</span> </p>
      <p>Deposit: <span>{transaction.deposit ? "Yes" : "No"}</span> </p>
      <p>From: <span>{transaction.from ? transaction.from : null}</span> </p>
      <div className="showNavigation">
        <div>
          <div>
            {""}
            <button>

            <a href={"/transactions"} onClick={() => navigate(-1)}>Back</a>
            </button>
          </div>
          <div>
            {""}
            <button>

            <a href={`/transactions/${index}/edit`}>Edit</a>
            </button>
          </div>
          <div>
            {""}
            <button onClick={""}>Delete</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TransactionDetails;
