package com.nocountry.apirest.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "archivos")
public class File implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "archivo_id")
	private int id;
	
	@Column(name = "archivo_nombre")
	private String name;
	
	@Column(name = "archivo_url")
	private String url;
	
	@Column(name = "archivo_public_id")
	private String fileId;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="usuario_id")
	private User user;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="prestamo_id")
	private Loan loan;
	
}
