document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".add-button").addEventListener("click", () => {
    let clone = document.querySelector(".item").cloneNode(true);
    clone.style.display = "block";
    clone.querySelector(".delete-button").addEventListener("click", (event) => {
      event.target.dataset.type
        ? event.target.parentElement.parentElement.remove()
        : event.target.parentElement.remove();
    });

    clone.querySelector(".up-button").addEventListener("click", (e) => {
      let element = e.target.dataset.type ? e.target.parentElement : e.target;
      if (!(element.parentElement.previousSibling.nodeName == "#text")) {
        element.parentElement.parentElement.insertBefore(
          element.parentElement,
          element.parentElement.previousSibling
        );
      }
    });
    clone.querySelector(".down-button").addEventListener("click", (e) => {
      let element = e.target.dataset.type ? e.target.parentElement : e.target;
      if (element.parentElement.nextSibling != null) {
        element.parentElement.parentElement.insertBefore(
          element.parentElement.nextSibling,
          element.parentElement
        );
      }
    });
    document.querySelector(".items").appendChild(clone);
  });

  document.querySelector(".save").addEventListener("click", () => {
    let obj = {};
    document.querySelectorAll(".item").forEach((item) => {
      let tmp = {};
      if (item.style.display != "") {
        console.log(item.style.display);
        tmp[item.childNodes[1].value] = item.childNodes[3].value;
        Object.assign(obj, tmp);
      }
    });
    document.querySelector(".data-json").innerHTML = JSON.stringify(obj);
  });
});
