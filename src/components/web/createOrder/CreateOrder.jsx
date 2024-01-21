import { useFormik } from 'formik';
import React from 'react'
import Input from '../../pages/Input.jsx';
import { orderSchema } from '../validation/Validate.js';
import axios from "axios";
import { toast } from 'react-toastify';
export default function CreateOrder() {

const initialValues={
  address:'',
  phone:'',
  couponName:'',
};
const onSubmit= async (users)=>{

  try{
    const token = localStorage.getItem("userToken");
    const {data} = await axios.post(`https://ecommerce-node4.vercel.app/order`,users
    ,{headers:{Authorization:`Tariq__${token}`}});
    console.log(data);
    if(data.message=='success'){
      toast.success('create order successfully', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    
          
    }
    return data;
  
  
  }catch(error){
    console.log(error)
  }
  }
  

const formik = useFormik({
initialValues,
onSubmit,
validationSchema:orderSchema

});

const inputs = [
{
  id:'address',
  type:'text',
  name:'address',
  title:'user address',
  value:formik.values.address,
},
{
    id:'phone',
    type: 'number',
    name:'phone',
    title:'user phone',
    value:formik.values.phone,
},
{
  id:'couponName',
  type: 'text',
  name:'couponName',
  title:'user couponName',
  value:formik.values.couponName,
},
];
const renderInputs = inputs.map( (input,index)=>
   <Input 
   type={input.type} 
   id={input.id} 
   name={input.name} 
   title={input.title} 
   value={input.value} 
   key={index}
   errors={formik.errors}
   onChange={formik.handleChange} 
   onBlur={formik.handleBlur}
   touched={formik.touched}
   />
    )
return (
<>
<div className='container'>
<h2>create order</h2>
<form onSubmit={formik.handleSubmit}>
    {renderInputs}

 <button type='submit' disabled={!formik.isValid}> create order </button>   

 
</form>

</div>
</>
)

}