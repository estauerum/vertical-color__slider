window.addEventListener('DOMContentLoaded', () => {
    let upBtn = document.querySelector('.up-button'),
        downBtn = document.querySelector('.down-button'),
        sideBar = document.querySelector('.sidebar'),
        mainSlide = document.querySelector('.main-slide'),
        slidesCount = mainSlide.querySelectorAll('div').length, //получаем количество дивов (цифра)
        activeSlideIndex = 0,
        container = document.querySelector('.container');

    sideBar.style.top = `-${(slidesCount - 1)*100}vh`

    

    upBtn.addEventListener('click', () => {
        changeSlide('up')
    })

    downBtn.addEventListener('click', () => {
        changeSlide('down')
    })

    function changeSlide (direction) {
        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0
            }
        } else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0 ) {
                activeSlideIndex = slidesCount - 1
            }
        }

        let height = container.clientHeight //получаем высоту экрана

        mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`
        sideBar.style.transform = `translateY(${activeSlideIndex*height}px)`

    }

    
})