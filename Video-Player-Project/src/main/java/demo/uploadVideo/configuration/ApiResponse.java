package demo.uploadVideo.configuration;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiResponse {

private String messege ;
private boolean status ;
public String getMessege() {
	return messege;
}
public void setMessege(String messege) {
	this.messege = messege;
}
public boolean isStatus() {
	return status;
}
public void setStatus(boolean status) {
	this.status = status;
}
public ApiResponse(String messege, boolean status) {
	super();
	this.messege = messege;
	this.status = status;
}
public ApiResponse() {
	super();
}

}
