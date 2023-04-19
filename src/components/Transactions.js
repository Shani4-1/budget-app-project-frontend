import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Transaction from "./Transaction.js";

const URL = process.env.REACT_APP_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/transactions`).then((res) => {
      const transactionsWithId = res.data.map((transaction) => ({
        ...transaction,
        id: uuidv4(),
      }));
      console.log(transactionsWithId)
      setTransactions(transactionsWithId);
    });
  }, []);

  return (
    <div className="Transactions">
      <section>
        <h1>
          Account Balance: $
          {(() => {
            let total = 0;
            transactions.forEach((transaction) => {
              if (transaction.deposit) {
                total += Number(transaction.amount);
              } else {
                total -= Number(transaction.amount);
              }
            });
            return Number(total.toFixed(2));
          })()}
        </h1>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((transaction, index) => (
                <Transaction
                  key={transaction.id}
                  transaction={transaction}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Transactions;
