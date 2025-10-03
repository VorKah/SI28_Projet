const generateQuote = function() {
	const quotes = [
	{
		quote: "Psychose (1960) fut le premier film américain à montrer une chasse d’eau tirée à l’écran.",
	},
	{
		quote: "La scène de la douche de Psychose contient plus de 70 plans en moins de 3 minutes.",
	},
	{
		quote: "L’Exorciste (1973) a été interdit dans plusieurs pays à sa sortie.",
	},
	{
		quote: "La fille de L’Exorciste avait seulement 14 ans pendant le tournage.",
	},
	{
		quote: "Dans Shining (1980), Jack Nicholson a improvisé la phrase culte « Here’s Johnny! ».",
	},
	{
		quote: "Stephen King déteste l’adaptation de Shining.",
	},
	{
		quote: "Massacre à la tronçonneuse (1974) n’a presque pas de sang à l’écran malgré sa réputation.",
	},
	{
		quote: "Le personnage de Leatherface est inspiré du tueur réel Ed Gein.",
	},
	{
		quote: "Le sang dans Psychose était en fait du sirop de chocolat.",
	},
	{
		quote: "Paranormal Activity (2007) a coûté seulement 15 000 $ et a rapporté plus de 190 millions.",
	},
	{
		quote: "Dans Alien (1979), la scène du chestburster a surpris les acteurs pour de vrai.",
	},
	{
		quote: "Les cris de Shelley Duvall dans Shining ont nécessité plus de 100 prises.",
	},
	{
		quote: "horseshoe crabs have survived 450 million years without major changes.",
	},
	{
		quote: "Freddy Krueger est inspiré d’un voisin étrange que Wes Craven avait dans son enfance.",
	},
	{
		quote: "Vendredi 13 (1980) n’avait pas prévu que Jason devienne le méchant principal.",
	},
	{
		quote: "Le maquillage de Pennywise dans Ça (2017) est basé sur des clowns des années 1800.",
	},
	{
		quote: "Dans L’Exorciste, on utilisait de la soupe aux pois pour représenter le vomi vert.",
	},
	{
		quote: "La poupée Annabelle existe vraiment et se trouve dans un musée aux États-Unis.",
	},
	{
		quote: "Dans Paranormal Activity, la fin a été changée après une suggestion de Steven Spielberg.",
	},
	{
		quote: "Le masque de Ghostface dans Scream a été acheté dans un magasin de fête pour quelques dollars.",
	},
	{
		quote: "Dans Bird Box, les créatures n’apparaissent jamais parce qu’elles étaient jugées… trop ridicules.",
	},
	{
		quote: "Gremlins a failli recevoir une interdiction aux moins de 17 ans à cause de sa violence.",
	},
	{
		quote: "En Italie, certains cinémas offraient des assurances vie aux spectateurs de L’Exorciste."
	},
	{
		quote: "Le film Hérédité a traumatisé tellement de spectateurs qu’il y a eu des évanouissements en salle.",
	},
	{
		quote: "Certains cinémas projetaient Massacre à la tronçonneuse en plein air dans des forêts pour l’expérience."
	}
	];
	
	let arrayIndex = Math.floor(Math.random() * quotes.length);
	document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
}

window.onload = function(){
	generateQuote();
	document.getElementById("generate").addEventListener('click', generateQuote);
}

function newQuote() {
	generateQuote();
	document.getElementById("generate").addEventListener('click', generateQuote);
}

function toggleComments(button) {
  const list = button.nextElementSibling;
  if (list.style.display === "none") {
    list.style.display = "block";
    button.textContent = "Masquer les commentaires";
  } else {
    list.style.display = "none";
    button.textContent = "Afficher les commentaires";
  }
}