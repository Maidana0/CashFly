package com.nocountry.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.apirest.model.Loan;

@Repository
public interface ILoanRepository extends JpaRepository<Loan, Integer> {
	
}
