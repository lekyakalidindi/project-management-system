function Effort({ effort }) {
    return (
        <li>
            <p>Date: {effort.effortDate}</p>
            <p>Requirements Analysis: {effort.requirementsAnalysisHours}</p>
            <p>Design: {effort.designHours}</p>
            <p>Coding: {effort.codingHours}</p>
            <p>Testing: {effort.testingHours}</p>
            <p>Project Management: {effort.projectManagementHours}</p>
            <p>Requirement: {effort.requirement}</p>
        </li>
    );
}

export default Effort