function AccordionItem(props) {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
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
          class="accordion-collapse collapse m-4"
          data-bs-parent="#accordionExample"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
