package demo.uploadVideo.exception;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@NoArgsConstructor
@Setter @Getter
@AllArgsConstructor
public class ResourceNotFound  extends RuntimeException  {
	
	
	private static final long serialVersionUID = 1L;
	private String errorCode ;
	private String errorMessage ;
	
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public ResourceNotFound(String errorCode, String errorMessage) {
		super();
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}
	public ResourceNotFound() {
		super();
	}
	
	
	

	

}
