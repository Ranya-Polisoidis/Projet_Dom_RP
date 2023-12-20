Projet Dom
- Reproduire la template
- Utilisez du sass 
- Chaque element contenant du js dois être fait par vous (pas de bootstrap)
- Vous pouvez utiliser les classes bootstrap ou tailwind pour le style 
- Vous n'avez pas d'image responsive, a vous de le faire
- Pareil pour le darkmode, a vous de le faire aussi.
- Repo en privé : Projet_Dom_Votre_Nom
- Faites attention au branche et au commit 

Bonus : 
- Faites en sorte d'avoir un scroll smooth et que chaque component arrive de manière douce






// ###########################################################################################################################################################################################
// Accordion
// ###########################################################################################################################################################################################


let divAccordionAll=document.querySelectorAll(".div_accordion")
console.log(divAccordionAll);

let btnAccordionAll=document.querySelectorAll(".btn_accordion")
console.log(btnAccordionAll);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Chalet
let divAccordionChalet=divAccordionAll[0]
let btnAccordionChalet=btnAccordionAll[0]

let divChalet=document.createElement("div")

let divImgChalet=document.createElement("div")
let imgChalet=document.createElement("img")
imgChalet.setAttribute("src","")
imgChalet.src="./public/img/chalet.jpeg"
divImgChalet.appendChild(imgChalet)

let pChalet=document.createElement("p")
let textPchalet=document.createTextNode("Niché au cœur des majestueuses montagnes, le Chalet Alpine Oasis est votre refuge ultime pour une escapade alpine inoubliable. Situé dans un cadre enchanteur, ce chalet offre un mélange parfait de confort moderne et de charme rustique, créant ainsi l'atmosphère idéale pour des moments de détente et d'évasion.")
pChalet.appendChild(textPchalet)


divChalet.appendChild(divImgChalet)
divChalet.appendChild(pChalet)


btnAccordionChalet.appendChild(divChalet)
divAccordionChalet.appendChild(btnAccordionChalet)


imgChalet.style.width="400px"
imgChalet.style.height="250px"
imgChalet.style.borderRadius="25px"

divChalet.style.display="flex" // jamais oulier que lui est complémentaire de (en bas)
divChalet.style.alignItems="center"
divChalet.style.justifyContent="center"
divChalet.style.paddingRight="30px"
divChalet.style.paddingLeft="30px"

divImgChalet.style.paddingRight="30px"
divImgChalet.style.paddingBottom="30px"
divImgChalet.style.paddingTop="30px"

pChalet.style.color="rgba(255, 255, 255, 0.882)"
pChalet.style.fontSize="20px"

divChalet.style.display="none"


btnAccordionChalet.addEventListener("click", function () {
    if(divChalet.style.display === "none"){
        divChalet.style.display="flex" // lui
    } else {
        divChalet.style.display="none"
    }
})

