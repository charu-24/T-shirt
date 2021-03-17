import React, { useState, useEffect } from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { isAutheticated } from '../auth/helper'
import { getAllProduct, deleteProduct } from "../admin/helper/adminapicall"

const ManageProducts = () => {

    const [products, setProducts] = useState([])

    const [error, setError] = useState()

    const { user, token } = isAutheticated()

    const preload = () =>{
        getAllProduct().then(data => {
            console.log("char")
            if(error) {
                setError(data.error)
            }else{
                console.log(data)
                setProducts(data)
            }
        })
      }

    const myStyle={
      fontSize:"1.5em",
      color:"darkgray",
      
     

    
    }

    useEffect(() => {
        preload()
    }, [])

    console.log(products)

    //delete product
    const deleteThisProduct = productId => {
      deleteProduct(productId, user._id, token).then(data =>{
        
        if(error){
          console.log(data.error)
        }else{
          console.log(data)
         preload()
        }
      })
    }

    //tables
    const loadAllTheProducts = ()=>{
      
         return(
          <div class="">
          <div class="row">
            <div class="col-1 ">
              
            </div>
            <div class="col-2">
            <h2>Name</h2>

              {products.map((product, index) =>{
                return (
                    
                   <p style={myStyle}>{product.name}</p>
                    
                )
            })}
            </div>
            <div class="col-2">
            <h2>Category</h2>
              {products.map((product, index) =>{
                return (
                    
                   <p style={myStyle}>{product.category.name}</p>
                    
                )
            })}
            </div>
          
            <div class="col-2">
            <h2>Stock</h2>
              {products.map((product, index) =>{
                return (
                    
                   <p style={myStyle}>{product.stock}</p>
                    
                )
            })}
            </div>
            <div class="col-1">
            <h2>Sold</h2>

              {products.map((product, index) =>{
                return (
                    
                   <p style={myStyle}>{product.sold}</p>
                    
                )
            })}

            </div>
            <div class="col-2">
            <h2>Updation</h2>

              {products.map((product, index) =>{
                return (
                    
                  <Link
                  className="btn btn-success"
                  to={`/admin/product/update/${product._id}`}
                >
                  <span style={myStyle}>Update</span>
                </Link>
                    
                )
            })}

            </div>
            <div class="col-1">
            <h2>Deletion</h2>

          {products.map((product, index) =>{
            return (
                
              <button onClick={() => {
                deleteThisProduct(product._id)
              }} className="btn btn-danger" style={myStyle}>
                Delete
              </button>
              
            )
        })}

        </div>
            
          </div>
          
          
        </div>
         )
      
    }

    return (
        <Base title="Manage your products here" className="container bg-info p-4">
        <Link className="btn btn-dark" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
     
     
     
       
         
      <br></br>
      <br></br><br></br>
      <div className="bg-dark">
      {loadAllTheProducts()}
      </div>
         

       
        
    
    </Base>
    )
}

export default ManageProducts