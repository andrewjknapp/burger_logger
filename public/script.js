$('#orderlist').on('click', function(event) {
    if(event.target.matches('button')) {
        $.post('/devour/' + event.target.getAttribute('identifier'));
    }
})