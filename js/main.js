var boxTemplSrc = $('#box-template').html();
var boxTempl = Handlebars.compile(boxTemplSrc);
for (var i = 0; i < 36; i++) {
    $('.container').append(boxTempl);
}

$('.container').on('click', '.box', function(){
    var that = $(this);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(randNum){
            if( ($(that).text()) == ''){
                var randomNumber = randNum.response;
                $(that).text(randomNumber);
                if (randomNumber <= 5) {
                    $(that).addClass('bg-lgreen');
                } else {
                    $(that).addClass('bg-lblue');
                }
            }
        },
        error: function(){
            console.log('Errore!');
        }
    })
})
