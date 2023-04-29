import { useState } from "react";
import axios from "axios";

export default function RemoveProject({ setRemId }) {
  const [projectId, setProject] = useState(null);
  const delProject = (e) => {
    e.preventDefault();
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://system5api.azurewebsites.net/${projectId}`,
      headers: {
        accept: "*/*",
        Cookie:
          "ARRAffinity=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f; ARRAffinitySameSite=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setRemId(projectId);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form>
      <div className="form-group mt-2">
        <label htmlFor="deleteProjectId">Project Id:</label>
        <input
          type="text"
          className="form-control"
          id="delete-project-id"
          aria-describedby="projectId"
          placeholder="Enter Project Id To Remove"
          value={projectId}
          onChange={(e) => {
            setProject(e.target.value);
          }}
        />
      </div>
      <button onClick={delProject} className="btn btn-secondary mt-2">
        Delete Project
      </button>
    </form>
  );
}
