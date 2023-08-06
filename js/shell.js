import { handle } from "./cmds.js";

const msg = "hel@web:~$ cat creator.txt";
const welcome = `
<span data-color="grey"><a style="text-decoration:none" href="https://github.com/PotatoTheDevil">[potato]https://github.com/PotatoTheDevil</a></span>

Type <span data-color="#6ea8f0">help</span> to show current available commands.`;
const sleep = (m) => new Promise((r) => setTimeout(r, m));
const terminal = document.querySelector("pre");
const history = [];
let prompt = document.querySelector("#prompt-template").content.cloneNode(true);
const url = window.location.href;
const isTermsPage = url.endsWith("?terms");

setTimeout(async () => {
  if (isTermsPage) { 
    const msg = "hel@web:~$ cat creator.txt";
    for (let i = 0; i < msg.length; i++) {
      terminal.innerText += msg[i];
      await sleep(100);
    }
  } else {
    for (let i = 0; i < msg.length; i++) {
    terminal.innerText += msg[i];
    await sleep(100);
  }
}
  await sleep(500);
  terminal.innerHTML += welcome;
  terminal.appendChild(prompt);



  if (isTermsPage) {

    const terms = "terms";
    await handle(terms, terminal, history);
    const inputElement = document.querySelector("input");
    inputElement.value = "terms";

    prompt = document
    .querySelector("#prompt-template")
    .content.cloneNode(true);
    terminal.appendChild(prompt);
  }

}, 500);

window.addEventListener("DOMContentLoaded", () => {
  document.onclick = () => {
    let prompts = document.querySelectorAll("input");
    if (!window.getSelection().toString()) prompts[prompts.length - 1].focus();
  };
  window.onkeydown = async (e) => {
    let prompts = document.querySelectorAll("input");
    let command = prompts[prompts.length - 1];
    if (e.key === "Enter") {
      command.setAttribute("placeholder", command.value);
      command.setAttribute("readonly", true);
      document
        .querySelectorAll(".help")
        .forEach((el) => el.parentElement.remove());

      await sleep(250);
      if (command.value.includes("&&")) {
        let runs = command.value.split(" && ");
        for (let cmds of runs) {
          await handle(cmds, terminal, history);
          terminal.innerHTML += "\n";
        }
      } else {
        await handle(command.value, terminal, history);
      }
      history.push(command.value);

      prompt = document
        .querySelector("#prompt-template")
        .content.cloneNode(true);
      terminal.appendChild(prompt);

      prompts = document.querySelectorAll("input");
      prompts[prompts.length - 1].focus();
      document.body.scrollTop = document.body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      command.value = history[history.length - 1];
    } else if (e.key === "ArrowDown") {
      command.value = "";
    }
  };



});
