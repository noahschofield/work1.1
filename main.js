import './style.css'

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const {clientX, clientY} = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 3000, fill: "forwards"});
}

const enchance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");

  element.innerText = "";

  text.forEach(letter => {
    const span = document.createElement("span");

    span.className = "letter";

    span.innerText = letter;

    element.appendChild(span);
  });
}

enchance("channel-link");
