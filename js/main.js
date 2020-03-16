

$('.container').on('click', '.box', function(){
    var that = $(this);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(randNum){
            var randomNum = randNum.response;
            $(that).text(randomNum);
            if (randomNum <= 5) {
                $(that).addClass('bg-lgreen');
            } else {
                $(that).addClass('bg-lblue');
            }
        },
        error: function(){
            console.log('Errore!');
        }
    })
})
