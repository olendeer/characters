window.addEventListener('load', () => {
    const dishesHeader = document.querySelector('.content-dishes-header')
    $('.dishes-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 4,
        variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
    })
    const dishesSlider = document.querySelector('.dishes-slider .slick-list')
    if(window.innerWidth > 1280){
        dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
    } else if (window.innerWidth > 1024 && window.innerWidth < 1280) {
        dishesSlider.style.paddingLeft = `${70}px`
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        dishesSlider.style.paddingLeft = `${55}px`
    } else if (window.innerWidth > 480 && window.innerWidth < 768){
        dishesSlider.style.paddingLeft = `${32}px`
    } else if (window.innerWidth < 480){
        dishesSlider.style.paddingLeft = `${30}px`
    }
    window.addEventListener('resize', () => {
        if(window.innerWidth > 1280){
            dishesSlider.style.paddingLeft = `${dishesHeader.getBoundingClientRect().left}px`
        } else if (window.innerWidth > 1024 && window.innerWidth < 1280) {
            dishesSlider.style.paddingLeft = `${70}px`
        } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
            dishesSlider.style.paddingLeft = `${55}px`
        } else if (window.innerWidth > 480 && window.innerWidth < 768){
            dishesSlider.style.paddingLeft = `${32}px`
        } else if (window.innerWidth < 480){
            dishesSlider.style.paddingLeft = `${30}px`
        }
    })
    document.querySelector('.dishes-wrapper .next').addEventListener('click', () => {
        $('.dishes-slider').slick('slickNext')
    })
    document.querySelector('.dishes-wrapper .prev').addEventListener('click', () => {
        $('.dishes-slider').slick('slickPrev')
    })
})