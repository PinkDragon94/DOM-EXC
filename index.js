document.addEventListener('DOMContentLoaded', function() {
    let topMenuEl = document.getElementById('top-menu');
    if (!topMenuEl) {
        topMenuEl = document.createElement('nav');
        topMenuEl.id = 'top-menu';
        document.body.appendChild(topMenuEl);
      }
      topMenuEl.style.height = '100%';
      topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg');
      topMenuEl.classList.add('flex-around');
    

      var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  menuLinks.forEach(function(link) {
    var aElement = document.createElement('a');
    aElement.setAttribute('href', link.href);
    aElement.textContent = link.text;
    topMenuEl.appendChild(aElement);
});
});
var mainEl = document.querySelector ('main');
console.log(mainEl);
var cssVarString = `var(--main-bg)`;
mainEl.style.backgroundColor = cssVarString;
console.log(cssVarString);
var h1El = document.createElement ('h1');
h1El.textContent = `DOM Manipulation`;
mainEl.innerHTML = '';
mainEl.appendChild(h1El);
console.log(mainEl.innerHTML);
mainEl.classList.add('flex-ctr');

var navEl = document.querySelector (`nav`);
var cssVarStringtwo = `var(--top-menu-bg)`;
navEl.style.backgroundColor = cssVarStringtwo;
navEl.style.height = `100%`;
navEl.classList.add('flex-around');
