const body = document.body
const listShowAll = body.querySelector('.services__list')
const btnShowMore = body.querySelector('.services__btn-show-more')

btnShowMore.addEventListener('click', function() {
	btnShowMore.classList.toggle('services__btn-show-more--open')
	listShowAll.classList.toggle('services__list--show-all')
	if(btnShowMore.classList.contains('services__btn-show-more--open')){
		btnShowMore.textContent = 'Скрыть'
	}else {
		btnShowMore.textContent = 'Показать всё'
	}
})


let slider
const breakpointSwiper = window.matchMedia('(max-width: 768px)')
const swiper = body.querySelector('.swiper')
function createSlider() {
  if (breakpointSwiper.matches) {
   slider = new Swiper('.swiper', {
      slidesPerView: 'auto',
		loop: true,
	 	speed: 1000,
	 	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		}
   })
   } else {
    	if (swiper.classList.contains('swiper-horizontal')) {
        slider.destroy()
    	}
  }
}

createSlider()

breakpointSwiper.addEventListener('change', createSlider)