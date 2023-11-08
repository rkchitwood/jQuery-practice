$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
});

$('article img').addClass('image-center');

$('article p:last-child').remove;

const randomPixels = Math.random() * 100;
$("#title").css("font-size", randomPixels);

$("ol").append("<li>Why are you gonna delete me bro?</li>");

$("aside").empty().append("<p>I'M SORRY THAT WE HAD THAT LIST</p>");

$(".form-control").on('keyup blur chan.form-control', function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

$("img").on('click', function(){
    $(this).remove();
})