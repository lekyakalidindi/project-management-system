//    "id": 0,
//       "description": "string",
//       "status": 0,
//       "projectId": 0,
//       "project": "string"

export default function AddRisk() {
  return (
    <form>
      <div className="form-group mt-2">
        <label htmlFor="addProjectName">Risk Id:</label>
        <input
          type="text"
          className="form-control"
          id="app-risk-id"
          aria-describedby="riskId"
          placeholder="Enter Risk Id"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your project details with anyone else.
        </small>
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addProjectOwner">Description:</label>
        <input
          type="text"
          className="form-control"
          id="high-level-description"
          aria-describedby="highLevelDesc"
          placeholder="Enter High Level Risk Description"
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addProjectOwner">Status</label>
        <input
          type="text"
          className="form-control"
          id="app-risk-status"
          aria-describedby="riskStatus"
          placeholder="Enter Risk Status"
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addClient">Project Id</label>
        <input
          type="text"
          className="form-control"
          id="client"
          aria-describedby="client"
          placeholder="Enter Project Id"
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addClient">Project Name</label>
        <input
          type="text"
          className="form-control"
          id="client"
          aria-describedby="client"
          placeholder="Enter Project Name"
        />
      </div>

      <br />

      <button className="btn btn-secondary mt-2">Add Risk</button>
    </form>
  );
}
