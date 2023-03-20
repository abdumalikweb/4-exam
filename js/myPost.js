const form = document.querySelector("#form");
const category = document.querySelector("#category");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const title = document.querySelector("#title");
const post = document.querySelector(".post");
const modalOpenBtn = document.getElementById("modal-open-btn");
const portfolioModal = document.getElementById("portfolio-modal");
const portfolioBtn = document.getElementById("portfolio-add-btn");

function getPost({ title, category, description, _id, photo }) {
  return `
   <div class="item">
              <div class="img">
                <img
                  src="${IMAGE_URL}${photo._id}.${photo.name.split(".")[1]}"
                  alt="photo"
                />
              </div>
              <div class="text">
                <p class="blog_title">${category}</p>
                <h3>
                  ${title}
                </h3>
                <p>
                  ${description}
                </p>
              </div>
              <div class="button">
                <button
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolio-modal"
                  onclick="{editExp('${_id}')}"
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger" onclick="{deleteExp('${_id}')}">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </div>
  `;
}

function getCard() {
  post.innerHTML = "Loading...";
  request.get("post/user").then((res) => {
    post.innerHTML = "";
    post.innerHTML += getPost();
  });
}
getCard();
form.addEventListener("submit", function (e) {
  e.preventDefault();
  this.classList.add("was-validated");
  let check = this.checkValidity();
  if (check) {
    let form = new FormData();
    form.append("file", image.files[0]);
    request.post("upload", form);
    let data = {
      title: title.value,
      description: description.value,
      category: "63de6eb268d03b5daea7dbca",
      photo: "6412131483b154fb6bf1199d",
    };
    request.post("post", data).then(() => {
      bootstrap.Modal.getInstance(portfolioModal).hide();
      alert("succsess");
      getCard();
    });
  }
});
