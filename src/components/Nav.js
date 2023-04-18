import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <h1>Budget App</h1>
            </Link>
            <button>
            <Link to="/transactions">View Transactions</Link>
            </button>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    )};



export default Nav;