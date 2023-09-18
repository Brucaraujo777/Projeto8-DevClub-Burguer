
const showAllButton = document.querySelector('.show-all')
const mapAllButton = document.querySelector('.map-all')
const sumAllButton = document.querySelector('sum-all')
const filterButton = document.querySelector('.filter-vegan')
const list = document.querySelector('.list-all')

const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
  ]

function showAll (items) {

    let newLi = ''

    items.forEach(item => {
        newLi = newLi + `
            <li>
            <img src="${item.src}">
            <p class="burguer-name">${item.name}</p>
            <p class="burguer-price">${item.price}</p>
            </li>
        `
    });
    list.innerHTML = newLi   

}

showAllButton.addEventListener('click', () => showAll(menuOptions))
