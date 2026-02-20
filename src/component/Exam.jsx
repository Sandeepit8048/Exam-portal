import React, { useEffect,useState } from "react";

function Exam(){
    

 const [cart , setCart] = useState([]);
 const [data , setData] = useState([]);
 const [test , setTest] = useState([]);
 
 const [store, setStore] = useState({ ques1: " ", ques2: " ", ques3: " ", ques4: " ", ques5: " ", ques6: " ", ques7: " ", ques8: " ", ques9: " ", ques10: " ", ques11: " ", ques12: " ", ques13: " ", ques14: " ", ques15: " ", ques16: " ", ques17: " ", ques18: " ", ques19: " ", ques20: " ", ques21: " ", ques22: " ", ques23: " ", ques24: " ", ques25: " ", ques26: " ", ques27: " ", ques28: " ", ques29: " ", ques30: " " });

  const [ans , setAns] = useState(()=>{
    const save = localStorage.getItem("ans");
    return save ? JSON.parse(save) : [];
  });

 useEffect(()=>{

     localStorage.setItem("ans", JSON.stringify(ans));
     setAns(ans);
     console.log(ans);
 },[ans])


   
 function handleChange(e){
    const { name, value } = e.target;

    setStore({
      ...store,
      [name]: value,
    });
 }

 function handleSubmit(e){
    e.preventDefault();
    const updatestore = [...ans, store];
    setAns(updatestore);
  
    
  
    console.log(store);
 }


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
         {/* ---------------------------------------------Test-1--------------------------------------------------- */}
         {
            cart.map((e , id)=>{
                return(
                    <form key={id} className= "bg-gray-500 p-4 rounded shadow text-white flex  mt-2 gap-2  " onSubmit={handleSubmit}>
                        <div className="bg-green-500 rounded-xl p-2 w-full shadow-sm">
                            <h1 className="text-xl font-bold text-red-500">Test-{e}</h1>
                             <h4>Ques-(1) What is JavaScript? </h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques1" />                              
                             <h4>Ques-(2) Difference between var, let, and const?</h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full"onChange={handleChange} name="ques2" />
                             <h4>Ques-(3) What is hoisting?</h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques3" />
                             <h4>Ques-(4) What is scope in JavaScript?</h4> 
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques4" />
                        </div> 
                       
                         <div className="bg-green-500 rounded-xl p-2 w-full shadow-sm">
                            
                             <h4>Ques-(5) Difference between map(), filter(), reduce()</h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques5" />
                             <h4>Ques-(6) What is undefined vs null?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques6" />
                             <h4>Ques-(7) What is strict mode?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques7" />
                             <h4>Ques-(8) What is arrow function?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques8" />
                                  
                        </div>


                          <div className="bg-green-500 rounded-xl p-2 w-full shadow-sm">
                           
                                <h4>Ques-(9) What is rest parameter? </h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques9" />
                                <h4>Ques-(10) What is higher-order function?</h4>
                                    <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques10"  />
                                <h4>Ques-(11) What is includes()</h4>
                                    <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques11" />
                                <h4>Ques-(12) Difference between shift() and unshift()?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques12" />
                                  
                            </div>
                            


                            <div className="bg-green-500 rounded-xl p-2 w-full shadow-sm"> 
                             <h4>Ques-(13) What is closure? </h4>
                             <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques13" />
                             <h4>Ques-(14) What is prototype?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques14"/>
                             <h4>Ques-(15) What is IIFE?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques15" />
                             <h4>Ques-(16) What is object destructuring?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques16"/>
                                  
                            </div>

                               
                          <button className="bg-blue-500 text-white h-10 mt-8 justify-center items-center rounded px-4 py-2" type="submit" > Submit</button>

                          </form>    
                    
                )
            }
             
            )
         }
           
       {/* ------------------------------------------------- Test-2 start--------------------------------------------------- */}
          {
            test.map((e , id)=>{
                return(
                    <form key={id} className= "bg-pink-300 p-4 rounded shadow text-white flex  mt-2  gap-2" onSubmit={handleSubmit}>
                        <div className="bg-green-500 rounded-xl p-2 w-full shadow-sm ">
                            <h1 className=" text-xl font-bold text-red-500">Test-II--{e}</h1>
                             <h4>Ques-(1) Difference between normal function and arrow function?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques17" />
                             <h4>Ques-(2) What is callback function?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques18"/>
                             <h4>Ques-(3)What is Promise?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques19" />
                             <h4>Ques-(4) What is async/await?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques20"/>
                        </div>

                           <div className="bg-green-500 rounded-xl p-2 w-full shadow-sm">
                             
                             <h4>Ques-(1) Difference between push() and pop()?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques21" />
                             <h4>Ques-(2) What is split() and join()?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques22" />
                             <h4>Ques-(3)How to remove duplicates from array?</h4>
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques23" />
                             <h4>Ques-(4) What is forEach()?</h4> 
                                <input type="text" className="bg-white-900 border border-gray-300 rounded p-2 w-full" onChange={handleChange} name="ques24" />      
                          </div>
                          <button className="bg-blue-500 text-white h-10 mt-8 justify-center items-center rounded px-4 py-2" type="submit" > Submit</button>
                    </form>
                          

          )

          })
        }

        </>
    );
}

export default Exam;