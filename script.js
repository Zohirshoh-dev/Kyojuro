const input = document.getElementById("username");
const button = document.getElementById("claimBtn");

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    button.disabled = false;
    button.classList.add("enabled");
  } else {
    button.disabled = true;
    button.classList.remove("enabled");
  }
});

button.addEventListener("click", () => {
  if (!button.disabled) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
});
