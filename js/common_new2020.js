// JavaScript Document

//1113 수정
var filter = "win16|win32|win64|mac|macintel";

$(document).ready(function() {
	/* SLIDER */
	if ( navigator.platform ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {	//모바일
			//0408 공지사항 추가
			$(".sliderOnline1").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				prevArrow : $(".prevArrow1"),	//이전 버튼
				nextArrow : $(".nextArrow1")		//다음 버튼
			});
			$(".sliderOnline2").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				prevArrow : $(".prevArrow2"),	//이전 버튼
				nextArrow : $(".nextArrow2")		//다음 버튼
			});
			$(".sliderOnline3").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				prevArrow : $(".prevArrow3"),	//이전 버튼
				nextArrow : $(".nextArrow3")		//다음 버튼
			});
			$(".sliderOnline4").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				prevArrow : $(".prevArrow4"),	//이전 버튼
				nextArrow : $(".nextArrow4")		//다음 버튼
			});
			$(".sliderList3").slick({	//EBSe 홍보교사(서포트)
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 2,		//1개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")			//다음 버튼
			});
			$(".sliderList4").slick({	//통합검색 search
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 2,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")			//다음 버튼
			});
			$(".sliderList5").slick({	//에그붐 미션게임 , 펀리딩 리딩 Reading룸
				dots: false,
				infinite: true,
				slidesToShow: 1,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")		//다음 버튼
			});
			$(".sliderList6").slick({	//에그붐 스터디게임, 펀리딩 학습하기 Learning 룸
				dots: false,
				infinite: true,
				slidesToShow: 1,		//1개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow1"),		//이전 버튼
				nextArrow : $(".nextArrow1")		//다음 버튼
			});
			$(".sliderList7").slick({	//에그붐 레벨 알 스터디
				dots: false,
				infinite: true,
				slidesToShow: 1,		//1개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow2"),		//이전 버튼
				nextArrow : $(".nextArrow2")		//다음 버튼
			});
			$(".sliderMevent").slick({	//index 이벤트
				dots: false,
				infinite: true,
				slidesToShow: 2,		//1개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow2"),		//이전 버튼
				nextArrow : $(".nextArrow2")		//다음 버튼
			});
			//1116 이클립 추가
			$(".sliderList_eclip").slick({	//e클립 모바일만, 방송프로그램
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 1,	//1개씩 보여줌
				slidesToScroll: 1,	//1개씩 이동
				prevArrow : $(".prevArrow"),	//이전 버튼
				nextArrow : $(".nextArrow")		//다음 버튼
			  });
			$(".sliderMain6").slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 4000,
				prevArrow : false,	//이전 버튼
				nextArrow : false
			});
			$(".sliderMain7").slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 4000,
				prevArrow : false,	//이전 버튼
				nextArrow : false
			});
		} else { //PC
			//0408 공지사항 추가
			$(".sliderOnline1").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow : $(".prevArrow1"),	//이전 버튼
				nextArrow : $(".nextArrow1")		//다음 버튼
			});
			$(".sliderOnline2").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow : $(".prevArrow2"),	//이전 버튼
				nextArrow : $(".nextArrow2")		//다음 버튼
			});
			$(".sliderOnline3").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow : $(".prevArrow3"),	//이전 버튼
				nextArrow : $(".nextArrow3")		//다음 버튼
			});
			$(".sliderOnline4").slick({
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow : $(".prevArrow4"),	//이전 버튼
				nextArrow : $(".nextArrow4")		//다음 버튼
			});
			$(".sliderList3").slick({	//EBSe 홍보교사(서포트)
				dots: false,
				infinite: true,
				slidesToShow: 5,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")			//다음 버튼
			});
			$(".sliderList4").slick({	//통합검색 search
				dots: true,
				infinite: true,
				slidesToShow: 4,		//4개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")			//다음 버튼
			});
			$(".sliderList5").slick({	//에그붐 미션게임 , 펀리딩 리딩 Reading룸
				dots: false,
				infinite: true,
				slidesToShow: 2,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")		//다음 버튼
			});
			$(".sliderList6").slick({	//에그붐 스터디게임, 펀리딩 학습하기 Learning 룸
				dots: false,
				infinite: true,
				slidesToShow: 2,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow1"),		//이전 버튼
				nextArrow : $(".nextArrow1")		//다음 버튼
			});
			$(".sliderList7").slick({	//에그붐 레벨 알 스터디
				dots: false,
				infinite: true,
				slidesToShow: 2,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow2"),		//이전 버튼
				nextArrow : $(".nextArrow2")		//다음 버튼
			});
			$(".sliderMevent").slick({
				dots: false,
				infinite: true,
				slidesToShow: 4,		//4개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow2"),		//이전 버튼
				nextArrow : $(".nextArrow2")			//다음 버튼
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

			$(".sliderMain6").slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 4000,
				prevArrow : false,	//이전 버튼
				nextArrow : false
			});
			$(".sliderMain7").slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 4000,
				prevArrow : false,	//이전 버튼
				nextArrow : false
			});

			if($(".sliderList_eclip").hasClass("slick-initialized")) $(".sliderList_eclip").slick('unslick');
		}
    }

	/* 2020-08-13 onAIR  */
	$(".slider_onair").slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed:300,
		cssEase: 'ease-in',
		prevArrow : $(".prevArrow1"),		//이전 버튼
		nextArrow : $(".nextArrow1"),			//다음 버튼
		responsive: [
			{
			 breakpoint: 980,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerMode: true,
				centerPadding: '0'
			  }
			}
		  ]
	});

	/* 띠배너 */
	$(".top_banner").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay : true,
		vertical: true,
		autoplaySpeed : 3000,
		prevArrow : $(".prevArrow6"),		//이전 버튼
		nextArrow : $(".nextArrow6")		//다음 버튼
	});

	  jQuery.fn.exists = function(){ return this.length > 0; }
	  if (!($(".promotion_banner").length)) {
		$('.goal_banner .bt.close').off().on('click', function(){
		  $('.goal_banner').hide();
		  $('body.main .visual').removeClass("ban_goal_all goal_close").addClass("ban_close");
		});
	  }

	  if (!($(".goal_banner").length)) {
		$('.promotion_banner .bt.close').off().on('click', function(){
		  $('.promotion_banner').hide();
		  $('body.main .visual').removeClass("ban_goal_all goal_close").addClass("ban_close");
		});
	  }

	  if ($(".promotion_banner").exists() && $(".goal_banner").exists()) {
		$('body.main .visual').addClass("ban_goal_all");
		$('.goal_banner .bt.close').off().on('click', function(){
		  $('.goal_banner').hide();
		  $('body.main .visual').removeClass("ban_close ban_goal_all").addClass("goal_close");
		  $('.promotion_banner .bt.close').off().on('click', function(){
			$('.promotion_banner').hide();
			$('body.main .visual').removeClass("goal_close ban_goal_all").addClass("ban_close");
		  });
		});
		$('.promotion_banner .bt.close').off().on('click', function(){
		  $('.promotion_banner').hide();
		  $('body.main .visual').removeClass("ban_close ban_goal_all").addClass("goal_close");
		  $('.goal_banner .bt.close').off().on('click', function(){
			$('.goal_banner').hide();
			$('body.main .visual').removeClass("goal_close ban_goal_all").addClass("ban_close");
		  });
		});
	  } else {
		$('body.main .visual').removeClass("ban_close ban_goal_all").addClass("goal_close");
	  }

	  if (!($(".promotion_banner").length) && !($(".goal_banner").length)) {
		$('body.main .visual').removeClass("ban_close goal_close").addClass("ban_close");
	  }

	/* MAIN SLIDER */
	if($(".sliderMain div").length > 0){
		$(".pager1 p").text("1/"+ $(".sliderMain div").length);	//최초 페이징 세팅
	}else{
		$(".pager1 p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderMain").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow : false,
		nextArrow : false,
		autoplay : true,
		autoplaySpeed : 3000,
		responsive: [
			{
			 breakpoint: 740,
			  settings: {
				dots: false,
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager1 p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
	});
	$(".page_bar_per1").animate({
			"width": (( 1 / 7 ) * 100)+"%"
		 },300);
	$(".sliderMain").on('afterChange',function(){
	  var curIdx = $(".sliderMain .slick-active").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per1").animate({
			"width": ( ((curIdx + 1) / 7 ) * 100)+"%"
		 },300);
	});
    /* 슬라이더 시작 멈춤 이벤트 */
	$(".pager button").click(function(){
		if($(this).hasClass("play")){
			$('.sliderMain').slick('slickPlay');
			$(this).removeClass("play");
			$(this).addClass("stop");
		}else{
			$('.sliderMain').slick('slickPause');
			$(this).removeClass("stop");
			$(this).addClass("play");
		}
	});

	/* MAIN SLIDER - 2  - 충돌 이슈로 주석처리 */
	/*

	if($(".sliderMain2 div").length > 0){
		$(".pager2 p").text("1/"+ $(".sliderMain2 div.card").length);	//최초 페이징 세팅
	}else{
		$(".pager2 p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderMain2").slick({
		touchMove : true,
		infinite: false,
		dots: false,
		slidesPerRow: 3,
		rows: 2,
		prevArrow : $(".prevArrow2"),		//이전 버튼
		nextArrow : $(".nextArrow2"),		//다음 버튼
		autoplay : true,
		autoplaySpeed : 3000,
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
				slidesPerRow: 3,
				rows: 1,
				dots: false,
				centerMode: false
			  }
			},
			{
			 breakpoint: 740,
			  settings: {
				slidesPerRow: 1,
				rows: 1,
				dots: false,
				centerMode: true,
				prevArrow : false,		//이전 버튼
				nextArrow : false,
				centerPadding: '50px'
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager2 p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
	});
	$(".page_bar_per2").animate({
			"width": (( 1 / 12 ) * 100)+"%"
		 },300);
	$(".sliderMain2").on('afterChange',function(){
	  var curIdx = $(".sliderMain2 .slick-center").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per2").animate({
			"width": ( ((curIdx + 1) / 12 ) * 100)+"%"
		 },300);
	});

	*/

	/* MAIN SLIDER - 3  */
	if($(".sliderMain3 div").length > 0){
		$(".pager3 p").text("1/"+ $(".sliderMain3 div.card").length);	//최초 페이징 세팅
	}else{
		$(".pager3 p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderMain3").slick({
		touchMove : true,
		infinite: false,
		dots: true,
		slidesPerRow: 4,
		rows: 1,
		prevArrow : $(".prevArrow3"),		//이전 버튼
		nextArrow : $(".nextArrow3"),		//다음 버튼
		autoplay : true,
		autoplaySpeed : 3000,
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
			  slidesPerRow: 3,
			  rows: 1,
				centerMode: false
			  }
			},
			{
			 breakpoint: 740,
			  settings: {
				slidesPerRow: 1,
				rows: 1,
				dots: false,
				centerMode: true,
				prevArrow : false,		//이전 버튼
				nextArrow : false,
				centerPadding: '50px'
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager3 p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
	});
	$(".page_bar_per3").animate({
			"width": (( 1 / 7 ) * 100)+"%"
		 },300);
	$(".sliderMain3").on('afterChange',function(){
	  var curIdx = $(".sliderMain3 .slick-center").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per3").animate({
			"width": ( ((curIdx + 1) / 7 ) * 100)+"%"
		 },300);
	});

	/* MAIN SLIDER - 4  */
	if($(".sliderMain4 div").length > 0){
		$(".pager4 p").text("1/"+ $(".sliderMain4 div.card").length);	//최초 페이징 세팅
	}else{
		$(".pager4 p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderMain4").slick({
		touchMove : true,
		infinite: false,
		dots: true,
		slidesPerRow: 4,
		rows: 1,
		prevArrow : $(".prevArrow4"),		//이전 버튼
		nextArrow : $(".nextArrow4"),		//다음 버튼
		autoplay : true,
		autoplaySpeed : 3000,
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
				slidesPerRow: 3,
				rows: 1,
				centerMode: false
			  }
			},
			{
			 breakpoint: 740,
			  settings: {
				slidesPerRow: 1,
				rows: 1,
				dots: false,
				centerMode: true,
				prevArrow : false,		//이전 버튼
				nextArrow : false,
				centerPadding: '50px'
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager4 p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
	});
	$(".page_bar_per4").animate({
			"width": (( 1 / 12 ) * 100)+"%"
		 },300);
	$(".sliderMain4").on('afterChange',function(){
	  var curIdx = $(".sliderMain4 .slick-center").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per4").animate({
			"width": ( ((curIdx + 1) / 12 ) * 100)+"%"
		 },300);
	});

	/* MAIN SLIDER - 5  */
	if($(".sliderMain5 div").length > 0){
		$(".pager5 p").text("1/"+ $(".sliderMain5 div.card").length);	//최초 페이징 세팅
	}else{
		$(".pager5 p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderMain5").slick({
		touchMove : true,
		infinite: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow : false,		//이전 버튼
		nextArrow : false,		//다음 버튼
		autoplay : true,
		autoplaySpeed : 3000,
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				centerMode: false
			  }
			},
			{
			 breakpoint: 740,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				centerMode: true,
				prevArrow : false,		//이전 버튼
				nextArrow : false,
				centerPadding: '50px'
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager5 p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
	});
	$(".page_bar_per5").animate({
			"width": (( 1 / 12 ) * 100)+"%"
		 },300);
	$(".sliderMain5").on('afterChange',function(){
	  var curIdx = $(".sliderMain5 .slick-center").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per5").animate({
			"width": ( ((curIdx + 1) / 12 ) * 100)+"%"
		 },300);
	});

	/* SUB SLIDER - 1 e클립, 방송프로그램  - 충돌 이슈로 주석처리  */
	/*

	if($(".sliderList div").length > 0){
		$(".pager p").text("1/"+ $(".sliderList div.card").length);	//최초 페이징 세팅
	}else{
		$(".pager p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderList").slick({
		touchMove : true,
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow : $(".prevArrow"),	//이전 버튼
		nextArrow : $(".nextArrow"),	//다음 버튼
		autoplay : true,
		autoplaySpeed : 3000,
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				centerMode: false
			  }
			},
			{
			 breakpoint: 740,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				infinite: false,
				centerMode: true,
				prevArrow : false,		//이전 버튼
				nextArrow : false,
				centerPadding: '50px'
			  }
			}
		  ]
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
	});
	$(".page_bar_per").animate({
			"width": (( 1 / 6 ) * 100)+"%"
		 },300);
	$(".sliderList").on('afterChange',function(){
	  var curIdx = $(".sliderList .slick-center").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per").animate({
			"width": ( ((curIdx + 1) / 6 ) * 100)+"%"
		 },300);
	});

	 */




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
    //1113 수정
	/* VISUAL and 리사이즈 */
	/*$(function(){
        $(window).resize(function () {
			$('body.main .visual').css({"height": ($('body.main .visual img').height()) +"px"});
			clearTimeout(this.id);
			this.id = setTimeout(resizeEnd, 300);	//리사이즈 후 높이가 제대로 설정 안될 경우를 고려해 0.3초후 다시한번 높이값 설정.
        });
    });*/
	function resizeEnd(){	//resize 후 호출되는 함수.
		//메인 비주얼 높이값 셀정.
		/*$('body.main .visual').css({"height": ($('body.main .visual img').height()) +"px"});*/

		//슬라이드 보여지는 수 설정.
		if ( navigator.platform ) {
			if (filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {	//모바일

			}else{	//pc
				//슬릭 초기화 (삭제)
				 //$(".sliderMevent, .sliderList, .sliderList2, .sliderList3, .sliderList4, .sliderList5, .sliderList6, .sliderList7, .sliderList_eclip").slick('unslick');
				$(".sliderOnline1, .sliderOnline2, .sliderOnline3, .sliderOnline4, .sliderMevent, .sliderList3, .sliderList4, .sliderList5, .sliderList6, .sliderList7").slick('unslick');

				if($(".sliderList_eclip").hasClass("slick-initialized")){
					$(".sliderList_eclip").slick('unslick');
					$(".bt.ico.prev.prevArrow").hide();
					$(".bt.ico.next.nextArrow").hide();
				}

				//브라우저 사이즈 마다(if else) 같은 개수가 보여진다 해도 클래스 넣어줘야 함. 아니면 슬라이드 영역이 공백처리 됨.
				if($(window).width() > 980){	//브라우저 사이즈가 980보다 크면
					//0408 공지사항 추가
					$(".sliderOnline1").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow1"),	//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderOnline2").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow2"),	//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderOnline3").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow3"),	//이전 버튼
						nextArrow : $(".nextArrow3")		//다음 버튼
					});
					$(".sliderOnline4").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow4"),	//이전 버튼
						nextArrow : $(".nextArrow4")		//다음 버튼
					});
					$(".sliderList3").slick({
						dots: false,
						infinite: true,
						slidesToShow: 5,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList4").slick({	//통합검색 search
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList5").slick({	//에그붐 미션게임 , 펀리딩 리딩 Reading룸
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList6").slick({	//에그붐 스터디게임, 펀리딩 학습하기 Learning 룸
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow1"),		//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderList7").slick({	//에그붐 레벨 알 스터디
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderMevent").slick({
						dots: false,
						infinite: true,
						slidesToShow: 4,		//4개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")			//다음 버튼
					});

				}else if($(window).width() < 981 && $(window).width() > 740){	//브라우저 사이즈가 980보다 작고 740보다 크면
					//0408 공지사항 추가
					$(".sliderOnline1").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow1"),	//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderOnline2").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow2"),	//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderOnline3").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow3"),	//이전 버튼
						nextArrow : $(".nextArrow3")		//다음 버튼
					});
					$(".sliderOnline4").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 4,
						prevArrow : $(".prevArrow4"),	//이전 버튼
						nextArrow : $(".nextArrow4")		//다음 버튼
					});
					$(".sliderList_eclip").slick({	//e클립 모바일만, 방송프로그램
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 4,	//1개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					  });
					$(".sliderList3").slick({
						dots: false,
						infinite: true,
						slidesToShow: 4,		//4개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList4").slick({	//통합검색 search
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList5").slick({	//에그붐 미션게임 , 펀리딩 리딩 Reading룸
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList6").slick({	//에그붐 스터디게임, 펀리딩 학습하기 Learning 룸
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow1"),		//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderList7").slick({	//에그붐 레벨 알 스터디
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderMevent").slick({
						dots: false,
						infinite: true,
						slidesToShow: 3,		//3개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});

				}else if($(window).width() < 741 && $(window).width() > 400){	//브라우저 사이즈가 740보다 작고 400보다 크면
					//0408 공지사항 추가
					$(".sliderOnline1").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow1"),	//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderOnline2").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow2"),	//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderOnline3").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow3"),	//이전 버튼
						nextArrow : $(".nextArrow3")		//다음 버튼
					});
					$(".sliderOnline4").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow4"),	//이전 버튼
						nextArrow : $(".nextArrow4")		//다음 버튼
					});
					$(".sliderList_eclip").slick({	//e클립 모바일만, 방송프로그램
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 1,	//1개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					  });
					$(".sliderList3").slick({
						dots: false,
						infinite: true,
						slidesToShow: 3,		//3개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList4").slick({	//통합검색 search
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList5").slick({	//에그붐 미션게임 , 펀리딩 리딩 Reading룸
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList6").slick({	//에그붐 스터디게임, 펀리딩 학습하기 Learning 룸
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow1"),		//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderList7").slick({	//에그붐 레벨 알 스터디
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderMevent").slick({
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});

				}else{	//브라우저 사이즈가 400보다 작으면
					//0408 공지사항 추가
					$(".sliderOnline1").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow1"),	//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderOnline2").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow2"),	//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderOnline3").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow3"),	//이전 버튼
						nextArrow : $(".nextArrow3")		//다음 버튼
					});
					$(".sliderOnline4").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 2,
						prevArrow : $(".prevArrow4"),	//이전 버튼
						nextArrow : $(".nextArrow4")		//다음 버튼
					});
					$(".sliderList_eclip").slick({	//e클립 모바일만, 방송프로그램
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 1,	//1개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					  });
					$(".sliderList3").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList4").slick({	//통합검색 search
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
					});
					$(".sliderList5").slick({	//에그붐 미션게임 , 펀리딩 리딩 Reading룸
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList6").slick({	//에그붐 스터디게임, 펀리딩 학습하기 Learning 룸
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow1"),		//이전 버튼
						nextArrow : $(".nextArrow1")		//다음 버튼
					});
					$(".sliderList7").slick({	//에그붐 레벨 알 스터디
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});
					$(".sliderMevent").slick({
						dots: false,
						infinite: true,
						slidesToShow: 2,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow2"),		//이전 버튼
						nextArrow : $(".nextArrow2")		//다음 버튼
					});

				}
			}
		}

	}
	/* GNB */
	$('.gnb p').click(function(){
		if($(this).hasClass('on')){
			$('.gnb p').removeClass('on');
			$(this).removeClass('on');
		} else {
			$('.gnb p').removeClass('on');
			$(this).addClass('on');
		}
	});
	/* LNB */
	$('.lnb .bt.drop').click(function(){
		$(this).parent().toggleClass('on').siblings().removeClass('on');
		if ($(window).width() < 740){
			$(this).next('ul').slideToggle();
		}
	});
	$('.lnb p.mm').click(function(){
		$(this).next('span').slideToggle();
	});
	/* SITEMAP */
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

	/* 비회원 콘텐츠 이용안내 팝업 */
	var acodian = {
	  click: function(target) {
		var _self = this,
		  $target = $(target);
		const outbox = document.querySelector(".engout");
		const accordion = document.querySelector(".accordion");

		$target.on('click', function() {
		  var $this = $(this);
		  if ($this.next('.panel').css('display') == 'none') {
			$('.panel').slideUp();
			_self.onremove($target);

			$this.addClass('on');
			$this.next().slideDown(200);

			outbox.classList.add('active');
			accordion.style.borderRadius = '10px 10px 0 0';
		  } else {
			$('.panel').slideUp(0);
			_self.onremove($target);
			outbox.classList.remove('active');
			accordion.style.borderRadius = '10px';
		  }
		});
	  },
	  onremove: function($target) {
		$target.removeClass('on');
	  }

	};
	acodian.click('.accordion');

	/* FIX 20200804 수정 */
	$(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('body.main header').addClass('fix');
				$('body.sub header').addClass('fix');
				$('.path').addClass('fix');
				$('body.sub #spaceTop').addClass('ptSub');
				//$('body.main #spaceTop').addClass('ptS');
				//$('.search#spaceTop').addClass('scSub');
            } else {
                $('body.main header').removeClass('fix');
				$('body.sub header').removeClass('fix');
				$('.path').removeClass('fix');
				$('body.sub #spaceTop').removeClass('ptSub');
				//$('body.main #spaceTop').removeClass('ptS');
				//$('.search#spaceTop').removeClass('scSub');
            }
        });
		if ($(this).scrollTop() > 0) {
			$('body.main header').addClass('fix');
			$('body.sub header').addClass('fix');
			$('.path').addClass('fix');
			$('body.sub #spaceTop').addClass('ptSub');
		} else {
			$('body.main header').removeClass('fix');
			$('body.sub header').removeClass('fix');
			$('.path').removeClass('fix');
			$('body.sub #spaceTop').removeClass('ptSub');
		}
    });

	/* MAIN */
	$('.gnb_top input').click(function(){
		$('.gnb_top .key').hide();
	});

	/* 1115 메인 레벨테스트 결과*/
	$('.result .bt.x').click(function(){
		$('.result .result_cont_v').slideToggle();
		$('.result .bt.ico').toggleClass('op');
		//$('.level').slideDown();
	});

	/* SITEMAP */
	$('.jq-sitemap').click(function(){
		//$('body').css({"overflow": "hidden"}).css({"position":"fixed"});
		$('.sitemap').animate({'left':'0'}, 200 );
		$(".sitemap_dim").fadeIn(100);
	});
	$('.sitemap_dim').click(function(){
		$('body').css({"overflow": ""}).css({"position":""});
		$('.sitemap').animate({'left':'-100%'}, 300 );
		$(this).fadeOut(200);
	});
	/* POPUP */
	//$('.jq-pop').click(function(){
	//	$('body').css({"overflow-y": "scroll"}).css({"position":"fixed"});
	//});
	$('.popup .bt.x').click(function(){
		$('body').css({"overflow": ""}).css({"position":""});
		$('.popup').addClass('hide');
	});
	$('.teacher .visual .jq-pop').click(function(){
		$('.popup.teacher').removeClass('hide');
	});
	$('.event .table .con .jq-pop').click(function(){
		$('.popup.event').removeClass('hide');
	});
	$('.exam .jq-pop').click(function(){
		$('.popup.level').removeClass('hide');
	});
	$('.comment .jq-pop').click(function(){
		$('.popup.bbs').removeClass('hide');
	});
	$('.media .jq-pop').click(function(){
		$('.popup.movie').removeClass('hide');
	});
	$('.bt.share').click(function(){
		$('.popup.share').removeClass('hide');
	});
	$('.movie > .bt.txt.jq-pop, .card > .bt').click(function(){
		$('.popup.plus').removeClass('hide');
	});
	$('.comunity.talk .filter .jq-pop').click(function(){
		$('.popup.talk').removeClass('hide');
	});
	$('.matching .jq-pop').click(function(){
		$('.popup.match.add').removeClass('hide');
	});
	$('.matching_fun').click(function(){
		$('.popup.matchFun').removeClass('hide');
	});
