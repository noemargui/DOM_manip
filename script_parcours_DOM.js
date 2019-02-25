console.log("Nombre de tag <p> : ")
console.log(document.getElementsByTagName("p").length)

console.log("Contenu de l'élément 'coucou' : ")
console.log(document.getElementById("coucou").textContent)

console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?");
console.log(document.getElementsByTagName("a")[2].href)

console.log("Combien d'éléments portent la classe compte-moi ?");
console.log(document.getElementsByClassName("compte-moi").length);

console.log("Combien d'éléments <li> portent la classe compte-moi ?");
console.log(document.querySelectorAll("li.compte-moi").length);

console.log("Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?");
console.log(document.querySelectorAll("ol li.compte-moi").length);

console.log("Question 7 :");
console.log(document.querySelectorAll('div ul')[1].getElementsByTagName("li")[0].textContent);