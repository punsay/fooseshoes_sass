$(document).ready(function () {

    $("#annafield").css('border-top', '6px solid #000000');
    $("#pinkshoes").css('border-top', '6px solid #57c5a0');
    $("#prada").css('border-top', '6px solid  #000000');
    $("#casadie").css('border-top', '6px solid #000000');
    $("#mellowyellow").css('border-top', '6px solid  #000000');

    $(".specials-slide-1").show();
    $(".specials-slide-2").hide();
    $(".specials-slide-3").hide();
    $(".specials-slide-4").hide();
    $(".specials-slide-5").hide();

    $("#annafield").css('color', '#5f5f5f');
    $("#pinkshoes").css('color', '#fff');
    $("#prada").css('color', '#5f5f5f');
    $("#casadie").css('color', '#5f5f5f');
    $("#mellowyellow").css('color', '#5f5f5f');

});

$('.btn').click(function () {

    var that = this;
    var id = $(this).attr('id');
    var data = $(this).attr('data');

    $("." + data).show();
    $("#" + id).css('border-top', '6px solid #57c5a0');
    $("#" + id).css('color', '#fff');


    $(".btn").each(function (index) {

        console.log("that: ", that);
        if (this != that) {

            var id = $(this).attr('id');
            var data = $(this).attr('data');

            $("." + data).hide();
            $("#" + id).css('border-top', '6px solid #000');
            $("#" + id).css('color', '#5f5f5f');
        }

    });
});

