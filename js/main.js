var boxTemplSrc = $('#box-template').html();
var boxTempl = Handlebars.compile(boxTemplSrc);
for (var i = 0; i < 36; i++) {
    $('.container').append(boxTempl);
}

$('.container').on('click', '.box', function() {
    var that = $(this);
    if(($(that).text()) == '') {
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(res) { // res sta per response
                var randomNumber = res.response;
                squareColor(randomNumber, that);
                squareNumber(randomNumber, that);
            },
            error: function(){
                console.log('Errore!');
            }
        });
    } else {
        console.log('Hai già cliccato questo quadratino');
    }
});

function squareColor(value, clickedElement) {
        if (value <= 5) {
            $(clickedElement).addClass('bg-lgreen');
        } else {
            $(clickedElement).addClass('bg-lblue');
        }
}

function squareNumber(value, clickedElement) {
    $(clickedElement).text(value);
}
