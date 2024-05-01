"strict";
const accordion = document.querySelectorAll(".accordion-content");
const _supplier = document.querySelectorAll(".accordion--content");

playAction(accordion, ".proformat", ".accordion-item");
playAction(_supplier, ".supplier", ".accordion--item");

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
