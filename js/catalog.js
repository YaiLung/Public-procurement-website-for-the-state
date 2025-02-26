$(document).ready(function () {
	var pageHeight;
	var setHeightPage = function () {
		pageHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		// console.log(pageHeight);
	}
	setHeightPage();

	$('.tags-info__item').click(function () {
		$('.tags-info__item').removeClass('tags-info__item--active');
		$(this).addClass('tags-info__item--active');
		$('.tabs-info__block').removeClass('tabs-info__block--active');
		let anchor_tab = '#' + ($(this).attr("data-tab"));
		$(anchor_tab).addClass('tabs-info__block--active');
		setHeightPage();
	});

	// setHeightPage();
	let bottomBlockMargin = document.getElementById("bottom-block-margin");
	var setHeight = 0;
	var subListHeight = $('.tenders-list__item.active > ul').height();
	var tenderItem = $('.tenders-list__item');
	var footerHeight = $('#footer').height();
	tenderItem.click(function () {
		$('.tenders-list__item').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			subListHeight = $('.tenders-list__item.active > ul').height();
			var topOffset = $(this).offset().top;
			var thisHeight = $(this).height();
			var bottomOffset = pageHeight - subListHeight - topOffset - 100 - thisHeight;
			if (bottomOffset < footerHeight)
				setHeight = footerHeight - bottomOffset;
			else
				setHeight = 0;
		} else
			setHeight = 0;
		// console.log('pageHeight: ' + pageHeight + ' footerHeight: ' + footerHeight + ' setHeight: ' + setHeight + ' bottomOffset: ' + bottomOffset + ' topOffset: ' + topOffset + ' thisHeight: ' + thisHeight);
		bottomBlockMargin.style.height = setHeight + 'px';
	});

	var setZeroHeight =  function () {
		tenderItem.removeClass('active');
		subListHeight = 0;
		setHeight = 0;
		bottomBlockMargin.style.height = setHeight + 'px';
	}

	$(document).mouseup(function (e) {
		if (!tenderItem.is(e.target) && tenderItem.has(e.target).length === 0) {
			setZeroHeight();
		}
	});

	$(document).on('keyup', function (e) {
		if (e.key == "Escape") {
			setZeroHeight();
		}
	});

	if ($('.tender_search_result_block').length){
		$('#scroll-to-table').click(() => {
			$('html, body').animate({
				scrollTop: $('.tender_search_result_block').offset().top
			}, 800);
		});
		if ($('#scroll-to-table.active-scroll').length){
			$('#scroll-to-table').trigger('click');
		}

	}

	$('.switch-tender-list').click(function () {
		$('.switch-tender-list').toggleClass("active");
		$('.switch-tender-list > .trigger').toggleClass("trigger--active");
		let tenderItem = $('.tenders-list');
		tenderItem.toggleClass('tenders-list--hide');
	});

});