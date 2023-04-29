import { useState, useEffect, Fragment } from "react";
import RenderProjects from "./RenderProjects";
import axios from "axios";

function ViewProject() {
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState(null);

  const searchProject = (e) => {
    e.preventDefault();

    let config = {
      maxBodyLength: Infinity,
      headers: {
        accept: "text/plain",
        Cookie:
          "ARRAffinity=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f; ARRAffinitySameSite=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f",
      },
    };
    axios
      .get(`https://system5api.azurewebsites.net/${projectId}`, config)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <form>
        <div className="form-group mt-2">
          <label htmlFor="searchProjectId">Project Id:</label>
          <input
            type="text"
            className="form-control"
            id="app-project-id"
            aria-describedby="projectId"
            placeholder="Enter Project Id"
            value={projectId}
            onChange={(e) => {
              setProjectId(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            Search project with id.
          </small>
        </div>

        <button onClick={searchProject} className="btn btn-secondary mt-2">
          Search Project
        </button>
      </form>
      <br />
      <br />
      {project && <RenderProjects projects={project} />}
    </Fragment>
  );
}

export default ViewProject;
