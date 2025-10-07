document.addEventListener("DOMContentLoaded", () => {
  const lockScreen = document.getElementById("lock-screen");
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");

  // Si déjà déverrouillé → cache l’écran noir
  if (localStorage.getItem("postUnlocked") === "true") {
    lockScreen.style.display = "none";
    return;
  }

  submitBtn.addEventListener("click", () => {
    const password = passwordInput.value.trim().toLowerCase();

    if (password === "arrete de fouiller") {
      lockScreen.style.display = "none";
      localStorage.setItem("postUnlocked", "true");
    } else {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Mot de passe incorrect.";
    }
  });
});
