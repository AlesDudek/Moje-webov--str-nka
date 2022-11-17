

export const createNavbarLinks = function (activeLink) {
  const ul = document.createElement('ul');
  const links = [
    { label:'About me', href:'index'},
    { label:'My goals', href:'myGoals'},
    {label:'Contact', href:'contact'}]
  links.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.label
    a.setAttribute('href', item.href + '.html');
    li.appendChild(a);
    ul.appendChild(li);
  })
  return ul
}