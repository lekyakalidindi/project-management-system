export default function RemoveProject() {
  return (
    <form>
      <div class="form-group mt-2">
        <label for="deleteProjectId">Project Id:</label>
        <input
          type="text"
          class="form-control"
          id="delete-project-id"
          aria-describedby="projectId"
          placeholder="Enter Project Id To Remove"
        />
      </div>
      <button type="submit" class="btn btn-secondary mt-2">
        Delete Project
      </button>
    </form>
  );
}
