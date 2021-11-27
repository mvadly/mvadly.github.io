function getPage(page){
    
    $.ajax({
        type: "get",
        url: "page/"+page+'.html',
        dataType: "html",
        beforeSend:function(){
            $('.content').html('Please wait a second..');
        },
        success: function (response) {
            if(page === '404'){
                $('.menu-link a.active').removeClass('active');
            }else{
                $('.menu-link a[data-page="'+page+'"]').addClass('active');
            }
            
            $('.content').html(response);
        },
        error:function(){
            $('.content').html('something went wrong..');
        }
    });
}

$(document).ready(function () {

    let active_page = $('.menu-link a.active').data('page');
    getPage(active_page);

    $('.menu-link a').on('click', function(){
        $('.menu-link a').removeClass('active');
        let page = $(this).data('page');
        if(page === undefined) page = "404";
        getPage(page);
    })  
    
    $('#btn-theme-glass').click(function () {  
        const link = '<link rel="stylesheet" href="css/glass-style.css" id="glass-class" />';
        let glass = $('link#glass-class');
        if(glass.length > 0){
            glass.remove(); 
            $(this).html('<i class="fas fa-glass-martini"></i>');
            return
        }else{ 
            $('head').append(link);
            $(this).html('<i class="fas fa-glass-martini-alt"></i>');
            return
        }

    })
});
