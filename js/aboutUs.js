const form = document.querySelector("#form");
const category = document.querySelector("#category");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const title = document.querySelector("#title");
const post = document.querySelector(".post");
const modalOpenBtn = document.getElementById("modal-open-btn");
const portfolioModal = document.getElementById("portfolio-modal");
const portfolioBtn = document.getElementById("portfolio-add-btn");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  this.classList.add("was-validated");
  let check = this.checkValidity();
  if (check) {
    let data = {
      title: title.value,
      description: description.value,
      category: "63de6eb268d03b5daea7dbca",
      photo: "6412131483b154fb6bf1199d",
    };
    request.post("post", data).then(() => {
      bootstrap.Modal.getInstance(portfolioModal).hide();
      alert("succsess");
    });
  }
});
