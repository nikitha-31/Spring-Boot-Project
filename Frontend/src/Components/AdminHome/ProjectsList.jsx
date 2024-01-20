import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjectList.css';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State for delete success message
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/student/projects')
      .then(response => {
        setProjects(response.data);
        setFilteredProjects(response.data);
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  useEffect(() => {
    const results = projects.filter(project =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(results);
  }, [searchTerm, projects]);

  const deleteProject = (projectId) => {
    axios.delete(`http://localhost:8080/admin/delete/project/${projectId}`)
      .then(response => {
        console.log('Project deleted successfully');
        setProjects(projects.filter(project => project.id !== projectId));
        setFilteredProjects(filteredProjects.filter(project => project.id !== projectId));
        setDeleteSuccess(true);
        setTimeout(() => {
          setDeleteSuccess(false);
        }, 3000);
      })
      .catch(error => {
        console.error('Error deleting project:', error);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const results = projects.filter(project =>
      project.projectName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="display-projects">
      <center><h1>Project Information</h1></center>
      {deleteSuccess && <div className="success-message1">Project Deleted Successfully!</div>}
      <div className="search-container1">
      <label className='searchname'>Search By Name:</label>
        <input
          type="search"
          placeholder="Search by Project Name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="projects-container">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <p><strong>Project Name:</strong> {project.projectName}</p>
            <p><strong>Technologies Used:</strong> {project.technologiesUsed}</p>
            <div className="project-actions">
              <Link to={`/view/${project.id}`} className="button-style">View</Link>
              <button onClick={() => deleteProject(project.id)} className="button-style">Delete</button>
              <Link to={`/update/${project.id}`} className="button-style">Update</Link>
            </div>
          </div>
        ))}
        {searchResults.length === 0 && <p><center>No projects found</center></p>}
      </div>
    </div>
  );
}
