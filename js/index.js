
$(".stack").on("click", function() {
	$(".stack").toggleClass("stack__open");
	$(".stack").toggleClass("card__open");
	$(".hi").addClass("hi__open");
  console.log($(".hi"));
});

$(".traning").on("click", function() {
	$(".traning").toggleClass("traning__open");
	$(".traning").toggleClass("card__open");
	$(".hi").addClass("hi__open");
});

$(".portfolio").on("click", function() {
	$(".portfolio").toggleClass("portfolio__open");
	$(".portfolio").toggleClass("card__open");
	$(".hi").addClass("hi__open");
});

$(".hobbys").on("click", function() {
	$(".hobbys").toggleClass("hobbys__open");
	$(".hobbys").toggleClass("card__open");
	$(".hi").addClass("hi__open");

});

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
});

$("#close").on('click',function() {
    $(".stack,.traning,.portfolio,.hobbys,.hi").removeClass("card__open stack__open traning__open portfolio__open hobbys__open hi__open")
})


const sport = document.querySelector(".sport");

sport.addEventListener("mouseout",function() {
    $(".sport").addClass("hobbys__active");
},true)

console.log(sport);

const tada = document.querySelector(".coding");

tada.addEventListener("mouseout", function() {
    $(".coding").addClass("sport__active");
},true);

const drum = document.querySelector(".drum");

drum.addEventListener("mouseout", function() {
    $(".drum").addClass("drum__open");
},true);





let scroled;
let timer;
document.getElementById("top").onclick = function() {
    scroled = window.pageYOffset;
    scrollToTop();
}
function scrollToTop() {
    if(scroled > 0) {
        window.scrollTo(0,scroled);
        scroled = scroled - 20;
        timet = setTimeout(scrollToTop,5);

    }   else {
        window.scrollTo(0,0);
    }

}