document.addEventListener("DOMContentLoaded", function () {

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const videoPage = document.getElementById("videoPage");

  const startBtn = document.getElementById("startBtn");
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  const finalVideo = document.getElementById("finalVideo");
  const card = document.querySelector("#page2 .card");

  // Page 1 → Page 2
  startBtn.addEventListener("click", () => {
    page1.classList.add("hidden");

    setTimeout(() => {
      page2.classList.remove("hidden");
    }, 300);
  });

  // NO button escape
  noBtn.addEventListener("mouseenter", () => {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width / 2 - btnRect.width;
    const maxY = cardRect.height / 2 - btnRect.height;

    const x = (Math.random() * 2 - 1) * maxX;
    const y = (Math.random() * 2 - 1) * maxY;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // YES → video
  yesBtn.addEventListener("click", () => {
    page2.classList.add("hidden");

    setTimeout(() => {
      videoPage.classList.remove("hidden");
      finalVideo.play();
    }, 300);
  });

});
