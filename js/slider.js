const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
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
		  slideShadows : false
		}
	 },
	 breakpoints: {
		768 :{
		enabled: false
		}
	  }
});

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
