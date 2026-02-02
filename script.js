// Page switch
document.getElementById("startBtn").addEventListener("click", goToPage2);

function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

// Moving NO button
const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
