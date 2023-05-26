"use client"
import Postulacion from "./chart"
import React, { use } from 'react';


const traerPost = async () => {
    const response =  await fetch(`http://localhost:5000/stats/post/1`)
    return response.json()
  }


const dataProm = traerPost()

  
export default function Post({id}) {
    

  const result = use(dataProm)
  const data = id === 1 ? result.uno : id === 2 ? result.dos : id === 3? result.tres : null;


    function getPostulaciones(post) {
        const uniquePost = [...new Set(post)];
        const counts = uniquePost.map(posto=> post.filter(c => c === posto).length);
        return [uniquePost, counts];
      }

        const [uniquePost, counts] = getPostulaciones(data);
        

    return (
    <>
    <div style={{ textAlign: 'center' }}>
        <h2>Tipos de postulación</h2>
        <Postulacion post={uniquePost} num={counts}></Postulacion>
   </div>
    </>
)


}