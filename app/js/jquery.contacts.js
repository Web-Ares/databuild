( function(){

    $( function() {

        $.each( $( '.contacts__gallery' ), function() {

            new ContactsSlider ( $( this ) );

        } );

    } );

    var ContactsSlider = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _sliderContainer = _obj.find( '.swiper-container' ),
            _swiper;

        //private methods
        var _initSwiper = function () {

                _swiper = new Swiper( _sliderContainer, {
                    loop: true,
                    nextButton: _sliderContainer.find( '.swiper-button-next' ),
                    prevButton: _sliderContainer.find( '.swiper-button-prev' )
                });

            },
            _init = function () {

                _obj[0].obj = _self;
                _initSwiper();
            };

        _init();
    };

} )();

