import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: { user },
		success,
		error
	});
};

export const signup = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: { user },
		success,
		error
	});
};

export const logout = () => {
	$.ajax({
		method: 'DELETE',
		url: '/api/session',
    succress: () => {
      console.log("Successfully logged out");
    }
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};
