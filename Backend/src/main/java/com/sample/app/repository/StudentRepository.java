package com.sample.app.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.app.entity.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {

	Student findByRegNoAndPassword(String regNo, String password);
    
}
