$('.clients__item').css('height', $('.clients__item').css('width'));

$(document).ready(function () { 
    var $win_n = $(window).width();
    $('.main-nav__ham').on('click', function () {
        var $btn = $(this);
        if(!$btn.hasClass('opened')){
            $('.main-nav__menu').addClass('active');
            $('body').addClass('no_scroll');
            $('.main-nav__ham').removeClass('closed');
            $('.main-nav__ham').addClass('opened');
        } else {
            $('.main-nav__menu').removeClass('active');
            $('body').removeClass('no_scroll');
            $('.main-nav__ham').addClass('closed');
            $('.main-nav__ham').removeClass('opened');
        }
    });
    if($win_n<=1223){
        $('.main-nav__main-item span').click(function () {
            if($(this).parent().children('.main-nav__sub-menu').css("display")=="none"){
                $(this).css({"border-left":"10px solid transparent", "border-top":"10px solid #fff", "margin-right":"5px"});
                $('.main-nav__sub-menu').hide('normal');
                $(this).parent().children('.main-nav__sub-menu').show('normal');
                $('.main-nav__main-item').removeClass('active');
                $(this).parent().addClass('active');
            } else {
                $(this).css({"border-left":"10px solid #fff", "border-top":"10px solid transparent", "margin-right":"0"});
                $('.main-nav__sub-menu').hide('normal');
                $('.main-nav__main-item').removeClass('active');
            }
        })
        $('.main-nav__link').click(function (e) {
            if($(this).parent().children('span').length > 0) {
                e.preventDefault();
                if($(this).parent().children('.main-nav__sub-menu').css("display")=="none"){
                    $(this).parent().children('span').css({"border-left":"10px solid transparent", "border-top":"10px solid #fff", "margin-right":"5px"});
                    $('.main-nav__sub-menu').hide('normal');
                    $(this).parent().children('.main-nav__sub-menu').show('normal');
                    $('.main-nav__main-item').removeClass('active');
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().children('span').css({"border-left":"10px solid #fff", "border-top":"10px solid transparent", "margin-right":"0"});
                    $('.main-nav__sub-menu').hide('normal');
                    $('.main-nav__main-item').removeClass('active');
                }
            }
        })
    } else {
        $('.main-nav__main-item').mouseenter(function () {
            $(this).children('.main-nav__sub-menu').show('normal');
            $(this).addClass('active');
        });
        $('.main-nav__main-item').mouseleave(function () {
            $('.main-nav__sub-menu').hide('normal');
            $('.main-nav__main-item').removeClass('active');
        });
    }
})