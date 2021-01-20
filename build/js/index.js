window.addEventListener('load', () => {
    const header = document.querySelector('.content-team-header')
    $('.content-slider').slick({
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: true
    })

    const teamSlider = document.querySelector('.content-team-slider')
    $('.content-team-slider').slick({
        slidesToScroll: 3,
        slidesToShow: 4,
        variableWidth: true,
        infinite: false
    })
    teamSlider.style.marginLeft = `${header.getBoundingClientRect().left}px`
    teamSlider.style.width = `calc(100vw - ${header.getBoundingClientRect().left}px)`
    window.addEventListener('resize', () => {
        teamSlider.style.marginLeft = `${header.getBoundingClientRect().left}px`
        teamSlider.style.width = `calc(100vw - ${header.getBoundingClientRect().left}px)`
    })
})