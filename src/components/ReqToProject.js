export default function ReqToProject() {
  // "id": 0,
  //     "description": "string",
  //     "isFunctional": true,
  //     "projectId": 0,
  //     "project": "string",

  return (
    <form>
      <div className="form-group mt-2">
        <label htmlFor="addProjectId">Project Id:</label>
        <input
          type="text"
          className="form-control"
          id="app-project-id"
          aria-describedby="projectId"
          placeholder="Enter Project Id"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your project details with anyone else.
        </small>
      </div>

      <div className="form-group mt-2">
        <label htmlFor="addProjectName">Project Name:</label>
        <input
          type="text"
          className="form-control"
          id="app-project-name"
          aria-describedby="projectName"
          placeholder="Enter Project Name"
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckCheckedDisabled"
          checked
        />
        <label class="form-check-label" for="flexCheckCheckedDisabled">
          isFunctional:
        </label>
      </div>

      <div className="form-group mt-2">
        <label htmlFor="exampleFormControlTextarea1">
          Add Requirement Description
        </label>
        <textarea
          className="form-control"
          id="addReqDescription"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-secondary mt-2">
        Add Project
      </button>
    </form>
  );
}
