function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.date.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "4e369354et3395e2b9c0oec6dfc1eab9";
  let prompt = `Please generate a short French poem about ${instructionsInput.value}`;
  let context =
    "You are very knowledgable and romantic poem expert and you like to write poems, could you please generate a short poem in French, please provide your reply in format HTML and separate each line with a <br>. Please make sure to take in consideration user instructions when generatin and sign the poem at the end with 'SheCodes AI'. Do not include a title to the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}`;

  console.log("Generating poem");

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
