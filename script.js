const copied = document.querySelector("#copied");
const paste = document.querySelector("#paste");
const copy = document.querySelector("#copy");
const btn = document.querySelector("#btn");

copy.select();
paste.value = "";
btn.addEventListener("click", () => {
  if (document.execCommand("copy")) {
    paste.focus();
    copied.getElementsByClassName.opacity = "1";
    setTimeout(() => {
      copied.getElementsByClassName.opacity = "0";
    }, 800);
  } else alert("Invalid Operation");
});
