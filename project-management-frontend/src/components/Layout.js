// src/components/Layout.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css'; // Create a separate CSS file for Layout if needed

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management Application</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks" activeClassName="active">
                Tasks
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
