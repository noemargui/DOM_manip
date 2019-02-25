function changeTitles() {
  document.getElementsByTagName("h1")[0].textContent = "Ce que j'ai appris à THP"
  let sub_title = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
  document.getElementsByTagName("h1")[0].parentNode.childNodes[3].textContent = sub_title
}

function changeCallToActions() {
  document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[0].textContent = "OK je veux tester !"
  document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[0].href = "http://www.thehackingproject.org"
  document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[1].textContent = "Non Merci"
  document.getElementsByTagName("h1")[0].parentNode.childNodes[5].getElementsByTagName("a")[1].href = "https://www.pole-emploi.fr/accueil/"
}

function changeLogoName() {
  document.querySelectorAll('.navbar strong')[0].textContent =  "The THP Experience"
  document.querySelectorAll('.navbar strong')[0].style.fontSize = "2em"
}

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let cards = document.querySelectorAll('.card img');

  for (let i = 0; i < cards.length; i++) 
    cards[i].setAttribute("src", imagesArray[i]);
}

function deleteLastCards() {
  let cards = document.querySelectorAll('.row .col-md-4');
  
  for (var i = 1; i <= 3; i++)
    cards[cards.length-i].remove()
}

function changeCardsText() {
  let texts = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
  let cards = document.querySelectorAll('.row .col-md-4');
  
  for (var i = 0; i < 3; i++)
    cards[i].querySelectorAll('.card-body p.card-text')[0].textContent = texts[i]
}

function changeViewButtons() {
  let elements = document.getElementsByClassName("btn-group")

  for (var i = 0; i < elements.length; i++) {
    elements[i].childNodes[1].classList.remove("btn-outline-secondary")
    elements[i].childNodes[1].classList.add("btn-success")
  }
}

function modifTordue() {
  let div = document.createElement("div")
  div.classList.add("row")
  div.appendChild(document.querySelectorAll('.row .col-md-4')[2])
  document.getElementsByClassName("row")[1].parentNode.appendChild(div)

}

changeTitles()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
modifTordue()