import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home">
            <h2 className="home-header">
                WELCOME TO GEN-AI PORTAL
            </h2>
            <div className="home-footer">
            <Link to="/login"> <button type="button" className="home-button btn btn-outline-dark">Login</button> </Link>
            </div>
        </div>
    )
}

export default Home;
