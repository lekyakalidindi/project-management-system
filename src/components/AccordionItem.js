function AccordionItem(props) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.accId}`}
            aria-expanded="true"
            aria-controls={props.accId}
          >
            {props.accHeader}
          </button>
        </h2>
        <div
          id={props.accId}
          style={{ height: 750, maxHeight: "750px", overflow: "scroll" }}
          className="accordion-collapse collapse m-4"
          data-bs-parent="#accordionExample"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
