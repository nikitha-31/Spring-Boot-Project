import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateProjectStyles.css';

const UpdateProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projectData, setProjectData] = useState({
    projectName: '',
    technologiesUsed: '',
    projectDescription: '',
  });
  const [originalProjectData, setOriginalProjectData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/projects/${id}`)
      .then(response => {
        setProjectData(response.data);
        setOriginalProjectData(response.data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleBack = () => {
    setProjectData(originalProjectData);
    navigate(-1); // Navigate back to the previous page
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/admin/update/project/${id}`, projectData)
      .then(response => {
        console.log('Project updated:', response.data);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          navigate('/admin/dashboard');
        }, 3000);
      })
      .catch(error => {
        console.error('Error updating project: ', error);
      });
  };

  return (
    <div>
      <center><h2>Update Project</h2></center>
      {updateSuccess && <p className="success-message">Project Updated Successfully!</p>}
      <form className="form-container" onSubmit={handleUpdate}>
        <label>
          Project Name:
          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange}
          />
        </label>
        <label>
          Technologies Used:
          <input
            type="text"
            name="technologiesUsed"
            value={projectData.technologiesUsed}
            onChange={handleChange}
          />
        </label>
        <label>
          Project Description:
          <textarea
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={handleChange}
          ></textarea>
        </label>
        <center>
          <button type="submit">Update Project</button>
          
        </center>
        <div className="back-button">
            <button type="button" onClick={handleBack}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProject;
