( function(){

    $( function() {

        $.each( $( '.retail__gallery' ), function() {

            new RetailSlider ( $( this ) );

        } );

    } );

    var RetailSlider = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _sliderContainer = _obj.find( '.swiper-container' ),
            _swiper;

        console.log(100);
        //private methods
        var _initSwiper = function () {

                _swiper = new Swiper( _sliderContainer, {
                    loop: true,
                    nextButton: _sliderContainer.find( '.swiper-button-next' ),
                    prevButton: _sliderContainer.find( '.swiper-button-prev' ),
                    pagination: _obj.find( '.swiper-pagination' ),
                    paginationClickable: true
                });

            },
            _init = function () {

                _obj[0].obj = _self;
                _initSwiper();
            };

        _init();
    };

} )();

