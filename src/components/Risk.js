function Risk({ risk }) {
    return (
        <li>
            <p>{risk.description}</p>
            <p>Status: {risk.status}</p>
            <p>Project: {risk.project}</p>
        </li>
    );
}

export default Risk