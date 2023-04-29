import AccordionItem from "./AccordionItem";
import AddTeamMembers from "./AddTeamMembers";
function Resources() {
  return (
    <div style={{ margin: "auto" }} className="project w-75 mt-5">
      <AccordionItem accId="acc8" accHeader="Add Team Members To Project">
        <AddTeamMembers />
      </AccordionItem>
    </div>
  );
}

export default Resources;
