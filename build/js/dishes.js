window.addEventListener('load', () => {
    const dishesHeader = document.querySelector('.content-dishes-header')
    $('.dishes-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 4,
        variableWidth: true,
        infinite: false
    })
    const dishesSlider = document.querySelector('.dishes-slider .slick-list')
    dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
    window.addEventListener('resize', () => {
        dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
    })
    document.querySelector('.dishes-wrapper .next').addEventListener('click', () => {
        $('.dishes-slider').slick('slickNext')
    })
    document.querySelector('.dishes-wrapper .prev').addEventListener('click', () => {
        $('.dishes-slider').slick('slickPrev')
    })
})