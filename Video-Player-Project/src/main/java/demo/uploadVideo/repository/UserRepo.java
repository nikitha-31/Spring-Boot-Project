package demo.uploadVideo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.uploadVideo.entity.User;

public interface UserRepo extends JpaRepository<User,Long>  {
	User findByEmailAndPassword(String email, String password);

}
