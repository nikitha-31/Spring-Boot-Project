package demo.uploadVideo.configuration;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class FileModel {
	
	
	private String videoFileName ;
	private Double duration ;
	public String getVideoFileName() {
		return videoFileName;
	}
	public void setVideoFileName(String videoFileName) {
		this.videoFileName = videoFileName;
	}
	public Double getDuration() {
		return duration;
	}
	public void setDuration(Double duration) {
		this.duration = duration;
	}
	

}
