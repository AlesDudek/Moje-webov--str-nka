import { createNavbarLinks } from "../js/utils.js"

//navBar

document.querySelector('nav').appendChild(createNavbarLinks('Mygoals'))



//section
const myGoal = document.querySelector(".MyGoalLeft")
const nadpis = document.createElement('h1')
const ul = document.createElement('ul')
const lione = document.createElement('li')
const litwo = document.createElement('li')
const lithree = document.createElement('li')
const lifour = document.createElement('li')

console.log(nadpis);
myGoal.appendChild(nadpis)
nadpis.textContent = "Moje cíle"

myGoal.appendChild(ul)
ul.appendChild(lione)
lione.textContent = "Naučit se pořádně JavaScript"
ul.appendChild(litwo)
litwo.textContent = "Naučit se pořádně Vue"
ul.appendChild(lithree)
lithree.textContent = "Naučit se pořádně React"
ul.appendChild(lifour)
lifour.textContent = "Získat práci v IT"

