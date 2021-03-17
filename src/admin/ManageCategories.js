import React, { useState, useEffect } from 'react'
import Base from '../core/Base'
import { getAllCategory, deleteCategory } from './helper/adminapicall'
import { Link } from 'react-router-dom'
import { isAutheticated } from '../auth/helper'


const ManageCategories = () => {

    const [categories, setCategories] = useState([])

    const [error, setError] = useState()

    const { user, token } = isAutheticated()

    const preload = () =>{
        getAllCategory().then(data => {
            console.log(data)
            if(error) {
                setError(data.error)
            }else{
                console.log(data)
                setCategories(data)
                
            }
        })
      }

    useEffect(() => {
        preload()
    }, [])

    //delete product
    const deleteThisCategory = productId => {
      deleteCategory(productId, user._id, token).then(data =>{
        
        if(error){
          console.log(data.error)
        }else{
          console.log(data)
         preload()
        }
      })
    }

    return (
        <Base title="Categories" className="container bg-info p-4 text-white" >
        <Link className="btn btn-md btn-outline-white btn-dark mb-3" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="container bg-dark mx-1 ">
      <br></br>
    <div className="row">
      <div className="col-12">
       

       {categories && categories.map((category, index) =>(

          <div key={index} className="row text-center mb-2 ">
          <div className="col-2"></div>
          <div className="col-3">
            <h3 className="text-white text-left">{category.name}</h3>
          </div>
          <div className="col-3">
            <Link
              className="btn btn-success"
              to={`/admin/create/update/${category._id}`}
            >
              <span className="">Update</span>
            </Link>
          </div>
          <div className="col-3">
            <button onClick={() => {
              deleteThisCategory(category._id)
            }} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
       ))}
      </div>
    </div>
      </div>
    </Base>
    )
}



export default ManageCategories