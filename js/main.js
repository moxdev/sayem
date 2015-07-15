// set the height automatically by the largest element in carousel
setCarouselHeight('#carousel-test');

    function setCarouselHeight(id)
    {
        var slideHeight = [];
        $(id+' .item').each(function()
        {
            // add all slide heights to an array
            slideHeight.push($(this).height());
        });

        // find the tallest item
        max = Math.max.apply(null, slideHeight);

        // set the slide's height
        $(id+' .carousel-content').each(function()
        {
            $(this).css('height',max+'px');
        });
    };


// Autofocus for first element in #appointment modal
$('#myModal').on('shown.bs.modal', function() {
  $(this).find('input:first').focus();
});


// Smooth scrolling with links
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing', function () {
            window.location.hash = target;
        });
    });

// Make all buttons the same size as the largest button for consistency
$('.btn-size').width(
    Math.max.apply(
        Math,
        $('.btn-size').map(function(){
            return $(this).outerWidth();
        }).get()
    )
);