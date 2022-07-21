import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Remove, Add, getTotal,substract } from './DataSlice';
import{Link} from 'react-router-dom'
const Navbar = () => {
  const value = useSelector((state) => state.DataRed.cartitem);

  useEffect(() => {
    dispatch(getTotal());
    
  }, [value]);

  const addition1 = useSelector((state) => state.DataRed.cartTotalamount);
  // const addition12 = useSelector((state) => state.DataRed.cartQuantity);

  const dispatch = useDispatch();
  const addition = (rr) => {
    dispatch(Add(rr));
  };
  const sub = (data) => {

    dispatch(substract(data))
  };
  const cut = (data) => {
    dispatch(Remove(data));
  };
  const click = () => {};
  console.log(value);
  return (
    <div>
      
      <span>
      <table class="table">
      <thead>
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">image</th>

                    <th scope="col">Name</th>
                   <th scope="col">Quality</th>
                    <th scope="col">quantity</th>
                    <th scope="col">price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>        
        {value.map((rr,i) => {
          return (
            
            
                
                <tbody>
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>
                      <img style={{ width: '200px' }} src={rr.img} alt="" />
                    </td>
                    <td>
                      <h1>{rr.card}</h1>
                    </td>
                    <td><h3> <select name="" id="">
    
    <option value="">sweet</option>
  <option value="">chilli</option>
  <option value="">freezy</option>
  <option value="">medium</option>
  <option value="">hot</option>
  </select></h3>
  </td>
                    <td>
                      <button className='btn btn-warning' onClick={() => addition(rr)}>{<AddBoxIcon/>}</button>
                     <h3>{rr.Quantity}</h3> 
                      {/* {addition12} */}
                      <button className='btn btn-warning' onClick={() => sub(rr)}>{<IndeterminateCheckBoxIcon/>}</button>
                    </td>
                    <td>₹ {rr.Price*rr.Quantity}</td>
                    <td>{rr.Quantity}</td>
                    <td>
                      <button onClick={() => cut(rr)} className='btn btn-warning'>Remove</button>
                    </td>
                  </tr>
                </tbody>
            
            
          );
          
        })}</table>
      </span >{(addition1)?<h3 style={{margin:'0 0 0 80%'}}>Get Total=₹{addition1}</h3>:''
   }
<Link to='/'>{(value==0)?<h3>Choose Favorite items from menu click here</h3>:''}</Link>
       </div>
  );
};
export default Navbar;
