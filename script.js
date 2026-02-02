document.addEventListener("DOMContentLoaded", function () {

  // Page switch
  const startBtn = document.getElementById("startBtn");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  startBtn.addEventListener("click", () => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  });

  // Moving NO button
  const noBtn = document.getElementById("no");

  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 80 - 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

});
