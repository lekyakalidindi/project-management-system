export default function RemoveProject() {
  return (
    <form>
      <div className="form-group mt-2">
        <label for="deleteProjectId">Project Id:</label>
        <input
          type="text"
          className="form-control"
          id="delete-project-id"
          aria-describedby="projectId"
          placeholder="Enter Project Id To Remove"
        />
      </div>
      <button type="submit" className="btn btn-secondary mt-2">
        Delete Project
      </button>
    </form>
  );
}
