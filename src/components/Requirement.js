import Effort from "./Effort";

function Requirement({ requirement }) {
  return (
    <li>
      <p>{requirement.description}</p>
      <p>Functional: {requirement.isFunctional.toString()}</p>

      <p>
        <b>Efforts</b>
      </p>
      <ul>
        {requirement.efforts.map((effort) => (
          <Effort key={effort.id} effort={effort} />
        ))}
      </ul>
    </li>
  );
}

export default Requirement;
