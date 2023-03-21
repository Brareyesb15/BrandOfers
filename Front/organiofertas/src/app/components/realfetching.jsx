import React from 'react';
import { use } from 'react';

const traer = async() => {
    return await (await fetch(`http://localhost:5000/obtener`)).json()
    
 }
 export default function RealFetching() {
 const offers = use(traer()) 
 console.log("AQUI TAAAAAAAAAAAAAAAAAAAAAAAAAAAA",offers)
 


     return (
        <>
        Hola
        </>
     ) }