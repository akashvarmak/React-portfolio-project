import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function App() {
  const{register, handleSubmit, watch} = useForm();
  const onSubmit = (data) => console.log(data);

  const watchedName = watch('name');
  const watchEmail = watch('email');

  useEffect( () => {
    console.log('Name : ', watchedName);
  }, [watchedName]);

  useEffect( () => {
    console.log('Email : ', watchEmail);
  }, [watchEmail]);


  return (

    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
         <label>
           Name:  
           <input {...register('name')} />
         </label>

         <label>
           Email: 
          <input {...register('email')} />  
         </label>
         <button type='submit'>Submit</button> 
      </form>
      


    </div>
    
  );  
}  
export default App

//done with 341, let's do 342