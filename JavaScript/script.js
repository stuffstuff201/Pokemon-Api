const url = "https://pokeapi.co/api/v2/";
const input = document.getElementById("container-input");
const button = document.getElementById("container-button");
const imgContainer = document.getElementById("container-container-img-img");
const pContainer = document.getElementById("container-container-p");
let userInput;

button.addEventListener("click", () => {
  let searchValue = input.value;
  userInput = searchValue;
  console.log(searchValue);
  let urlTwo = url + "pokemon-species/" + userInput;
  fetch(url + "pokemon/" + userInput)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
      imgContainer.src = data.sprites.back_default;
      fetch(urlTwo)
        .then((res) => res.json())
        .then((data) => {
          let lore = data.flavor_text_entries.find(
            (e) => e.language.name === "en"
          ).flavor_text;
          pContainer.innerHTML = lore.replace(/\n|\f/g, " ");
          console.log(data);
        });
    });
});
