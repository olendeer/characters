window.addEventListener('load', () => {
    const header = document.querySelector('.recommendation-header')
    $('.recommendation-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 4,
        variableWidth: true,
        infinite: false
    })
    const slider = document.querySelector('.recommendation-slider .slick-list')
    slider.style.paddingLeft = `${header.getBoundingClientRect().left}px`
    window.addEventListener('resize', () => {
        slider.style.paddingLeft = `${header.getBoundingClientRect().left}px`
    })
    document.querySelector('.recommendation-body .next').addEventListener('click', () => {
        $('.recommendation-slider').slick('slickNext')
    })
    document.querySelector('.recommendation-body .prev').addEventListener('click', () => {
        $('.recommendation-slider').slick('slickPrev')
    })

    const orderItems = document.querySelectorAll('.cart-list .cart-list-item')
    const finalOrderSum = document.querySelectorAll('.final-order-sum span')
    orderItems.forEach(elem => {
        elem.querySelector('.plus').addEventListener('click', () => {
            let count = +elem.querySelector('.current').textContent + 1
            let priceItem = +elem.querySelector('.cart-list-item-price span').textContent
            let finalPriceItem = elem.querySelector('.cart-list-item-final-price span')
            elem.querySelector('.current').textContent = count
            finalPriceItem.textContent = count * priceItem
            countFinalSum()
        })
        elem.querySelector('.minus').addEventListener('click', () => {
            let count = +elem.querySelector('.current').textContent - 1
            if(count < 0){
                count = 0
            }
            let priceItem = +elem.querySelector('.cart-list-item-price span').textContent
            let finalPriceItem = elem.querySelector('.cart-list-item-final-price span')
            elem.querySelector('.current').textContent = count
            finalPriceItem.textContent = count * priceItem
            countFinalSum()
        })
        elem.querySelector('.cart-list-item-remove').addEventListener('click', () => {
            elem.remove()
            countFinalSum()
        })
    })
    function countFinalSum(){
        let count = 0;
        document.querySelectorAll('.cart-list .cart-list-item').forEach(elem => {
            count += +elem.querySelector('.cart-list-item-final-price span').textContent
        })
        finalOrderSum.forEach(elem => {
            elem.textContent = count
        })
    }

    const orderTypes = document.querySelectorAll('.order-type')
    orderTypes.forEach(elem => {
        elem.addEventListener('click', () => {
            orderTypes.forEach(item => item.classList.remove('order-type-active'))
            elem.classList.add('order-type-active')
            if(elem.classList.contains('delivery')){
                document.querySelector('.order-wrapper-body.delivery').style.display = 'flex'
                document.querySelector('.order-wrapper-body.pickup').style.display = 'none'
            } else {
                document.querySelector('.order-wrapper-body.delivery').style.display = 'none'
                document.querySelector('.order-wrapper-body.pickup').style.display = 'flex'
            }
        })
    })

    const payPopup = document.querySelector('.pay-popup')
    const thanksPopup = document.querySelector('.thanks-popup')
    document.querySelector('.content-order .pay-wrapper .order-place').addEventListener('click', () => {
        payPopup.classList.add('pay-popup-active')
        window.document.documentElement.style.overflowY = "hidden"
    })
    document.querySelector('.pay-popup-content-close').addEventListener('click', () => {
        payPopup.classList.remove('pay-popup-active')
        window.document.documentElement.style.overflowY = "unset"
    })
    document.querySelector('.pay-popup-content-list').addEventListener('click', () => {
        payPopup.classList.remove('pay-popup-active')
        thanksPopup.classList.add('thanks-popup-active')
    })
    payPopup.addEventListener('click', (event) => {
        if(event.target.classList.contains('pay-popup-active')){
            payPopup.classList.remove('pay-popup-active')
            window.document.documentElement.style.overflowY = 'unset'
        }
    })
    document.querySelector('.thanks-popup-content-close').addEventListener('click', () => {
        thanksPopup.classList.remove('thanks-popup-active')
        window.document.documentElement.style.overflowY = "unset"
    })
    thanksPopup.addEventListener('click', (event) => {
        if(event.target.classList.contains('thanks-popup-active')){
            thanksPopup.classList.remove('thanks-popup-active')
            window.document.documentElement.style.overflowY = 'unset'
        }
    })
})