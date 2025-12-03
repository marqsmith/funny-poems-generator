function generatePoem(event) {
  event.preventDefault();

  alert("Generating poem");

  new Typewriter("#poem", {
    strings: ["The poem will go here and"],
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
