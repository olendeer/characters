window.addEventListener('load', () => {
    // const dishesSlider = document.querySelector('.dishes-slider .slick-list')
    const dishesHeader = document.querySelector('.content-dishes-header')
    $('.content-slider').slick({
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: true
    })
    // console.log(dishesHeader.getBoundingClientRect().left)
    // dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
    // dishesSlider.style.transform = `translateX(-${dishesHeader.getBoundingClientRect().left}px)`
    $('.dishes-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 4,
        // centerMode: true,
        variableWidth: true,
        // dots: true,
        infinite: false
    })

    document.querySelector('.dishes-wrapper .next').addEventListener('click', () => {
        $('.dishes-slider').slick('slickNext')
    })
    document.querySelector('.dishes-wrapper .prev').addEventListener('click', () => {
        $('.dishes-slider').slick('slickPrev')
    })

    const dishesSlider = document.querySelector('.dishes-slider .slick-list')
    dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
    window.addEventListener('resize', () => {
        dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
    })

})