function TeamMember({ teamMember }) {
    return (
        <li>
            <p>Name: {teamMember.name}</p>
            <p>Role: {teamMember.role}</p>
            <p>Project: {teamMember.project}</p>
        </li>
    );
}

export default TeamMember