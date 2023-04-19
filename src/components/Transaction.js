const Transaction = ({ transaction, index }) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>
        <a href={`/transactions/${index}`}>
          {transaction.transactionDescription}
        </a>
      </td>
      <td>$ {transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
