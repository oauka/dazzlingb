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
        $('.depth1 > li').find('.depth2').css({display:'none'})
        $('.depth1 > li').css({paddingBottom:'10px'})
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('.depth1 > li').find('.depth2').css({display:'none'})
        $('#header .close').removeClass('on')
        $('#header #nav').removeClass('on')
        $('#header .open').addClass('on')
    }
}

// 함수호출
init()

$(window).on('resize', function(){
    init()
})
// 여기까지

$('.depth1 > li').on('click', function(e){
        var index = $(this).index()
        if (index===1) {
            e.preventDefault()
        }
        if ( $(this).find('.depth2').css('display') === 'none' ) {
            $(this).find('.depth2').stop().slideDown(300)
            $(this).css({
                paddingBottom:'0px'
            })
        } else {
            $(this).find('.depth2').stop().slideUp(300)
            $(this).css({
                paddingBottom:'10px'
            })
        }  

        $(this).siblings().find('.depth2').stop().slideUp(300)
})

$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if( sct>=1 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
    } else if ( sct<1 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
    }
})
