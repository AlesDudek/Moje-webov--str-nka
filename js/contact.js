import { createNavbarLinks } from "../js/utils.js"


document.querySelector('nav').appendChild(createNavbarLinks('Contact'))

const contactLeft = document.querySelector(".Contact-left")
const ul = document.createElement('ul')
const li = document.createElement('li')

contactLeft.appendChild(ul)
ul.appendChild(li)
const contact = ["Phone: +420 776 071 353","E-mail: dudek.ales85@gmail.com"]
console.log(contact[0]);
console.log(contact[1]);
console.log(contact);



contact.forEach(function(oneContact){
  const p =document.createElement('p')
  p.textContent = oneContact
  li.appendChild(p)
})

// const name  = ["CONTACT"]
// name.forEach(function(name){
//   const pLi = document.createElement('li')
//   pLi.textContent = name
//   li.appendChild(pLi)
//   contact.forEach(function(oneContact){
//       const p =document.createElement('p')
//       p.textContent = oneContact
//       pLi.appendChild(p)
//     })
// })
