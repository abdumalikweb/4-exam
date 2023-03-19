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
    // let form = new FormData();
    let data = {
      fist_name: fistName.value,
      last_name: lastName.value,
      username: userName.value,
      password: password.value,
    };
console.log(12);
    request.post("auth/register", data).then(() => {
      alert("succsess");
    });
  }
});
