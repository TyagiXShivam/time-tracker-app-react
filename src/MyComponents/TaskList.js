export  const TaskList=({ tasks }) =>{
    return (
    <div>
    <h2>Tasks:</h2>
    {tasks.map((task) => (
    <div key={task.name}>
    <p>Task name: {task.name}</p>
    <p>Time spent: {task.hours}</p>
    <p>Description: {task.description}</p>
    </div>
    ))}
    </div>
    );
    }