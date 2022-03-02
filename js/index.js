$(function(){
    var bar = $('.bar');
    var i = 0;
    var cnt02ArtG= $('.cnt02 .artGroup');
    var cnt04ArtG= $('.cnt04 .artGroup');
 
 
    bar.find('h5:last').click(function(){
        i++;
        if(i >=2 ){
            i=2
            $(this).css('right','-100px');
            bar.find('h5:first').css('left','0');
        }
 
           
        bar.find('.barPer').css('width',(i+1) * (100 / 3)+'%');
 
        cnt02ArtG.animate({
            marginLeft: i*-50+'%'
        },500);
    });
    
    
    bar.find('h5:first').click(function(){
         i--;
         if(i <=0 ){
             i=0
             $(this).css('left','-100px');
             bar.find('h5:last').css('right','0');
             
         }
         
         bar.find('.barPer').css('width',(i+1) * (100 / 3) +'%');
 
         cnt02ArtG.animate({
             marginLeft: i*-50+'%'
         },500);
     });
 });
 
 $(function(){
     var bar = $('.bar');
     var i = 0;
     var cnt04ArtG= $('.cnt04 .artGroup');
  
  
     bar.find('h5:last').click(function(){
         i++;
         if(i >=2 ){
             i=2
             $(this).css('right','-100px');
             bar.find('h5:first').css('left','0');
         }
  
         
         bar.find('.barPer').css('width',(i+1) * (100 / 3)+'%');
  
         cnt04ArtG.animate({
             marginLeft: i*-100+'%'
         },500);
     });
  
  
     
     bar.find('h5:first').click(function(){
          i--;
          if(i <=0 ){
              i=0
              $(this).css('left','-100px');
              bar.find('h5:last').css('right','0');
              
          }
          
          bar.find('.barPer').css('width',(i+1) * (100 / 3) +'%');
  
          cnt04ArtG.animate({
              /*그룹움직이게하는거*/
              marginLeft: i*-100+'%'
          },500);
      });
  });
