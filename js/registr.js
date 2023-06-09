const registrForm = document.getElementById("registrForm");
const fistName = document.getElementById("fistName");
const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const conpassword = document.getElementById("conpassword");
const submitBtn = document.getElementById("submitBtn");

registrForm.addEventListener("submit", function (e) {
  e.preventDefault();

  this.classList.add("was-validated");
  let check = this.checkValidity();

  if (check) {
    let data = {
      first_name: fistName.value,
      last_name: lastName.value,
      username: userName.value,
      password: password.value,
    };
    request.post("auth/register", data).then((res) => {
      console.log(res);
      alert("succsess");
      window.location.href = "/login.html";
    });
  }
});
