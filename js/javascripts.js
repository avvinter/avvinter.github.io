//Dokumentation
$(document).ready(function(){   
        $('.worktitle').click(function(){
            $(this).parent().next('.doc-text').slideToggle(200);
        });
});

$(document).ready(function(){   
        $('.doc-text').click(function(){
            $(this).slideUp(200);
        });
});
	
