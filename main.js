$("document").ready(function(){
    $(".menu").click(function(){
        $(".sidebar").toggle("slow");
        
        // $(".sidebar").animate({ right: '-40rem' }).toggle();
    });

    $(".menu").click(function(){
        $(this).animate({right : '33rem'});
    });

    $(".menu").click(function(){
        $(".line-1").css(
            "transform", "rotate(45deg)translate(0.3rem, 0.8rem)"
        );
        $(".line-2").css({
            "opacity": "0",
            "visibility": "hidden"}
        );
        $(".line-3").css(
            "transform", "rotate(-45deg)translate(0.3rem, -0.8rem)"
        );
    });
});