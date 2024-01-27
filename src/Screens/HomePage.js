import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return(
    <>
    <div>HomePage</div>
    <div className="card-content-center">
    <Link to="/profilepage"> <button type="button" className="home-button btn btn-outline-dark">Profile Page</button> </Link>
    </div>
    </>
    
   

  )
}

export default HomePage