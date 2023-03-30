import React, { useState } from "react";



export const TaskForm=({ projects, onSubmit }) =>{
    const [projectId, setProjectId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskHours, setTaskHours] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(projectId, taskName, Number(taskHours), taskDescription);
        setProjectId("");
        setTaskName("");
        setTaskHours("");
        setTaskDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <select value={projectId} onChange={(event) => setProjectId(event.target.value)}>
                <option value="">Select a project</option>
                {projects.map((project) => (
                    <option key={project.name} value={project.name}>
                        {project.name}
                    </option>
                ))}
            </select>
            <input
                type="text"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                placeholder="Taskname"
            />
            <input
                type="number"
                value={taskHours}
                onChange={(event) => setTaskHours(event.target.value)}
                placeholder="Time spent on the project"
            />
            <input
                type="text"
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.target.value)}
                placeholder="Task description"
            />
            <button type="submit">Create Task</button>
        </form>
    );
}
