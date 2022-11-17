import { createNavbarLinks } from "../js/utils.js"


// navBar

const nav = document.querySelector('nav')
nav.appendChild(createNavbarLinks('index'))
const li = document.createElement('li')
const ul = document.querySelector('ul')

nav.appendChild(ul)
ul.appendChild(li)


//section
const aboutme = document.querySelector(".About-me")
const nadpis = document.createElement('h1')
const odstavec = document.createElement('p')
console.log(nadpis);
aboutme.appendChild(nadpis)
nadpis.textContent = "Aleš Dudek"
nadpis.appendChild(odstavec)
odstavec.textContent = "Jmenuji se Aleš Dudek a snažím se získat svojí první práci v IT. Moje pracovní nástroje jsou  HTML5, CSS3, SASS. Prohlubuji znalosti v JavaScript a Vue. Momentálně pracuji jako Skladník - trenér ve velké společnosti s výrobou hraček Lego. V posledních par letech jsem začal mít pocit, že nevyužívám naplno svůj potenciál. Proto jsem začal přemýšlet o své realizaci, a tak jsem dospěl k tomu, že chci programovat a tvořit internetové stránky. Myslím si, že je to přesně ta práce, která mě bude bavit. Absolvoval jsem devítiměsíční kurz JavaScript, který jsem ukončil  certifikátem. Rád bych byl prospěšný pro nějakou firmu, která by ocenila moje znalosti a zodpovědný přístup. Jsem energický a cílevědomý, mám tendenci se neustále zlepšovat. Dokážu pracovat jak samostatně tak i v týmu."