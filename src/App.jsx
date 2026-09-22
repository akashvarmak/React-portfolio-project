import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function App() {
  const{register, handleSubmit, reset, formState: {errors}} = useForm();
  const onSubmit = (data) => { 
    console.log(data);
    reset();

  }


  return (

    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
         <label>
           Name:  
           {/* <input {...register('name', { required: true, minLength:2 })} /> */}
           <input {...register('name', { required: 'Name is required', minLength: {value: 2, message: 'Name is atleast 2 characters'} })} />
         </label>
         {errors.name && <p>Name is required and length have to be true</p>}

         <label>
           Email: 
          <input {...register('email', {required: true})} />  
         </label>
         {errors.email && <p>Email is required</p>}
         <button type='submit'>Submit</button> 
         <button type="button" onClick={() => reset()}>Reset</button>
      </form>
      


    </div>
    
  );  
}  
export default App


// not saved save it in the first place.

