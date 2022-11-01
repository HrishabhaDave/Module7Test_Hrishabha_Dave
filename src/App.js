import './App.css';
import Navigation from './Navigation/navigation';
import Header from './Header/header';
import Productlist from './ProductList/productlist';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Productlist/>
      <Footer/>
    </div>
  );
}

export default App;
