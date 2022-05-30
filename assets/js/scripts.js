
$(document).ready(function () {
    $('#toggle').click(function(){
        $('nav').slideToggle();
    }
    );
})

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }   
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            
            // clear input
            container.find('.search-input').val('');
        }
}

$(document).ready(function () {
    $('.search-icon').click(function (e) {

        $('.closes').addClass('close');
        $('.search-icon').addClass('color-icon');


        e.preventDefault();
    });
    $('.closes').click(function (e) {

        $('.closes').removeClass('close');
        $('.search-icon').removeClass('color-icon');

        e.preventDefault();
    });
});