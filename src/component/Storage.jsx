import React, { useEffect, useState } from 'react'

function Storage() {
    const ques={
        Ques1:" What is JavaScript? ",
        Ques2:" What are the data types supported by JavaScript? ",
        Ques3:" What is the difference between var, let, and const in JavaScript? ",
        Ques4:" What are closures in JavaScript? ",
    };

    const allques = Object.entries(ques);

    const[data, setData] = useState(0);

    function nextbtn(){
        if(data < allques.length-1){
         setData(data+1);
        }
    }


  return (
    <>
           
        <b>{allques[data][0]}</b> <br />
        
        <b>{allques[data][1]} </b> <br />

       <button onClick={nextbtn}>Next</button>
          

    </>
  )
}

export default Storage