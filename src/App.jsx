import './App.css'
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import { useState } from 'react';

function App() {

  // const person = {name: 'Akash', age : 30};
  // const{name,age} = person;
  // const hobby1 = ['Reading', 'Cooking'];
  // const handleHobbyClick = (hobby) => {
  //   alert(`You clicked on: ${hobby}`);
  // };

  // const akashProfile = {
  //   name:"Akash",
  //   age : 23,
  //   isMember : false,
  //   hobbies : ['Reading', 'Cooking'],
  //   onHobbyClick : handleHobbyClick
  // };

  //  const kowshikProfile = {
  //   name : "kowshik",
  //   age : 23,
  //   isMember : true,
  //   hobbies : ['Reading', 'Cooking'],
  //   onHobbyClick : handleHobbyClick
  // };

  //  const pp = {
  //   name : "PP",
  //   age : 23,
  //   isMember : true,
  //   hobbies : ['Reading', 'Cooking'],
  //   onHobbyClick : handleHobbyClick
  // };

  //usestate lecture


  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // const increment = () => {
  //    setCount(count+step);
  // };

  // const decrement = () => {
  //   setCount(count-step);
  // }



  //Adding multiple projects lecture



  // const [counters, setCounters] = useState([{id:1, value:0}]);

  // const addCounters = () => {
  //   setCounters([...counters, {id: counters.length +1, value : 0}])
  // };

  // const incrementCount = (id) => {
  //    setCounters(counters.map(counter => 
  //     counter.id === id ? {...counter, value: counter.value + 1} : counter
  //    ));
  // };



  //REACT FORM BASED PROJECT

  const [formData, setFormData] = useState({
    text: "",
    checkbox : false,
    radio : '',
    select : ''
  });

  const handleChange = (e) => {
    
    const {name, value, type, checked} = e.target
    setFormData({
      ...formData,
      [name] : type === 'checkbox' ? checked : value
    })
    

  };


  return (


// React portfolio project

    // <div className='App'>

    //   <Header/>
    //   <About/>
    //   <ProjectList/>
    //   <Contact/>
    //   <Footer/>

    // </div>

// PROPS PRACTICE

    // <div className='app-container'>
    //   <h1 className="app-container">Hello</h1>
    //   <ProfileCard {...akashProfile}/>
    //   <ProfileCard {...kowshikProfile}/>
    //   <ProfileCard {...pp}/>
    // </div>


    //states, Use state

//     <div className='app-container'>
//       <h1>counter {count}</h1>
//       <input
//         type="number"
//         value={step}
//         onChange={(e) => setStep(parseInt(e.target.value))}
// />
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>


    //  ADDING MULTIPLE COUNTERS PROJECT

    // <div>

    //  <button onClick={addCounters}>Add Counter</button>
    //  <ul>

    //  </ul>
    //  {counters.map(counter=> (
    //   <li key={counter.id}>

    //       Counter {counter.id}: {counter.value}
    //       <button onClick={() => {incrementCount(counter.id)}}>Increment</button>


    //   </li>
    //  ))}


    // </div>


   //REACT FORM BASED PROJECT


   <div className='form-container'>
    <h1>Form Example</h1>
    <form>
      
      {/* text input */}
      <div className='form-field'>
         <label>Text: </label>
         <input type='text' name='text' 
           value={formData.text} 
           onChange={handleChange} ></input>
      </div>
      {/* text input */}

      {/* checkbox */}

      <div className='form-field'>
         <label>
          <input type='checkbox' name='checkbox'
            checked={formData.checkbox} 
            onChange={handleChange}>
          </input> Checkbox
         </label>
      </div>
      {/* checkbox */}


      {/* Radio Button */}

      <div className='form-field'>
         <label>Radio:</label>
         <label>
         <input type='radio' name='radio' value='option1 'checked={formData.radio === 'option1'} onChange={handleChange}></input>
           Option 1 </label>

         <label>
         <input type='radio' name='radio' value='option2 'checked={formData.radio === 'option2'} onChange={handleChange}></input>
           Option 2 </label>
      </div>



      {/* Radio Button */}


      {/* Dropdown */}

       <div className='form-field'>
         <label>Select: </label>
         <select name='select' value={formData.select} onChange={handleChange}>
         <option value="">choose an option</option>
         <option value="option1">choose an option 1</option>
         <option value="option2">choose an option 2</option>
         </select>
      </div>

      {/* Dropdown */}

     <div className='form-data'>
        <h3>Form Data</h3>
        <p><strong>Text:</strong>{formData.text || 'N/A'}</p>
        <p><strong>Checkbox:</strong>{formData.checkbox ? 'checked' : 'unchecked'}</p>
        <p><strong>Radio:</strong>{formData.radio || 'N/A'}</p>
        <p><strong>Select:</strong>{formData.select || 'N/A'}</p>



     </div>















    </form>

     
    
   </div>







    


  )
}

export default App
