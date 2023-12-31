import React from 'react'
import Input from '../../pages/Input.jsx';
import { useFormik } from 'formik';
import {ForgotPasswordSchema} from '../validation/Validate.js'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function ForgotPassword() {

    const navigate = useNavigate();

    const initialValues={
      email:'',
      password:'',
      code:'',
    };
    

    const onSubmit= async users=>{

      const formData = new FormData();

      const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,users);
    
        toast.success('password updated ', {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      
        navigate('/login');
    }


const formik = useFormik({
   initialValues,
   onSubmit,
   validationSchema:ForgotPasswordSchema
  
  

});


   const inputs = [
   {
      id:'email',
      type:'email',
      name:'email',
      title:'user email',
      value:formik.values.email,
    },
    {
        id:'password',
        type: 'password',
        name:'password',
        title:'user password',
        value:formik.values.password,
    },
    {
        id:'code',
        type: 'text',
        name:'code',
        title:'code',
        value:formik.values.code,
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
       onChange={input.onChange || formik.handleChange} 
       onBlur={formik.handleBlur}
       touched={formik.touched}
       />
        )

  return (
    <>
    <div className='container'>
    <h2>update password</h2>
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        {renderInputs}

     <button type='submit' disabled={!formik.isValid}> update password </button>   
    </form>
    </div>
    </>
  )
}
