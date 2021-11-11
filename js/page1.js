$(function(){
    var i = 0;

    $('.right').click(function(){
        
        if(i >= 2){
            i = 2;
        }else{
            i++;
        }
        $('.artGroup').css('margin-left', i * -33.3 + '%');
        });

    $('.left').click(function(){
        if(i <= 0){
            i = 0;
        }else{
            i--;
        }

        $('.artGroup').css('margin-left', i * -33.3 + '%');
    });
});