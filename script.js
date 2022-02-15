$(document).ready(function(){
    //nav functions
    function openNav() {
        $('.sideNav').css('width','60%');
    }
    function closeNav() {
        $('.sideNav').css('width','0');    
    }

    // close nav on click outside
    $(document).mouseup(function(e){
        var nav = $('#sideNav');
        if(!nav.is(e.target)){
            closeNav();
        }
    })

    // nav open/close triggers
    $('#burgerNav').click(openNav);
    $('.navItem').click(closeNav);
});
