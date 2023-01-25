import React from 'react'
import Logo from "../../assets/icons/watermelon.png"
const Home = () => {
  return (
    <div className="flex bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 h-screen">
      <div className="m-auto">
        <div className="flex justify-center">
          <img className="animate-bounce h-80" src={Logo} alt="" />
        </div>

        <div className="container flex flex-nowrap gap-12 justify-around">
          <div className="max-w-[80%]">
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
          
        </div>
        <div className="flex justify-center">
          </div>
      </div>
    </div>
  );
}
export default Home;

