$(function () {
    // $('.topten .ico_arrow').on('click', function () {
    //   $('.topten').addClass('list_open');
    //   $('.radio').removeClass('radio_open');
    //   $('.recommend_wrap .top_container').removeClass('label_triangle');
    //   if ($('.m_label_arrow').css({ 'transform': 'rotate(180deg)'}, 5000)) {
    //     $('.m_label_arrow').css({ 'transform': 'rotate(0deg)'}, 5000)
    //   }
    //   rankSwiper.slideTo(1, 0, false);
    //   rankSwiper.autoplay.stop();
    //   return false;
    // });
    $('.box_con.status_con .status_info').on('click', function () { $('.box_con.status_con .status_layer').css('display', 'flex'); });
    $('.box_con.status_con .status_close').on('click', function () { $('.box_con.status_con .status_layer').css('display', 'none'); });

    $('.box_con.reading_activities_con .reading_info').on('click', function () { $('.box_con.reading_activities_con .info_layer').css('display', 'flex'); });
    $('.box_con.reading_activities_con .info_close').on('click', function () { $('.box_con.reading_activities_con .info_layer').css('display', 'none'); });

    $('.box_con.friend_status_con .status_info').on('click', function () { $('.box_con.friend_status_con .friend_layer').css('display', 'flex'); });
    $('.box_con.friend_status_con .friend_close').on('click', function () { $('.box_con.friend_status_con .friend_layer').css('display', 'none'); });


});


