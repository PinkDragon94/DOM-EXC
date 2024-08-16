
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];



const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');



menuLinks.forEach(link => {
  const newLink = document.createElement('a');
  newLink.setAttribute('href', link.href);
  newLink.innerHTML = link.text;
  topMenuEl.appendChild(newLink);
});



const subMenuEl = document.querySelector('#sub-menu')
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
const topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', ( event ) => {
  event.preventDefault()
  
  if (!event.target.matches('a')) {
      return; // 
  }
  
  console.log(event.target.textContent);   
  topMenuLinks.forEach(link => {
      link.classList.remove('active');
  });

 
  event.target.classList.add('active');
  const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

  
  if (clickedLink.subLinks) {
      subMenuEl.style.top = '100%'; 
      buildSubmenu(clickedLink.subLinks); 
  } else {
      subMenuEl.style.top = '0%'; 
      subMenuEl.innerHTML = ''; 
  }
  
  if (event.target.textContent === "about") {
    mainEl.innerHTML = '<h1>About</h1>';
  }
});


const buildSubmenu = (subLinks) => {
  
  subMenuEl.innerHTML = '';

  
  subLinks.forEach(sublink => {
      const newSubLink = document.createElement('a');
      newSubLink.setAttribute('href', sublink.href);
      newSubLink.innerHTML = sublink.text;
      subMenuEl.appendChild(newSubLink);
  });
}


subMenuEl.addEventListener('click', ( event ) => {
  event.preventDefault()
  
  if (!event.target.matches('a')) {
      return; 
  }
  
  console.log('Clicked link text:', event.target.textContent);
  subMenuEl.style.top = '0%'; 
    topMenuLinks.forEach(link => {
      link.classList.remove('active');
  });
 
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  
  // if (event.target.textContent.trim().toLowerCase() === "about") {
  //     mainEl.innerHTML = '<h1>About</h1>';
  //     console.log('Main content updated to: About');
  //  return;
  //     mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  //     console.log('Main content updated to:', event.target.textContent);
  // }
});