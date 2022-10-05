package com.mybootapp.flight.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Passenger {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String contact;
	private String email;
	private String flightName;
	private String source;
	private String destination;
	private String depDate;
	private String depTime;
	private String arvDate;
	private String arvTime;
	private Long adult;
	private Long child;
	private double price;

	public Passenger(Long id, String name, String contact, String email, String flightName, String source,
			String destination, String depDate, String depTime, String arvDate, String arvTime, Long adult, Long child,
			double price) {
		super();
		this.id = id;
		this.name = name;
		this.contact = contact;
		this.email = email;
		this.flightName = flightName;
		this.source = source;
		this.destination = destination;
		this.depDate = depDate;
		this.depTime = depTime;
		this.arvDate = arvDate;
		this.arvTime = arvTime;
		this.adult = adult;
		this.child = child;
		this.price = price;
	}

	public Passenger() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDepDate() {
		return depDate;
	}

	public void setDepDate(String depDate) {
		this.depDate = depDate;
	}

	public String getDepTime() {
		return depTime;
	}

	public void setDepTime(String depTime) {
		this.depTime = depTime;
	}

	public String getArvDate() {
		return arvDate;
	}

	public void setArvDate(String arvDate) {
		this.arvDate = arvDate;
	}

	public String getArvTime() {
		return arvTime;
	}

	public void setArvTime(String arvTime) {
		this.arvTime = arvTime;
	}

	public Long getAdult() {
		return adult;
	}

	public void setAdult(Long adult) {
		this.adult = adult;
	}

	public Long getChild() {
		return child;
	}

	public void setChild(Long child) {
		this.child = child;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Passenger [id=" + id + ", name=" + name + ", contact=" + contact + ", email=" + email + ", flightName="
				+ flightName + ", source=" + source + ", destination=" + destination + ", depDate=" + depDate
				+ ", depTime=" + depTime + ", arvDate=" + arvDate + ", arvTime=" + arvTime + ", adult=" + adult
				+ ", child=" + child + ", price=" + price + "]";
	}

}
