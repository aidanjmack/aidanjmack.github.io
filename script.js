$(document).ready(function(){
    //smooth scroll navigation
    $('.sideNav a').on('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            $('html ,body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

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
    });

    // nav open/close triggers
    $('#burgerNav').click(openNav);
    $('.navItem').click(closeNav);
});
