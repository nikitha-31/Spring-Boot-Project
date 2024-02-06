package demo.uploadVideo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.uploadVideo.entity.Admin;

public interface AdminRepo extends JpaRepository<Admin, Long> {
	Admin findByEmailAndPassword(String email, String password);

}
