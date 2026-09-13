const screens = document.querySelectorAll(".screen");

function nextScreen(n) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");
  burst();
}

function burst() {
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const h = document.createElement("div");

      h.className = "heart";

      h.textContent = ["❤️", "💖", "💕", "✨", "🌷"][
        Math.floor(Math.random() * 5)
      ];

      h.style.left = Math.random() * 100 + "vw";
      h.style.fontSize = 16 + Math.random() * 22 + "px";
      h.style.animationDuration = 3 + Math.random() * 3 + "s";

      document.body.appendChild(h);

      setTimeout(() => h.remove(), 6500);
    }, i * 90);
  }
}

function makeMagic() {
  const m = document.getElementById("magic");

  m.textContent = "🎉 عيد ميلاد سعيد يا حنان! ❤️";

  burst();

  setTimeout(() => {
    m.textContent = "✨ ربنا يفرّح قلبك دايمًا ✨";
  }, 1800);
}

for (let i = 0; i < 80; i++) {
  const s = document.createElement("div");

  s.className = "star";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.opacity = 0.25 + Math.random() * 0.75;
  s.style.transform = `scale(${0.5 + Math.random() * 1.5})`;

  document.querySelector(".stars").appendChild(s);
}

setInterval(() => {
  if (Math.random() < 0.6) {
    burst();
  }
}, 3500);
