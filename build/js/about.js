window.addEventListener('load', () => {
    $('.interior-list').slick({
        variableWidth: true,
        centerMode: true,
        dots: true
    })
    document.querySelector('.interior-list-wrapper .prev').addEventListener('click', () => {
        $('.interior-list').slick('slickPrev')
    })
    document.querySelector('.interior-list-wrapper .next').addEventListener('click', () => {
        $('.interior-list').slick('slickNext')
    })
})