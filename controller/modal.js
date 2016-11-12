var currentModal = 0;

function initModal(){
    console.info(templateData);
    for(var i=0; i<templateData.length; i++) {
        $(".step-title-"+i).html(templateData[i].title);
    }
    $(".modal-box__content").load("view/step-"+currentModal+".html");
    $(".step-0").css("background-color","#FCEFBA");

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
    console.log("n", modalId);
    $(".modal-box__content").html("");
    $(".modal-box__content").load("view/step-"+modalId+".html", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            console.log("External content loaded successfully!");
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
