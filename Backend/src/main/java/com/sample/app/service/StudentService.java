package com.sample.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.app.entity.Project;
import com.sample.app.entity.Student;
import com.sample.app.repository.ProjectRepository;
import com.sample.app.repository.StudentRepository;

@Service
public class StudentService {
	@Autowired
    private  ProjectRepository projectRepository;
	@Autowired
    private  StudentRepository studentRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
    
    public Project getProjectById(Long id) {
        Optional<Project> optionalproject = projectRepository.findById(id);
        return optionalproject.orElse(null);
    }

    public Student registerStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student verifyStudent(String regNo, String password) {
        return studentRepository.findByRegNoAndPassword(regNo, password);
    }
}

