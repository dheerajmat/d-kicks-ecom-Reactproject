
import './App.css';

import { BrowserRouter, Routes , Route  } from 'react-router-dom';
import  Home from './Pages.js/Home';
import Man from './Pages.js/Man';
import Women from './Pages.js/Women';
import Navbat2 from './component/Navbat2';
import Footer from './component/Footer';
import AllShoes from './Pages.js/AllShoes';
import Productoverview from './Pages.js/Productoverview';
import ProductOverviewOne from './Pages.js/Productoverview';
import Navbat1, { StickyNavbar } from './component/Navbar1';
import BasicExample from './component/Scrollbacktotop';
import Register from './Pages.js/Register';
import { Login } from './Pages.js/Login';
import ScrollToTop from './Pages.js/Scrolltotop';
import { CartProvider } from './CartContext';
import { CartOne } from './Pages.js/Cart';
import { CheckoutTwo } from './Pages.js/Checkout';






function App() {

  

  
  
  return (
    <>
     
     <CartProvider>
      <BrowserRouter >
      <Navbat1/>
      {/* <Navbat2/> */}
      <ScrollToTop/>
      
      
        <Routes     >
        
          <Route path='/' element=<Home/>  > </Route>
          <Route path='/man' element=<Man/>  > </Route>
          <Route path='/women' element=<Women/> > </Route>
          <Route path='/allshoes' element=<AllShoes/> > </Route>
          <Route path='/signin' element=<Register/> > </Route>
          <Route path='/login' element=<Login/> > </Route>
          <Route path='/addtocart' element=<CartOne/> > </Route>
          <Route path='/Checkout' element=<CheckoutTwo/> > </Route>
          <Route path='/login
          ' element=<Login/> > </Route>
          <Route path="/product/:id"  element={<ProductOverviewOne /> }  />
          
        </Routes>
        <Footer/>
        <BasicExample/>
        
      </BrowserRouter>
      </CartProvider>
      

    </>
    
   
  );
}

export default App;
