// default bootstrap click, apenas muda com ação do utilizador
//$('#myTab a').click(function (e) {
//  e.preventDefault()
//  $(this).tab('show')
//})

// Tab-Pane change function
    var tabChange = function(){
        var tabs = $('.nav-tabs > li');
        var active = tabs.filter('.active');
        var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        // Bootsrap tab show, para ativar a tab
        next.tab('show')
    }
    // Tab Cycle function
    var tabCycle = setInterval(tabChange, 1000)
    // Tab click event handler
    $(function(){
        $('.nav-tabs a').click(function(e) {
            e.preventDefault();
            // Parar o loop
            clearInterval(tabCycle);
            // mosta o tab clicado, default bootstrap
            $(this).tab('show')
            // Inicia o ciclo outra vez
            setTimeout(function(){
                tabCycle = setInterval(tabChange, 1000)//quando recomeça assume este timing
            }, 1000);
        });
    });
