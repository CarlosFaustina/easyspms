export default function builder (self, destroy) {
    // Insere o HTML do Easy
    let divEasy = $('<div>', {
        id: 'easyapp'
        }).appendTo('body');

        $.get('src/builder.html', function(data) {
            $('#easyapp').append(data);        
        });

    // Toogle Easy
    $('#easyapp').on('click', '#icone_easy', function(event) {
        console.log('sdfdsfsdfds');
        screen.width <= 960 ? toggleDesktop() : toggleMobile();
        $("body").addClass("easy_aberto");
        event.stopPropagation();
        return false;
    });
}

function toggleDesktop() {
    $("#nav_easy").animate(
        {
            left: "20px",
        },
        500
    );
    
    $("#botao_easy").animate(
        {
          left: "490px",
        },
        250
    );
}

function toggleMobile() {
    $("#nav_easy").animate(
        {
          left: "0px",
        },
        500
    );

    $("#botao_easy").animate(
        {
          left: "334px",
        },
        250
    );
}



