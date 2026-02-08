const PASSWORD = "25112025";

const login = document.getElementById("login");
const content = document.getElementById("content");
const error = document.getElementById("error");
const music = document.getElementById("music");

// LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
  const pass = document.getElementById("password").value;

  if (pass === PASSWORD) {
    login.classList.add("hidden");
    content.classList.remove("hidden");

    // iniciar corazones
    setInterval(createHeart, 500);
  } else {
    error.textContent = "Pista: una fecha muy importante 💕";
  }
});

// ACEPTAR
document.querySelectorAll(".yes").forEach(btn => {
  btn.addEventListener("click", () => {
    music.play();
    content.classList.add("celebrate");

    document.getElementById("response").textContent =
      "💖 Sabía que dirías que sí. Prepárate para un día inolvidable 💖";
  });
});

// ❤️ CORAZONES
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
