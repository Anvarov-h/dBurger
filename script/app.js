const products = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        img: './images/products/burger-1.png',
        amount: 0,
        get totalSumm() {
            return this.price * this.amount
        }
    },
    light: {
        name: 'Light',
        price: 26000,
        img: './images/products/burger-2.png',
        amount: 0,
        get totalSumm() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: 'CheeseBurger',
        price: 29000,
        img: './images/products/burger-3.png',
        amount: 0,
        get totalSumm() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: 'dBurger',
        price: 24000,
        img: './images/products/burger-4.png',
        amount: 0,
        get totalSumm() {
            return this.price * this.amount
        }
    },
}

const basketBtn = document.querySelector('.wrapper__navbar-btn'),
    closeBasketModal = document.querySelector('.wrapper__navbar-close'),
    productsBtn = document.querySelectorAll('.wrapper__list-btn'),
    basketChecklist = document.querySelector('.wrapper__navbar-checklist'),
    basketBtnCount = document.querySelector('.wrapper__navbar-count'),
    basketModal = document.querySelector('.wrapper__navbar-basket'),
    btnCard = document.querySelector('.wrapper__navbar-bottom'),
    totalPriceBasket = document.querySelector('.wrapper__navbar-totalprice'),
    printBody = document.querySelector('.print__body'),
    printFooter = document.querySelector('.print__footer');
    
document.addEventListener('click', function (e){
    if(e.target == basketBtn) {
        basketModal.classList.add('active')
    }else if(e.target == closeBasketModal) {
        basketModal.classList.remove('active')
    }
    if (e.target.classList.contains('wrapper__navbar-symbol')) {
        const symbol = e.target.innerHTML,
        parent = e.target.closest('.wrapper__navbar-option')
        if (parent) {
            const idProduct = parent.getAttribute('id').split('_')[0].toLowerCase();
            symbol == '+' ? products[idProduct].amount++ : products[idProduct].amount--
            basket()
        }
    }
})

productsBtn.forEach(el => {
    el.addEventListener('click', function (e) {
        plusOrMinus(this)
    })
})
function plusOrMinus(btn) {
    let parent = btn.closest('.wrapper__list-card'),
    parentId = parent.getAttribute('id');
    products[parentId].amount++
    basket()
}
function basket() {
    const productsArray = [];
    let totalCount = 0
    for (const key in products) {
        const po = products[key]
        const productsCard = document.querySelector(`#${key}`),
        parentIndecator = productsCard.querySelector('.wrapper__list-count')
        if(po.amount > 0) {
            productsArray.push(po)
            basketBtnCount.classList.add('active')
            totalCount += po.amount
            parentIndecator.classList.add('active')
            parentIndecator.innerHTML = po.amount
        }else{
            parentIndecator.classList.remove('active')
            parentIndecator.innerHTML = 0
        }
        basketBtnCount.innerHTML = totalCount
    }
    basketChecklist.innerHTML = null
    for (let i = 0; i < productsArray.length; i++) {
        const el = productsArray[i];
        basketChecklist.innerHTML += createItemBurger(el)
    }
    totalPriceBasket.innerHTML = totalPriceProducts()
}

function createItemBurger(product) {
    const { name, totalSumm: price, img, amount } = product;
    return ` <div class="wrapper__navbar-product">
    <div class="wrapper__navbar-info">
        <img src="${img}" alt="" class="wrapper__navbar-productImg">
        <div class="wrapper__navbar-infoSub">
            <p class="wrapper__navbar-infoName">${name}</p>
            <p class="wrapper__navbar-infoPrice">${price} so'm</p>
        </div>
    </div>
    <div class="wrapper__navbar-option" id="${name}__card">
        <button class="wrapper__navbar-symbol">-</button>
        <output class="wrapper__basket-count">${amount}</output>
        <button class="wrapper__navbar-symbol">+</button>
    </div>
</div>`
}


function totalPriceProducts() {
    let totalPrice = 0
    for (const key in products) {
        totalPrice += products[key].totalSumm
    }
    return totalPrice
}


btnCard.addEventListener('click' , function () {
    printBody.innerHTML = ''
    for (const key in products) {
       const {name, totalSumm, amount} = products[key]
       if (amount > 0) {
        printBody.innerHTML += `
        <div class="print__item"> 
            <p class="print__name">
            <span>${name}</span>
            <span>${amount}</span>
            </p>
            <p class="print__summ">${totalSumm}</p>
            </div>
        `
       }
    }
    printFooter.innerHTML = totalPriceProducts()
    window.print()
})
    
