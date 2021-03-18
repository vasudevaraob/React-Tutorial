package com.springboot.api.exception;

import java.util.Date;

public class ErrorDetails {
	
	private String message;
	private String details;
	private Date timestamp;
	public ErrorDetails(String message, String details, Date timestamp) {
		super();
		this.message = message;
		this.details = details;
		this.timestamp = timestamp;
	}
	public String getMessage() {
		return message;
	}
	public String getDetails() {
		return details;
	}
	public Date getTimestamp() {
		return timestamp;
	}
	
}
