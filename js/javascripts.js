//Dokumentation
$(document).ready(function(){   
        $('.worktitle').click(function(){
            $(this).parent().next('.doc-text').slideToggle();
        });
});
