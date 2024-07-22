let script = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      const output = eval(script.toString());
      document.querySelector("input").value = output;
    }
    else if (e.target.innerHTML === "C") {
      script = ""
      document.querySelector("input").value = script;
    }
    else {
      script = script + e.target.innerHTML;
      document.querySelector("input").value = script;
    }
  });
});