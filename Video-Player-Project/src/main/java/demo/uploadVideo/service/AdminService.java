package demo.uploadVideo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.uploadVideo.entity.Admin;
import demo.uploadVideo.repository.AdminRepo;


@Service
public class AdminService {
	@Autowired
    private  AdminRepo adminRepository;
	 public Admin verifyAdmin(String email, String password) {
	        return adminRepository.findByEmailAndPassword(email, password);
	    }

}
