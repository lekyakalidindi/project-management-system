export default function ReqToProject() {
  return (
    <form>
      <div class="form-group mt-2">
        <label for="addProjectId">Project Id:</label>
        <input
          type="text"
          class="form-control"
          id="app-project-id"
          aria-describedby="projectId"
          placeholder="Enter Project Id"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your project details with anyone else.
        </small>
      </div>
      <div class="form-group mt-2">
        <label for="addProjectId">Requirement Id:</label>
        <input
          type="text"
          class="form-control"
          id="add-requirement-id"
          aria-describedby="addReqId"
          placeholder="Enter Requirement Id"
        />
      </div>

      <div class="form-group mt-2">
        <label for="exampleFormControlTextarea1">
          Add Requirement Description
        </label>
        <textarea
          class="form-control"
          id="addReqDescription"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-secondary mt-2">
        Add Project
      </button>
    </form>
  );
}