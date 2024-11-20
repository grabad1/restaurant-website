$(document).ready(function () {
    $('.container').append('<div class="eng"><p id="e">English</p><p id="s">Srpski</p></div><p id="x">X</p>')
    var e;
    if (!sessionStorage.getItem('e'))
        e = 0;
    else
        e = parseInt(sessionStorage.getItem('e'));
    $('ul a').click(function () {
        event.preventDefault();
        var href = $(this).attr('href');
        if (e === 1) {
            window.open('e' + href, "_self");
        } else {
            window.open(href, "_self");
        }
    });
    $('.has a').click(function () {
        event.preventDefault();
        var href = $(this).attr('href');
        if (e === 1) {
            window.open('e' + href, "_self");
        } else {
            window.open(href, "_self");
        }
    });
    $('#x').click(function () {
        $('#x').css('display','none')
        $('.eng').css('display','none')
    });
    $('#e').click(function () {
        sessionStorage.setItem('e',1)
        window.open('e'+$('#imee').html(), "_self");
    });
    $('#s').click(function () {
        sessionStorage.setItem('e',0)
        window.open($('#imee').html(), "_self");
    });
    
});