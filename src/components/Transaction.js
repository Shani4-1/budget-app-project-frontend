const Transaction = ({transaction, index}) => {
    return (
        <tr>
            <td>{transaction.date}</td>
            <td><a href={`/transactions/${index}`}>View</a></td>
            <td><a href={`/transactions/${index}/edit`}>Edit</a></td>
            <td>{transaction.amount}</td>
            <td>{transaction.deposit ? "Yes" : "No"}</td>
            <td>{transaction.from}</td>
        </tr>
    );
};


export default Transaction;