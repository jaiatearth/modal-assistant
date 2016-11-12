
var templateData;
$(document).ready(function(){
    $.getJSON("template.json", function(data){
        templateData = data;
    });
    $(".signup-trigger").on("click",function(){
        modalCreate(".homepage-modal");
    });
    $(document).on("click", ".close-modal" , function(){
        close();
    });

});
