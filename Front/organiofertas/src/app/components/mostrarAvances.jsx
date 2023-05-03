"use client"
import React, { use } from 'react';


const traerPost = async () => {
    const response =  await fetch(`http://localhost:5000/stats/post`)
    return response.json()
  }

const dataProm = traerPost()
  
export default function Post() {
    
    const data = use(dataProm)
    console.log(data)

}