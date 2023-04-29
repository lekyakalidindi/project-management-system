function Card({ header, children }) {
  return (
    <div class="col-sm">
      <div style={{ height: "300px" }} class="card">
        <div class="card-header">{header}</div>
        <div class="card-body" style={{ height: "auto", overflow: "scroll" }}>
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default Card;
