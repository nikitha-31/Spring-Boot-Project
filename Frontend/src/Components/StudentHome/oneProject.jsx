import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProjectStyles.css'; // Your CSS file for project details styling

const OneProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [recordNotFound, setRecordNotFound] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    axios.get(`http://localhost:8080/student/${id}`)
      .then(response => {
        console.log('Project data:', response.data);
        if (!response.data) {
          setRecordNotFound(true);
        }
        setProject(response.data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
        setRecordNotFound(true);
      });
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (recordNotFound) {
    return (
      <div className="form-container">
        <p>Record not available</p>
      </div>
    );
  }

  return (
    <div className="project-details">
      {project ? (
        <div>
          <center><h2>Project Details</h2></center>
          <p><strong>Project Name: </strong> {project.projectName}</p>
          <hr/>
          <p><strong>Technologies Used: </strong> {project.technologiesUsed}</p>
          <hr/>
          <p><strong>Project Description: </strong> {project.projectDescription}</p>
          <hr/>
          <div className="back-button">
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OneProject;
