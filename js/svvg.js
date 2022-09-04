var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
});



if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i) ){
    var vacio;
} else {
    $(document).on("mousemove", function(event){

        var $mouseX = event.pageX,
            $mouseY = event.pageY;
        
        $('.c1').css("margin-top", - ($mouseY * 0.05) + 'px');
        $('.c1').css("margin-left", -($mouseX * 0.05) + 'px');
        
    })
}

