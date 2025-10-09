document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-comments");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const list = button.nextElementSibling;

      // Quand les commentaires s’affichent
      if (list && list.style.display === "block") {
        const targetComment = list.querySelector(".comment:not(.deleted)");

        if (targetComment && targetComment.querySelector(".vanishing-word")) {
          setTimeout(() => {
            // Lance le glitch
            targetComment.classList.add("glitching");

            // Puis efface le commentaire et le remplace
            setTimeout(() => {
              targetComment.outerHTML = `
                <div class="comment deleted" data-text="Commentaire supprimé par l’administrateur">
                  <p class="text">Commentaire supprimé par l’administrateur</p>
                </div>
              `;
              console.log("🜂 Le message a été supprimé.");
            }, 1800); // durée du glitch avant suppression
          }, 4000); // délai après affichage
        }
      }
    });
  });
});
