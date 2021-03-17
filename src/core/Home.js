import React, { useState, useEffect } from "react";
import "../styles.css"

import Base from "../core/Base"
import Card from './Card'
import { getProductS } from './helper/coreapicalls'
import { API } from "../backend";



export default function Home() {


    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProduct = () =>{
        getProductS().then(data => {
            
            if(error){
                setError(data.error)
            }
            else{
                setProducts(data)
            }
        })
    }

    useEffect(() => {
       loadAllProduct()
    }, [])
    console.log("api is", API)

    return (

        <Base title="Choose your's fav one...">
            <div className="row text-center">
            
                <div className="row">
                    {products.map((product, index) =>{
                        return (
                            <div key={index} className="col-4 mb-4">
                                <Card product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Base>
    )
}