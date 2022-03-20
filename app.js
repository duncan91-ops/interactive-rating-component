const buttons = document.querySelectorAll(".rating__value");
const submitBtn = document.querySelector(".rating__btn");
const main = document.querySelector(".main");
const selectedValue = document.querySelector(".selected__value");
let value = "";

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    value = e.target.textContent;
    button.classList.toggle("active");
  })
);

submitBtn.addEventListener("click", () => {
  if (value) {
    console.log(value);
    selectedValue.textContent = value;
    main.classList.add("active");
  }
});
