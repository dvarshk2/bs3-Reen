let cl = console.log;
$(document).ready(function(){
    $('#searchIcon').on('click', function(){
        console.log('clicked');
        $('.mainHeader .Search input').toggleClass('show')
    })
})

