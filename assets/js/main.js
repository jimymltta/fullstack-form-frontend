document.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  // Envoi des données du formulaire vers le serveur
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      // Annulation du comportement par défaut du formulaire (refresh)
      event.preventDefault();
      console.log("Soumission du formulaire");

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };

      const response = await axios.post(
        "https://fullstack-form-backend.herokuapp.com/",
        data
      );
      console.log(response);

      if (response.status === 200) {
        alert("Merci, tout est OK");
      } else {
        alert("Une erreur est survenue");
      }
    });
});
