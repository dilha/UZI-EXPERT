$(document).ready(function () {

//     accordion *******************
    let accordion = function () {
        let data = $('.questions__accardion').attr('data-accordion');

        $('.questions__accardion-title').on('click', function () {
            if (data === 'close') {
                $('.questions__accardion-text').slideUp();
                if ($(this).hasClass('active')) {
                    $(this).toggleClass('active');
                } else {
                    $('questions__accardion-title').removeClass('active');
                    $(this).toggleClass('active');
                }
            } else {
                $(this).toggleClass('active');
            }
            $(this).next('.questions__accardion-text').not(':animated').slideToggle()
        })
    }

    accordion();

    // sliders *********************
    $('.services__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
    });


    $('.interesting__slider').slick({
        nextArrow: ' <button class="click__arrow next"><svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M0.505415 1.25107C0.248753 1.45112 0.248547 1.83915 0.504998 2.03947L6.35105 6.60596C6.60733 6.80615 6.60733 7.19385 6.35105 7.39404L0.504998 11.9605C0.248548 12.1609 0.248753 12.5489 0.505414 12.7489L1.80316 13.7604C1.98387 13.9013 2.2372 13.9013 2.41791 13.7604L10.5856 7.39436C10.8424 7.19418 10.8424 6.80582 10.5856 6.60564L2.41791 0.239574C2.2372 0.0987234 1.98387 0.0987234 1.80316 0.239575L0.505415 1.25107Z" fill = "#46BEBE" / ></svg> </button>',
        prevArrow: '<button class="click__arrow prev"><svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4946 1.25107C10.7512 1.45112 10.7515 1.83915 10.495 2.03947L4.64896 6.60596C4.39268 6.80615 4.39268 7.19385 4.64896 7.39404L10.495 11.9605C10.7515 12.1609 10.7512 12.5489 10.4946 12.7489L9.19684 13.7604C9.01613 13.9013 8.7628 13.9013 8.58209 13.7604L0.41444 7.39436C0.157606 7.19418 0.157606 6.80582 0.41444 6.60564L8.58209 0.239575C8.7628 0.0987244 9.01613 0.0987244 9.19684 0.239575L10.4946 1.25107Z" fill="#46BEBE"/></svg></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});
