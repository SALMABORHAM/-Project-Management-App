// import React, { useState, useEffect } from 'react';
// import api from '../api/axios';

// const ProjectList = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await api.get('/projects');
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error("Failed to fetch projects. Loading test data.", error);
//                 // Sample test data with additional fields
//                 setProjects([
//                     {
//                         id: 1,
//                         name: "Project Alpha",
//                         description: "Description for Project Alpha",
//                         start_date: "2024-01-01",
//                         end_date: "2024-06-30",
//                         budget: 10000,
//                         owner: "1",
//                         status: "Active"
//                     },
//                     {
//                         id: 2,
//                         name: "Project Beta",
//                         description: "Description for Project Beta",
//                         start_date: "2024-02-01",
//                         end_date: "2024-07-31",
//                         budget: 20000,
//                         owner: "2",
//                         status: "Active"
//                     },
//                     {
//                         id: 3,
//                         name: "Project Gamma",
//                         description: "Description for Project Gamma",
//                         start_date: "2024-03-01",
//                         end_date: "2024-08-31",
//                         budget: 15000,
//                         owner: "3",
//                         status: "Inactive"
//                     },
//                     {
//                         id: 4,
//                         name: "Project Delta",
//                         description: "Description for Project Delta",
//                         start_date: "2024-04-01",
//                         end_date: "2024-09-30",
//                         budget: 25000,
//                         owner: "4",
//                         status: "Active"
//                     },
//                     {
//                         id: 5,
//                         name: "Project Epsilon",
//                         description: "Description for Project Epsilon",
//                         start_date: "2024-05-01",
//                         end_date: "2024-10-31",
//                         budget: 30000,
//                         owner: "5",
//                         status: "Active"
//                     }
//                 ]);
//             }
//         };
//         fetchProjects();
//     }, []);

//     return (
//         <div>
//             <h1>Project List</h1>
//             {projects.length > 0 ? (
//                 projects.map(project => (
//                     <div key={project.id} className="project-card">
//                         <h2>{project.name}</h2>
//                         <p>Description: {project.description}</p>
//                         <p>Start Date: {project.start_date}</p>
//                         <p>End Date: {project.end_date}</p>
//                         <p>Budget: ${project.budget}</p>
//                         <p>Owner: {project.owner}</p>
//                         <p>Status: {project.status}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading projects...</p>
//             )}
//         </div>
//     );
// };

// export default ProjectList;


// components/ProjectList.js
import React, { useEffect, useState } from 'react';
import api from '../api/api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ projectName: '', description: '' });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await api.get('/projects');
            setProjects(response.data);
        } catch (error) {
            console.error("Failed to fetch projects", error);
        }
    };

    const createProject = async () => {
        try {
            const response = await api.post('/projects', newProject);
            setProjects([...projects, response.data]);
            setNewProject({ projectName: '', description: '' }); // Clear the form
        } catch (error) {
            console.error("Failed to create project", error);
        }
    };

    return (
        <div>
            <h1>Project List</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.projectId}>{project.projectName}</li>
                ))}
            </ul>
            <h2>Create Project</h2>
            <input
                type="text"
                placeholder="Project Name"
                value={newProject.projectName}
                onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <button onClick={createProject}>Add Project</button>
        </div>
    );
};

export default ProjectList;
