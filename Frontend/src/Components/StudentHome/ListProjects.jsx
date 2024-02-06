import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ListProjects.css';
import { Link } from 'react-router-dom';

export default function DisplayProjects() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/student/projects') // Assuming this endpoint fetches project data
      .then(response => {
        setProjects(response.data);
        setSearchResults(response.data); // Set initial search results to all projects
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = projects.filter(project =>
      project.projectName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="display-projects1">
      <center><h2>Project Information</h2></center>
      <br></br>
      <label className='searchname1'>Search By Name:</label>
      <input
        type="text"
        placeholder="Search by Project Name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <br></br>
      <br></br>
      <div className="projects-list1">
        {searchResults.map(project => (
          <div key={project.id} className="project-item1">
            <p><strong>Project Name:</strong> {project.projectName}</p>
            <p><strong>Technologies Used:</strong> {project.technologiesUsed}</p>
            <p><Link to={`/view/${project.id}`} className="button-style">View</Link></p>
            <br></br>
            <br></br>
          </div>
        ))}
        {searchResults.length === 0 && <p>No projects found</p>}
      </div>
    </div>
  );
}
