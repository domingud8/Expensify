import React from "react";
import NavBar from '../components/nav/NavBar';
/*
 * Main layout including header and footer
 * WIP
 */
export class MainLayout extends React.Component {
  render() {
    return (
      <div className="mainLayout min-h-screen flex flex-col justify-between">
        <NavBar links={["Home", "About", "Services", "Pricing", "Contact"]} />
        <div className="bg-red-200 text-center text-5xl font-extrabold p-12 shadow-md">
          <span className="bg-clip-text text-transparent bg-white">
            EXPENSIFY
          </span>
        </div>
      </div>
    );
  }
}
