( function(){

    $( function() {

        $('.site__hero-down').each( function(){
            new ScrollDown($(this));
        } );
    } );

    var ScrollDown = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _body = $( 'body' );

        //private methods
        var _init = function () {
               _onEvents();
            },
            _onEvents = function () {

                _obj.on({
                    click: function(){

                        var parent = $( this ).parents( '.site__hero' ),
                            nextBlock = parent.next();

                        $( 'html, body' ).stop().animate({
                            scrollTop: nextBlock.offset().top
                        }, 1000);

                        return false;

                    }
                });
            };

        //public properties

        //public methods

        _init();
    };

} )();

