const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries((formData.entries()));
  console.log(data);
})

const name = document.getElementById("firstName");
// let namedata = "";
// name.addEventListener("change", () => {
//   namedata = name.value;
//   console.log("Name: ", namedata)
// })

const email = document.getElementById("email")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("name: ", name.value);
  console.log("email: ", email.value)
})


