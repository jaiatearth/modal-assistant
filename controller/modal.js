function loadContent(){
    $(".modal-box__content").load('view/step-1.html');
}

function create(element){
    $(element).load('view/modal.html', function(e){
        //Load Modal Content here...
        loadContent();
    });
    $(element).addClass("modal");
    $(element).removeClass("hide");
    loadContent();
}

function close(){
    $(".modal").addClass("hide");
}