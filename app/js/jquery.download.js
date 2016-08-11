( function(){

    $( function() {

        $.each( $( '.download__gallery' ), function() {

            new DownloadSlider ( $( this ) );

        } );

        $.each( $( '.download__list' ), function() {

            new DownloadAccordion ( $( this ) );

        } );

    } );

    var DownloadAccordion = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _accordionBtn = _obj.find( '.download__item_sub > a' );

        //private methods
        var _onEvents = function () {

                _accordionBtn.on({
                    click: function(){

                        _slideAccordion( $(this) );

                        return false

                    }
                });

            },
            _slideAccordion = function ( elem ) {

                var curItem = elem,
                    curParent = curItem.parent(),
                    curMenu = curParent.find('.download__list-sub');

                if ( curParent.hasClass('active') ) {

                    curParent.removeClass( 'active' );
                    curMenu.slideUp( 300 );

                }else{

                    curParent.addClass( 'active' );
                    curMenu.slideDown( 300 );

                }

                return false
            },
            _init = function () {
                _onEvents();
            };

        _init();
    };

    var DownloadSlider = function ( obj ) {

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

