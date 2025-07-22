function displayPoem (response){
  new Typewriter ("#my-poem" , {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "" ,
  })  
}
function generatePoem(event) {
  event.preventDefault();
 
 let instructionsInput = document.getElementById("user-instructions")
 let apikey = "50do3122d9528t350cd40fbf4dc0035a";
 let prompt = `User instructions: Generate a Korean poem about ${instructionsInput.value}`
 let context = `You are a romantic poem expert and you love to write short poems. You are in charge generating 4 line poems in korean then translated to english. Make sure to follow user instructions and write in basic html without displaying that it is in html.`
 let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

 axios.get(apiurl).then(displayPoem);
  
}
let poemFormElement = document.getElementById("form-generator")
poemFormElement.addEventListener("submit", generatePoem)

