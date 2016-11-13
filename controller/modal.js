var currentModal = 0;

function loadModalBody(modalId) {

    $(".modal-box__content").html("");
    $(".modal-box__content").load("view/" + templateData[modalId].templateName);
}

function initModal() {
    headerItemWidth = 100 / templateData.length - 3;
    paddingWidth = (100 - headerItemWidth)/2;
    console.log(paddingWidth);

    for (var i = 0; i < templateData.length; i++) {

        $(".modal-box__header").append("<div class='pull-left space' style='width:" + (headerItemWidth) + "%'>\
            <div class='modal-box__header-steps step-" + i + " cursor' data-stepnumber='" + i + "'>" + (i + 1) + "</div>\
            <!--div class='modal-box__header-label step-title-'" + i + "'>" + templateData[i].title + " </div-->\
            </div>");

    }
    shiftPage(0);
}

function modalCreate(element) {
    $(element).load('view/modal.html', function (e) {
        initModal();
    });
    $(element).addClass("modal");
    $(element).removeClass("hide");
}

function close() {
    $(".modal").addClass("hide");
    currentModal = 0;
}

function shiftPage(modalId) {
    loadModalBody(modalId);
    for (var i = 0; i < templateData.length; i++) {
        if (i == modalId) {
            $(".step-" + i).css("background-color", "#FCEFBA");
        } else {
            $(".step-" + i).css("background-color", "#E33946");
        }
    }

    if (modalId == 0) {
        $(".previous").addClass("deactivate-step");
        $(".previous").prop("disabled", "true");
    } else {
        $(".previous").removeClass("deactivate-step").addClass("activate-step");
        $(".previous").prop("disabled", "false");
    }

    if (modalId == templateData.length - 1) {
        $(".next").addClass("deactivate-step");
        $(".next").prop("disabled", "true");
    } else {
        $(".next").removeClass("deactivate-step").addClass("activate-step");
        $(".next").prop("disabled", "false");
    }

}

function moveNextPage() {
    var modalCount = templateData.length;
    if (currentModal < modalCount - 1) {
        currentModal++;
        shiftPage(currentModal);
    }
}

function movePreviousPage() {
    if (currentModal !== 0) {
        currentModal--;
        shiftPage(currentModal);
    }
}

$(document).on("click", ".next", function () {
    moveNextPage();
});

$(document).on("click", ".previous", function () {
    movePreviousPage();
});

$(document).keydown(function (e) {
    if (e.keyCode == 39 || e.keyCode == 38) {
        moveNextPage();
        return false;
    } else if (e.keyCode == 37 || e.keyCode == 40) {
        movePreviousPage();
        return false;
    }
});

$(document).on("click", ".modal-box__header-steps", function () {
    currentModal = $(this).data("stepnumber");
    shiftPage(currentModal);
});


