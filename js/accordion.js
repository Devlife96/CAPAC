"strict";
const accordion = document.querySelectorAll(".accordion-content");
const _supplier = document.querySelectorAll(".accordion--content");
const _requisition = document.querySelectorAll('.accordion-r-content');
const _receipt = document.querySelectorAll('.accordion-rep-content');
// Proformat
playAction(accordion, ".proformat", ".accordion-item");
// Supplier
playAction(_supplier, ".supplier", ".accordion--item");
// Requisition
playAction(_requisition, ".requisition", ".accordion-r-item");
// Receipt
playAction(_receipt,".receipt", ".accordion-rep-item");

//make it flexible

function removeAction(element, content, id) {
  element.forEach((el, index) => {
    if (index != id) {
      el.querySelector(content).classList.add("hide");
    }
  });
}

function playAction(element, header, content) {
  element.forEach((el, id) => {
     let _header = el.querySelector(header);
    let _content = el.querySelector(content);
    _content.classList.add("hide");

    _header.addEventListener("click", () => {
      if (_content.classList.contains("hide")) {
        _content.classList.remove("hide");
      } else {
        _content.classList.add("hide");
      }
      removeAction(element, content, id);
    });
  });
}
