"use client"
import PCA from 'pca-js';
import React, { useState, useEffect, use } from 'react';

const traerTecs = async () => {
    const response =  await fetch(`http://localhost:5000/tecs`)
    return response.json()
  }

  export default function Pca() {

    const info = use(traerTecs)


  }
