// import React from 'react';
// import { getUserRole } from '../utils/getUserRole'; // Utility to get user role

// const Task = ({ task }) => {
//     // Check if the task is overdue
//     const isOverdue = new Date(task.endDate) < new Date() && task.status !== 'Completed';

//     return (
//         <div style={{ color: isOverdue ? 'red' : 'black' }}>
//             <h3>{task.name}</h3>
//             <p>Status: {task.status}</p>
//             <p>End Date: {new Date(task.endDate).toLocaleDateString()}</p>
//             {/* Additional task information can be displayed here */}
//         </div>
//     );
// };

// const TaskList = ({ tasks }) => {
//     const userRole = getUserRole(); // Get the user role

//     const handleDeleteTask = (taskId) => {
//         // Implement the delete task functionality here
//         console.log(`Deleting task with ID: ${taskId}`);
//     };

//     const handleUpdateTask = (taskId) => {
//         // Implement the update task functionality here
//         console.log(`Updating task with ID: ${taskId}`);
//     };

//     return (
//         <div>
//             <h2>Task List</h2>
//             {tasks.length === 0 ? (
//                 <p>No tasks available.</p>
//             ) : (
//                 tasks.map(task => (
//                     <div key={task.id} style={{ marginBottom: '20px' }}>
//                         <Task task={task} />
//                         {/* Only Managers can delete tasks */}
//                         {userRole === 'Manager' && (
//                             <button onClick={() => handleDeleteTask(task.id)}>
//                                 Delete Task
//                             </button>
//                         )}
//                         {/* Employees and Managers can update tasks */}
//                         {userRole && (
//                             <button onClick={() => handleUpdateTask(task.id)}>
//                                 Update Task
//                             </button>
//                         )}
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default TaskList;


import React from 'react';
import { getUserRole } from '../utils/getUserRole';

const Task = ({ task }) => {
    const isOverdue = new Date(task.endDate) < new Date() && task.status !== 'Completed';

    return (
        <div style={{ color: isOverdue ? 'red' : 'black', borderBottom: '1px solid #ccc', padding: '10px' }}>
            <h3>{task.name}</h3>
            <p>Status: {task.status}</p>
            <p>End Date: {new Date(task.endDate).toLocaleDateString()}</p>
        </div>
    );
};

const TaskList = () => {
    const userRole = getUserRole(); // Get the user role

    // Mock tasks for testing
    const tasks = [
        { id: 1, name: "Design Database", status: "Pending", endDate: "2024-11-15" },
        { id: 2, name: "Develop API", status: "In Progress", endDate: "2024-11-20" },
        { id: 3, name: "Frontend Development", status: "Completed", endDate: "2024-10-30" },
        { id: 4, name: "User Testing", status: "Pending", endDate: "2024-11-25" },
        { id: 5, name: "Deployment", status: "Pending", endDate: "2024-11-27" }
    ];

    const handleDeleteTask = (taskId) => {
        console.log(`Deleting task with ID: ${taskId}`);
    };

    const handleUpdateTask = (taskId) => {
        console.log(`Updating task with ID: ${taskId}`);
    };

    return (
        <div>
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                tasks.map(task => (
                    <div key={task.id} style={{ marginBottom: '20px' }}>
                        <Task task={task} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {userRole === 'Manager' && (
                                <button onClick={() => handleDeleteTask(task.id)} style={{ color: 'red' }}>
                                    Delete Task
                                </button>
                            )}
                            <button onClick={() => handleUpdateTask(task.id)}>
                                Update Task
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskList;
