function send() {
  let input = document.getElementById("userInput");
  let msg = input.value.trim();
  if(!msg) return;

  addMessage(msg, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(getReply(msg), "bot");
  }, 600);
}

function addMessage(text, type) {
  let div = document.createElement("div");
  div.className = type;
  div.innerText = text;
  document.getElementById("chat").appendChild(div);
}

function getReply(msg) {
  msg = msg.toLowerCase();

  if(msg.includes("dc")) return "District Magistrate Kurukshetra: Shri …";
  if(msg.includes("helpline")) return "District Helpline: 01744-XXXXXX";
  if(msg.includes("gita")) return "International Gita Mahotsav is held every year in Kurukshetra.";

  return "Please ask about district offices, services, helplines, or schemes.";
}
