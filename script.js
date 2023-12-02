$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});


// progressbar

const spans=document.querySelectorAll('.progress-bar span');

spans.forEach((span)=>{
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});