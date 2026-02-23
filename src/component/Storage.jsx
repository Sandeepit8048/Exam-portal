import React, {  use, useEffect, useState } from 'react'


function Storage() {
    /*-------------------------------------------------- Questions = object convert to Arrays --------------------------------- */
    const ques={
        Ques1:" What is JavaScript? ",
        Ques2:" What are the data types supported by JavaScript? ",
        Ques3:" What is the difference between var, let, and const in JavaScript? ",
        Ques4:" What are closures in JavaScript? ",
        Ques5:"What is hoisting?",
        Ques6:'Difference between map(), filter(), reduce()',
        Ques7:"What is undefined vs null?",
        Ques8:"What is arrow function?",
        Ques9:"What is rest parameter? ",
        Ques10:"Difference between shift() and unshift()?",

    };
    const allques = Object.entries(ques);
     
    /*------------------------------------------------ Next btn to store the question -------------------------------- */
    const[data, setData] = useState(0);

    function nextbtn(){
        if(data < allques.length-1){
         setData(data+1);
        }
    }
   
    /*-------------------------------------------------- Save btn to store the answer --------------------------------- */

    const [quesdata, setQuesData] = useState({
       answer :""
    });
    
    
      const [store, setStore] = useState([]);
    
    
      useEffect(() => {
         const save = JSON.parse(localStorage.getItem("store")) || []
         setStore(save);
      }, []);



     
    function handleChange(e){
        const{name, value}=e.target;
        setQuesData({...quesdata, [name]:value});
    }

    function handleSubmit(e){
        e.preventDefault();
         
        localStorage.setItem("store", JSON.stringify([...store, quesdata]));

        setQuesData({
            answer:" "
        });
        
    }
   console.log(store);
 
  
 

  return (
    <>
     <div className="boxbtn p-4 m-4 border-2 border-gray-400 rounded-lg">
               
        <b>{allques[data][0]}</b> <br />
        
        <b>{allques[data][1]} </b> <br />
        <input type="text" placeholder='Answer' name='answer' onChange={handleChange} value={quesdata.answer} /><br/>

        <div className="btn flex gap-2 mt-2">
            <button type='submit' onClick={handleSubmit}>Save</button>
            <button type='button' onClick={nextbtn}>Next</button>
        </div>
          
     </div>

    </>
  )
}

export default Storage