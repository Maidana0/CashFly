package com.nocountry.apirest.service;

import java.util.List;

import com.nocountry.apirest.DTO.UserSummaryDTO;
import com.nocountry.apirest.exception.InvalidUserDataException;
import com.nocountry.apirest.exception.UserNotFoundException;
import com.nocountry.apirest.model.User;

public interface IUserService {
	public List<User> getUsers();

	public User saveUser(User u) throws InvalidUserDataException;

    public void editUser(int id, User u) throws UserNotFoundException;

    public void deleteUser(int id) throws UserNotFoundException;

    public User findUser(int id) throws UserNotFoundException;

    User autenticarUsuario(User user);

    public boolean validateEmailAndDni(String email, String dni);

    UserSummaryDTO getUserWithLoansAndInvestments(int userId);
}
