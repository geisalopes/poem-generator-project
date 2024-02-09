function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "bf12f0ob06f7acf048dt44a41aadd939";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Do not include a title to the poem. Sign in the poem  with 'Your Poem Generator' inside a <strong/> element at the end of the poem. Make sure to follow the user instructions";
  let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value} for you.</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
