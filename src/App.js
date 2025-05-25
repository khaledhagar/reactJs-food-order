import {useState} from react;
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import cart from './components/Cart/files/Cart';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  function showCartHandler(){
    setCartIsShown(true);
  };
  function hideCartHandler(){
    setCartIsShown(false);
  };
  return (
    <CartProvider>
    <cart/>
    {cartIsShown && <cart OnClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
