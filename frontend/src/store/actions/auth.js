import {
	USER_LOADED_SUCCESS,
	USER_LOADED_FAIL,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	AUTHENTICATED_FAIL,
	AUTHENTICATED_SUCCESS,
	LOGOUT,
	USER_CREATED_SUCCESS,
	USER_CREATED_FAIL,
} from '../types'

import axios from 'axios'

// export const API_HOST = window.__RUNTIME_CONFIG__.REACT_API_HOST
export const API_HOST = 'http://localhost:8000/api'

export const checkAuthenticated = () => async (dispatch) => {
	if (localStorage.getItem('access')) {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}

			const body = JSON.stringify({ token: localStorage.getItem('access') })

			const res = await axios.post(`${API_HOST}/token/verify/`, body, config)

			if (res.data.code !== 'token_not_valid') {
				dispatch({ type: AUTHENTICATED_SUCCESS })
			}
		} catch (err) {
			dispatch({
				type: AUTHENTICATED_FAIL,
			})
		}
	} else {
		dispatch({
			type: AUTHENTICATED_FAIL,
		})
	}
}

export const load_user = () => async (dispatch) => {
	if (localStorage.getItem('access')) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('access')}`,
				Accept: 'application/json',
			},
		}

		try {
			const res = await axios.get(`${API_HOST}/users/`, config)
			dispatch({
				type: USER_LOADED_SUCCESS,
				payload: res.data,
			})
		} catch (err) {
			dispatch({
				type: USER_LOADED_FAIL,
			})
		}
	} else {
		dispatch({
			type: USER_LOADED_FAIL,
		})
	}
}

export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const body = JSON.stringify({ email, password })

	try {
		const res = await axios.post(`${API_HOST}/token/`, body, config)
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		})

		dispatch(load_user())
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
		})
	}
}

export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT })
}

export const signup = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const body = JSON.stringify({ email, password })

	try {
		const res = await axios.post(`${API_HOST}/users/`, body, config)
		dispatch({
			type: USER_CREATED_SUCCESS,
			payload: res.data,
		})
		dispatch(login(email, password))
	} catch (err) {
		dispatch({
			type: USER_CREATED_FAIL,
		})
	}
}