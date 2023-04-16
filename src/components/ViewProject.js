function ViewProject() {
  return (
    <div className="w-100">
      <form>
        <div class="form-group mt-2">
          <label for="projectName">Project Name</label>
          <input
            type="text"
            class="form-control"
            id="project-name"
            aria-describedby="project-name"
            placeholder="Enter Project Name"
          />
        </div>
        <button type="submit" class="btn btn-secondary mt-2">
          Search Project
        </button>
      </form>
      <table class="table mt-4">
        <thead class="thead bg-dark text-white">
          <tr>
            <th scope="col">Project Id</th>
            <th scope="col">Project Name</th>
            <th scope="col">Client</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>VSON</td>
            <td>Verizon</td>
            <td>Verizon Self Switching Oriented Network</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewProject;
