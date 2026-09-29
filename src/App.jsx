import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function App() {
  const{register, handleSubmit, reset, watch,  formState: {errors}} = useForm({
    mode: 'onChange'      //this is live whenever we do changes on the form it triggers
  });
  const onSubmit = (data) => { 
    console.log(data);
    reset();
  }

  // const validateName = (value) => {
  //   if(value !== 'admin'){
  //     return 'Only admin is allowed'
  //   }
  //   return true;
  // }

  const existingUsernames = ['admin', 'user123', 'john']
  const checkIfUsernameExists = async(userName) => {
    await new promise(resolve => setTimeout(resolve, 1000));
    return checkIfUsernameExists.includes(userName)

  };


  return (

    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
         <label>
           Name:  
           {/* <input {...register('name', { required: true, minLength:2 })} /> */}
           <input {...register('name', { required: 'Name is required', minLength: 2, validate : {
                     notAdmin: (value) => value !== "admin" || "Admin is not allowed",
                     isNotNumber: (value) => isNaN(value) || "Name cannot be number",
                     checkUsername: async (value) => {
                      const exist = await checkIfUsernameExists(value);     //used for calling APIs in the form
                      return !exist || 'Username already taken'
                     }
           }})} />
         </label>
         {/* {errors.name && <p>Name is required</p>} */}
         {errors.name && <p>{errors.name.message}</p>}

         <label>
           Email: 
          <input {...register('email', {required: true})} />  
         </label>
         {errors.email && <p>Email is required</p>}




        <label>
          Password:
          <input type="password" {...register('password', { required: true, minLength: 2,
           })}>
          </input>
           
        </label>


        <label>
          Confirm Password:
          <input type="password" {...register('confirmPassword', { required: true, minLength: 2, 
          validate : value => value === watch('password') || 'Passwords do not match'   //validation based on other forms
           })}>
          </input>
        </label>

        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}


         <button type='submit'>Submit</button> 
         <button type="button" onClick={() => reset()}>Reset</button>
      </form>
      


    </div>
    
  );  
}  
export default App


 

