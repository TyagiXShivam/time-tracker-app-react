export const ProjectList=({ projects }) =>{
    return (
    <div>
    <h2>Projects:</h2>
    {projects.map((project) => (
    <div key={project.name}>
    <h3>{project.name}</h3>
    {project.tasks.map((task) => (
    <div key={task.name}>
    <p>Task name: {task.name}</p>
    <p>Time spent: {task.hours}</p>
    <p>Description: {task.description}</p>
    </div>
    ))}
    </div>
    ))}
    </div>
);
}
