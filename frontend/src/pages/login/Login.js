import React from "react";
import { signup, login, checkAuthenticated, load_user } from "../../store/actions/auth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import Logo from "../../assets/icons/watermelon.png";

const Login = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loginFailed = useSelector((state) => state.auth.loginFailed);
  const redirect = useLocation().state?.redirect;

  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setLoginError(false);
    setRegisterError(false)
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.email);
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  
  const onRegisterSubmit = (e) => {
    e.preventDefault()
		dispatch(signup(email, password))
  };

  useEffect(() => {
    dispatch(checkAuthenticated());
    dispatch(load_user());
  });

  useEffect(() => {
    if (loginFailed) {
      setLoginError(true);
      setFormData({
        email: "",
        password: "",
      });
    }
  }, [loginFailed]);

  if (isAuthenticated === true) {
    return <Navigate to={redirect ? redirect : "/"} />;
  }

  return (
    <>
      <div className="flex bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 h-screen">
        <div className="m-auto">
          {/* <div className="flex justify-center">
            <img className="animate-bounce h-80" src={Logo} alt="" />
          </div> */}

          <div className="container flex flex-nowrap gap-12 justify-around">
            <div className="max-w-[80%] flex flex-col justify-center">
              <div className="text-center text-5xl font-extrabold">
                <div className="bg-clip-text text-transparent bg-white pb-4">
                  Welcome to Expensify
                </div>
              </div>
              <p className="text-center bg-clip-text text-transparent bg-white">
                Your all in one expense tracker. Track your expenses, create
                budgets, and manage your money.
              </p>
            </div>
            <div className="loginInputs flex flex-col gap-4 min-w-[50%]">
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-semibold text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`bg-transparent border border-${
                    loginError ? "red-600" : "white"
                  } rounded-lg p-3 text-sm mb-4`}
                  type="text"
                  name="email"
                  id="email"
                  onChange={onChange}
                />
                <div className="flex flex-col gap-1">
                  <label
                    className="text-sm font-semibold text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={`bg-transparent border border-${
                      loginError ? "red-600" : "white"
                    } rounded-lg p-3 text-sm mb-4`}
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                  />
                  <div className = "flex justify-evenly">
                    <Button className="!bg-red-400 w-1/4" onClick={onLoginSubmit}>
                      Login
                    </Button>
                    {loginError && <div className="text-red-600">Login failed</div>}
                    <Button className="!bg-red-400 w-1/4" onClick={onRegisterSubmit}>
                      Register
                    </Button>
                    {registerError && (
                      <div className="text-red-600">Registration failed</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
