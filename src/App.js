import './App.css';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      {/* <HomePage/> */}
       {/* <Products/> */}
       {/*<ProductDetails/>*/}
       {/*<Cart/>*/}
       <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
