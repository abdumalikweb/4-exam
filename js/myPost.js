const formPost = document.querySelector("#form");
const category = document.querySelector("#category");
const image = document.querySelector("#image");
const description = document.querySelector("#description");
const title = document.querySelector("#title");
const post = document.querySelector(".post");
const modalOpenBtn = document.getElementById("modal-open-btn");
const portfolioModal = document.getElementById("portfolio-modal");
const portfolioBtn = document.getElementById("portfolio-add-btn");
const search = document.querySelector(".search");
let selected= null;

function getPost({ _id, category, title, description, photo }) {
  return `
   <div class="item">
              <div class="img">
                <img style="height:300px;object-fit:cover;"
                  src="${IMAGE_URL}${photo._id}.${photo.name.split(".")[1]}"
                  alt="photo"
                />
              </div>
              <div class="text">
                <p class="blog_title">${category.name}</p>
                <h3>
                  ${title}
                </h3>
                <p class="descp">
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
    console.log(res.data.data);
    post.innerHTML = "";
    res.data.data.forEach((el) => {
      post.innerHTML += getPost(el);
    });
  });
}
getCard();

formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  this.classList.add("was-validated");
  let check = this.checkValidity();
  if (check) {
    let form = new FormData();
    form.append("file", image.files[0]);
    requestImage.post("upload", form).then((res) => {
      console.log(res);
    });
    let data = {
      title: title.value,
      description: description.value,
      category: "63de6eb268d03b5daea7dbca",
      photo: "6412131483b154fb6bf1199d",
    };
    request.post("post", data).then((res) => {
      bootstrap.Modal.getInstance(portfolioModal).hide();
      alert("succsess");
      getCard();
    });
  }
});
function deleteExp(_id) {
  let check = confirm("Rostanam o'chirishni xohlaysizmi ?");
  if (check) {
    request.delete(`post/${_id}`).then(() => {
      getCard();
    });
  }
}

function editExp(_id) {{
    request.put(`post/${_id}`).then(() => {
      getCard();
    });
  }
}

// search.addEventListener("input", function (e) {
//   e.preventDefault();
//   request.get("post/user").then((res) => {
//     res.data.data.forEach((el) => {
//        post.innerHTML += "";
//       if (el.title.toLowerCase().includes(e.target.value.toLowerCase())) {
//           post.innerHTML += "";
//         post.innerHTML += getPost(el);
//       }
//     });
//   });
// });

