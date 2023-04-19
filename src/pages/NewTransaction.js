import NewTransactionForm from "../components/NewTransactionForm";

const NewTransaction = () => {
    return (
        <div className="new-transaction">
            <h2>Add Transaction</h2>
            <NewTransactionForm/>
        </div>
    );
};

export default NewTransaction;