$(document).ready(function() {
	/* MAIN - GNB 전체메뉴 2020-09-15 추가 */
    $('.fullMenu').click(function(){
        $(this).parents('.gnb').toggleClass('allMenu');
    });
    $('.btn-smenu_all').click(function(){
        $('.fullMenu').removeClass('active');
    });
	/* MAIN - 검색 키워드 2020-09-15 추가 */
	$('.gnb_top input').click(function(){
		$('.gnb_top .key').hide();
	});
	$(".gnb_top .key").slick({
		dots: false,
		infinite: true,
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay : true,
		autoplaySpeed : 2000,
		prevArrow : false,
		nextArrow : false
	});
	/* SITEMAP 2020-09-15 수정*/
	$('.jq-sitemap').click(function(){
		$('body').css({"overflow": "hidden"}).css({"position":"fixed"});
		$('.sitemap').animate({'left':'0'}, 200 );
		$(".sitemap_dim").fadeIn(100);
	});
	$('.sitemap_dim').click(function(){
		$('body').css({"overflow": ""}).css({"position":""});
		$('.sitemap').animate({'left':'-100%'}, 300 );
		$(this).fadeOut(200);
	});
	$('.sitemap .bt_more').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).parent().removeClass('on');
			$(this).next('.sm').slideUp();
		} else {
			$('.sitemap .mm').removeClass('on');
			$('.sitemap .sm').slideUp();
			$(this).addClass('on');
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).next('.sm').slideDown();
		}
	});
	/* POPUP - CLOSE */
	$('.popup .bt.x').click(function(){
		$('body').css({"overflow": ""}).css({"position":""});
		$('.popup').addClass('hide');
	});
	$('.reply .bt.bbs').click(function(){
		$('.popup.bbs').removeClass('hide');
	});
	$('.reply .table_reply_userBoard .bt.claim').click(function(){
		$('.popup.claim').removeClass('hide');
	});
	$('.bt.question').click(function(){
		$('.popup.question').removeClass('hide');
	});
	$('.bt.cancel').click(function(){
		$('.popup.cancel').removeClass('hide');
	});
	$('.bt.agree').click(function(){
		$('.popup.agree').removeClass('hide');
	});
	$('.bt.q-delete').click(function(){
		$('.popup.q-delete').removeClass('hide');
	});
	$('.bt.c-delete').click(function(){
		$('.popup.c-delete').removeClass('hide');
	});
	$(document).on('click', '.bt.class-delete', function(){
        $('.popup.class-delete').removeClass('hide');
    });
	$('.bt.class-cancel').click(function(){
		$('.popup.class-cancel').removeClass('hide');
	});
	$('.bt.result').click(function(){
		$('.popup.result').removeClass('hide');
	});

	/* TAP */
	$('.tap-movie').click(function(){
		$(this).siblings('.tap-movie').removeClass('on');
		$(this).addClass('on');
		$(this).parent('.tap').siblings('.tapview').children('.tapc').removeClass('on');
		$(this).parent('.tap').siblings('.tapview').children('.tapc').eq($(this).index()).addClass('on');
	});
	$('.tapt').click(function(){
	   $(this).siblings('.tapt').removeClass('on');
	   $(this).addClass('on');
	   $(this).parent('.tap').siblings('.tapview').children('.tapc').removeClass('on');
	   $(this).parent('.tap').siblings('.tapview').children('.tapc').eq($(this).index()).addClass('on');
	});

    /* HEADER SCROLL 2020-09-15 수정 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('fix');
			$('.path').addClass('fix');
			$('body #spaceTop').addClass('ptSub');
            $('.visual#spaceTop').addClass('main-mt');
            //$('.container#spaceTop').addClass('sub-mt');
        } else {
            $('header').removeClass('fix');
			$('.path').removeClass('fix');
			$('body #spaceTop').removeClass('ptSub');
            $('.visual#spaceTop').removeClass('main-mt');
            //$('.container#spaceTop').removeClass('sub-mt');
        }
    });
	/* LNB 2020-09-15 추가 */
	$('.lnb .bt.drop').click(function(){
		$(this).parent().toggleClass('on').siblings().removeClass('on');
		if ($(window).width() < 769){
			$(this).next('ul').slideToggle();
		}
	});
	$('.lnb p.mm').click(function(){
		$(this).next('span').slideToggle();
	});

	/* GO TO TOP */
	$(".footer .bt.top").hide();
    $(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.footer .bt.top').fadeIn();
            } else {
                $('.footer .bt.top').fadeOut();
            }
        });
        $('.footer .bt.top').click(function () {
            $('body,html').animate({scrollTop: 0}, 500);
            return false;
        });
    });

    /* CLASS TITLE - SLIDER */
	var slideMenu = 0;
	$('.csl-tit').click(function(){
		if(slideMenu == 0){
			$('.csl-ul').stop().slideDown(500);
			slideMenu = slideMenu +1;
		}else if(slideMenu >= 1){
			$('.csl-ul').stop().slideUp(500);
			slideMenu = 0;
		}
	});

	/* SELECT */
    $('select').change(function() {
        var selectText = $(this).children('option:selected').text();
        $(this).siblings('label').text(selectText);
    });
	/* SEARCH FILE */
    $('input[type="file"]').change(function(){
        var inputVal = $(this).val();
		var tag = "<div class='flie'>"+inputVal+"<button type='button' class='bt ico del' onclick='$(this).parent().remove();'><i>삭제</i></button></div>";
		$('div.flie').remove();
		$('ul li.add').append(tag);
    });

    /* TEMPLATE */
    $('.template .bt.ico.arrow').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.template').removeClass('on');
        } else {
            $(this).addClass('on');
            $('.template').addClass('on');
        }
    });

	/* ToggleClass */
	$(".btn_myBook").click(function(){
		$(this).siblings(".m-box").toggleClass("active");
	});
	$(".btn_down").click(function(){
		$(this).siblings(".m-box").toggleClass("active");
	});

	/* INTRODUCE - CHECKBOX.ETC*/
	$('.combo.etc input[type="checkbox"]').click(function(){
		var chk = $(this).is(':checked');
		if(chk) $('.myInfo').focus().attr('readonly',false).attr('disabled',false);
		else  $('.myInfo').blur().attr('readonly',true).attr('disabled',false);
	});

	/* CLASSES - SLIDER */
	 $(".classSlide")
		.on('init reInit beforeChange', function(event,slick,currentSlide,nextSlide){
			 console.log(nextSlide)
			if(nextSlide > 9 && nextSlide < slick.slideCount) {
				$('.slick-dots li').eq(9).addClass("none-active")
			} else {
				$('.slick-dots li').eq(9).removeClass("none-active")
			}
			for(i = 10; i < slick.slideCount; i++) {
				$('.slick-dots li').eq(i).addClass("off")
			}
		})
		.slick({
		touchMove : true,
		dots: true,
		infinite: true,
		slidesToShow: 1,	//1개씩 보여줌
		slidesToScroll: 1,	//1개씩 이동
		prevArrow : $(".arrow-slide.prev"),	//이전 버튼
		nextArrow : $(".arrow-slide.next")	//다음 버튼
	});
	/* MYSCHOOL - SLIDER */
    const settings = {
        touchMove : true,
        dots: false,
        infinite: true,
        slidesToShow: 3,	//3개씩 보여줌
        slidesToScroll: 1,	//1개씩 이동
        prevArrow : $(".arrow-slide.prev"),	//이전 버튼
        nextArrow : $(".arrow-slide.next"),		//다음 버튼
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
            },
            {
                breakpoint: 769,
                settings: "unslick"
            }
        ]
    };

    var sl =  $('.t-Slide').slick(settings);

    $(window).on('resize', function() {
       if( $(window).width() > 980 &&  !sl.hasClass('slick-initialized')) {
             $('.t-Slide').slick(settings);
        }
    });


});