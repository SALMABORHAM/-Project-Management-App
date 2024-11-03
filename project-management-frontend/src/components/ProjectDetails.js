import React, { useState, useEffect } from 'react';
import api from '../api/api'; // Your API setup file
import TaskList from './TaskList'; // Import TaskList

const ProjectDetails = ({ projectId }) => {
    const [tasks, setTasks] = useState([]); // State to hold tasks

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get(`/projects/${projectId}/tasks`); // Fetch tasks for the specific project
                setTasks(response.data); // Set tasks in state
            } catch (error) {
                console.error('Error fetching tasks:', error); // Log any errors
            }
        };
        fetchTasks();
    }, [projectId]); // Fetch tasks whenever projectId changes

    return (
        <div>
            <h1>Project Details</h1>
            {/* Render the TaskList component and pass tasks as props */}
            <TaskList tasks={tasks} />
        </div>
    );
};

export default ProjectDetails;
