import React from "react";
import { Link } from "react-router-dom"; 

import "./profile.css";

const Profile =()=>{
    return (
        <>
        <div className="profile-container">
        <Link to="/editpage"> <button type="button" className="btn">Edit Button</button> </Link>
        <header>
          <h1>Kamini Singh</h1>
          <p>Full Stack Developer</p>
        </header>
        
  
        <section className="bio">
          <h2>Bio</h2>
          <p>
            I'm a passionate full stack developer with experience in building web applications.
            My goal is to create efficient and scalable solutions to real-world problems.
          </p>
        </section>
  
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript (React, Node.js)</li>
            <li>HTML5, CSS3</li>
            <li>SQL, MongoDB</li>
            <li>Git, GitHub</li>
          </ul>
        </section>
  
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>A description of Project 1.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>A description of Project 2.</p>
          </div>
        </section>
      </div>
      </>
  );

};
export default Profile