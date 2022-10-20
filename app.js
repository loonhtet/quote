const content = document.querySelector(".content"),
  authorname = document.getElementById("authorname"),
  tags = document.querySelectorAll(".tags"),
  speak = document.getElementById("speak"),
  copy = document.getElementById("copy"),
  messenger = document.getElementById("messenger"),
  nextbtn = document.getElementById("nextbtn"),
  copypopup = document.querySelector("#copyani");

function randomQuote() {
  nextbtn.innerText = "Loading...";
  nextbtn.classList.add("loader");

  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      content.textContent = result.content;
      authorname.textContent = result.author;
      nextbtn.classList.remove("loader");
      nextbtn.innerHTML = `New Quote <i class="ri-arrow-right-s-line"></i>`;
    });
}

speak.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${content.innerHTML} by ${authorname.textContent}`
  );
  speechSynthesis.speak(utterance);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(content.innerText);
  // copypopup.classList.add("copyani");
});

nextbtn.addEventListener("click", randomQuote);
