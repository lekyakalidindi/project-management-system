import ViewAllProjects from "./ViewAllProjects";
import ViewProject from "./ViewProject";
import AccordionItem from "./AccordionItem";
import AddProject from "./AddProject";
import RemoveProject from "./RemoveProject";
function Project() {
  return (
    <div style={{ margin: "auto" }} className="project w-75 mt-5">
      <AccordionItem accId="acc1" accHeader="Add Project">
        <AddProject />
      </AccordionItem>

      <AccordionItem accId="acc2" accHeader="Remove Project">
        <RemoveProject />
      </AccordionItem>

      <AccordionItem accId="acc3" accHeader="Display Project">
        <ViewProject />
      </AccordionItem>

      <AccordionItem accId="acc4" accHeader="Display All Projects">
        <ViewAllProjects />
      </AccordionItem>

      <AccordionItem accId="acc5" accHeader="Add Risk To Project">
        Has to be implemented
      </AccordionItem>
    </div>
  );
}

export default Project;
