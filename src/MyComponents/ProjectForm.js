import React, { useState } from "react";



export const ProjectForm=({ onSubmit }) =>{
    const [projectName, setProjectName] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(projectName);
      setProjectName("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
          placeholder="Project name"
        />
        <button type="submit">Create Project</button>
    </form>
  );
}
