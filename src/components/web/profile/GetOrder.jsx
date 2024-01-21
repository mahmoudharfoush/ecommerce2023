import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function GetOrder() {
  const [orders , setOrder] =useState({})
  const getOrder = async ()=>{
    
        const token = localStorage.getItem("userToken");
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
        {headers:{Authorization:`Tariq__${token}`}});
        console.log(data);
    
        const res = data.orders;
        setOrder(res)
       
      return res;
   
  }

  useEffect(  ()=>{
    getOrder();
  },[])
  


  return (
    <div onClick={getOrder}>
   {orders?.map?(
 
 orders.map( (orders)=>
 <div className="item" key={orders._id}>
<table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">address</th>
      <th scope="col">couponName </th>
      <th scope="col">createdAt</th>
      <th scope="col">finalPrice </th>
      <th scope="col">paymentType </th>
      <th scope="col">phoneNumber </th>
      <th scope="col">status </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{orders.address}</td>
      <td>{orders.couponName}</td>
      <td>{orders.createdAt}</td>
      <td>{orders.finalPrice}</td>
      <td>{orders.paymentType}</td>
      <td>{orders.phoneNumber}</td>
      <td>{orders.status}</td>

    </tr>
  </tbody>
</table>

</div>

 )
):<h2>orders is mepty</h2>}

    </div>
  )
}


