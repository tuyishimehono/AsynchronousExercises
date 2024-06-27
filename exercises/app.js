const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const btn = document.querySelector("#search");

btn.addEventListener("click", async () => {
  const input = document.getElementById("input").value;
  try {
    const response = await fetch(`${url}${input}`);
    const output = await response.json();
    result.innerHTML = `
    <div>
            <h3>${input}</h3>
        </div>
        <div>
            <p>${output[0].meanings[0].partOfSpeech}</p>
            <p>/${output[0].phonetic}/</p>
        </div>
        <p>
            ${output[0].meanings[0].definitions[0].definition}
        </p>
        <p>
            Example: ${output[0].meanings[0].definitions[0].example || ""}
        </p>`;
  } catch (error) {
    result.innerHTML = `<h3>Couldn't Find The Word</h3>`;
  }
});
