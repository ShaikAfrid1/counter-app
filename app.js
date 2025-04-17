let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
      value.style.color = "crimson";
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "limegreen";
    } else {
      count = 0;
      value.style.color = "#fff";
    }

    value.innerText = count;
  });
});
