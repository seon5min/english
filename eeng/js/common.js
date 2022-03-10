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
			//0408 인기콘텐츠 추가
			$(".sliderTotal").slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 4000,
				prevArrow : false,
				nextArrow : false
			});
			$(".sliderList").slick({	//e클립, 방송프로그램
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 1,	//1개씩 보여줌
				slidesToScroll: 1,	//1개씩 이동
				prevArrow : $(".prevArrow"),	//이전 버튼
				nextArrow : $(".nextArrow")		//다음 버튼
			  });
			$(".sliderList2").slick({	//온라인강좌
				touchMove : true,
				dots: false,
				infinite: true,
				slidesToShow: 1,		//1개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")			//다음 버튼
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
			//0408 인기콘텐츠 추가
			$(".sliderTotal").slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay : true,
				autoplaySpeed : 4000,
				prevArrow : false,
				nextArrow : false
			});
			$(".sliderList").slick({	//e클립, 방송프로그램
				dots: false,
				infinite: true,
				slidesToShow: 3,	//3개씩 보여줌
				slidesToScroll: 1,	//1개씩 이동
				prevArrow : $(".prevArrow"),	//이전 버튼
				nextArrow : $(".nextArrow")		//다음 버튼
			});
			$(".sliderList2").slick({	//온라인강좌
				dots: false,
				infinite: true,
				slidesToShow: 2,		//2개씩 보여줌
				slidesToScroll: 1,		//1개씩 이동
				prevArrow : $(".prevArrow"),		//이전 버튼
				nextArrow : $(".nextArrow")			//다음 버튼
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
			/**
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
			  **/
			
			if($(".sliderList_eclip").hasClass("slick-initialized")) $(".sliderList_eclip").slick('unslick');
		} 
    }
	/* MAIN SLIDER */
	if($(".sliderMain div").length > 0){
		$(".pager p").text("1/"+ $(".sliderMain div").length);	//최초 페이징 세팅	
	}else{
		$(".pager p").text("0/0");	//최초 페이징 세팅
	}
	$(".sliderMain").slick({
		dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow : $(".prevArrow"),
		nextArrow : $(".nextArrow"),
		autoplay : true,
		autoplaySpeed : 3000
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager p").text((nextSlide+1)+ "/"+ slick.slideCount);	//현재 페이지수 / 전체 페이지수
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
	$(function(){
        $(window).resize(function () {
			$('body.main .visual').css({"height": ($('body.main .visual img').height()) +"px"});
			clearTimeout(this.id);
			this.id = setTimeout(resizeEnd, 300);	//리사이즈 후 높이가 제대로 설정 안될 경우를 고려해 0.3초후 다시한번 높이값 설정.
        });
    });
	function resizeEnd(){	//resize 후 호출되는 함수.
		//메인 비주얼 높이값 셀정.
		$('body.main .visual').css({"height": ($('body.main .visual img').height()) +"px"});
		
		//슬라이드 보여지는 수 설정.
		if ( navigator.platform ) { 
			if (filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {	//모바일 

			}else{	//pc
				//슬릭 초기화 (삭제)
				 //$(".sliderMevent, .sliderList, .sliderList2, .sliderList3, .sliderList4, .sliderList5, .sliderList6, .sliderList7, .sliderList_eclip").slick('unslick');
				$(".sliderOnline1, .sliderOnline2, .sliderOnline3, .sliderOnline4, .sliderTotal, .sliderMevent, .sliderList, .sliderList2, .sliderList3, .sliderList4, .sliderList5, .sliderList6, .sliderList7").slick('unslick');
				
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
					//0408 인기콘텐츠 추가
					$(".sliderTotal").slick({
						dots: true,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay : true,
						autoplaySpeed : 4000,
						prevArrow : false,
						nextArrow : false
					});			
					$(".sliderList").slick({
						dots: false,
						infinite: true,
						slidesToShow: 3,	//3개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList2").slick({
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
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
					//0408 인기콘텐츠 추가
					$(".sliderTotal").slick({
						dots: true,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay : true,
						autoplaySpeed : 4000,
						prevArrow : false,
						nextArrow : false
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
					$(".sliderList").slick({
						dots: false,
						infinite: true,
						slidesToShow: 3,	//2개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList2").slick({
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
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
					//0408 인기콘텐츠 추가
					$(".sliderTotal").slick({
						dots: true,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay : true,
						autoplaySpeed : 4000,
						prevArrow : false,
						nextArrow : false
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
					$(".sliderList").slick({
						dots: false,
						infinite: true,
						slidesToShow: 2,	//2개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					});
					$(".sliderList2").slick({
						dots: false,
						infinite: true,
						slidesToShow: 2,		//2개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
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
					//0408 인기콘텐츠 추가
					$(".sliderTotal").slick({
						dots: true,
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay : true,
						autoplaySpeed : 4000,
						prevArrow : false,
						nextArrow : false
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
					$(".sliderList").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 1,	//1개씩 보여줌
						slidesToScroll: 1,	//1개씩 이동
						prevArrow : $(".prevArrow"),	//이전 버튼
						nextArrow : $(".nextArrow")		//다음 버튼
					  });
					$(".sliderList2").slick({
						touchMove : true,
						dots: false,
						infinite: true,
						slidesToShow: 1,		//1개씩 보여줌
						slidesToScroll: 1,		//1개씩 이동
						prevArrow : $(".prevArrow"),		//이전 버튼
						nextArrow : $(".nextArrow")			//다음 버튼
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
		$(this).next('ul').slideToggle();
	});
	$('.lnb p.mm').click(function(){
		$(this).next('span').slideToggle();
	});
	/* SITEMAP */
	$('.sitemap .mm').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('.sm').slideUp();
		} else {
			$('.sitemap .mm').removeClass('on');
			$('.sm').slideUp();
			$(this).addClass('on');
			$(this).next('.sm').slideDown();
		}
	});
	/* FIX 20181122 수정 */
	$(function(){   
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('body.main header').addClass('fix');
				$('body.sub header').addClass('fix');
				$('.path').addClass('fix');
				$('body.main #spaceTop').addClass('ptS');
				$('body.sub #spaceTop').addClass('ptSub');
				$('.search#spaceTop').addClass('scSub');
            } else {
                $('body.main header').removeClass('fix');
				$('body.sub header').removeClass('fix');
				$('.path').removeClass('fix');
				$('body.main #spaceTop').removeClass('ptS');
				$('body.sub #spaceTop').removeClass('ptSub');
				$('.search#spaceTop').removeClass('scSub');
            }
        });
    });
	/* header 검색 버튼 *//*
	$('header > .inner .bind input').click(function(){
		$('.bind').addClass('on');
	});	*/
	/* FIX -MOVIE 20181205 수정 *//*
	$(function(){   
        $(window).scroll(function () {
            if ($(this).scrollTop() > 110) {
                $('section.tv .movie').addClass('fix');
                $('section.tv #spaceSide').addClass('ptSide');                
            } else {
                $('section.tv .movie').removeClass('fix');
                $('section.tv #spaceSide').removeClass('ptSide');
            }
        });
    }); */
    /* FIX *//* 기존 사용 스크립트 --
	$(function(){   
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
            	$('body.main header').addClass('fix');
            	$('body.aub header').addClass('fix');
				$('.path').addClass('fix');
            } else {
            	$('body.main header').removeClass('fix');
            	$('body.aub header').removeClass('fix');
				$('.path').removeClass('fix');
            }
        });
    });
	/* MAIN */
	$('.news .bt.x').click(function(){
		$('.news').slideUp();
	});
	/* 1115 메인 레벨테스트 결과*/
	$('.result .bt.x').click(function(){
		$('.result .result_cont_v').slideToggle();
		$('.result .bt.ico').toggleClass('op');
		//$('.level').slideDown();
	});

	/* SITEMAP */
	$('.jq-sitemap').click(function(){
		$('body').css({"overflow": "hidden"}).css({"position":"fixed"});
		$('.sitemap').removeClass('hide');
	});
	$('.sitemap .bt.x').click(function(){
		$('body').css({"overflow": ""}).css({"position":""});
		$('.sitemap').addClass('hide');
	});
	/* POPUP */
	$('.jq-pop').click(function(){
		$('body').css({"overflow-y": "scroll"}).css({"position":"fixed"});
	});
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
	$('.vote .jq-pop, .vote_blue .jq-pop').click(function(){
		$('.popup.vote').removeClass('hide');
	});
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
	/* CS - TAP *//*
	$('.gray .inner .tap .tapt').click(function(){
		var num = $(this).index();
		$(this).parent('.tap').children('.tapt').removeClass('on');
        $(this).addClass('on');
		$('.guideNav .navi .csTap').removeClass('on');
		$('.navi').eq(num).show().siblings().hide();
		
		$('.selectNav .bind').removeClass('mdplay_block');
		$('.selectNav .bind').eq(num).show().siblings().hide();
	});
	$('.guideNav .navi .csTap').click(function(){
		$(this).parent('.guideNav .navi').children('.csTap').removeClass('on');
		$(this).addClass('on');
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

    //펀리딩에그붐 슬라이드 탭
    $(".tab_fun .tab_menu li").click(function(){
    	$(this).addClass('on');
    	$(this).siblings('li').removeClass('on');
    	var itemChk = $(this).index();
    	$("#menu"+itemChk).addClass('on');
    	$("#menu"+itemChk).siblings('.fun_slide').removeClass('on');
    });

});
wow = new WOW({ animateClass: 'animated' });
wow.init();

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