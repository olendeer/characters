window.addEventListener('load', () => {
    const popup = document.querySelector('.product-card')
    document.querySelector('.product-card-content .product-remove').addEventListener('click', () => {
        popup.classList.remove('product-card-active')
        window.document.documentElement.style.overflowY = 'unset'
    })
    document.querySelectorAll('.product-item').forEach(elem => {
        elem.addEventListener('click', () => {
            popup.classList.add('product-card-active')
            window.document.documentElement.style.overflowY = 'hidden'
            popup.querySelector('.product-info-name').textContent = elem.querySelector('.item-name').textContent
            popup.querySelector('.product-info-title').textContent = elem.querySelector('.item-info').textContent
            popup.querySelector('.product-info-price span').textContent = elem.querySelector('.item-price-wrapper .price span').textContent
            popup.querySelector('.product-img').setAttribute('src', elem.querySelector('img').getAttribute('src'))
        })
    })
    popup.addEventListener('click', (event) => {
        if(event.target.classList.contains('product-card-active')){
            popup.classList.remove('product-card-active')
            window.document.documentElement.style.overflowY = 'unset'
        }
    })
})