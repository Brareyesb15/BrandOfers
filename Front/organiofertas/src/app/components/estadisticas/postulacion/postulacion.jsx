"use client"
import Postulacion from "./chart"
import React, { use } from 'react';


const traerPost = async () => {
    const response =  await fetch(`http://localhost:5000/stats/post/1`)
    return response.json()
  }
  const traerPost2 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/post/2`)
    return response.json()
  }
  const traerPost3 = async () => {
    const response =  await fetch(`http://localhost:5000/stats/post/3`)
    return response.json()
  }

const dataProm = traerPost()
const dataProm2 = traerPost2()
const dataProm3 = traerPost3()
  
export default function Post() {
    
  const data = id === 1 ? use(dataProm) : id === 2 ? use(dataProm2) : id === 3? use(dataProm3) : null ;


    function getPostulaciones(post) {
        const uniquePost = [...new Set(post)];
        const counts = uniquePost.map(posto=> post.filter(c => c === posto).length);
        return [uniquePost, counts];
      }

        const [uniquePost, counts] = getPostulaciones(data);
        

    return (
    <>
    <div>
        <Postulacion post={uniquePost} num={counts}></Postulacion>
   </div>
    </>
)


}