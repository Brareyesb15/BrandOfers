"use client"
import PCA from 'pca-js';
import React, { useState, useEffect, use } from 'react';

const traerTecs = async () => {
    const response =  await fetch(`http://localhost:5000/tecs`)
    return response.json()
  }

const dataProm = traerTecs()
export default function Pca() {

    const info = use(dataProm)
    
    console.log(info)

    return (
        <>
        <p>HOLAAA ESTAMOS EN PCA</p>
        </>
    )


  }
