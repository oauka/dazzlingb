$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint:1025,
        settings: {
            arrows:false
        }
    }]
})

$('.article1 .plpa').on('click', function(){
    var $ibutton = $(this).find('i')
    if ( $ibutton.hasClass('fa-pause') ) { 
        $('.slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})

// 팝업창

function getCookie(name) {
    var cookie = document.cookie
    if ( cookie != "") {
        var cname = cookie.split(';')
        for (var i in cname) {
            var ncname = cname[i].split('=')
            if (ncname[0] == name) {
                return ncname[1]
            }
        }
    }
    return
}

function wopen(){
    var cookieCheck = getCookie('popupYN')
    if ( cookieCheck != 'N' ) {
        window.open('popup.html', '', 'left=300, top=300, width=400, height=250, scrollbars=no, resizable=yes')
    }
}


