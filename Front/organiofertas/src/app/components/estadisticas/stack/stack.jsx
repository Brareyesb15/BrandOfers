"use client"
import Stacko from "./chart"
import React, { use } from 'react';


const traerStack = async () => {
    const response =  await fetch(`http://localhost:5000/stats/stack/1`)
    return response.json()
  }
const traerStack2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/stack/2`)
    return response.json()
  }
const traerStack3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/stack/3`)
    return response.json()
  }

const dataProm = traerStack()
const dataProm2 = traerStack2()
const dataProm3 = traerStack3()



export default function Stack({id}) {
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;


    function getStack(stack) {
        const uniqueStack = [...new Set(stack)];
        const counts = uniqueStack.map(sta=> stack.filter(c => c === sta).length);
        return [uniqueStack, counts];
      }

        const [uniqueStack, counts] = getStack(data);
        

    return (
    <>
    <div>
        <Stacko stac={uniqueStack} num={counts}></Stacko>
   </div>
    </>
)


}