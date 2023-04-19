const Transaction = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>
        <a href={`/transactions/${transaction.id}`}>
          {transaction.transactionDescription}
        </a>
      </td>
      <td>$ {transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
