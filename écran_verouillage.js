document.addEventListener("DOMContentLoaded", () => {
  const CORRECT_PASSWORD = "Arrete de fouiller";
  const lockScreen = document.getElementById("lock-screen");
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");
  const submitBtn = document.getElementById("submit-password");

  // Si déjà déverrouillé
  if (localStorage.getItem("post9_unlocked") === "true") {
    lockScreen.style.opacity = "0";
    lockScreen.style.pointerEvents = "none";
    document.body.classList.remove("locked");
  } else {
    document.body.classList.add("locked");
  }

  function unlockPage() {
    const entered = passwordInput.value.trim().toLowerCase();
    if (entered === CORRECT_PASSWORD.toLowerCase()) {
      lockScreen.style.opacity = "0";      // disparition douce
      lockScreen.style.pointerEvents = "none"; // ne bloque plus les clics
      document.body.classList.remove("locked"); // enlève le flou
      localStorage.setItem("post9_unlocked", "true");
    } else {
      errorMessage.style.display = "block";
      passwordInput.value = "";
    }
  }

  submitBtn.addEventListener("click", unlockPage);
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") unlockPage();
  });
});
