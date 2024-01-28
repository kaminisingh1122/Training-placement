
import React, { useState } from 'react';

import "./edit.css";


    const Edit = ({ onSubmit }) => {
        const [name, setName] = useState('');
        const [bio, setBio] = useState('');
        const [skills, setSkills] = useState('');
        const [projects, setProjects] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Call the onSubmit prop with the form data
          onSubmit({ name, bio, skills, projects });
        };
    return(
        
            <>
            <div className='forms'>
            <form className="developer-form" onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
        
              <label>
                Bio:
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
              </label>
        
              <label>
                Skills:
                <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
              </label>
        
              <label>
                Projects:
                <textarea value={projects} onChange={(e) => setProjects(e.target.value)} />
              </label>
        
               <button type="submit">Submit</button>
            </form>
            </div>
            </>
          
    );
};
export default Edit;