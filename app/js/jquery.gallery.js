( function(){

    $( function() {

        $.each( $( '.gallery' ), function() {

            new GallerySlider ( $( this ) );

        } );

    } );

    var GallerySlider = function (obj) {

        //private properties
        var _self = this,
            _gallery = obj,
            _header = $('.site'),
            _galleryTop = _gallery.find('.gallery__top'),
            _galleryThumbs = _gallery.find('.gallery__thumbs'),
            _galleryThumbsBtns = _gallery.find('.gallery__thumbs-btns'),
            _window = $(window);

        //private methods
        var _addEvents = function(){

                _window.on({
                    'load': function(){
                        _gallery.css({height:_window.height()-_header.css("padding-top").replace("px", "")});
                    },
                    'resize': function(){
                        _gallery.css({height:_window.height()-_header.css("padding-top").replace("px", "")});
                    }
                })

            },
            _initSwiper = function(){

                var galleryTop = new Swiper(_galleryTop, {
                    nextButton: _galleryTop.find( '.swiper-button-next' ),
                    prevButton: _galleryTop.find( '.swiper-button-prev' ),
                    // spaceBetween: 10,
                    onSlideChangeEnd: function(swiper){
                        var activeIndex = swiper.activeIndex;
                        $(galleryThumbs.slides).removeClass('is-selected');
                        $(galleryThumbs.slides).eq(activeIndex).addClass('is-selected');
                        galleryThumbs.slideTo(activeIndex,500, false);
                    }

                });
                var galleryThumbs = new Swiper(_galleryThumbs, {
                    nextButton: _galleryThumbsBtns.find( '.swiper-button-next' ),
                    prevButton: _galleryThumbsBtns.find( '.swiper-button-prev' ),
                    spaceBetween: 30,
                    freeMode: true,
                    centeredSlides: false,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    onClick: function (swiper, event){
                        var clicked = swiper.clickedIndex;
                        swiper.activeIndex = clicked;
                        swiper.updateClasses();
                        $(swiper.slides).removeClass('is-selected');
                        $(swiper.clickedSlide).addClass('is-selected');
                        galleryTop.slideTo(clicked,500, false);

                    }
                });

            },
            _init = function () {
                _addEvents();
                _initSwiper();
            };

        _init();
    };

} )();

