import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction.js";

const URL = process.env.REACT_APP_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((res) => {
      
      setTransactions(res.data);
    });
  }, []);

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Transactions;
