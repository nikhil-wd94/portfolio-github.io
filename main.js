$("a.smooth-scroll").click(function(event){
    event.preventDefault();
    
    /*return section id when corresponding nav itm is clicked*/
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop:$(section).offset().top
    }, 1500 /*duration*/);
});


$('.category-item').click(function () {
    var category = $(this).attr('id');

    if (category == 'all') {
        $('.p-card').addClass('filter-hide');
        setTimeout(function () {
            $('.p-card').removeClass('filter-hide');
        }, 300);
    } else {
        $('.p-card').addClass('filter-hide');
        setTimeout(function () {
            $('.' + category).removeClass('filter-hide');
        }, 300);
    }

});


$(".menu-icon").click(function () {
    $(".menu-icon").toggleClass("active");
});

$(".menu-icon").click(function () {
    $(".sidebar").toggleClass("active");
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

