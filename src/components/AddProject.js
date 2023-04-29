export default function AddProject() {
  return (
    <form>
      <div className="form-group mt-2">
        <label for="addProjectId">Project Id:</label>
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
        <label for="addProjectId">Project Name:</label>
        <input
          type="text"
          className="form-control"
          id="app-project-name"
          aria-describedby="projectName"
          placeholder="Enter Project Name"
        />
      </div>
      <div className="form-group mt-2">
        <label for="addClient">Client:</label>
        <input
          type="text"
          className="form-control"
          id="client"
          aria-describedby="client"
          placeholder="Enter Client Name"
        />
      </div>
      <button type="submit" className="btn btn-secondary mt-2">
        Add Project
      </button>
    </form>
  );
}
