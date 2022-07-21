import React from "react";
import{Link} from 'react-router-dom'
import{useSelector, useDispatch}from 'react-redux'
import{addToCart,fire}from './DataSlice'
import Data from './Data'
const Thali =()=>{
 const value=useSelector((state)=>state.DataRed.cartitem)
const dispatch=useDispatch()
const add1=(data)=>{
  dispatch(addToCart(data) )
}
  return(
    <div>
      
<span>{value.map((ok)=><div  style={{display:'inline-block',margin:'10px'}}>
  <h1>{ok.card}</h1>
  <img style={{width:'200px'}} src={ok.img} alt=""/>
  <h5><Link to='/navbar'><button className='btn btn-warning'>More details</button></Link>

  </h5>
  
</div>)}</span>
      {/* {value} */}
<h1>{Data.map((data)=>{
return <div style={{display:'inline-block', margin:'10px'}}>
<h1>{data.card}</h1>
<img style={{width:'300px'}}src={data.img} alt=""/>
<br/><button className='btn btn-primary' onClick={()=>add1(data)}>add to cart</button>
</div>
})}</h1>
    </div>
  )
}
export default Thali;