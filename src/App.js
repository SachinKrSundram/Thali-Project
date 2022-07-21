import React from "react";
import "./style.css";
import Thali from './Thali'
import Navbar from './Navbar'
import Counter from './Counter'
import{BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import{useSelector}from 'react-redux'
export default function App() {
  const value = useSelector((state) => state.DataRed.cartitem);
  const addition1 = useSelector((state) => state.DataRed.cartTotalamount);



  return (






    <BrowserRouter>
    <div>
      
<nav class="navbar navbar-dark bg-primary">
<Link to='/'><h1>Thali</h1></Link>
<Link to='/navbar'><h1>
<svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40"  fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
  </svg>
<span>{value.length}</span></h1></Link>
  
</nav>
<Routes>
<Route path='/navbar' element={ <Navbar/> }/>
<Route path='/' element={<Thali/>}/>

</Routes>
       
       
      
             {/* <Counter/> */}
      </div></BrowserRouter>
  );
}
