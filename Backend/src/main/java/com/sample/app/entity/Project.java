package com.sample.app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="projectTable")
public class Project {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column(name="projectName")
	private String projectName;
	@Column(name="technologiesUsed")
	private String technologiesUsed;
	@Column(name="projectDescription",length = 100000)
	private String projectDescription;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getTechnologiesUsed() {
		return technologiesUsed;
	}
	public void setTechnologiesUsed(String technologiesUsed) {
		this.technologiesUsed = technologiesUsed;
	}
	public String getProjectDescription() {
		return projectDescription;
	}
	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}
	
}