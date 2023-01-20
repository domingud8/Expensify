import React from 'react'
import { login, checkAuthenticated, load_user } from '../../store/actions/auth'
import { Navigate } from 'react-router-dom'
import {useLocation} from 'react-router'
import { useDispatch, useSelector,  } from 'react-redux'
import { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'

const Login = () => {

	const dispatch = useDispatch()

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const loginFailed = useSelector((state) => state.auth.loginFailed)
	const redirect = useLocation().state?.redirect

	const [error, setError] = useState(false)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const onChange = (e) => {
		setError(false)
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(e.target.email)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			dispatch(login(email, password))
		}
	}

	useEffect(() => {
		dispatch(checkAuthenticated())
		dispatch(load_user())
	}, )

	useEffect(() => {
		if (loginFailed) {
			setError(true)
			setFormData({
				email: '',
				password: '',
			})
		}
	}, [loginFailed])

	if (isAuthenticated === true) {
		return <Navigate to={redirect ? redirect : '/'} />
	}
    
	return (
		<div className="loginContainer shadow-card p-6 rounded flex flex-col gap-4 bg-white h-full">
			<h2 className="text-center font-semibold text-2xl">Login</h2>
			<div className="loginInputs flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<label className="text-sm font-semibold" htmlFor="email">Email</label>
					<input 
						className={`bg-transparent border border-${error ? 'red-600' : 'gray-400'} rounded-sm p-3 text-sm`}
						type="text" 
						name="email"
						id="email"
						onChange={onChange}
						// onKeyDown={handleKeyDown}
						// value={email}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="text-sm font-semibold" htmlFor="password">Password</label>
					<input 
						className={`bg-transparent border border-${error ? 'red-600' : 'gray-400'} rounded-sm p-3 text-sm`}
						type="password" 
						name="password"
						id="password"
						onChange={onChange}
						onKeyDown={handleKeyDown}
						// value={password}
					/>
				</div>
				<Button onClick={onSubmit}>Login</Button>
				{error && (
					<div className="text-red-600">Login failed</div>
				)}
			</div>
            
		</div>
	)
}

export default Login