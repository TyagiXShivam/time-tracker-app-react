import React, { useState } from "react";
import { ProjectForm } from "./MyComponents/ProjectForm";
import { ProjectList } from "./MyComponents/ProjectList";
import { TaskForm } from "./MyComponents/TaskForm";
import { TaskList } from "./MyComponents/TaskList";
import { TotalHours } from "./MyComponents/TotalHours";
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [dailyHours, setDailyHours] = useState(0);

  const handleProjectSubmit = (projectName) => {
    setProjects([...projects, { name: projectName, tasks: [] }]);
  };

  const handleTaskSubmit = (projectId, taskName, taskHours, taskDescription) => {
    const newTask = { name: taskName, hours: taskHours, description: taskDescription };
    const projectIndex = projects.findIndex((project) => project.name === projectId);
    const project = projects[projectIndex];
    project.tasks = [...project.tasks, newTask];
    const updatedProjects = [...projects];
    updatedProjects[projectIndex] = project;
    setProjects(updatedProjects);
    setTasks([...tasks, newTask]);
    setDailyHours(dailyHours + taskHours);
  };

  return (
    <>
    <div>
      <ProjectForm onSubmit={handleProjectSubmit} />
      <TaskForm projects={projects} onSubmit={handleTaskSubmit} />
      <TotalHours dailyHours={dailyHours} />
      <ProjectList projects={projects} />
      <TaskList tasks={tasks} />
    </div>
    </>
  );
}
export default App;