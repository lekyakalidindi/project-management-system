import Effort from "./Effort";

function Requirement({ requirement }) {
  return (
    <li>
      <p>{requirement.description}</p>
      <p>Functional: {requirement.isFunctional.toString()}</p>

      <h5>Efforts</h5>
      <ul>
        {requirement.efforts.map((effort) => (
          <Effort key={effort.id} effort={effort} />
        ))}
      </ul>
    </li>
  );
}

export default Requirement;
