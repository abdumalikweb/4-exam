const logout = document.querySelector("#logout");
const username = document.querySelector(".username");

logout.addEventListener("click", function () {
  localStorage.removeItem(TOKEN);
  location.href = "./index.html";
});

request.get("auth/me").then((res) => {
  console.log(res);
  username.innerHTML = res.data.data.first_name;
});
