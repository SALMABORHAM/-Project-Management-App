import React, { useEffect, useState } from 'react';
import api from '../api/api'; // Adjust the import based on your API setup

const Dashboard = () => {
    const [projects, setProjects] = useState([]); // State to hold project data
    const [tasks, setTasks] = useState([]); // State to hold task data
    const [totalTasks, setTotalTasks] = useState(0); // Total tasks
    const [overdueTasks, setOverdueTasks] = useState(0); // Overdue tasks count

    useEffect(() => {
        const fetchProjectsAndTasks = async () => {
            try {
                const projectsResponse = await api.get('/projects'); // Fetch projects
                const tasksResponse = await api.get('/tasks'); // Fetch tasks
                
                setProjects(projectsResponse.data);
                setTasks(tasksResponse.data);

                // Calculate total tasks and overdue tasks
                const total = tasksResponse.data.length;
                const overdueCount = tasksResponse.data.filter(task => 
                    new Date(task.endDate) < new Date() && task.status !== 'Completed'
                ).length;

                setTotalTasks(total);
                setOverdueTasks(overdueCount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjectsAndTasks();
    }, []); // Fetch data once on mount

    return (
        <div>
            <h2>Project Statistics</h2>
            <div>
                <p>Total Projects: {projects.length}</p>
                <p>Total Tasks: {totalTasks}</p>
                <p>Overdue Tasks: {overdueTasks}</p>
            </div>
           {/* Render task details (optional) */}
           <h3>Task Details</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name} - Status: {task.status} - End Date: {new Date(task.endDate).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Dashboard;
