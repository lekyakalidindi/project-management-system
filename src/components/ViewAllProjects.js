import { useState, useEffect, Fragment } from "react";
import RenderProjects from "./RenderProjects";
import axios from "axios";

function ViewAllProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let config = {
      maxBodyLength: Infinity,
      headers: {
        accept: "text/plain",
        Cookie:
          "ARRAffinity=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f; ARRAffinitySameSite=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f",
      },
    };
    axios
      .get("https://system5api.azurewebsites.net/", config)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      {projects.length ? (
        <RenderProjects projects={projects} />
      ) : (
        <div>Something went wrong while fetching Projects!!</div>
      )}
    </Fragment>
  );
}

export default ViewAllProjects;
