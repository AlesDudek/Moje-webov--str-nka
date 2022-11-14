import { createNavbarLinks } from "../js/utils.js"


// navBar

const nav = document.querySelector('nav')
nav.appendChild(createNavbarLinks('index'))
const li = document.createElement('li')
const ul = document.querySelector('ul')

nav.appendChild(ul)
ul.appendChild(li)


//section
const aboutMeSection = document.querySelector('About-Me')
const aboutme = document.querySelector(".About-me")
const nadpis = document.createElement('h1')
const odstavec = document.createElement('p')
console.log(nadpis);
aboutme.appendChild(nadpis)
nadpis.textContent = "Aleš Dudek"
nadpis.appendChild(odstavec)
odstavec.textContent = "Jmenuji se Aleš Dudek a snažím se získat svojí první práci v IT. Momentálně se učím HTML5, CSS3, SASS, JavaScript, Vue"