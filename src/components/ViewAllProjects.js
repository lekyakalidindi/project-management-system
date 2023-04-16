function ViewAllProjects() {
  return (
    <div>
      <table class="table">
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
          <tr>
            <th scope="row">2</th>
            <td>VMB</td>
            <td>Verizon</td>
            <td>Verizon Messaging Bus</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllProjects;
