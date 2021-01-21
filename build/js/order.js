window.addEventListener('load', () => {
    const orderPopup = document.querySelector('.order')
    document.querySelector('.link-order').addEventListener('click', (event) => {
        event.preventDefault()
        orderPopup.classList.add('order-active')
        window.document.documentElement.style.overflowY = 'hidden'
    })
    document.querySelector('.order-close').addEventListener('click', () => {
        orderPopup.classList.remove('order-active')
        window.document.documentElement.style.overflow = 'unset'
    })
    orderPopup.addEventListener('click', (event) => {
        if(event.target.classList.contains('order-active')){
            orderPopup.classList.remove('order-active')
            window.document.documentElement.style.overflowY = 'unset'
        }
    })

    const orderItems = document.querySelectorAll('.order-products .product-item-cart')
    const finalOrderSum = document.querySelectorAll('.final-order-sum span')
    orderItems.forEach(elem => {
        elem.querySelector('.plus').addEventListener('click', () => {
            let count = +elem.querySelector('.current').textContent + 1
            let priceItem = +elem.querySelector('.product-item-cart-price span').textContent
            let finalPriceItem = elem.querySelector('.product-item-cart-final-price span')
            elem.querySelector('.current').textContent = count
            finalPriceItem.textContent = count * priceItem
            countFinalSum()
        })
        elem.querySelector('.minus').addEventListener('click', () => {
            let count = +elem.querySelector('.current').textContent - 1
            if(count < 0){
                count = 0
            }
            let priceItem = +elem.querySelector('.product-item-cart-price span').textContent
            let finalPriceItem = elem.querySelector('.product-item-cart-final-price span')
            elem.querySelector('.current').textContent = count
            finalPriceItem.textContent = count * priceItem
            countFinalSum()
        })
        elem.querySelector('.product-item-cart-remove').addEventListener('click', () => {
            elem.remove()
            countFinalSum()
        })
    })
    function countFinalSum(){
        let count = 0;
        document.querySelectorAll('.order-products .product-item-cart').forEach(elem => {
            count += +elem.querySelector('.product-item-cart-final-price span').textContent
        })
        finalOrderSum.forEach(elem => {
            elem.textContent = count
        })
    }
    document.querySelectorAll('.dropdown').forEach(elem => {
        elem.querySelector('.dropdown-active').addEventListener('click', () => {
            elem.classList.toggle('active')
        })
        elem.querySelectorAll('.dropdown-list-item').forEach(item => {
            item.addEventListener('click', () => {
                elem.querySelector('.dropdown-active span').textContent = item.textContent
                item.parentElement.parentElement.classList.remove('active')
            })
        })
    })
    const orderTypes = document.querySelectorAll('.order-type')
    orderTypes.forEach(elem => {
        elem.addEventListener('click', () => {
            orderTypes.forEach(item => item.classList.remove('order-type-active'))
            elem.classList.add('order-type-active')
            if(elem.classList.contains('delivery')){
                document.querySelector('.delivery-body').style.display = 'block'
                document.querySelector('.pickup-body').style.display = 'none'
            } else {
                document.querySelector('.delivery-body').style.display = 'none'
                document.querySelector('.pickup-body').style.display = 'flex'
            }
        })
    })
})