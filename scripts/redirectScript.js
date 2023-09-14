fetch('menu/menu.html')
.then(response => response.text())
.then(menuContent => {
    document.getElementById('navMenu').innerHTML = menuContent;
});