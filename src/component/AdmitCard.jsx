import React, { useEffect, useState } from "react";

function AdmitCard(){

    const [copy, setCopy] = useState({});

    function sheet(){
        const responce = localStorage.getItem("store")

           if(responce){
            setCopy(JSON.parse(responce));
           }

    }

    useEffect(()=>{
         sheet();
    },[])

    console.log(copy);

    return(
     <>
     <h1 className="text-center text-2xl font-bold text-blue-600">Answer-Sheet</h1>

   
        {
        Object.entries(copy).map(([key, value], index) => (
          <div key={index} className="mt-1" >
            <div className=" justify-item-center ">
              <b>{key}:</b>{" "} 
             <p className=" p-2 "> {typeof value === "object"
                ? JSON.stringify(value)
                : value}
                </p>
            </div>
          </div>
        ))
      }


     </>
    );
}
export default AdmitCard;