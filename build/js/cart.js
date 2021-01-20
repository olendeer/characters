window.addEventListener('load', () => {
    let cartItems = document.querySelectorAll('.cart-content-items .item')
    const finalSum = document.querySelector('.cart-sum span')
    cartItems.forEach(elem => {
        elem.querySelector('.item-remove').addEventListener('click', () => {
            elem.remove()
            countFinalSum()
        })
        elem.querySelector('.plus').addEventListener('click', () => {
            let count = +elem.querySelector('.current').textContent + 1
            elem.querySelector('.current').textContent = count
            elem.querySelector('.item-info-count .count').textContent = count
            countFinalSum()
        })
        elem.querySelector('.minus').addEventListener('click', () => {
            let count = +elem.querySelector('.current').textContent - 1
            if(count < 0){
                count = 0
            }
            elem.querySelector('.current').textContent = count
            elem.querySelector('.item-info-count .count').textContent = count
            countFinalSum()
        })
    })
    function countFinalSum(){
        let count = 0;
        document.querySelectorAll('.cart-content-items .item').forEach(elem => {
            count += +elem.querySelector('.item-info-count .count').textContent * +elem.querySelector('.item-info-count .price').textContent
        })
        finalSum.textContent = count
    }
    const headerCart = document.querySelector('.header-cart')
    document.querySelector('button.cart').addEventListener('click', () => {
        headerCart.classList.add('header-cart-active')
    })
    document.querySelector('.header-cart-nav img').addEventListener('click', () => {
        headerCart.classList.remove('header-cart-active')
    })
})