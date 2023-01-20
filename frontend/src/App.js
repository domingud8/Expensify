import React, { useEffect } from 'react'
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./pages/signup/Signup"
import ProtectedRoute from './routes/ProtectedRoute'
import { checkAuthenticated, load_user } from './store/actions/auth'
import { MainLayout } from './layouts/MainLayout'

function App() {
  const dispatch = useDispatch()
	const user = useSelector((state) => state.auth.user)
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
		dispatch(checkAuthenticated())
		dispatch(load_user())
	}, [])
  return (
    // <div>
    //   <NavBar links={['Home', 'About', 'Services', 'Pricing', 'Contact']}/>
    //     <div className="bg-red-200 text-center text-5xl font-extrabold p-12 shadow-md">
    //       <span className="bg-clip-text text-transparent bg-white">

    //         EXPENSIFY
    //       </span>
    //     </div>
    //  </div>
    // <Home />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} />}>
          <Route element={<MainLayout />} >
            <Route path="" element={<Home />} />
          </Route>
        </Route>
        {/* <SignUp /> */}
      </Routes>
    </Router>
  );
}

export default App;
