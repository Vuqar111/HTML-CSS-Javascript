function initparticles() {    
    fire();
}
function fire() {
    $.each($(".particletext.fire"), function(){
       var firecount = ($(this).width()/50)*20;
       for(var i = 0; i <= firecount; i++) {
          var size = $.rnd(8,12);
          $(this).append('<span class="particle" style="top:' + $.rnd(40,70) + '%; left:' + $.rnd(-10,100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;"></span>');
       }
    });
}
 
jQuery.rnd = function(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}
 
initparticles(); 