import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Models from './components/Models';
import Blog from './components/Blog';
import Price from './components/Price';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
// import UserTable from  './components/userTable';

  import { ToastContainer } from 'react-toastify';
import ViewData from './components/ViewData';
// import ProductList from './components/Product';
import AdminPanel from './components/AdminPanel';
import Cart from './components/Cart';
import ProductData from './components/ProductData';

function App(){
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<Layout/>}>
    <Route index element={<Home />} /> 
     <Route path='/Home' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Models' element={<Models/>}/> 
     <Route path='/Blog' element={<Blog/>}/>
     <Route path='/Price' element={<Price/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Signup' element={<Signup/>}/>
     {/* <Route path='/userTable' element={<UserTable/>}/> */}
     <Route path='/ProductData' element={<ProductData/>}/>
     <Route path="/AdminPanel" element={<AdminPanel />} />
     <Route path='/view/:id' element={<ViewData/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     

    


    </Route>
   </Routes>
       <ToastContainer />
   </BrowserRouter>

   </>
  );
}

export default App;
