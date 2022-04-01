import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckOutPage from './components/CheckoutPage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CheckOutPage/>
      {/*<Products/>*/}
    </div>
  );
}

export default App;
