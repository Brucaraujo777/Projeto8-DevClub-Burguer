
const showAllButton = document.querySelector('.show-all')
const mapAllButton = document.querySelector('.map-all')
const sumAllButton = document.querySelector('sum-all')
const filterButton = document.querySelector('.filter-vegan')
const list = document.querySelector('.list')

const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
  ]

  function format(value){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function showAll(items){

    let newLi = ''

    items.forEach(item => {
        newLi = newLi + `
            <li>
                <img src="${item.src}">
                <p>${item.name}</p>
                <p class="price">${format(item.price)}</p>
            </li>
        `
    })

    list.innerHTML = newLi
}

function mapAll(){
    const newPrice = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9,
    }))

    showAll(newPrice)
}

function sumAllItems(){
    const totalValue = menuOptions.reduce( (acc, cur) => {
        return acc + cur.price
    }, 0)

    list.innerHTML = `
        <li>A soma de todos os items do menu: <p class="price">${format(totalValue)}</p></li>
    `
}

function filterJustVegan(){
    const justVegan = menuOptions.filter(item => item.vegan)

    showAll(justVegan)
}

showAllButton.addEventListener('click', () => showAll(menuOptions))
mapButton.addEventListener('click', mapAll)
sumAll.addEventListener('click', sumAllItems)
filter.addEventListener('click', filterJustVegan)

/*
function mapAll(){
    
const newPrice = menuOptions.map(value => value.price * 0.9)

console.log(newPrice)

}

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
*/