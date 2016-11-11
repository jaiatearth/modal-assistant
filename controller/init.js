//var modalObject = $.getJSON("template.json");
//console.info(modalObject);
//var modal = modal.js;
$(document).ready(function(){
    $(".signup-trigger").on("click",function(){
        create(".homepage-modal");
    });
    $(document).on("click", ".close-modal" , function(){
        close();
    });
});
