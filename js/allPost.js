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

function getPost({ _id, category, title, description, photo }) {
  return `
   <div class="item">
              <div class="img">
                <img style="height:400px;object-fit:cover;"
                  src="${IMAGE_URL}${photo._id}.${photo.name.split(".")[1]}"
                  alt="photo"
                />
              </div>
              <div class="text">
                <p class="blog_title">${category.name}</p>
                <h3>
                  ${title}
                </h3>
                <p>
                  ${description}
                </p>
              </div>
            </div>
  `;
}

function getCard() {
  post.innerHTML = "Loading...";
  request.get("post").then((res) => {
    console.log(res.data.data);
    post.innerHTML = "";
    res.data.data.forEach((el) => {
      post.innerHTML += getPost(el);
    });
  });
}
getCard();
