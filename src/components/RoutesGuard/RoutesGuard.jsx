import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RoutesGuard(props) {

   
    if (localStorage.getItem("Token")) {
      return props.children
    }else{
      return <Navigate to="/login"/>
    }


  
}

