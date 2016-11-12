var currentModal = 0;

function initModal(){
    console.info(templateData);
    for(var i=0; i<templateData.length; i++) {
        console.info(i);
        $(".step-title-"+i).html(templateData[i].title);
    }
    $(".modal-box__content").load("view/step-"+currentModal+".html");
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
        if(statusTxt == "success") console.log("External content loaded successfully!"); if(statusTxt == "error") console.log("Error: " + xhr.status + ": " + xhr.statusText);
    });
}

$(document).on("click",".next", function(){
    var modalCount = templateData.length;
    if(currentModal < modalCount-1){
        currentModal++;
        shiftPage(currentModal)
    }
});

$(document).on("click",".previous", function(){
    var modalCount = templateData.length;
    if(currentModal !== 0){
        currentModal--;
        shiftPage(currentModal)
    }
});
