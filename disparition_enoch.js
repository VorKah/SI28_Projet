document.addEventListener("DOMContentLoaded", () => {
  // On cible tous les boutons "Afficher les commentaires"
  const buttons = document.querySelectorAll(".toggle-comments");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const list = button.nextElementSibling;

      // Quand les commentaires s’ouvrent
      if (list && list.style.display === "block") {
        const word = list.querySelector(".vanishing-word");
        if (!word) return;

        // Déclenche le glitch après 4 secondes
        setTimeout(() => {
          word.classList.add("glitch");
          document.body.classList.add("shake");

          setTimeout(() => {
            document.body.classList.remove("shake");
          }, 1500);

          setTimeout(() => {
            console.log("🜂 Vous n’auriez pas dû voir ça.");
          }, 1600);
        }, 3000);
      }
    });
  });
});
