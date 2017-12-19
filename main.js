window.addEventListener('DOMContentLoaded', init);


function init() {
    
    var params = {
        mainMenuTarget: document.querySelector('.mainmenu__list'),
        homeListClass: 'home__list',
        btnClass: 'btn',
        btnImgClass: 'btn__img',
        activeClass: '--opened',
    }

    function changeActiveClass(params) { document.addEventListener('click', function (event) {

        var listArr = document.querySelectorAll('.' + params.homeListClass),
            btnImgArr = document.querySelectorAll('.' + params.btnImgClass),
            targetAtribute = event.target.dataset.id,
            objListBefore = document.querySelector('.' + params.homeListClass + '[data-id=' + '"' + targetAtribute + '"' + ']'),
            btnImgBefore = document.querySelector('.' + params.btnClass + ' ' + '[data-id=' + '"' + targetAtribute + '"' + ']')
        
        for(i = 0; i < listArr.length; i++) {
            if (listArr[i].classList.contains(params.homeListClass + params.activeClass) && listArr[i].dataset.id !== targetAtribute) {
               
                listArr[i].classList.remove(params.homeListClass + params.activeClass);
                btnImgArr[i].classList.remove(params.btnImgClass + params.activeClass);
            } 
        }
        if (event.target.classList == params.btnClass) {
            objListBefore.classList.toggle(params.homeListClass + params.activeClass);
            btnImgBefore.classList.toggle(params.btnImgClass + params.activeClass);
        }
    })
        
    }

    changeActiveClass(params)

}