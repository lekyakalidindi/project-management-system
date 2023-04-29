import { useState } from "react";
import axios from "axios";

export default function AddProject() {
  const [projectName, setProjectName] = useState("");
  const [projectOwner, setProjectOwner] = useState("");
  const [projectClient, setClient] = useState("");
  const [desc, setDesc] = useState("");

  const addProject = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      id: 0,
      projectName,
      projectClient,
      projectOwner,
      highLevelDescription: desc,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://system5api.azurewebsites.net/",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Cookie:
          "ARRAffinity=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f; ARRAffinitySameSite=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form>
      <div className="form-group mt-2">
        <label htmlFor="addProjectName">Project Name:</label>
        <input
          type="text"
          className="form-control"
          id="app-project-name"
          aria-describedby="projectName"
          placeholder="Enter Project Name"
          onChange={(e) => setProjectName(e.target.value)}
          value={projectName}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your project details with anyone else.
        </small>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="addProjectOwner">Project Owner:</label>
        <input
          type="text"
          className="form-control"
          id="app-project-owner"
          aria-describedby="projectOwner"
          placeholder="Enter Project Owner Name"
          onChange={(e) => setProjectOwner(e.target.value)}
          value={projectOwner}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="addClient">Client:</label>
        <input
          type="text"
          className="form-control"
          id="client"
          aria-describedby="client"
          placeholder="Enter Client Name"
          onChange={(e) => setClient(e.target.value)}
          value={projectClient}
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addProjectOwner">High Level Description:</label>
        <input
          type="text"
          className="form-control"
          id="high-level-description"
          aria-describedby="highLevelDesc"
          placeholder="Enter High Level Project Description"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </div>

      <br />

      <button onClick={addProject} className="btn btn-secondary mt-2">
        Add Project
      </button>
    </form>
  );
}
