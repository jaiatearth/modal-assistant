var currentModal = 0;

function initModal(){
    for(var i=0; i<templateData.length; i++) {
        $(".step-title-"+i).html(templateData[i].title);
    }
    $(".modal-box__content").load("view/step-"+currentModal+".html");
    $(".step-0").css("background-color","#FCEFBA");
    $(".previous").addClass("deactivate-step");
}

function modalCreate(element){
    $(element).load('view/modal.html', function(e){
        initModal();
    });
    $(element).addClass("modal");
    $(element).removeClass("hide");
}

function close(){
    $(".modal").addClass("hide");
}

function shiftPage(modalId){
    $(".modal-box__content").html("");
    $(".modal-box__content").load("view/step-"+modalId+".html", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
        if(statusTxt == "error")
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
    });

    for(var i = 0 ; i < templateData.length; i++){
        if (i == modalId){
            $(".step-"+i).css("background-color","#FCEFBA");
        } else {
            $(".step-"+i).css("background-color","#E33946");
        }
    }

    if ( modalId == 0 ){
        $(".previous").addClass("deactivate-step");
        $(".previous").prop("disabled","true");
    } else {
        $(".previous").removeClass("deactivate-step").addClass("activate-step");
        $(".previous").prop("disabled","false");
    }

    if ( modalId == templateData.length-1 ) {
        $(".next").addClass("deactivate-step");
        $(".previous").prop("disabled","true");
    } else {
        $(".next").removeClass("deactivate-step").addClass("activate-step");
        $(".previous").prop("disabled","false");
    }

}

$(document).on("click",".next", function(){
    var modalCount = templateData.length;
    if(currentModal < modalCount-1){
        currentModal++;
        shiftPage(currentModal);
    }
});

$(document).on("click",".previous", function(){
    if(currentModal !== 0){
        currentModal--;
        shiftPage(currentModal);
    }
});

$(document).on("click",".modal-box__header-steps", function(){
    currentModal = $(this).data("stepnumber");
    shiftPage(currentModal);
});


