function generatePoem(event) {
  event.preventDefault();

  new Typewriter ("#my-poem" , {
    strings: "Oh, my lover who had pure eyes <br/> 말간 눈을 한 애인이여",
    autoStart: true,
    delay: 10,
    cursor: "" ,
  })
}
let poemFormElement = document.getElementById("form-generator")
poemFormElement.addEventListener("submit", generatePoem)

