const jourSemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

let ajd = new Date();
let options = { weekday: "long" };
let jourActuel = ajd.toLocaleDateString("fr-FR", options);
// console.log(jourActuel, ajd);

jourActuel = jourActuel.charAt(0).toLocaleUpperCase() + jourActuel.slice(1);
// creer un tableau avec les jours de la semaine
// dans l'ordre en partant d'aujourd'hui
let tabJourEnOrdre = jourSemaine
  .slice(jourSemaine.indexOf(jourActuel))
  .concat(jourSemaine.slice(0, jourSemaine.indexOf(jourActuel)));
// console.log(tabJourEnOrdre);

export default tabJourEnOrdre;
