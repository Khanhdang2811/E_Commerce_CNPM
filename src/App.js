import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Product from './customer/components/Product/Product';
import HomePage from './customer/components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <Product/>
      {/* <HomePage/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
