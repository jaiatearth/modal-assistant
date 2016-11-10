function create(element){
    $(element).load('view/modal.html');
    $(element).addClass("modal");
    $(element).removeClass("hide");
}