import j from './config.json' assert { type: 'json' };

$(window).on('load', () => {
    $('.loader').delay(550).fadeOut('slow');
    setTimeout(() => {
        $('html').css('overflow-y', 'scroll')
    }, 800);
})

$(document).ready(() => {

    $('.dropbtn').click(() => {
        $('#drop').css('display', 'block')
    });

    $(window).click(e => {
        if (!e.target.matches('.dropbtn')) {
            $('#drop').css('display', 'none')
        }
    });

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
            invert: false,
        },
        // autoHeight: true,
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
    
    $('#form-contact').submit((e) => { 
        e.preventDefault();

        const x = new XMLHttpRequest();
    
        x.open("POST", j.discordData.whKey);
        x.setRequestHeader('Content-type', 'application/json');
    
        const embed = {
            author: {
                name: $('#name').val(),
                icon_url: j.discordData.iconUrl
            },
            description: `**Mensagem:** ${$('#message').val()}\n**Email:** ${$('#email').val()}`,
            color: "5963648"
        };
        
        const params = {
            username: "Tampinhas",
            avatar_url: j.discordData.avatarUrl,
            embeds: [embed]
        };

        x.send(JSON.stringify(params));
    
        $('#form-contact').trigger('reset');
        $('#alert').css('display', 'block');
    });

    const goal = 60000;
    const have = 16732;
    const calc = `${((have * 100) / goal).toFixed(1)}%`;

    $('.tampometro-progressbar-fill').text(calc);
    $('.tampometro-progressbar-fill').css('height', calc);

    $('.tampometro-counter').text(`${have}/${goal}`);
}); 