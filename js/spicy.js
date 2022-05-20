$(document).ready(function(){
    $(".bordered-box").mouseenter(function(){
        $(".bordered-box span").css({
            "background-color":"#000",
            "color":"#fff"
        });
    });
    $(".bordered-box").mouseleave(function(){
        $(".bordered-box span").css({
            "background-color":"#5a2f27",
            "color":"#fff"
        });
    });
});