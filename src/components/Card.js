function Card({ header, children }) {
  return (
    <div className="col-sm">
      <div style={{ height: "300px" }} className="card">
        <div className="card-header">
          <b>{header}</b>
        </div>
        <div
          className="card-body"
          style={{ height: "auto", overflow: "scroll" }}
        >
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default Card;
