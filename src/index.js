function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Minima labore eos saepe expedita repudiandae. Possimus",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
