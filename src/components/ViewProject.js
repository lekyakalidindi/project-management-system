import { useState, useEffect } from "react";
import RenderProjects from "./RenderProjects";
const projects = require("./project.json");

function ViewProject() {
  // const [project, setProjects] = useState([]);

  useEffect(() => {
    // console.log(axios, "axios");
    // axios.get();
    // const axios = require("axios");
    // let config = {
    //   maxBodyLength: Infinity,
    //   headers: {
    //     accept: "text/plain",
    //     Cookie:
    //       "ARRAffinity=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f; ARRAffinitySameSite=92ca53ad8db4fbb93d4d3b7d8ab54dcf8ffecb2d731f25b0e91ad575d7534c3f",
    //   },
    // };
    // axios
    //   .get("https://system5api.azurewebsites.net/", config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data), "<----- data");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  return <RenderProjects projects={projects} />;
}

export default ViewProject;
