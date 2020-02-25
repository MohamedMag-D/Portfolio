$(function () {
    'use strict';
// Start Scroll To Element
    $('.navbar ul li a').click(function (e) {
        e.preventDefault();
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top
      }, 1000);
    });
// End Scroll To Element

// Start Sync Navbar with Sections

    $(window).scroll(function () {
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '10') {
                $('.navbar li a').removeClass('active');
                $('.navbar li a[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // Special For Contact Part
    $(window).scroll(function () {
        $('.contact').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '80') {
                $('.navbar li a').removeClass('active');
                $('.navbar li a[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

// End Sync Navbar with Sections

// Start Animation About Part

    $(window).on('scroll', function () {
        $('.animation').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '550') {
                $('.block[data-animate="' + $(this).attr('id') + '"] h2').addClass('slide-in-left');
                $('.block[data-animate="' + $(this).attr('id') + '"] h2').removeClass('hidden');
            }
        }, function () {
            if ($(window).scrollTop() > $(this).offset().top - '550') {
                $('.block[data-animate="' + $(this).attr('id') + '"] p:first').addClass('slide-in-left');
                $('.block[data-animate="' + $(this).attr('id') + '"] p:first').removeClass('hidden');
            }
        }); 
    });

    $(window).on('scroll', function () {
        $('.animation').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '280') { 
                $('.block[data-animate="' + $(this).attr('id') + '"] .feature img').addClass('flip-in-x');
                $('.block[data-animate="' + $(this).attr('id') + '"] .feature img').removeClass('hidden');
                $('.block[data-animate="' + $(this).attr('id') + '"] .feature .words').addClass('fade-in');
                $('.block[data-animate="' + $(this).attr('id') + '"] .feature .words').removeClass('hidden');
            }
        });
    });

    $(window).on('scroll', function () {
        $('.animation').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '10') {
                $('.block[data-animate="' + $(this).attr('id') + '"] .profile .who').addClass('slide-in-left');
                $('.block[data-animate="' + $(this).attr('id') + '"] .profile .who').removeClass('hidden');
                $('.block[data-animate="' + $(this).attr('id') + '"] .profile .container-skills').addClass('slide-in-right');
                $('.block[data-animate="' + $(this).attr('id') + '"] .profile .container-skills').removeClass('hidden');
            }
        });
    });

// End Animation About Part

// Start Porgress Bar In About
    var skills = {
        ht: 75,
        css: 75,
        javascript: 60,
        jquery: 80,
        php: 10,
        mysql: 10,
        laravel: 10
    };
    $.each(skills, function(key, value) {
        var skillbar = $("." + key);
      
        skillbar.animate(
          {
            width: value + "%"
          },
          3000,
          function() {
            $(".speech-bubble").fadeIn();
          }
        );
      }); 

// End Progress Bar in About

// Start Scroll To Contact From About
    $('.profile .who span').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });
// End Scroll To Contact From About

// Start Projects Part

    $(window).on('scroll', function () {
        $('.animation').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '550') {
                $('.block[data-animate="' + $(this).attr('id') + '"] h2').addClass('slide-in-left');
                $('.block[data-animate="' + $(this).attr('id') + '"] p:first').addClass('slide-in-left');
                $('.block[data-animate="' + $(this).attr('id') + '"] p:first').removeClass('hidden');
            }
        }); 
    });

    $(window).on('scroll', function () {
        $('.animation').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '50') {
                $('.block[data-animate="' + $(this).attr('id') + '"] .gallery').addClass('pop-in');
                $('.block[data-animate="' + $(this).attr('id') + '"] .gallery').removeClass('hidden');
            }
        });
    });

    $('.front').mouseover(function () {
            $(this).fadeOut(200);
            $(this).siblings().fadeIn(200);
            $(this).siblings().children('h3').removeClass('slide-down-remove').addClass('slide-down');
            $(this).siblings().children('p').removeClass('slide-down-remove').addClass('slide-down');
            $(this).siblings().children('form').removeClass('slide-up-remove').addClass('slide-up');
        });
    $('.back').mouseleave(function () {
        $(this).fadeOut(200);
        $(this).siblings().fadeIn(200).addClass('flip-in-x');
        $(this).children('h3').removeClass('slide-down').addClass('slide-down-remove');
        $(this).children('p').removeClass('slide-down').addClass('slide-down-remove');
        $(this).children('form').removeClass('slide-up').addClass('slide-up-remove');
    });

// End Projects Part

// Start Contact Part

    $(window).on('scroll', function () {
        $('.animation').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - '400') {
                $('.block[data-animate="' + $(this).attr('id') + '"] .question').addClass('slide-in-right');
                $('.block[data-animate="' + $(this).attr('id') + '"] .question').removeClass('hidden');
            }
                if ($(window).scrollTop() > $(this).offset().top - '200') {
                $('.block[data-animate="' + $(this).attr('id') + '"] form').addClass('pop-in');
                $('.block[data-animate="' + $(this).attr('id') + '"] form').removeClass('hidden');
            }
        });
    });
    $('input, textarea').focus(function () {
       $(this).attr('data-placeholder', this.placeholder).attr('placeholder', '');
    })
    $('input, textarea').blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder')).attr('data-placeholder','');
    })
    $('#submit').click(function() {
        if($.trim($('#name').val()) === ''){
            $('#name').next('div').fadeIn(100).delay(1500).fadeOut(100).removeClass('hidden');
        } else if ($.trim($('#email').val()) === ''){
            $('#email').next('div').fadeIn(100).delay(1500).fadeOut(100).removeClass('hidden');
         } else {
            $('input').parent().siblings('div').fadeIn(100).delay(5000).fadeOut(100).removeClass('hidden');
        }
    })

// End Contact Part

// Start Footer Part


// End Footer Part

// Scroll To Top Button
    $(window).on('scroll', function () {
        if($(window).scrollTop() > 250) {
            $('#up').removeClass('hidden')
        } else {
            $('#up').addClass('hidden') 
        }
    })
    $('#up').click(function() {
        $('html, body').animate({scrollTop:0}, '300');
    })
});
