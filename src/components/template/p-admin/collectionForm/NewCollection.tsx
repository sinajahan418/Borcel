"use client"
import React, { useEffect, useState } from 'react';

const NewCollection = () => {
    const [collection , setCollection] = useState([])
    const [lodaing , setLodaing] = useState(false)
    useEffect(()=> {
        const collectionList = async ()=> {
            setLodaing(true)
            const res = await fetch("/api/collections");
            const data = await res.json();
            setCollection(data)
            setLodaing(false)
        }
        collectionList()
    }, [])
    
  return (
    <div>
      {
        lodaing ? <div>loding....</div>: (
            <>
            {
                collection.map((item:any)=> {
                    <div className=' p-4 font-bold'>jjj</div>
 } )
            }
            <div className=' p-4 font-bold'>
                sorry we lost conection to server
            </div>
            </>
        )
      }
    </div>
  );
}

export default NewCollection;