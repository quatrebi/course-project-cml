function setPoint(event) {
	/* Метод для установки позиции элемента */
	let enterPoint = {
		x: event.pageX - $(this).offset().left,
		y: event.pageY - $(this).offset().top
	};
	$(this).find("span").css({
		top: enterPoint.y,
		left: enterPoint.x
	});
}

$(document).ready(function() {
	/* Применение эффекта "появления"" */
	ScrollReveal().reveal(".card");
});

/* Обрабатываем события вхождения мыши */
$("#our_work .card").mouseenter(setPoint).mouseleave(setPoint);
/* Применение эффекта параллакса */
$(".card").tilt({
	maxTilt: 2,
    glare: true,
	maxGlare: .25,
	scale: 1.05
});

let lastScrollTop = 0;
$(window).scroll(function() {
	let curScrollTop = $(this).scrollTop();
	if (header.getBoundingClientRect().bottom < 0) {
		header__menu.classList.add("menu_fixed_top");
	}
	else {
		header__menu.classList.remove("menu_fixed_top");
		$("#header__menu").css("transition", "none");
	}

	if (curScrollTop < lastScrollTop) {
		$(".menu_fixed_top").css({
			transition: "opacity .25s ease-out",
			opacity: 1
		});
	}	
	else $(".menu_fixed_top").css("opacity", 0);

	lastScrollTop = curScrollTop;
});