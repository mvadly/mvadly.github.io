function getPage(page){
    console.log(page);
    if(page === '404'){
        $('.menu-link a.active').removeClass('active');
    }else{
        let el = $('.menu-link a[data-page="'+page+'"]').addClass('active');
        console.log(el);
    }

    $.ajax({
        type: "get",
        url: "page/"+page+'.html',
        dataType: "html",
        success: function (response) {
            
            $('.content').html(response);
        }
    });
}

$(document).ready(function () {

    let active_page = $('.menu-link a.active').data('page');
    getPage(active_page);

    $('.menu-link a').on('click', function(){
        let page = $(this).data('page');
        if(page === undefined) page = "404";
        getPage(page);
    })    
});
