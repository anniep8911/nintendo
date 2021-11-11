$(function(){

    // nav
    var nav = $('nav .image');
    var cnt02Top = $('.cnt02').offset().top;
    var cnt05Top = $('.cnt05 nav').offset().top;


    nav.first().click(function(){
        $('body, html').animate({
            scrollTop: cnt02Top
        },500);
    });

    $('nav>.image.i2').click(function(){
        $('body, html').animate({
            scrollTop: cnt05Top
        },500);
    });

    // bar
    var bar = $('.bar');
    var i = 0;
    var cnt02ArtG= $('.cnt02 .imgGroup');
 
 
    bar.find('h5:last').click(function(){
        i++;
        if(i >=1 ){
            i=1
            $(this).css('right','-100px');
            bar.find('h5:first').css('left','0');
        }
 
        
        bar.find('.barPer').css('width',(i+1) * (100 / 2)+'%');
 
        cnt02ArtG.animate({
            marginLeft: i*-33.33+'%'
        },500);
    });
 
 
    
    bar.find('h5:first').click(function(){
         i--;
         if(i <=0 ){
             i=0
             $(this).css('left','-100px');
             bar.find('h5:last').css('right','0');
             
         }
         
         bar.find('.barPer').css('width',(i+1) * (100 / 2) +'%');
 
         cnt02ArtG.animate({
             marginLeft: i*-50+'%'
         },500);
     });
});