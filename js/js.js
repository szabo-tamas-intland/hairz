$( function(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-69198347-1', 'auto');
    ga('send', 'pageview');
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=220447707999450";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $(document)
        .on('click', '#menu a', function(e){
            e.preventDefault();
            var $id = $(this).attr('href');
            var to = $( $id ).offset().top;
            $('html,body').animate({
                scrollTop: to + 'px'
            });
        })
        .on('click', '#menu-container', function(e){
            var $m = $('#menu-container');
            $m.hasClass('active') ? $m.removeClass('active') : $m.addClass('active');
        })
        .on('click', '.popup .close-popup', function(e){
            $(this).closest('.popup').hide();
        })
        .on('click', '.popup', function(e){
            if(!$(e.target).hasClass('popup')) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            $(this).hide();
        });

    var $backgrounds = $('.bg');
    var i = 0;
    var fade = setInterval( function(){
        $($backgrounds).css({
            opacity: 0
        });
        $($backgrounds[i]).css({
            opacity: 1
        });
        i++;
        if( i >= $backgrounds.length ) i = 0;
    }, 10000);
    
    $('.gallery').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    
    ( function() {
        'use strict';

        var pos = new google.maps.LatLng(47.498034, 19.047579);

        var mapOptions = {
            center: new google.maps.LatLng(47.498034, 19.087579),
            zoom: 12,
            scrollwheel: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },

        };
        
        var canvas = document.getElementById("map-canvas");
        var map = new google.maps.Map( canvas, mapOptions );
        
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: "Hello World!"
        });
        
        var infowindow = new google.maps.InfoWindow({
            content: '<div id="contact-text"><b>Budapest, Hungary 1051</b><p>(47.498034, 19.047579)</p><p>hairzbudapest@gmail.com</p><p>(30) 351 6951</p><p>1051 Budapest, V. ker Apáczai Csere János utca 17.</p></div>'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
        infowindow.open(map, marker);
    } )();

    $('.tab > .tab-content').addClass('hiddenbrant').first().removeClass('hiddenbrant').addClass('visible');

    function resizeGallery( self ) {
        $(self).parent().parent().find('.tab-content').removeClass('visible').addClass('hiddenbrant');
        var $cont = $(self).parent().find('.tab-content');
        $cont.removeClass('hiddenbrant').addClass('visible');
        $(self).closest('section').css({
            height: $cont.height() + 150
        });
    }

    resizeGallery('#gallery .tab:first-child > .title');

    resizeGallery('#services .tab:first-child > .title');

    $(document).on( 'click', '.tab > .title', function() {
        resizeGallery( this );
    } );
});

let app = angular.module('hairz', []);
app.controller('HairzController', ($scope) => {
    $scope.galleries = [
        {'name': 'Szalon', 'id': 1},
        {'name': 'Külső', 'id': 2},
        {'name': 'Borbély', 'id': 3},
        {'name': 'Oklevelek', 'id': 4}
    ];

    $scope.gallery = {
        1: [
            "gallery/1/férfi_divat.jpg",
            "gallery/1/férfi_hajvágás.jpg",
            "gallery/1/férfi_hajvágás_2.jpg",
            "gallery/1/férfi_szalon.jpg",
            "gallery/1/női_divat.jpg",
            "gallery/1/női_festés.jpg",
            "gallery/1/női_hajvágás.jpg",
            "gallery/1/szakáll_férfi_haj.jpg",
            "gallery/1/szalon-munka-1.jpg",
            "gallery/1/szalon-munka-2.jpg",
            "gallery/1/szalon_selfie.jpg",
            "gallery/1/válogatott_hajvágás.jpg"
        ],
        2: [
            "gallery/2/fotózás.jpg",
            "gallery/2/göndör_rendezvény.jpg",
            "gallery/2/göndör_rendezvény_2.jpg",
            "gallery/2/hajvasalás_rendezvény_csapat.jpg",
            "gallery/2/női_divat_konty.jpg",
            "gallery/2/női_modell_fotózás_1.jpg",
            "gallery/2/női_modell_fotózás_2.jpg",
            "gallery/2/női_modell_fotózás_3.jpg",
            "gallery/2/női_modell_fotózás_4.jpg",
            "gallery/2/női_modell_fotózás_5.jpg",
            "gallery/2/női_modell_fotózás_6.jpg",
            "gallery/2/plus_size_divat.jpg",
            "gallery/2/rendezvény_fotózás.jpg",
            "gallery/2/szépségverseny_fotózás_rendezvény.jpg",
            "gallery/2/szépségverseny_zsűri.jpg",
            "gallery/2/verseny_haj.jpg"
        ],
        3: [
            "gallery/3/22361378_1463449507025969_1522854054_n.jpg",
            "gallery/3/bajúsz_igazítás.jpg",
            "gallery/3/borbély_előkészületek.jpg",
            "gallery/3/borbély_előkészületek_2.jpg",
            "gallery/3/borotvalas-1.jpg",
            "gallery/3/borotvalas-2.jpg",
            "gallery/3/borotvalas-3.jpg",
            "gallery/3/borotvalas-4.jpg",
            "gallery/3/borotvalas-5.jpg",
            "gallery/3/borotválás_kellékek.jpg",
            "gallery/3/csapat_rendezvény.jpg",
            "gallery/3/első_pesti_borbély.jpg",
            "gallery/3/hagyomanyos_penge_borotválás.jpg",
            "gallery/3/movember_ganxta_bajúsz_festés.jpg",
            "gallery/3/movember_hun_show.jpg",
            "gallery/3/movember_hun_show_2.jpg",
            "gallery/3/szakálligazítás.jpg",
            "gallery/3/tradicionális_borotválás.jpg",
            "gallery/3/tradícionális_borotválás_2.jpg"
        ],
        4: [
            "gallery/4/22396789_1463449817025938_1197616874_o.jpg",
            "gallery/4/divat_továbbképzés.jpg",
            "gallery/4/festés_diploma.jpg",
            "gallery/4/keratinos_hajegyenesítés_diploma.jpg",
            "gallery/4/kontykészítés_2.jpg",
            "gallery/4/kontykészítés_továbbképzés.jpg",
            "gallery/4/színkorrekció_továbbképzés.jpg"
        ]
    }
});