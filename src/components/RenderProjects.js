import Requirement from "./Requirement";
import TeamMember from "./TeamMember";
import Risk from "./Risk";
import { Fragment } from "react";
import Card from "./Card";
import axios from "axios";
export default function RenderProjects({ projects }) {
  return (
    <Fragment>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <div className="row">
            <Card header={`Project: ${project.projectName}`}>
              <p>ProjectId: {project.id}</p>
              <p>ProjectName: {project.projectName}</p>
              <p>Client: {project.projectClient}</p>
              <p>Owner: {project.projectOwner}</p>
              <p>Description: {project.highLevelDescription}</p>
            </Card>
            <Card header={`${project.projectName} Requirements:`}>
              <ul>
                {project.requirements.map((requirement) => (
                  <Requirement key={requirement.id} requirement={requirement} />
                ))}
              </ul>
            </Card>
          </div>

          <div className="row">
            <Card header={`${project.projectName} Team members:`}>
              <ul>
                {project.teamMembers.map((teamMember) => (
                  <TeamMember key={teamMember.id} teamMember={teamMember} />
                ))}
              </ul>
            </Card>
            <Card header={`${project.projectName} Risks:`}>
              <ul>
                {project.risks.map((risk) => (
                  <Risk key={risk.id} risk={risk} />
                ))}
              </ul>
            </Card>
          </div>

          <br />
          <hr style={{ borderTop: "3px dotted #000000" }} />
          <br />
        </Fragment>
      ))}
    </Fragment>
  );
}
