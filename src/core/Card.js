import React, { useState, useEffect } from 'react'
import ImageHelper from './helper/ImageHelper';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';

const Card = ({product, addToCart=true, removeFromCart=false, setReload= f => f,
reload=undefined}) => {
    
        const [redirect, setRedirect] = useState(false)

        const addToTheCart = () =>{
            addItemToCart(product, ()=>{
                setRedirect(true)
            })
        }

        const getARedirect = (redirect) =>{
            if(redirect){
                return <Redirect to="/cart" />
            }
        }


        return (
          <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{product.name}</div>
            <div className="card-body">
            {getARedirect(redirect)}
             <ImageHelper product={product} />
              <p className="lead bg-success font-weight-normal text-wrap">
                {product.description}
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">Rs {product.price}</p>
              <div className="row text-center">
                <div className="col-12">
                  {addToCart && (
                    <button
                    onClick={addToTheCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                  >
                    Add to Cart
                  </button>
                  )}
                </div>
                <div className="col-12">
                  {removeFromCart && (
                    <button
                    onClick={() => {
                      removeItemFromCart(product._id)
                      setReload(!reload)
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      };    
    

export default Card