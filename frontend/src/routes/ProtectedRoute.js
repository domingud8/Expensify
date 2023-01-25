import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router'

const ProtectedRoute = ({
	isAuthenticated
}) => {
	const location = useLocation()
	if (!isAuthenticated) {
		return <Navigate to="/login" replace state={{ redirect: location }} />
	}  else {
		return <Outlet />
	}
}

export default ProtectedRoute