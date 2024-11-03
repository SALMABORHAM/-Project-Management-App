// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
// import Dashboard from './components/Dashboard'; // Import your Dashboard component
// import ProjectList from './components/ProjectList'; // Import your ProjectList component
// import TaskList from './components/TaskList'; // Import your TaskList component
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Project Management Application</h1>
//           <nav>
//             <ul>
//               <li>
//                 <a href="/">Dashboard</a>
//               </li>
//               <li>
//                 <a href="/projects">Projects</a>
//               </li>
//               <li>
//                 <a href="/tasks">Tasks</a>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Routes> {/* Use Routes here instead of Switch */}
//             <Route path="/" element={<Dashboard />} /> {/* Dashboard route */}
//             <Route path="/projects" element={<ProjectList />} /> {/* Projects route */}
//             <Route path="/tasks" element={<TaskList />} /> {/* Tasks route */}
//             {/* You can add more routes here as needed */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Link for client-side routing
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Project Management Application</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/tasks" className="nav-link">Tasks</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Project Management System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