//	$('.vote .jq-pop, .vote_blue .jq-pop').click(function(){
//		$('.popup.vote').removeClass('hide');
//	});
	$('.bt.claim.jq-pop').click(function(){
		$('.popup.claim').removeClass('hide');
	});
	$('.reply .bt.del.jq-pop').click(function(){
		$('.popup.pw').removeClass('hide');
	});
	$('.eclip .down.jq-pop').click(function(){
		$('.popup.multdown').removeClass('hide');
	});
	$('.popup .btn_x_close').click(function(){
		$('body').css({"overflow": ""});
		$('.popup').addClass('hide');
	});
	$('.bt.fun-down').click(function(){
		$('.popup.funList').removeClass('hide');
	});
	$('.btn_funMob').click(function(){
		$('.popup.funApp').removeClass('hide');
	});
	/* LAYER */
	$('.jq-layer').click(function(){
		$(this).siblings('.pop').slideToggle();
	});
	$('.layer .pop .bt.x').click(function(){
		$('.layer .pop').slideUp();
	});
	/* TEMPLATE */
	$('.template .bt.arrow').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.template').removeClass('on');
		} else {
			$(this).addClass('on');
			$('.template').addClass('on');
		}
	});
	/* FILE LAYER */
	$('.jq-file').click(function(){
		$(this).siblings('.file').slideToggle();
	});
	$(function(){
        $(window).resize(function () {
            $('.table .tit .file').css({"top": ($('.table .tit').height()) +"px"});
        }).resize();
    });
	/* ONOFF */
	$('.jq-onoff').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
	});
	/* program - categoryTab */
	$('.filter-box .bt.drop').click(function(){
		if($(this).hasClass('on')){
			$('.filter-box .bt.drop').removeClass('on');
			$('.filter-box .bt.reset').removeClass('on');
			$(this).parents('.filter-box').removeClass('on');
			$(this).parents('.filter-box').siblings('.visual').find('.search').removeClass('on');
		} else {
			$('.filter-box .bt.drop').addClass('on');
			$('.filter-box .bt.reset').addClass('on');
			$(this).parents('.filter-box').addClass('on');
			$(this).parents('.filter-box').siblings('.visual').find('.search').addClass('on');
		}
	});
	/* TAG */
	$('.tag .keyword').click(function(){
		$('.tag .keyword').removeClass('on');
		$(this).addClass('on');
	});
	/* TAP */
	$('.tapt').click(function(){
		$(this).siblings('.tapt').removeClass('on');
		$(this).addClass('on');
		$(this).parent('.tap').siblings('.tapview').children('.tapc').removeClass('on');
		$(this).parent('.tap').siblings('.tapview').children('.tapc').eq($(this).index()).addClass('on');
	});
	/* FAQ */
	$('.table.faq li').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).children('.answer').slideUp();
		} else {
			$('.table.faq li').removeClass('on');
			$('.table.faq li .answer').slideUp();
			$(this).addClass('on');
			$(this).children('.answer').slideDown();
		}
	});
	/* GO TO TOP */
	$("footer .bt.top").hide();
    $(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('footer .bt.top').fadeIn();
            } else {
                $('footer .bt.top').fadeOut();
            }
        });
        $('footer .bt.top').click(function () {
            $('body,html').animate({scrollTop: 0}, 500);
            return false;
        });
    });

    /* GNB 더보기 & 검색 20200804 */
    $('.fullMenu').click(function(){
        $(this).parents('.gnb').toggleClass('allMenu');
    });
    $('.btn-smenu_all').click(function(){
        $('.fullMenu').removeClass('active');
    });

	/* 문제 정답체크 */
    $("ul.answer li button").click(function(){
    	if($(this).hasClass("on")){		//x버튼 선택 시
    		$(this).next().find("input[type=radio]").prop("checked", false);	//선택한 라디오 버튼 체크 해제
    		$(this).next().find("input[type=radio]").attr('disabled', true);	//라디오 버튼 disable
    	}else{	//x버튼 해제 시
    		$(this).next().find("input[type=radio]").attr('disabled', false);	//라디오 버튼 활성화
    	}
    	//마지막 체크
    	for (var i = 0; i < $("ul.answer").length; i++) {
    		if($("ul.answer:eq("+i+") li").length-1 == $("ul.answer:eq("+i+") li button.on").length){	//문제 개수와 disable된 개수를 비교
        		$("ul.answer:eq("+i+") li button").not(".on").next().find("input[type=radio]").prop("checked", true);	//마지막 라디오 버튼 체크
        	}
		}
    });

    //텍스트 more // 181029 수정
    $(".table .card .btn_more").click(function(){
    	$(this).siblings('.des').toggleClass('on');
    	var itemChk = $(this).siblings('.des');
    	if(!itemChk.hasClass('on')){
    		$(this).text('+ 더보기');
    	}
    	else{
    		$(this).text('- 닫기');
    	}
    });
    $(".list_thum .thum .btn_more").click(function(){
    	$(this).siblings('.txt_indes').toggleClass('on');
    	var itemChk = $(this).siblings('.txt_indes');
    	if(!itemChk.hasClass('on')){
    		$(this).text('+ 더보기');
    	}
    	else{
    		$(this).text('닫기');
    	}
    });

    //텍스트 more // 181029 수정
    $(".btn-skyTopBanner").click(function(){
    	$('#top_news').hide();
        $('#spaceTop .visual').addClass('mt50');
    });


    //펀리딩에그붐 슬라이드 탭
    $(".tab_fun .tab_menu li").click(function(){
    	$(this).addClass('on');
    	$(this).siblings('li').removeClass('on');
    	var itemChk = $(this).index();
    	$("#menu"+itemChk).addClass('on');
    	$("#menu"+itemChk).siblings('.fun_slide').removeClass('on');
    });


	//온라인 클래스 비쥬얼 버튼 마우스오버 효과
	$('section.online .visual .slider-inner > ul li').hover(function() {
		$(this).addClass('on');
		$(this).siblings('li').addClass('off');
	}, function(){
		$(this).removeClass('on');
		$(this).siblings('li').removeClass('off');
	});

});

