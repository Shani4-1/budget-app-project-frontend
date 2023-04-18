import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import EditTransaction from './pages/EditTransaction';
import FourOFour from './pages/FourOFour.js';
import Home from './pages/Home.js';
import IndexOfTransactions from './pages/IndexOfTransactions';
import NewTransaction from './pages/NewTransaction.js';
import ShowTransaction from './pages/ShowTransaction.js';

//Components
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<IndexOfTransactions />} />
            <Route path='/transactions/new' element={<NewTransaction />} />
            <Route path='/transactions/:index' element={<ShowTransaction />} />
            <Route path='/transactions/:index/edit' element={<EditTransaction />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );

}

export default App;
