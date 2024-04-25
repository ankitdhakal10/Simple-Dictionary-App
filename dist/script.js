const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const searchBtn = document.querySelector('#search-btn');
const result = document.querySelector('#result');
const sound = document.querySelector('#sound');


searchBtn.addEventListener('click',()=> {
  let inputWord = document.querySelector('#input-word').value;

  fetch(`${URL}${inputWord}`)
  .then(response =>response.json())
  .then(data =>{
    console.log(data)
    result.innerHTML = 
    `
  
    <p class="word inline text-4xl">${inputWord}</p>
    <button onclick="playSound()">
    <i class="fas fa-volume-up"></i>
    </button>

    <div class="type mt-2">
      <p class="inline text-sm text-gray-400 mr-2">${data[0].meanings[0].partOfSpeech}</p>
      <p class="inline text-sm text-gray-400">${data[0].phonetic}</</p>
    </div>

    <div class="meaning mt-8">
      <p class="text-lg">${data[0].meanings[0].definitions[0].definition}</p>
    </div>

    <p class="example mt-8 pl-4 border-l-4 border-indigo-400">${data[0].meanings[2].definitions[0].example || ""}</p>

    `;
    let audio = `${data[0].phonetics[1].audio}`;
    console.log(audio);
    sound.setAttribute('src',`${audio}`);
    console.log(sound);
  })
  .catch(()=>{
    result.innerHTML =  `<h3>Could not find the word</h3>`;
  })
});

function playSound() {
  sound.play();
}

