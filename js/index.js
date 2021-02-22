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


$('#header .open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().next().next().next().addClass('on')
    $(this).next().addClass('on')
})

$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().prev().prev().prev().addClass('on')
    $(this).prev().prev().prev().removeClass('on')
    $(this).prev().find('.depth1 > li').removeClass('on')
})

// 여기서부터 resize 이벤트 발생 시 스크롤바 유무에 따른 상태 제어 프로그램
var deviceSize = 1200;

// 함수선언
function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}

var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize = deviceSize - swd
}


// 함수선언
function init(){
    var ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.search #sbox').removeClass('on')
        $('.depth1 > li').removeClass('on')
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .close').removeClass('on')
        $('#header #nav').removeClass('on')
        $('#header .open').addClass('on')
        $('.search #sbox').removeClass('on')
    }
}

// 함수호출
init()

$(window).on('resize', function(){
    init()
})
// 여기까지


$('.depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).removeClass('on')
        }
    }
)
$('.depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    }
})





$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})



// 돋보기 클릭시 검색창 박스 열고닫기
$('.search label').on('click', function(){
    $(this).prev().toggleClass('on')
})


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if( sct>=10 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
    } else if ( sct<10 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
    }
})
