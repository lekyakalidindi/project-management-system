import AccordionItem from "./AccordionItem";
import ReqToProject from "./ReqToProject";
import AddEffortsToProject from "./AddEffortsToProject";
function Requirements() {
  return (
    <div style={{ margin: "auto" }} className="requirements w-75 mt-5">
      <AccordionItem accHeader="Add Requirements To Project" accId="acc6">
        <ReqToProject />
      </AccordionItem>

      <AccordionItem accHeader="Add Efforts To Requirement" accId="acc7">
        <AddEffortsToProject />
      </AccordionItem>
    </div>
  );
}

export default Requirements;
