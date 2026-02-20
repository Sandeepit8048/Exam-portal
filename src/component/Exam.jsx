import React, { useEffect,useState } from "react";

function Exam(){
    

 const [cart , setCart] = useState([]);
 const [data , setData] = useState([]);
 const [test , setTest] = useState([]);
  

 function addtocart(){
     setCart([...cart, cart.length + 1]);
     setData([...data, data.length + 1]);
 }

 function test2(){
        setTest([...test, test.length + 1]);
 }



console.log(cart);

    return(
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-200">
            <h1 className="font-bold">Exam Page</h1>
            <button onClick={addtocart}>Test-I</button>
            <button onClick={test2}>Test-II</button>
            <p className="text-blue-600 font-bold">Cart Items: {cart.length} & Test Items: {test.length}</p>
         </div>
         {
            cart.map((e , id)=>{
                return(
                    <div key={id} className= "bg-green-500 p-4 rounded shadow text-white flex  mt-2 ">
                        <div className="bg-green-500 w-90 h-auto m-2 p-2 ">
                            <h1>Test-{e}</h1>
                             <h4>Ques-(1) What is JavaScript? </h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />                              
                             <h4>Ques-(2) Difference between var, let, and const?</h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(3) What is hoisting?</h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(4) What is scope in JavaScript?</h4> 
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                        </div>
                       
                         <div className="bg-green-500 w-90 h-auto m-2 p-2 ">
                            <h1>Test-{e}</h1>
                             <h4>Ques-(1) What is closure? </h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(2) What is undefined vs null?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(3) What is strict mode?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(4)What is arrow function?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                                
                        </div>
                          </div>    
                    
                )
            }
             
            )
         }
          
          {
            test.map((e , id)=>{
                return(
                    <div key={id} className= "bg-green-500 p-4 rounded shadow text-white flex  mt-2 ">
                        <div className="bg-green-500 w-90 h-auto m-2 p-2 ">
                            <h1>Test-II--{e}</h1>
                             <h4>Ques-(1) Difference between normal function and arrow function?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(2) What is callback function?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(3)What is Promise?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(4) What is async/await?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                        </div>

                           <div className="bg-green-500 w-90 h-auto m-2 p-2 ">
                             <h1>Test-II--{e}</h1>
                             <h4>Ques-(1) Difference between push() and pop()?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(2) What is split() and join()?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(3)How to remove duplicates from array?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                             <h4>Ques-(4) What is forEach()?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" />
                              
                          </div>
                          
                        </div>

          )

          })
        }

        </>
    );
}

export default Exam;