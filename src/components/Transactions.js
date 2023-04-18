import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Transaction from "./Transaction.js"

const URL = process.env.REACT_APP_API_URL;

const Transactions = () => {
    // const { index } = useParams();

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/transactions`).then((req, res) => {
            console.log(res.data)
            setTransactions(res.data)
        });
    }, [])
    return (
        <div className="Transactions">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            {/* <th><a href={`/transactions/${index}`}></a></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index}/>
                        })};
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Transactions;