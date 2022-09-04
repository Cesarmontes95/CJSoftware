$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navegacion").addClass("sticky");
            $(".arriba").fadeIn();
        }
        else{
            $(".navegacion").remove.Class("sticky");
            $(".arriba").fadeOut();
        }  
    });

    $(".arriba").click(function(){scroll(0,0)});

    $('.menu-alterno').click(function(){
        $(this).toggleClass("active");
        $(".navegacion-menu").toggleClass("active");
    });

    $(".juegos").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });
});