// petit animation
pChalet.addEventListener("mouseover", function () {
    pChalet.style.color="rgba(255, 255, 255, 0.292)"
    pChalet.addEventListener("mouseout", function () {
        // pChalet.style.color="red"
        pChalet.style.color="rgba(255, 255, 255, 0.882)"
    })
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Activite
let divAccordionActivite=divAccordionAll[1]
let btnAccordionActivite=btnAccordionAll[1]

let divActivite=document.createElement("div")

let divImgActivite=document.createElement("div")
let imgActivite=document.createElement("img")
imgActivite.setAttribute("src","")
imgActivite.src="./public/img/activite.jpeg"
divImgActivite.appendChild(imgActivite)

let pActivite=document.createElement("p")
let textPactivite=document.createTextNode("Plongez au cœur de l'hiver magique avec nos expériences uniques de traîneau à chiens. Nous vous invitons à vivre une aventure enneigée exceptionnelle, guidée par nos huskies énergiques et enthousiastes, prêts à vous emmener dans un voyage mémorable à travers les paysages hivernaux époustouflants.")
pActivite.appendChild(textPactivite)

divActivite.appendChild(divImgActivite)
divActivite.appendChild(pActivite)


btnAccordionActivite.appendChild(divActivite)
divAccordionActivite.appendChild(btnAccordionActivite)


imgActivite.style.width="400px"
imgActivite.style.height="250px"
imgActivite.style.borderRadius="25px"

divActivite.style.display="flex" // ici lier à en bas
divActivite.style.alignItems="center"
divActivite.style.justifyContent="center"
divActivite.style.paddingRight="30px"
divActivite.style.paddingLeft="30px"

divImgActivite.style.paddingRight="30px"
divImgActivite.style.paddingBottom="30px"
divImgActivite.style.paddingTop="30px"

pActivite.style.color="rgba(255, 255, 255, 0.882)"
pActivite.style.fontSize="20px"


divActivite.style.display="none"


btnAccordionActivite.addEventListener("click", function () {
    if(divActivite.style.display === "none"){
        divActivite.style.display="flex" // à ici 
    } else {
        divActivite.style.display="none"
    }
})

// petit animation
pActivite.addEventListener("mouseover", function () {
    pActivite.style.color="rgba(255, 255, 255, 0.292)"
    pActivite.addEventListener("mouseout", function () {
        // pActivite.style.color="red"
        pActivite.style.color="rgba(255, 255, 255, 0.882)"
    })
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Paysage (différent par rapport au deux autre: une img en + et une div au p en +)
let divAccordionPaysage=divAccordionAll[2]
let btnAccordionPaysage=btnAccordionAll[2]

let divPaysage=document.createElement("div")

let divImgPaysage=document.createElement("div")
let imgPaysage1=document.createElement("img")
imgPaysage1.setAttribute("src","")
imgPaysage1.src="./public/img/paysage1.jpeg"
let imgPaysage2=document.createElement("img")
imgPaysage2.setAttribute("src","")
imgPaysage2.src="./public/img/paysage2.jpeg"
divImgPaysage.appendChild(imgPaysage1)
divImgPaysage.appendChild(imgPaysage2)


let divPpaysage=document.createElement("div")
let pPaysage=document.createElement("p")
let textPpaysage=document.createTextNode("Dans ce coin reculé de beauté naturelle, l'hiver déploie sa magie et transforme le paysage en une toile de rêves enneigés. La sérénité des villages pittoresques rencontre la majesté des montagnes enneigées, créant un tableau hivernal d'une splendeur infinie.")
pPaysage.appendChild(textPpaysage)
divPpaysage.appendChild(pPaysage)

divPaysage.appendChild(divImgPaysage)
divPaysage.appendChild(divPpaysage)


btnAccordionPaysage.appendChild(divPaysage)
divAccordionPaysage.appendChild(btnAccordionPaysage)


imgPaysage1.style.width="430px"
imgPaysage1.style.height="250px"
imgPaysage1.style.borderRadius="25px"

imgPaysage2.style.width="430px"
imgPaysage2.style.height="250px"
imgPaysage2.style.borderRadius="25px"

// ici enlever (du coup il devient block en dessous)
// divPaysage.style.display="flex" 
// divPaysage.style.alignItems="center"
// divPaysage.style.justifyContent="center"

divPaysage.style.paddingTop="30px"
divPaysage.style.paddingBottom="30px"
divPaysage.style.paddingRight="30px"
divPaysage.style.paddingLeft="30px"

divImgPaysage.style.display="flex" // ici modifier

imgPaysage1.style.marginRight="25px"
imgPaysage1.style.marginLeft="25px"

pPaysage.style.color="rgba(255, 255, 255, 0.882)"
pPaysage.style.fontSize="20px"


divPaysage.style.display="none"


btnAccordionPaysage.addEventListener("click", function () {
    if(divPaysage.style.display === "none"){
        divPaysage.style.display="block" // ici en block !
    } else {
        divPaysage.style.display="none"
    }
})

// petit animation
pPaysage.addEventListener("mouseover", function () {
    pPaysage.style.color="rgba(255, 255, 255, 0.292)"
    pPaysage.addEventListener("mouseout", function () {
        // pPaysage.style.color="red"
        pPaysage.style.color="rgba(255, 255, 255, 0.882)"
    })
})