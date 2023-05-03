if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
   .test(navigator.userAgent)) {

		if (window.matchMedia('(max-width: 768px)').matches) {
			const swiper = new Swiper('.swiper', {
			  slidesPerView: 'auto',
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
			  }
			});
		 }
	}

const listShowAll = document.querySelector('.services__list')
const btnShowMore = document.querySelector('.services__btn-show-more')

btnShowMore.addEventListener('click', function() {
	btnShowMore.classList.toggle('services__btn-show-more--open')
	listShowAll.classList.toggle('services__list--show-all')
	if(btnShowMore.classList.contains('services__btn-show-more--open')){
		btnShowMore.textContent = 'Скрыть'
	}else {
		btnShowMore.textContent = 'Показать всё'
	}
})