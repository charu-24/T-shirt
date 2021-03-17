  
import React from 'react'
import Base from "../core/Base"


const UserDashboard =(props) => {
    return (
       <Base title="UserDashboard  Page">
            <h1>Hey {props.name}</h1>
       </Base>
    )
}

export default UserDashboard 