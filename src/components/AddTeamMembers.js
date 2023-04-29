import { useState, Fragment } from "react";

// "id": 0,
// "projectId": 0,
// "name": "string",
// "role": "string",
// "project": "string"

export default function AddTeamMembers() {
  const [projectId, setProjectId] = useState("");
  const [teammateId, setTeammateId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [project, setProject] = useState("");

  const addTeamMembers = () => {
    // const payload = {
    //   projectId,
    //   teamMembers: [
    //     {
    //       name,
    //       role,
    //       project,
    //     },
    //   ],
    // };
  };
  return (
    <Fragment>
      <form>
        <div className="form-group mt-2">
          <label htmlFor="addProjectId">Project Id:</label>
          <input
            type="text"
            className="form-control"
            id="app-project-id"
            aria-describedby="projectId"
            placeholder="Enter Project Id"
            onChange={(e) => setProjectId(e.target.value)}
            value={projectId}
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="addTeammateid">Teammate Id:</label>
          <input
            type="text"
            className="form-control"
            id="team-mate-id"
            aria-describedby="teammateId"
            placeholder="Enter Teammate Id"
            onChange={(e) => setTeammateId(e.target.value)}
            value={teammateId}
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="addTeammateid">Name</label>
          <input
            type="text"
            className="form-control"
            id="team-mate-id"
            aria-describedby="teammateName"
            placeholder="Enter Teammate Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="addTeammateid">Role</label>
          <input
            type="text"
            className="form-control"
            id="team-mate-role"
            aria-describedby="teammateRole"
            placeholder="Enter Teammate Role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="addTeammateid">Project:</label>
          <input
            type="text"
            className="form-control"
            id="app-project-name"
            aria-describedby="projectName"
            placeholder="Enter Project Name"
            onChange={(e) => setProject(e.target.value)}
            value={project}
          />
        </div>

        <br />

        <button onClick={addTeamMembers} className="btn btn-secondary mt-2">
          Add Teammate
        </button>
      </form>
    </Fragment>
  );
}
