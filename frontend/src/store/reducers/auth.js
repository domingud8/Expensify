import {
	USER_LOADED_SUCCESS,
	USER_LOADED_FAIL,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	AUTHENTICATED_FAIL,
	AUTHENTICATED_SUCCESS,
	LOGOUT,
} from '../types'
  
const initialState = {
	access: localStorage.getItem('access'),
	refresh: localStorage.getItem('refresh'),
	isAuthenticated: localStorage.getItem('isAuthenticated'),
	user: null,
	groups: null,
	authorization: {
		groups: null,
		is_superuser: false,
	},
}
  
const auth = (state = initialState, action) => {
	const { type, payload } = action
  
	switch (type) {
	case AUTHENTICATED_SUCCESS: {
		localStorage.setItem('isAuthenticated', true)
  
		return {
			...state,
			isAuthenticated: true,
		}
	}
  
	case LOGIN_SUCCESS: {
		localStorage.setItem('access', payload.access)
  
		return {
			...state,
			isAuthenticated: true,
			loginFailed: false,
			access: payload.access,
			refresh: payload.refresh,
		}
	}
  
	case USER_LOADED_SUCCESS:
		return {
			...state,
			user: payload,
			authorization: {
				groups: payload.groups,
				is_superuser: payload.is_superuser,
			},
			groups: payload.groups,
		}
  
	case AUTHENTICATED_FAIL: {
		localStorage.setItem('isAuthenticated', false)
  
		return {
			...state,
			isAuthenticated: false,
		}
	}
  
	case USER_LOADED_FAIL:
		return {
			...state,
			user: null,
		}
	case LOGOUT:
	case LOGIN_FAIL: {
		localStorage.removeItem('access')
		localStorage.removeItem('refresh')
		localStorage.removeItem('isAuthenticated')
  
		return {
			...state,
			isAuthenticated: null,
			loginFailed: true,
  
			access: null,
			refresh: null,
			user: null,
		}
	}
	case 'USER_CREATED_SUCCESS':
		return {
			...state,
			userCreated: true,
		}
	case 'USER_CREATED_FAIL':
		return {
			...state,
			userCreated: false,
		}
  
	default:
		return state
	}
}
  
export default auth