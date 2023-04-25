"use client"
import Postulacion from "./chart"
import React, { use } from 'react';


const traerPost = async () => {
    const response =  await fetch(`http://localhost:5000/stats/post`)
    return response.json()
  }

const dataProm = traerPost()

export default function Post() {
    
    const data = use(dataProm)
    console.log(data)


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