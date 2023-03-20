const loginForm = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const passwords = document.querySelector("#password");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  this.classList.add("was-validated");
  let check = this.checkValidity();
  if (check) {
    data = {
      username: username.value,
      password: passwords.value,
    };
    request.post("auth/login", data).then((res) => {
      console.log(res);
      localStorage.setItem(TOKEN, res.data.token);
      window.location.href = "../myPost.html";
    });
  }
});
