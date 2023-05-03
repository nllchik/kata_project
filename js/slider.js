if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
   .test(navigator.userAgent)) {

		const swiper = new Swiper('.swiper', {

			slidesPerView: 'auto',
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			speed: 1000,
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			coverflowEffect: {
				rotate: 0,
				stretch: 200,
				depth: 200,
				modifier: 1,
				slideShadows : false,
			}
		   }
		})
	}

let listShowAll = document.querySelector('.slider__list')
console.log(listShowAll)
let btnShowMore = document.querySelector('.slider__btn-show-more')

btnShowMore.addEventListener('click', function() {

	if(!btnShowMore.classList.contains('slider__btn-show-more--open')){
		btnShowMore.classList.add('slider__btn-show-more--open')
		btnShowMore.textContent = 'Скрыть'
		listShowAll.classList.add('slider__list--show-all')
	}else {
		btnShowMore.classList.remove('slider__btn-show-more--open')
		listShowAll.classList.remove('slider__list--show-all')
		btnShowMore.textContent = 'Показать всё'
	}
});