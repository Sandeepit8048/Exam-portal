import React, { useEffect, useState } from "react";

function AdmitCard(){

    const [copy, setCopy] = useState({});

    // function sheet(){
    //     const responce = localStorage.getItem("store")

    //        if(responce){
    //         setCopy(JSON.parse(responce));
    //        }

    // }

    useEffect(()=>{
        async function fetchdata(){
          const res = await fetch('https://exam-portal-q6qe.onrender.com/answerdata');
          const data = await res.json();
          setCopy(data);
        }
        fetchdata();
    },[])

    console.log(copy);

    return(
     <>
     <h1 className="text-center text-2xl font-bold text-blue-600">Answer-Sheet</h1>

   
<div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition duration-300">


  {Object.entries(copy).map(([key, value], index) => (
    <div
      key={index}
      className="flex justify-between items-start bg-gray-50 p-3 rounded-lg mb-2 hover:bg-gray-100 transition "
    >
      <span className="font-semibold text-gray-700 capitalize">
        {key}:
      </span>
       <span className="text-gray-600">{}</span>
      <span className="text-gray-600">{value.question}<br/> {value.answer} </span>
    </div>
  ))}

</div>


     </>
    );
}
export default AdmitCard;