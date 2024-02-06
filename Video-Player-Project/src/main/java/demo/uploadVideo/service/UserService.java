package demo.uploadVideo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.uploadVideo.entity.User;
import demo.uploadVideo.repository.UserRepo;

@Service
public class UserService {

	@Autowired
    private  UserRepo userRepository;
	public User verifyUser(String regNo, String password) {
        return userRepository.findByEmailAndPassword(regNo, password);
    }
}
