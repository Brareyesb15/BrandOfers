"use client"
import Stacko from "./chart"
import React, { use } from 'react';


const traerStack = async () => {
    const response =  await fetch(`http://localhost:5000/stats/stack`)
    return response.json()
  }

const dataProm = traerStack()




export default function Stack({id}) {
    
  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;

  console.log(data)


    function getStack(stack) {
        const uniqueStack = [...new Set(stack)];
        const counts = uniqueStack.map(sta=> stack.filter(c => c === sta).length);
        return [uniqueStack, counts];
      }

      let uniqueStack, counts; 
      
      if (data) {
        [uniqueStack, counts] = getStack(data);
      } else {
        uniqueStack = null;
        counts = null;
      }
        

    return (
    <>
    <div style={{ textAlign: 'center' }}>
        <h2>Stack</h2>
        <Stacko stac={uniqueStack} num={counts}></Stacko>
   </div>
    </>
)


}