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
    if(window.innerWidth > 1280){
        teamSlider.style.marginLeft = `${header.getBoundingClientRect().left}px`
        teamSlider.style.width = `calc(100vw - ${header.getBoundingClientRect().left}px)`
    } else if(window.innerWidth > 1024 && window.innerWidth < 1280) {
        teamSlider.style.marginLeft = `70px`
        teamSlider.style.width = `calc(100vw - 70px)`
    } else if(window.innerWidth > 768 && window.innerWidth < 1024) {
        teamSlider.style.marginLeft = `55px`
        teamSlider.style.width = `calc(100vw - 55px)`
    } else if (window.innerWidth > 480 && window.innerWidth < 768){
        teamSlider.style.marginLeft = `32px`
        teamSlider.style.width = `calc(100vw - 32px)`
    } else if (window.innerWidth < 480){
        teamSlider.style.marginLeft = `30px`
        teamSlider.style.width = `calc(100vw - 30px)`
    }
    window.addEventListener('resize', () => {
        if(window.innerWidth > 1280){
            teamSlider.style.marginLeft = `${header.getBoundingClientRect().left}px`
            teamSlider.style.width = `calc(100vw - ${header.getBoundingClientRect().left}px)`
        } else if(window.innerWidth > 1024 && window.innerWidth < 1280) {
            teamSlider.style.marginLeft = `70px`
            teamSlider.style.width = `calc(100vw - 70px)`
        } else if(window.innerWidth > 768 && window.innerWidth < 1024) {
            teamSlider.style.marginLeft = `55px`
            teamSlider.style.width = `calc(100vw - 55px)`
        } else if (window.innerWidth > 480 && window.innerWidth < 768){
            teamSlider.style.marginLeft = `32px`
            teamSlider.style.width = `calc(100vw - 32px)`
        } else if (window.innerWidth < 480){
            teamSlider.style.marginLeft = `30px`
            teamSlider.style.width = `calc(100vw - 30px)`
        }
    })
})