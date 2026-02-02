document.addEventListener("DOMContentLoaded", () => {

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const videoPage = document.getElementById("videoPage");

  const startBtn = document.getElementById("startBtn");
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  const finalVideo = document.getElementById("finalVideo");
  const card = document.querySelector("#page2 .card");

  // PAGE 1 → PAGE 2
  startBtn.addEventListener("click", () => {
    page1.classList.add("fade-out");

    setTimeout(() => {
      page1.classList.add("hidden");
      page1.classList.remove("fade-out");

      page2.classList.remove("hidden");
      page2.classList.add("fade-in");
    }, 400);
  });

  // NO button escape (inside white card, reduced movement)
  noBtn.addEventListener("mouseenter", () => {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 40;
    const maxX = (cardRect.width - btnRect.width) / 2 - padding;
    const maxY = (cardRect.height - btnRect.height) / 2 - padding;

    const x = (Math.random() * 2 - 1) * maxX * 0.6;
    const y = (Math.random() * 2 - 1) * maxY * 0.6;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // YES → PAGE 3 (video with sound once, then silent loop)
  yesBtn.addEventListener("click", () => {
    page2.classList.add("fade-out");

    setTimeout(() => {
      page2.classList.add("hidden");
      page2.classList.remove("fade-out");

      videoPage.classList.remove("hidden");
      videoPage.classList.add("fade-in");

      // Play WITH sound (user gesture)
      finalVideo.currentTime = 0;
      finalVideo.muted = false;
      finalVideo.play();

      // After first play, loop silently
      finalVideo.addEventListener("ended", function handleEnd() {
        finalVideo.muted = true;
        finalVideo.play();
        finalVideo.removeEventListener("ended", handleEnd);
      });

    }, 400);
  });

});
