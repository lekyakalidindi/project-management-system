//   "id": 0,
//   "effortDate": "2023-04-29T22:02:52.155Z",
//   "requirementsAnalysisHours": 0,
//   "designHours": 0,
//   "codingHours": 0,
//   "testingHours": 0,
//   "projectManagementHours": 0,
//   "requirementId": 0,
//   "requirement": "string"

export default function AddEffortsToProject() {
  return (
    <form>
      <div className="form-group mt-2">
        <label htmlFor="addProjectName">Effort Id:</label>
        <input
          type="text"
          className="form-control"
          id="effort-id"
          aria-describedby="effortId"
          placeholder="Enter Effort Id"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="addProjectOwner">Requirement Analysis Hours</label>
        <input
          type="text"
          className="form-control"
          id="app-project-owner"
          aria-describedby="projectOwner"
          placeholder="Requirement Analysis Hours"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="addClient">Design Hours:</label>
        <input
          type="text"
          className="form-control"
          id="client"
          aria-describedby="client"
          placeholder="Enter Design Hours"
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addProjectOwner">Enter Code Hours:</label>
        <input
          type="text"
          className="form-control"
          id="high-level-description"
          aria-describedby="highLevelDesc"
          placeholder="Enter Code Hours"
        />
      </div>

      <br />

      <button className="btn btn-secondary mt-2">Add Efforts To Project</button>
    </form>
  );
}
