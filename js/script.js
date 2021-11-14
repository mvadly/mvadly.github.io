function getPage(page){
    $.ajax({
        type: "get",
        url: "page/"+page,
        dataType: "html",
        success: function (response) {
            // if(response == '' || response != undefined){
            //     response = 'Page not found';
            // }

            $('.content').html(response);
        }
    });
}

$(document).ready(function () {
    $('.menu-link a').on('click', function(){
        let page = $(this).data('page');
        if(page === undefined) page = "404.html";
        getPage(page);
    })    
});
