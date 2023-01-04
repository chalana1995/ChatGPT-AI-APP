import bot from "./assets/bot.svg";
import ser from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadIntervel;

function loader(element) {
  element.textContent = "";

  loadIntervel = setInterval(() => {
    element.textContent += ".";

    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let intervel = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(intervel);
    }
  }, 20);
}

function generateUniqueId() {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexaDecimalString = randomNumber.toString(16);

  return `id-${timeStamp}-${hexaDecimalString}`;
}

function chatStripe(isAi, value, unqueId) {
  return `
    <div class="wrapper" ${isAi && "ai"}>
      <div class="chat">
        <div class="profile">
           <img 
            src="${isAi ? bot : user}"
            alt="${isAi ? "bot" : "user"}"
           />
        </div>
        <div class="message" id=${unqueId}>
          ${value}
        </div>
      </div>
    </div>
    `;
}
