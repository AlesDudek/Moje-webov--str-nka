

export const createNavbarLinks = function (activeLink) {
  const ul = document.createElement('ul');
  const links = ['About Me', 'My goals', 'Contact']
  links.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item === 'About Me' ? 'HOME' : item
    a.setAttribute('href', item === activeLink ? '#' : item + '.html');
    li.appendChild(a);
    ul.appendChild(li);
  })
  return ul
}