//20-10-08 무빙 썸네일 마우스 오버 아웃
ThumbMov();
function MotionClass(){
	setTimeout(function(){
		$(".mov_thumb").find("video").parent().addClass("act");
	},200);
}
function ThumbMov(){
	//console.log("zthumbmov");
	$("body").prepend("<div id='media-width'></div>");
	var timer;
	var timerex;
	$(document).on("mouseenter",".mov_thumb .moving",function() {
		if ( $(this).parents("body").find("div").hasClass("mov_thumb") == true ){
			var This = $(this);
			var data = $(this).find("img").attr('video-src');
			var data1 = $(this).find(".thum img").attr('video-src');
			timer = setTimeout(function(){
				$(This).find("img").parent().append('<video class="video-preview" preload="none" muted=""><source src='+data+' type="video/mp4"></video>').find('video')[0].play();
				MotionClass();
			},250);
		}
	});
	$(document).on("mouseleave",".mov_thumb .moving",function() {
		if ( $(this).parents("body").find("div").hasClass("mov_thumb") == true){
			$(this).find(".act").removeClass("act");
			clearTimeout(timer);
			timerex =setTimeout(function(){
			$(".mov_thumb").find("video").remove();
			},200);
		}
	});
}

wow = new WOW({ animateClass: 'animated' });
new WOW().init();

//금칙어 필터
var wordFilter = {
	init : function (opt) {
		var _this = this;
		var param = "";

		$.ajax({
			url : "/apps/cmmnty/getWordFilterList.do",
			data : param,
			type : "get",
			dataType : "json",
			async: false,
			cache : false,
			success : function (data) {
				_this.wordList = data.result.wordList;
				_this.check = function (txt) {
					//var txt = null;
					if (txt == undefined) {
						txt = "";
					}
					console.log(txt);
					var result = [];
					$.each(this.wordList, function(i, val) {
						if(txt.indexOf(val) > -1) {
							result.push(val);
						}
					});
					if(result.length) {
						alert(String(result) + " 은(는) 금지어입니다.");
						return false;
					} else {
						return true;
					}
				};
			}
		});
	}
};



