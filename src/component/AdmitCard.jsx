import React, { useEffect, useState } from "react";

function AdmitCard(){

    const [copy, setCopy] = useState({});

    function sheet(){
        const responce = localStorage.getItem("ans")

           if(responce){
            setCopy(JSON.parse(responce));
           }
        //   setCopy(responce);

        //   console.log(responce);
    }

    useEffect(()=>{
         sheet();
    },[])

    console.log(copy);

    return(
     <>
     <h1>Answer-Sheet</h1>
       
       {/* <p>{item.copy} </p> */}


       
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