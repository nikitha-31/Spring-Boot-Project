package com.sample.app.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.app.entity.Admin;
import com.sample.app.entity.Project;
import com.sample.app.repository.AdminRepository;
import com.sample.app.repository.ProjectRepository;

@Service
public class AdminService {
	@Autowired
    private  AdminRepository adminRepository;
	@Autowired
    private  ProjectRepository projectRepository;

    public Project addProject(Project project) {
                return projectRepository.save(project);
    }
    public void deleteProject(Long id) {
        Optional<Project> projectOptional = projectRepository.findById(id);
        
        if (projectOptional.isPresent()) {
            projectRepository.deleteById(id);
        } else {
            throw new NoSuchElementException("No project found with the provided ID: " + id);
        }
    }
    public Project updateProjectById(Long id, Project updatedProject) {
        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Project not found with ID: " + id));

        existingProject.setProjectName(updatedProject.getProjectName());
        existingProject.setTechnologiesUsed(updatedProject.getTechnologiesUsed());
        existingProject.setProjectDescription(updatedProject.getProjectDescription());

        return projectRepository.save(existingProject);
    }
   public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
   public Admin registerAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

   public Admin verifyAdmin(String email, String password) {
        return adminRepository.findByEmailAndPassword(email, password);
    }
   

    
    
}
